import type { Metadata } from "next";
import { crediti } from "@/lib/content";

export const metadata: Metadata = {
  title: "Crediti fotografici: Autoscuola De Rosa",
  description: "Le fonti delle fotografie usate sul sito.",
};

export default function Crediti() {
  return (
    <main className="wrap page-plain">
      <h1>Crediti fotografici</h1>
      <ul className="rows">{crediti.map((n) => <li key={n}><span className="rows__name">{n}, Unsplash</span></li>)}</ul>
      <p><a className="link" href="/">Torna al sito</a></p>
    </main>
  );
}
