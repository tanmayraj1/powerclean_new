"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Magnetic } from "@/components/motion/Magnetic";
import { TransitionLink } from "./TransitionLink";

const LINKS = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "solutions", label: "Solutions", href: "/solutions" },
  { key: "industries", label: "Industries", href: "/solutions#industries" },
  { key: "resources", label: "Resources", href: "/#resources" },
];

function activeKey(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname === "/about") return "about";
  if (pathname.startsWith("/solutions")) return "solutions";
  return "none";
}

/**
 * Fixed header — port of Nav.dc.html: fully white text + inverted logo over
 * the hero → past 40px solidifies to white/blur, navy text, full-color logo,
 * condensed padding. Active page pill; mobile (<940px) hamburger with animated
 * full-screen menu; magnetic CTA.
 */
export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = activeKey(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 40);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-[background,box-shadow,padding,border-color] duration-[350ms] ${
        scrolled
          ? "border-b border-line-2 bg-white/90 px-5 py-2.5 shadow-nav backdrop-blur-[16px]"
          : "border-b border-transparent bg-transparent px-5 py-5"
      }`}
    >
      {/* mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[1] flex flex-col bg-ink/97 px-[30px] pb-10 pt-24 transition-[opacity,transform] duration-[350ms] nav:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3.5 opacity-0"
        }`}
      >
        {LINKS.map((l) => (
          <TransitionLink
            key={l.key}
            href={l.href}
            className="border-b border-white/12 py-3 text-[26px] font-semibold text-white no-underline"
          >
            {l.label}
          </TransitionLink>
        ))}
        <TransitionLink
          href="/contact"
          className="mt-[22px] rounded-full bg-green-cta px-7 py-[15px] text-center text-[17px] font-semibold text-white no-underline"
        >
          Get in Touch
        </TransitionLink>
      </div>

      <div className="relative z-[2] mx-auto flex max-w-[1320px] items-center justify-between gap-4">
        {/* desktop links */}
        <nav className="hidden flex-1 items-center gap-0.5 nav:flex">
          {LINKS.map((l) => {
            const isActive = active === l.key;
            return (
              <TransitionLink
                key={l.key}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-4 py-[9px] text-sm no-underline transition-[background,color] duration-[250ms] ${
                  scrolled
                    ? isActive
                      ? "bg-green-tint font-semibold text-navy"
                      : "font-medium text-navy hover:bg-azure"
                    : isActive
                      ? "bg-white/20 font-semibold text-white ring-1 ring-inset ring-white/40"
                      : "font-medium text-white hover:bg-white/12"
                }`}
              >
                {l.label}
              </TransitionLink>
            );
          })}
        </nav>

        {/* logo */}
        <TransitionLink href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="Power Clean"
            width={153}
            height={46}
            className={`block w-auto transition-[filter,height] duration-[350ms] ${
              scrolled
                ? "h-[42px]"
                : "h-[46px] brightness-0 invert drop-shadow-[0_2px_10px_rgba(29,31,35,.3)]"
            }`}
            loading="eager"
            fetchPriority="high"
          />
        </TransitionLink>

        {/* desktop search + CTA */}
        <div className="hidden flex-1 items-center justify-end gap-2.5 nav:flex">
          <div
            className={`flex items-center gap-2 rounded-full py-[7px] pl-[18px] pr-[7px] transition-[background,box-shadow] duration-300 ${
              scrolled
                ? "bg-azure"
                : "bg-white/12 ring-1 ring-inset ring-white/25"
            }`}
          >
            <input
              placeholder="Search here"
              aria-label="Search"
              className={`w-[104px] border-none bg-transparent font-sans text-[13px] outline-none ${
                scrolled
                  ? "text-navy placeholder:text-muted"
                  : "text-white placeholder:text-white/75"
              }`}
            />
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                scrolled ? "bg-navy" : "bg-white"
              }`}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke={scrolled ? "#ffffff" : "#292F6E"}
                strokeWidth="2.4"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </span>
          </div>
          <Magnetic>
            <TransitionLink
              href="/contact"
              className="whitespace-nowrap rounded-full bg-green-cta px-[22px] py-[11px] text-sm font-semibold text-white no-underline shadow-[0_4px_16px_rgba(0,166,81,.35)] transition-colors hover:bg-green-cta-dark"
            >
              Get in Touch
            </TransitionLink>
          </Magnetic>
        </div>

        {/* mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
          className={`flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border-none shadow-[0_2px_12px_rgba(29,31,35,.12)] nav:hidden ${
            scrolled || open ? "bg-green-tint" : "bg-white"
          }`}
        >
          <span
            className="block h-0.5 w-[18px] rounded-sm bg-navy transition-transform duration-300"
            style={{
              transform: open ? "translateY(3.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-0.5 w-[18px] rounded-sm bg-navy transition-transform duration-300"
            style={{
              transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>
    </header>
  );
}
