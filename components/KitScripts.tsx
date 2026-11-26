"use client";

import { useEffect } from "react";

// Gli script del kit di design (menu, modulo, animazioni, moments) sono moduli ES statici in public/assets.
// Li aggiungiamo dopo l'idratazione: così lavorano su un DOM che React ha già preso in carico e non tocca più.
const SRC = ["/assets/system.js", "/assets/motion/motion.js", "/assets/layout/layout.js"];

export default function KitScripts() {
  useEffect(() => {
    for (const src of SRC) {
      if (document.querySelector(`script[src="${src}"]`)) continue;
      const s = document.createElement("script");
      s.type = "module";
      s.src = src;
      document.body.appendChild(s);
    }
  }, []);
  return null;
}
