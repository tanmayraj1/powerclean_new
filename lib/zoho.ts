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
 * Everything else — nineteen questionnaire answers plus the free-text fields —
 * goes into Description as a readable block. Without this the answers would be
 * silently dropped, which is worse than un-filterable.
 */
function description(
  entries: LeadEntry[],
  context: string,
  skip: Set<string>
): string {
  const lines = entries
    .filter((e) => !skip.has(e.key))
    .map((e) => `${e.label}: ${e.value}`);
  return [
    context ? `Enquiry from: ${context}` : "Enquiry from the Power Clean website",
    "",
    ...lines,
  ].join("\n");
}

/** One answer, as it appears in both the CRM description and the fallback email. */
export type LeadEntry = { key: string; label: string; value: string };

export type ZohoResult =
  | { ok: true; id: string }
  | { ok: false; reason: "unconfigured" | "auth" | "api" | "network" };

/* ------------------------------------------------------------------ *
 * Lead creation
 * ------------------------------------------------------------------ */

/**
 * Upsert a lead, de-duplicating on email then phone so a plant that enquires
 * three times from three product pages becomes one lead with a growing
 * history rather than three records sales has to merge by hand.
 *
 * `entries` arrives already label-mapped and ordered by the caller, so the
 * Description block reads the same as the fallback email.
 */
export async function createZohoLead({
  values,
  entries,
  context,
}: {
  /** raw form values, keyed by our field names */
  values: Record<string, string>;
  /** ordered answers, as they appear in the fallback email */
  entries: LeadEntry[];
  /** which page the enquiry came from */
  context: string;
}): Promise<ZohoResult> {
  const cfg = config();
  if (!cfg) return { ok: false, reason: "unconfigured" };
  const token = await accessToken();
  if (!token) return { ok: false, reason: "auth" };

  const record: Record<string, unknown> = {};
  // Anything that lands in its own Zoho column is dropped from the
  // Description block below — repeating it there would just be noise.
  const mapped = new Set<string>(["name", "context"]);

  for (const [ours, theirs] of Object.entries(STANDARD)) {
    const v = values[ours]?.trim();
    if (v) record[theirs] = v;
    mapped.add(ours);
  }
  if (cfg.customFields) {
    for (const [ours, theirs] of Object.entries(CUSTOM)) {
      const v = values[ours]?.trim();
      if (v) record[theirs] = v;
      mapped.add(ours);
    }
  }

  // Zoho rejects a lead without Last_Name or Company. The micro-form asks for
  // neither reliably, so derive both rather than lose the lead outright.
  const name = values.name?.trim() ?? "";
  const company = values.company?.trim() ?? "";
  record.Last_Name = name || company || "Website enquiry";
  if (name && name.includes(" ")) {
    const [first, ...restName] = name.split(/\s+/);
    record.First_Name = first;
    record.Last_Name = restName.join(" ");
  }
  record.Company = company || name || "Not given";
  record.Lead_Source = cfg.leadSource;
  if (cfg.ownerId) record.Owner = cfg.ownerId;

  record.Description = description(entries, context, mapped);

  const duplicateField = values.email?.trim() ? "Email" : "Phone";

  try {
    const res = await fetch(
      `https://${cfg.hosts.api}/crm/${cfg.version}/Leads/upsert`,
      {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [record],
          duplicate_check_fields: [duplicateField],
          trigger: ["workflow"],
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
      }
    );

    // A 401 means the cached token went stale early (an admin revoked it, or
    // the instance slept past expiry). Drop it so the next call re-exchanges.
    if (res.status === 401) {
      cached = null;
      return { ok: false, reason: "auth" };
    }

    const json = (await res.json()) as {
      data?: { code?: string; details?: { id?: string }; message?: string }[];
    };
    const row = json.data?.[0];
    if (row?.code === "SUCCESS" && row.details?.id) {
      return { ok: true, id: row.details.id };
    }
    console.error("[zoho] upsert rejected:", row?.code, row?.message);
    return { ok: false, reason: "api" };
  } catch (err) {
    console.error("[zoho] upsert threw:", err);
    return { ok: false, reason: "network" };
  }
}
