import type { Metadata, Viewport } from "next";
import KitScripts from "@/components/KitScripts";
import Motion from "@/components/Motion";

const title = "Autoscuola De Rosa: tutte le patenti a Gallarate";
const description =
  "Patenti dalla AM alla D, CQC e ADR a Gallarate. Teoria in aula o in diretta online, guide su misura e visite mediche in sede, dal 1976.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.autoscuoladerosa.it"),
  title,
  description,
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
  openGraph: {
    type: "website",
    title,
    description: "Corsi per ogni patente, teoria anche online, visite mediche in sede. Una famiglia di istruttori dal 1976.",
    images: ["/share.jpg"],
  },
  twitter: { card: "summary_large_image" },
  other: { "site-kind": "other", "page-type": "service" },
  // canonical: da aggiungere quando il sito va su www.autoscuoladerosa.it
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f3f1ec",
};

// Il kit di design (public/assets) è CSS e JS statici: si caricano come file, nell'ordine che il kit chiede.
const kitCss = [
  "/assets/system.css",
  "/assets/ui/cards.css",
  "/assets/motion/motion.css",
  "/assets/backgrounds/backgrounds.css",
  "/assets/layout/layout.css",
  "/assets/icons/icon.css",
];

const palette = `:root {
  --p-bg: #f3f1ec; --p-surface: #e6e2d9; --p-ink: #1d2530; --p-muted: #5a6270;
  --p-accent: #2c5877; --p-accent-ink: #ffffff; --p-action: #2c5877; --p-action-ink: #ffffff;
  --p-inv-bg: #1d2530; --p-inv-surface: #29313b; --p-inv-ink: #f3f1ec; --p-inv-muted: #9a9d9f;
  --p-inv-accent: #f3f1ec; --p-inv-accent-ink: #1d2530; --p-inv-action: #f3f1ec; --p-inv-action-ink: #1d2530;
  --font-display: "Red Hat Display", system-ui, sans-serif;
  --font-text: "Red Hat Text", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.025em;
  --display-tracking-xl: -0.035em;
}`;

// L'ingresso dell'hero e la guardia dei moments vanno impostati prima del primo paint.
const boot =
  "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);" +
  "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500);" +
  // le entrate allo scroll: nascoste solo con JS attivo, e mostrate comunque se lo script non parte entro 4 s
  "document.documentElement.classList.add('js-motion');setTimeout(()=>{if(!document.documentElement.classList.contains('rv-ready'))document.documentElement.classList.remove('js-motion')},4000);";

const moments = ["photo-chapters", "word-highlight", "picture-develops"];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" data-type="service" data-radius="soft" data-buttons="arrow" data-motion="" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400..700&family=Red+Hat+Text:wght@400..600&display=swap"
        />
        {kitCss.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <style dangerouslySetInnerHTML={{ __html: palette }} />
        <link rel="stylesheet" href="/site.css" />
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        {moments.map((id) => (
          <link key={id} rel="modulepreload" href={`/assets/moments/${id}/moment.js`} />
        ))}
      </head>
      <body suppressHydrationWarning>
        {children}
        <Motion />
        <KitScripts />
      </body>
    </html>
  );
}
