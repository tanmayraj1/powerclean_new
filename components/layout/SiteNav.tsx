"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TransitionLink } from "./TransitionLink";
import { MobileMenu } from "./MobileMenu";
import { SiteSearch } from "./SiteSearch";

type NavLink = {
  key: string;
  label: string;
  href: string;
  /** optional dropdown, mirroring the client's own Products menu */
  menu?: { label: string; href: string; hint: string }[];
};

const LINKS: NavLink[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "solutions", label: "Solutions", href: "/solutions" },
  {
    key: "products",
    label: "Products",
    href: "/products",
    menu: [
      { label: "All products", href: "/products", hint: "The full 41-product range" },
      { label: "Product list — quick view", href: "/products/quick-view", hint: "Name, SKU and description on one page" },
      { label: "Selection matrix", href: "/products/selection-matrix", hint: "Pick by metal, process and protection" },
      { label: "Water-based cleaners", href: "/products/aqueous", hint: "30 aqueous degreasers" },
      { label: "Rust preventives & removers", href: "/products/rust-preventive", hint: "Protection and de-rusting" },
      { label: "Cooling tower chemicals", href: "/products/cooling", hint: "Descalers and biocides" },
      { label: "Solvent cleaners", href: "/products/solvent", hint: "TCE replacements" },
    ],
  },
  {
    key: "industries",
    label: "Industries",
    href: "/industries",
    menu: [
      { label: "All industries", href: "/industries", hint: "11 manufacturing sectors" },
      { label: "Case studies", href: "/resources/case-studies", hint: "Measured results from plant trials" },
      { label: "Automotive", href: "/industries/automotive", hint: "Engine, brake, piston and axle cleaning" },
      { label: "Bearing manufacturing", href: "/industries/bearing-manufacturing", hint: "Millipore-level precision cleaning" },
      { label: "Foundry & die casting", href: "/industries/foundry-die-casting", hint: "ADC10 / ADC12 and white rust" },
      { label: "Aerospace & defence", href: "/industries/aerospace-defence", hint: "Residue-critical component cleaning" },
      { label: "Electrical & electronics", href: "/industries/electrical-electronics", hint: "Copper, brass and defluxing" },
      { label: "Plant & facility care", href: "/industries/plant-facility", hint: "Floors, coils and cooling towers" },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    href: "/resources",
    menu: [
      { label: "Knowledge hub", href: "/resources", hint: "6 technical reference guides" },
      { label: "Blog", href: "/blog", hint: "15 buyer-intent articles" },
      { label: "Cleaning videos", href: "/cleaning-videos", hint: "10 filmed cleaning trials" },
      { label: "Case studies", href: "/resources/case-studies", hint: "Measured results from plant trials" },
      { label: "Glossary", href: "/glossary", hint: "44 industrial cleaning terms defined" },
      { label: "FAQ", href: "/faq", hint: "Answers for plant engineers" },
    ],
  },
];

/** the "Get in Touch" CTA opens the same way the Products menu does */
const CONTACT_MENU = [
  { label: "Request a Cleanup", href: "/request-cleanup", hint: "Send parts for a free wash trial" },
  { label: "Chemical questionnaire", href: "/questionnaire", hint: "Tell us your parts, soils and equipment" },
  { label: "Free consultation", href: "/get-consultation", hint: "Matched grade, dilution and trial plan" },
  { label: "Contact us", href: "/contact", hint: "Offices, phone and email" },
];

