/**
 * Zoho CRM lead delivery.
 *
 * Every form on the site funnels through `submitInquiry`, which calls
 * `createZohoLead()` here. The module is deliberately fail-soft: if the
 * credentials are absent, the data centre is wrong, the token exchange fails
 * or Zoho is simply down, it returns a result object rather than throwing, and
 * the action falls back to the email/WhatsApp routes it has always offered.
 * A CRM outage must never swallow a lead.
 *
 * Setup lives in ZOHO-SETUP.md.
 */

import { questionnaireSteps } from "@/lib/questionnaire";

/* ------------------------------------------------------------------ *
 * Configuration
 * ------------------------------------------------------------------ */

/**
 * Zoho runs isolated data centres and an account exists in exactly one of
 * them. Calling the wrong host does not fall back — it 401s on every request,
 * which is the single most common reason a Zoho integration "silently" fails.
 * Roovel is Bangalore-based, so `in` is the likely one, but it must be
 * confirmed against the account rather than assumed.
 */
const DC_HOSTS: Record<string, { accounts: string; api: string }> = {
  in: { accounts: "accounts.zoho.in", api: "www.zohoapis.in" },
  com: { accounts: "accounts.zoho.com", api: "www.zohoapis.com" },
  eu: { accounts: "accounts.zoho.eu", api: "www.zohoapis.eu" },
  au: { accounts: "accounts.zoho.com.au", api: "www.zohoapis.com.au" },
  jp: { accounts: "accounts.zoho.jp", api: "www.zohoapis.jp" },
  ca: { accounts: "accounts.zohocloud.ca", api: "www.zohoapis.ca" },
  sa: { accounts: "accounts.zoho.sa", api: "www.zohoapis.sa" },
};

function config() {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  const dc = (process.env.ZOHO_DC ?? "in").toLowerCase();
  const hosts = DC_HOSTS[dc];
  if (!clientId || !clientSecret || !refreshToken || !hosts) return null;
  return {
    clientId,
    clientSecret,
    refreshToken,
    hosts,
    // Older Zoho orgs may not be on v8. Overridable without a code change.
    version: process.env.ZOHO_API_VERSION ?? "v8",
    // Custom fields must exist in Zoho before we send them, or Zoho rejects
    // the whole record with INVALID_DATA. Off until an admin creates them.
    customFields: process.env.ZOHO_CUSTOM_FIELDS === "1",
    leadSource: process.env.ZOHO_LEAD_SOURCE ?? "Website",
    ownerId: process.env.ZOHO_OWNER_ID,
  };
}

/** True when the integration has everything it needs to attempt a call. */
export function zohoConfigured(): boolean {
  return config() !== null;
}

/* ------------------------------------------------------------------ *
 * Access tokens
 * ------------------------------------------------------------------ */

/**
 * Access tokens last an hour; the refresh token is long-lived. Zoho throttles
 * token generation (per refresh token, per minute), so exchanging one on every
 * submission would get us blocked during a traffic spike — exactly when it
 * matters. Cached per serverless instance, refreshed a minute early.
 */
let cached: { token: string; expiresAt: number } | null = null;
let inFlight: Promise<string | null> | null = null;

async function accessToken(): Promise<string | null> {
  const cfg = config();
  if (!cfg) return null;
  if (cached && Date.now() < cached.expiresAt) return cached.token;
  // Collapse concurrent misses onto one exchange.
  if (inFlight) return inFlight;

  inFlight = (async () => {
    const url =
      `https://${cfg.hosts.accounts}/oauth/v2/token` +
      `?refresh_token=${encodeURIComponent(cfg.refreshToken)}` +
      `&client_id=${encodeURIComponent(cfg.clientId)}` +
      `&client_secret=${encodeURIComponent(cfg.clientSecret)}` +
      `&grant_type=refresh_token`;
    try {
      const res = await fetch(url, {
        method: "POST",
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
      });
      const json = (await res.json()) as {
        access_token?: string;
        expires_in?: number;
        error?: string;
      };
      if (!json.access_token) {
        console.error("[zoho] token exchange failed:", json.error ?? res.status);
        return null;
      }
      cached = {
        token: json.access_token,
        expiresAt: Date.now() + ((json.expires_in ?? 3600) - 60) * 1000,
      };
      return cached.token;
    } catch (err) {
      console.error("[zoho] token exchange threw:", err);
      return null;
    } finally {
      inFlight = null;
    }
  })();

  return inFlight;
}

/* ------------------------------------------------------------------ *
 * Field mapping
 * ------------------------------------------------------------------ */

/** Our form field name → Zoho Leads standard API name. */
const STANDARD: Record<string, string> = {
  email: "Email",
  phone: "Phone",
  company: "Company",
  industry: "Industry",
  city: "City",
  state: "State",
  pin: "Zip_Code",
  address: "Street",
};

