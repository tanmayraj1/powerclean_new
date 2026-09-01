"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Magnetic } from "@/components/motion/Magnetic";
import { TransitionLink } from "./TransitionLink";
import { MobileMenu } from "./MobileMenu";

const LINKS = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "solutions", label: "Solutions", href: "/solutions" },
  { key: "products", label: "Products", href: "/products" },
  { key: "industries", label: "Industries", href: "/industries" },
  { key: "blog", label: "Blog", href: "/blog" },
  { key: "resources", label: "Resources", href: "/resources" },
];

function activeKey(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname === "/about") return "about";
  if (pathname.startsWith("/products")) return "products";
  if (pathname.startsWith("/solutions")) return "solutions";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/resources")) return "resources";
  return "none";
}

/**
 * Fixed header — port of Nav.dc.html: fully white text + inverted logo over
 * the hero → past 40px solidifies to white/blur, navy text, full-color logo,
 * condensed padding. Active page pill; mobile (<940px) hamburger with animated
 * full-screen menu; magnetic CTA.
 */
export function SiteNav() {
  const router = useRouter();
  const [query, setQuery] = useState("");
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
              return (
                <TransitionLink
                  key={l.key}
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-4 py-[9px] text-sm no-underline transition-[background,color] duration-[250ms] ${
                    solid
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
            <form
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                const q = query.trim();
                router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
              }}
              // 7 nav links + logo + search + CTA no longer fit between the
              // 940px nav breakpoint and ~1180px. Search is the least critical
              // of the three (the products index has its own filter and search), so
              // it drops out first rather than the CTA being clipped.
              className={`hidden items-center gap-2 rounded-full py-[7px] pl-[18px] pr-[7px] transition-[background,box-shadow] duration-300 min-[1180px]:flex ${
                solid
                  ? "bg-azure"
                  : "bg-white/12 ring-1 ring-inset ring-white/25"
              }`}
            >
              <input
                placeholder="Search products"
                aria-label="Search products"
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`w-[104px] border-none bg-transparent font-sans text-[13px] outline-none ${
                  solid
                    ? "text-navy placeholder:text-muted"
                    : "text-white placeholder:text-white/75"
                }`}
              />
              <button
                type="submit"
                aria-label="Search the product range"
                className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-none transition-colors ${
                  solid ? "bg-navy" : "bg-white"
                }`}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={solid ? "#ffffff" : "#292F6E"}
                  strokeWidth="2.4"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </button>
            </form>
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
