"use client";

import { useEffect } from "react";

// Animazioni del sito, oltre a quelle del kit:
// - [data-reveal]: l'elemento entra (sale e appare, o la foto si scopre) la prima volta che arriva sullo schermo;
// - [data-parallax]: la foto dell'hero scorre un po' più lenta della pagina.
// Con "riduci movimento" attivo nel sistema non si muove nulla e tutto è visibile da subito.
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    root.classList.add("rv-ready");

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    items.forEach((el) => io.observe(el));

    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        for (const el of layers) {
          if (y > window.innerHeight * 1.2) continue;
          el.style.setProperty("--py", `${Math.round(y * 0.12)}px`);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