/**
 * The six questionnaire answers sales actually filters on. These are custom
 * fields — an admin has to create them in Zoho (Setup → Modules → Leads)
 * with exactly these API names before `ZOHO_CUSTOM_FIELDS=1` is switched on.
 */
const CUSTOM: Record<string, string> = {
  metalType: "Metal_Type",
  monthlyVolume: "Monthly_Volume",
  trial: "Wants_Trial",
  hasEquipment: "Has_Equipment",
  issue: "Cleaning_Issue",
  process: "Current_Process",
};

/**
 * Fields that already have their own Zoho column, so repeating them in the
 * Description would be noise. Industry is deliberately NOT here: Zoho's
 * Industry is a picklist, our sector names are not in it, and an org can be
 * set to drop unknown picklist values — so it is kept in the text as well.
 */
const IN_OWN_COLUMN = new Set([
  "name", "context", "email", "phone", "company", "city", "state", "pin", "address",
]);

/** questionnaire field → the step it belongs to, for the Description headings */
const STEP_OF: Record<string, string> = Object.fromEntries(
  questionnaireSteps.flatMap((s) => s.fields.map((f) => [f.name, s.title]))
);

/** Zoho's multi-line text limit is 32,000; leave headroom. */
const DESCRIPTION_MAX = 30000;

/** One answer, as it appears in both the CRM description and the fallback email. */
export type LeadEntry = { key: string; label: string; value: string };

/** Where an enquiry came from — rendered at the top of its Description block. */
export type LeadSource = {
  /** which form, e.g. "Contact page form", "Chemical questionnaire" */
  form: string;
  /** full URL of the page it was sent from */
  page?: string;
  /** what the page was about, e.g. "Product: POWER CLEAN XL" */
  context?: string;
};

/**
 * One enquiry as a Description block:
 *
 *   — Chemical questionnaire · 17 Sep 2026, 4:13 pm IST —
 *   Page: https://powerclean.in/questionnaire
 *
 *   What you clean today
 *   What metal are the components?: aluminium ADC12
 *
 * Questionnaire answers sit under their step headings so a 25-question lead
 * reads like the form did. Everything else is listed plainly.
 */
function enquiryBlock(
  entries: LeadEntry[],
  source: LeadSource,
  skip: Set<string>
): string {
  const when = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const lines: string[] = [`— ${source.form} · ${when} IST —`];
  if (source.page) lines.push(`Page: ${source.page}`);
  if (source.context && source.context !== source.form)
    lines.push(`About: ${source.context}`);

  const shown = entries.filter((e) => !skip.has(e.key));
  const plain = shown.filter((e) => !STEP_OF[e.key]);
  if (plain.length) {
    lines.push("");
    for (const e of plain) lines.push(`${e.label}: ${e.value}`);
  }
  for (const step of questionnaireSteps) {
    const inStep = shown.filter((e) => STEP_OF[e.key] === step.title);
    if (!inStep.length) continue;
    lines.push("", step.title);
    for (const e of inStep) lines.push(`${e.label}: ${e.value}`);
  }
  return lines.join("\n");
}

export type ZohoResult =
  | { ok: true; id: string; action: "created" | "updated" | "upserted" }
  | { ok: false; reason: "unconfigured" | "auth" | "api" | "network" };

/* ------------------------------------------------------------------ *
 * Lead creation
 * ------------------------------------------------------------------ */

type Cfg = NonNullable<ReturnType<typeof config>>;

async function zohoFetch(
  cfg: Cfg,
  token: string,
  path: string,
  init: { method: string; body?: unknown }
): Promise<Response> {
  const res = await fetch(`https://${cfg.hosts.api}/crm/${cfg.version}${path}`, {
    method: init.method,
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
    },
    body: init.body === undefined ? undefined : JSON.stringify(init.body),
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });
  // A 401 means the cached token went stale early (an admin revoked it, or
  // the instance slept past expiry). Drop it so the next call re-exchanges.
  if (res.status === 401) cached = null;
  return res;
}

type Row = { code?: string; details?: { id?: string }; message?: string };

async function firstRow(res: Response): Promise<Row | undefined> {
  const json = (await res.json().catch(() => ({}))) as { data?: Row[] };
  return json.data?.[0];
}

/**
 * Create or update a lead for this enquiry.
 *
 * A returning customer is looked up by email first. Upsert alone used to
 * overwrite: a plant that sent a detailed questionnaire and later a quick
 * form with no company had its Company replaced by "Not given" and its
 * Description — the questionnaire — replaced by one line. Now:
 *
 *   - new email   → a new lead
 *   - known email → only the real values sent are updated (never the
 *                   placeholders Zoho needs on create), and the new enquiry is
 *                   added to the TOP of the Description, so the history of
 *                   what they asked for builds up on one record
 *   - lookup fails → the previous upsert, which is known to work, so a lead is
 *                   never lost to a search error
 */
