/**
 * Cleaning-chemical questionnaire.
 *
 * Rebuilt field-for-field from the client's Questions2.aspx so nothing an
 * applications engineer relies on is lost. Wording is tidied (the source has
 * "Stree Address", "Trey washing" and similar), the arithmetic captcha is
 * replaced by a honeypot, and the questions are grouped into four steps
 * instead of one long wall.
 */
export type Field =
  | { kind: "text"; name: string; label: string; placeholder?: string; required?: boolean; type?: "text" | "email" | "tel" }
  | { kind: "textarea"; name: string; label: string; placeholder?: string; rows?: number }
  | { kind: "select"; name: string; label: string; options: string[]; required?: boolean }
  | { kind: "radio"; name: string; label: string; options: string[] };

export type Step = { title: string; blurb: string; fields: Field[] };

export const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam",
  "Bihar", "Chandigarh", "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Outside India",
];

export const questionnaireSteps: Step[] = [
  {
    title: "Who you are",
    blurb: "So we can send the recommendation back to the right person.",
    fields: [
      { kind: "text", name: "company", label: "Company name", placeholder: "Your company", required: true },
      { kind: "text", name: "name", label: "Contact name", placeholder: "Your full name", required: true },
      { kind: "text", name: "phone", label: "Mobile number", placeholder: "10 digits", type: "tel", required: true },
      { kind: "text", name: "email", label: "Email address", placeholder: "you@company.com", type: "email", required: true },
      { kind: "text", name: "address", label: "Street address", placeholder: "Plant or office address" },
      { kind: "text", name: "city", label: "City", placeholder: "City" },
      { kind: "select", name: "state", label: "State", options: INDIAN_STATES },
      { kind: "text", name: "pin", label: "PIN code", placeholder: "560048" },
    ],
  },
  {
    title: "What you clean today",
    blurb: "The starting point — what is on the parts and how you deal with it now.",
    fields: [
      { kind: "textarea", name: "howClean", label: "How are you cleaning or degreasing today?", placeholder: "e.g. manual wipe with kerosene, then a hot soak tank", rows: 3 },
      { kind: "textarea", name: "issue", label: "What issue are you facing?", placeholder: "e.g. white rust on aluminium housings within a week of packing", rows: 3 },
      { kind: "textarea", name: "contamination", label: "What contaminant are you removing?", placeholder: "Oil, grease, buffing compound, carbon, coolant, drawing compound…", rows: 2 },
      { kind: "textarea", name: "metalType", label: "What metal are the components?", placeholder: "Mild steel, cast iron, ADC12 aluminium, brass, mixed…", rows: 2 },
    ],
  },
  {
    title: "Your equipment and process",
    blurb: "The wash parameters decide which grade can actually run on your line.",
    fields: [
      {
        kind: "radio", name: "hasEquipment", label: "Do you have cleaning equipment?",
        options: [
          "Yes — we have a cleaning machine",
          "No — cleaning is done manually",
          "No — but we would consider buying one",
        ],
      },
      { kind: "textarea", name: "equipment", label: "If you have a machine, what is it? If not, are you planning to buy one?", placeholder: "Ultrasonic, spray wash, dip tank, immersion, tunnel…", rows: 2 },
      { kind: "text", name: "agitation", label: "Agitation or spray pressure used", placeholder: "psi / kg·cm² / bar" },
      { kind: "text", name: "temperature", label: "Wash temperature (°C)", placeholder: "e.g. 55–65" },
      { kind: "text", name: "concentration", label: "Concentration or dilution used today", placeholder: "e.g. 5%, 10%, or 1:20" },
      { kind: "text", name: "tankCapacity", label: "Cleaning tank capacity (litres)", placeholder: "e.g. 500" },
      { kind: "radio", name: "rinsing", label: "Is rinsing done after cleaning?", options: ["Yes", "No"] },
      { kind: "radio", name: "drying", label: "Is drying done after cleaning?", options: ["Yes", "No"] },
    ],
  },
  {
    title: "Around the wash",
    blurb: "What happens either side of cleaning, and what you need from us.",
    fields: [
      { kind: "textarea", name: "beforeClean", label: "What is the operation before cleaning?", placeholder: "e.g. CNC machining, grinding, die casting", rows: 2 },
      { kind: "textarea", name: "afterClean", label: "What is the operation after cleaning?", placeholder: "e.g. assembly, painting, plating, packing for export", rows: 2 },
      { kind: "text", name: "monthlyVolume", label: "Chemical needed per month (litres)", placeholder: "e.g. 200" },
      {
        kind: "radio", name: "trial", label: "Would you like to send components for a free cleaning trial?",
        options: ["Yes — we will send parts", "Not yet"],
      },
      { kind: "textarea", name: "comments", label: "Anything else?", placeholder: "Parts cleaned per day/week/month, number of shifts, whether you need a corrosion inhibitor to prevent rust…", rows: 4 },
    ],
  },
];

/** flat field list, used by the server action to label the email */
export const questionnaireFields = questionnaireSteps.flatMap((s) => s.fields);
