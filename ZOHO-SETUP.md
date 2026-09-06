# Zoho CRM — setup

Every form on the site posts to `submitInquiry` in `app/actions.ts`, which
calls `lib/zoho.ts`. Until the four environment variables below are set the
integration is dormant and forms behave exactly as they did before (compose a
`mailto:` and offer email / WhatsApp / phone). Nothing breaks while you wait.

---

## 1. Confirm the data centre

Zoho runs isolated data centres and an account lives in exactly one. Calling
the wrong one returns 401 on every request with no useful error, so check
rather than assume — log in and read the address bar:

| You see | `ZOHO_DC` |
|---|---|
| `crm.zoho.in` | `in` |
| `crm.zoho.com` | `com` |
| `crm.zoho.eu` | `eu` |
| `crm.zoho.com.au` | `au` |

Roovel is Bangalore-based, so `in` is likely, but confirm it.

## 2. Create a Self Client

1. Go to **api-console.zoho.{your DC}** → **Add Client** → **Self Client**.
2. Copy the **Client ID** and **Client Secret**.

## 3. Generate a refresh token (once)

Still in the API console, on the Self Client's **Generate Code** tab:

- **Scope:** `ZohoCRM.modules.leads.CREATE,ZohoCRM.modules.leads.READ`
- **Time duration:** 10 minutes
- **Scope Description:** anything, e.g. `powerclean website`

Copy the generated code, then **within those 10 minutes** exchange it for a
refresh token. Replace the three values and run:

```bash
curl -X POST "https://accounts.zoho.in/oauth/v2/token" \
  -d "grant_type=authorization_code" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "code=THE_GENERATED_CODE"
```

The response contains `refresh_token`. It does not expire — treat it like a
password. If the call returns `invalid_code`, the 10 minutes lapsed; generate
a fresh code and try again.

## 4. Set the environment variables

In Vercel → Project → Settings → Environment Variables:

| Variable | Required | Notes |
|---|---|---|
| `ZOHO_CLIENT_ID` | yes | from step 2 |
| `ZOHO_CLIENT_SECRET` | yes | from step 2 |
| `ZOHO_REFRESH_TOKEN` | yes | from step 3 |
| `ZOHO_DC` | yes | `in` / `com` / `eu` / `au` — step 1 |
| `ZOHO_API_VERSION` | no | defaults to `v8`; drop to `v7` or `v2.1` on an older org |
| `ZOHO_LEAD_SOURCE` | no | defaults to `Website` |
| `ZOHO_OWNER_ID` | no | Zoho user ID to assign leads to; otherwise Zoho's own rules apply |
| `ZOHO_CUSTOM_FIELDS` | no | `1` only after step 5 |

Redeploy. That is the whole switch-on.

## 5. Optional — custom fields

Zoho's Leads module has standard columns for name, company, email, phone,
industry, city, state, PIN and street. Those are mapped automatically.

The questionnaire asks 25 questions. The remaining answers go into the lead's
**Description** as a readable block, so nothing is lost — but they cannot be
filtered or reported on there.

To make the six that sales actually filters on into real columns, create them
in **Setup → Customization → Modules and Fields → Leads** with *exactly*
these API names, then set `ZOHO_CUSTOM_FIELDS=1`:

| Field label | API name | Type |
|---|---|---|
| Metal Type | `Metal_Type` | Single Line |
| Monthly Volume | `Monthly_Volume` | Single Line |
| Wants Trial | `Wants_Trial` | Single Line |
| Has Equipment | `Has_Equipment` | Single Line |
| Cleaning Issue | `Cleaning_Issue` | Multi Line |
| Current Process | `Current_Process` | Multi Line |

**Do not set `ZOHO_CUSTOM_FIELDS=1` before the fields exist.** Zoho rejects
the entire record with `INVALID_DATA` if it is sent a field it does not know,
so a lead would fall back to email rather than being saved.

## 6. Optional — auto-acknowledgement

Zoho can email the enquirer automatically: **Setup → Automation → Workflow
Rules → Leads → on Create**, where `Lead Source = Website`. Better done there
than in the site, which has no transactional email service.

---

## Behaviour worth knowing

- **De-duplication.** Leads are upserted on Email, or on Phone when no email
  was given. A plant that enquires from three product pages becomes one lead
  with history, not three records to merge.
- **Nothing is ever lost.** If Zoho is unconfigured, unreachable, throttled or
  rejects the record, the visitor still gets the email / WhatsApp / phone
  routes and the failure is logged server-side. A CRM outage cannot swallow a
  lead.
- **Access tokens** are cached in memory for their hour, refreshed a minute
  early, and concurrent misses collapse onto one exchange — Zoho throttles
  token generation, and doing it per-submission would fail under load.
- **Rate limiting** is 6 submissions per IP per 10 minutes, in-memory and
  therefore per serverless instance. It stops a script, not a determined
  attacker. Move to Vercel KV if it ever needs to be exact.
- **Consent** is required by every form and enforced server-side. A form that
  posts no `consent` key at all is let through, so a stale cached page cannot
  start failing silently.

## Testing before go-live

With the variables set on a preview deployment, submit the contact form and
check:

1. The success message reads "your enquiry is with our team" — that string
   only appears when Zoho returned a record ID.
2. The lead is in Zoho with Description populated.
3. Submitting again with the same email updates that lead rather than adding
   a second.