export async function createZohoLead({
  values,
  entries,
  source,
}: {
  /** raw form values, keyed by our field names */
  values: Record<string, string>;
  /** ordered answers, as they appear in the fallback email */
  entries: LeadEntry[];
  source: LeadSource;
}): Promise<ZohoResult> {
  const cfg = config();
  if (!cfg) return { ok: false, reason: "unconfigured" };
  const token = await accessToken();
  if (!token) return { ok: false, reason: "auth" };

  // --- the real values from the form ---
  const real: Record<string, unknown> = {};
  const skip = new Set(IN_OWN_COLUMN);
  for (const [ours, theirs] of Object.entries(STANDARD)) {
    const v = values[ours]?.trim();
    if (v) real[theirs] = v;
  }
  // Every form asks for a mobile number. Zoho Leads keeps Phone and Mobile as
  // separate fields; Phone is the one in the default list view, Mobile is the
  // one a salesperson on WhatsApp looks for. Fill both.
  if (values.phone?.trim()) real.Mobile = values.phone.trim();
  if (cfg.customFields) {
    for (const [ours, theirs] of Object.entries(CUSTOM)) {
      const v = values[ours]?.trim();
      if (v) real[theirs] = v;
      skip.add(ours);
    }
  }
  const name = values.name?.trim() ?? "";
  if (name) {
    const [first, ...rest] = name.split(/\s+/);
    if (rest.length) {
      real.First_Name = first;
      real.Last_Name = rest.join(" ");
    } else {
      real.Last_Name = name;
    }
  }

  const block = enquiryBlock(entries, source, skip);
  const email = values.email?.trim() ?? "";

  // --- 1. is this a returning customer? ---
  let existing: { id: string; Description?: string } | null = null;
  let lookupFailed = !email;
  if (email) {
    try {
      const res = await zohoFetch(
        cfg,
        token,
        `/Leads/search?email=${encodeURIComponent(email)}`,
        { method: "GET" }
      );
      if (res.status === 204) {
        existing = null; // no lead with this email
      } else if (res.ok) {
        const json = (await res.json()) as {
          data?: { id: string; Description?: string }[];
        };
        existing = json.data?.[0] ?? null;
      } else {
        lookupFailed = true;
        console.error("[zoho] lead search failed:", res.status);
      }
    } catch (err) {
      lookupFailed = true;
      console.error("[zoho] lead search threw:", err);
    }
  }

  try {
    // --- 2a. returning customer: add, never overwrite ---
    if (existing && !lookupFailed) {
      const previous = existing.Description?.trim();
      const description = (
        previous ? `${block}\n\n\n${previous}` : block
      ).slice(0, DESCRIPTION_MAX);
      const res = await zohoFetch(cfg, token, `/Leads/${existing.id}`, {
        method: "PUT",
        body: {
          data: [{ ...real, Description: description }],
          trigger: ["workflow"],
        },
      });
      if (res.status === 401) return { ok: false, reason: "auth" };
      const row = await firstRow(res);
      if (row?.code === "SUCCESS") {
        return { ok: true, id: row.details?.id ?? existing.id, action: "updated" };
      }
      console.error("[zoho] lead update rejected:", row?.code, row?.message);
      return { ok: false, reason: "api" };
    }

    // Zoho requires Last_Name and Company to create a lead. Placeholders are
    // used only here — on create — so they can never overwrite real data.
    const created = {
      ...real,
      Last_Name: real.Last_Name ?? "Website enquiry",
      Company: real.Company ?? "Not given",
      Lead_Source: cfg.leadSource,
      Description: block,
      ...(cfg.ownerId ? { Owner: cfg.ownerId } : {}),
    };

    // --- 2b. new customer ---
    if (!lookupFailed) {
      const res = await zohoFetch(cfg, token, `/Leads`, {
        method: "POST",
        body: { data: [created], trigger: ["workflow"] },
      });
      if (res.status === 401) return { ok: false, reason: "auth" };
      const row = await firstRow(res);
      if (row?.code === "SUCCESS" && row.details?.id) {
        return { ok: true, id: row.details.id, action: "created" };
      }
      console.error("[zoho] lead create rejected:", row?.code, row?.message);
      return { ok: false, reason: "api" };
    }

    // --- 2c. lookup unavailable: the upsert that is known to work ---
    const res = await zohoFetch(cfg, token, `/Leads/upsert`, {
      method: "POST",
      body: {
        data: [created],
        duplicate_check_fields: [email ? "Email" : "Phone"],
        trigger: ["workflow"],
      },
    });
    if (res.status === 401) return { ok: false, reason: "auth" };
    const row = await firstRow(res);
    if (row?.code === "SUCCESS" && row.details?.id) {
      return { ok: true, id: row.details.id, action: "upserted" };
    }
    console.error("[zoho] upsert rejected:", row?.code, row?.message);
    return { ok: false, reason: "api" };
  } catch (err) {
    console.error("[zoho] request threw:", err);
    return { ok: false, reason: "network" };
  }
}
