"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

/**
 * There is no mailing-list backend, so rather than a button that silently
 * does nothing, this composes a real subscribe request to sales@roovel.com.
 * Replace with an ESP form action when a list exists.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div className="max-w-[380px]">
      <form
        className="flex gap-2 rounded-full bg-azure p-1.5 pl-5"
        aria-label="Subscribe to Power Clean updates"
        onSubmit={(e) => {
          e.preventDefault();
          const value = email.trim();
          if (!value) return;
          window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
            "Subscribe to Power Clean updates"
          )}&body=${encodeURIComponent(
            `Please add this address to the Power Clean mailing list: ${value}`
          )}`;
          setDone(true);
        }}
      >
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          className="min-w-0 flex-1 border-none bg-transparent font-sans text-[13px] text-ink outline-none placeholder:text-muted-2"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-full border-none bg-green-cta px-5 py-2.5 font-sans text-[13px] font-semibold text-white transition-colors hover:bg-green-cta-dark"
        >
          Subscribe
        </button>
      </form>
      {done && (
        <p aria-live="polite" className="mt-2 text-xs text-green-deep">
          Your email app should open with the request ready to send.
        </p>
      )}
    </div>
  );
}
