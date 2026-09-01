"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

/**
 * Floating call / WhatsApp dock — the instant-contact affordance that rides
 * along every page. Deliberately quiet: it stays out of the way until the
 * visitor has scrolled past the hero, collapses to two circles, expands its
 * label only on hover/focus, and steps aside near the footer (which already
 * carries the full contact block). Hidden on /contact and /range, where
 * dedicated contact blocks make it redundant.
 */

const PHONE = siteConfig.contact.phones[0];
const TEL_HREF = `tel:${PHONE.replace(/[^+\d]/g, "")}`;
const WA_HREF = `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
  "Hi Power Clean — I would like help choosing a cleaning chemical for my line."
)}`;

const SHOW_AFTER = 480; // px scrolled — clears the hero on every page

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[21px] w-[21px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SampleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[21px] w-[21px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 3h6v5.5l3.6 8.1A2.5 2.5 0 0 1 16.3 20H7.7a2.5 2.5 0 0 1-2.3-3.4L9 8.5V3Z" />
      <path d="M8 3h8" />
      <path d="M7.2 14.5h9.6" />
    </svg>
  );
}

export function QuickContact() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // step aside once the footer's own contact block is on screen
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const io = new IntersectionObserver(
      (entries) => setAtFooter(entries.some((e) => e.isIntersecting)),
      { rootMargin: "0px 0px -25% 0px" }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, [pathname]);

  if (
    pathname === "/contact" ||
    pathname === "/range" ||
    pathname === "/get-consultation"
  )
    return null;

  const open = scrolled && !atFooter;

  const shell =
    "group pointer-events-auto relative flex items-center rounded-full text-white no-underline shadow-[0_12px_30px_-10px_rgba(29,31,35,.55)] outline-offset-4 transition-transform duration-300 hover:scale-[1.04] focus-visible:scale-[1.04]";
  const label =
    "max-w-0 overflow-hidden whitespace-nowrap text-[13px] font-semibold tracking-[0.01em] transition-[max-width,padding] duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:max-w-[260px] group-hover:pr-5 group-focus-visible:max-w-[260px] group-focus-visible:pr-5";
  const disc =
    "relative grid h-12 w-12 shrink-0 place-items-center sm:h-[52px] sm:w-[52px]";

  return (
    <div
      className={`pointer-events-none fixed bottom-5 right-4 z-[900] flex flex-col items-end gap-2.5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:bottom-7 sm:right-6 ${
        open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
      aria-hidden={!open}
    >
      <Link
        href="/get-consultation#request"
        aria-label="Request a free sample or consultation"
        tabIndex={open ? 0 : -1}
        className={`${shell} bg-green-cta`}
      >
        <span className={disc}>
          <SampleIcon />
        </span>
        <span className={label}>Request a free sample</span>
      </Link>

      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Power Clean on WhatsApp"
        tabIndex={open ? 0 : -1}
        className={`${shell} bg-[#25D366]`}
      >
        <span
          aria-hidden="true"
          className="animate-pc-halo pointer-events-none absolute inset-y-0 left-0 w-12 rounded-full ring-2 ring-[#25D366] sm:w-[52px]"
        />
        <span className={disc}>
          <WhatsAppIcon />
        </span>
        <span className={label}>WhatsApp us</span>
      </a>

      <a
        href={TEL_HREF}
        aria-label={`Call Power Clean on ${PHONE}`}
        tabIndex={open ? 0 : -1}
        className={`${shell} bg-navy`}
      >
        <span className={disc}>
          <PhoneIcon />
        </span>
        <span className={label}>{PHONE}</span>
      </a>
    </div>
  );
}