function activeKey(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname === "/about") return "about";
  if (pathname.startsWith("/products")) return "products";
  if (pathname.startsWith("/industries")) return "industries";
  if (pathname.startsWith("/solutions")) return "solutions";
  if (
    pathname.startsWith("/resources") ||
    pathname.startsWith("/blog") ||
    pathname.startsWith("/glossary") ||
    pathname === "/faq" ||
    pathname === "/cleaning-videos"
  )
    return "resources";
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

  // While the menu is open the header sits over the dark panel, so it drops
  // its white bar and keeps the inverted logo.
  const solid = scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[1000] transition-[background,box-shadow,padding,border-color] duration-[350ms] ${
          solid
            ? "border-b border-line-2 bg-white/90 px-5 py-2.5 shadow-nav backdrop-blur-[16px]"
            : "border-b border-transparent bg-transparent px-5 py-5"
        }`}
      >
        <div className="relative z-[2] mx-auto flex max-w-[1320px] items-center justify-between gap-4">
          {/* desktop links */}
          <nav className="hidden flex-1 items-center gap-0.5 nav:flex">
            {LINKS.map((l) => {
              const isActive = active === l.key;
              const cls = `relative rounded-full px-4 py-[9px] text-sm no-underline transition-[background,color] duration-[250ms] ${
                solid
                  ? isActive
                    ? "bg-green-tint font-semibold text-navy"
                    : "font-medium text-navy hover:bg-azure"
                  : isActive
                    ? "bg-white/20 font-semibold text-white ring-1 ring-inset ring-white/40"
                    : "font-medium text-white hover:bg-white/12"
              }`;
              if (!l.menu) {
                return (
                  <TransitionLink
                    key={l.key}
                    href={l.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cls}
                  >
                    {l.label}
                  </TransitionLink>
                );
              }
              return (
                <NavMenu
                  key={l.key}
                  label={l.label}
                  href={l.href}
                  items={l.menu}
                  triggerClass={cls}
                  isActive={isActive}
                  solid={solid}
                />
              );
            })}
          </nav>

          {/* logo */}
          <TransitionLink href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="Power Clean — industrial cleaning chemicals by Roovel Solutions"
              width={153}
              height={46}
              className={`block w-auto transition-[filter,height] duration-[350ms] ${
                solid
                  ? "h-[42px]"
                  : "h-[46px] brightness-0 invert drop-shadow-[0_2px_10px_rgba(29,31,35,.3)]"
              }`}
              loading="eager"
              fetchPriority="high"
            />
          </TransitionLink>

          {/* desktop search + CTA */}
          <div className="hidden flex-1 items-center justify-end gap-2.5 nav:flex">
            <div className="hidden min-[1180px]:block">
              <SiteSearch solid={solid} />
            </div>
            <NavMenu
              label="Get in Touch"
              href="/contact"
              items={CONTACT_MENU}
              triggerClass="whitespace-nowrap rounded-full bg-green-cta px-[22px] py-[11px] text-sm font-semibold text-white no-underline shadow-[0_4px_16px_rgba(0,166,81,.35)] transition-colors hover:bg-green-cta-dark"
              isActive={false}
              solid={solid}
              align="right"
            />
          </div>

          {/* mobile hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
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

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        links={LINKS}
        active={active}
      />
    </>
  );
}

/**
 * A nav item that also opens a menu.
 *
 * The trigger stays a real link — clicking "Products" goes to /products, as it
 * always did — and the menu opens on hover or keyboard focus. That keeps the
 * top-level destination reachable while exposing the sub-pages the client's
 * architecture calls for.
 */
function NavMenu({
  label,
  href,
  items,
  triggerClass,
  isActive,
  solid,
  align = "left",
}: {
  label: string;
  href: string;
  items: { label: string; href: string; hint: string }[];
  triggerClass: string;
  isActive: boolean;
  solid: boolean;
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  // a short grace period so the pointer can cross the gap to the panel
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  useEffect(() => () => cancelClose(), []);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        cancelClose();
        setOpen(true);
      }}
      onBlur={scheduleClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <TransitionLink
        href={href}
        aria-current={isActive ? "page" : undefined}
        aria-expanded={open}
        aria-controls={menuId}
        className={`${triggerClass} inline-flex items-center gap-1.5`}
      >
        {label}
        <svg
          width="9"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </TransitionLink>

      <div
        id={menuId}
        hidden={!open}
        className={`absolute top-[calc(100%+8px)] z-[1200] w-[300px] rounded-card border border-line-2 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(29,31,35,.4)] ${
          align === "right" ? "right-0" : "left-0"
        }`}
      >
        {items.map((it) => (
          <TransitionLink
            key={it.href}
            href={it.href}
            onClick={() => setOpen(false)}
            className="block rounded-xl px-3 py-2.5 no-underline transition-colors hover:bg-green-tint"
          >
            <span className="block text-[13.5px] font-semibold text-navy">
              {it.label}
            </span>
            <span className="mt-0.5 block text-[12px] leading-[1.45] text-muted">
              {it.hint}
            </span>
          </TransitionLink>
        ))}
      </div>
    </div>
  );
}
