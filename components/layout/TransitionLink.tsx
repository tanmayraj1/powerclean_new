"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { usePageTransition } from "@/components/providers/TransitionProvider";
import { useLenis } from "@/components/providers/LenisProvider";

type TransitionLinkProps = ComponentProps<typeof Link>;

/**
 * Drop-in next/link with the green wipe transition on internal navigation.
 * Hash-only targets smooth-scroll; modified clicks and external URLs pass
 * through untouched.
 */
export function TransitionLink({
  href,
  onClick,
  ...rest
}: TransitionLinkProps) {
  const { navigateTo } = usePageTransition();
  const pathname = usePathname();
  const lenis = useLenis();
  const hrefStr = typeof href === "string" ? href : (href.pathname ?? "/");

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (rest.target === "_blank") return;
    if (/^(https?:)?\/\//.test(hrefStr) || hrefStr.startsWith("mailto:"))
      return;

    const [path, hash] = hrefStr.split("#");
    const samePath = path === "" || path === pathname;

    if (samePath && hash) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) lenis?.current?.scrollTo(el, { offset: -90 });
      else if (el === null && hash)
        document
          .getElementById(hash)
          ?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (samePath) {
      e.preventDefault();
      lenis?.current?.scrollTo(0);
      return;
    }
    e.preventDefault();
    navigateTo(hrefStr);
  };

  return <Link href={href} onClick={handleClick} {...rest} />;
}
