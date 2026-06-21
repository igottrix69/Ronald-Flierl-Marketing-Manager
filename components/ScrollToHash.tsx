"use client";

import { useEffect } from "react";

/**
 * On mount, smooth-scrolls to the element matching window.location.hash.
 * Lets cross-route CTAs like /about#contact land on the form cleanly after
 * navigation (the target uses scroll-mt to clear the fixed nav).
 */
export function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    let el: Element | null = null;
    try {
      el = document.querySelector(hash);
    } catch {
      return;
    }
    if (!el) return;
    const id = window.setTimeout(() => {
      el!.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(id);
  }, []);

  return null;
}
