"use client";

import { usePathname } from "next/navigation";

/**
 * Hidden fields naming the form and the page it was sent from, so every CRM
 * lead says exactly where it came from. The server builds the full URL from
 * the path; nothing here is visible to the visitor.
 */
export function FormSource({ form }: { form: string }) {
  const pathname = usePathname();
  return (
    <>
      <input type="hidden" name="form" value={form} />
      <input type="hidden" name="page" value={pathname ?? ""} />
    </>
  );
}
