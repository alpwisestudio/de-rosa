import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy: Autoscuola De Rosa",
  description: "Come trattiamo i dati inviati con il modulo di contatto.",
};

export default function Privacy() {
  return (
    <main className="wrap page-plain">
      <h1>Privacy</h1>
      <p className="measure">I dati che invii con il modulo servono solo per richiamarti e fissare il colloquio. Non li cediamo a terzi. Per cancellarli scrivici dal modulo del sito.</p>
      <p><a className="link" href="/">Torna al sito</a></p>
    </main>
  );
}
