import { Arrow, Mark } from "./ui";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <>
      <footer className="footer closing" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--type">
            <div className="section-head">
              <h2 id="close-h">La tua patente parte da un colloquio</h2>
              <p>Ti spieghiamo percorso, tempi e costi prima dell’iscrizione.</p>
            </div>
            <a className="btn btn--primary btn--xl btn--wide" href="#prenota">{site.cta}<Arrow /></a>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                <a className="nav__logo" href="#top"><Mark />{site.short}</a>
                <p className="footer__lede">Autoscuola in via Giordano Bruno, Gallarate.</p>
              </div>
              <Col title="Patenti" links={[["#patenti", "Moto e auto"], ["#percorso", "Il percorso"]]} />
              <Col title="Professionali" links={[["#professionali", "CQC e ADR"], ["#professionali", "Taxi e NCC"]]} />
              <Col title="Servizi" links={[["#servizi", "Rinnovi"], ["#chi-siamo", "Chi siamo"]]} />
              <Col title="Domande" links={[["#domande", "Domande frequenti"], ["#contact", "Contatti"]]} />
            </div>
            <div className="footer__legal">
              <span>&copy; 2026 {site.name}</span><a href="/privacy/">Privacy</a>
              <div className="socials" />
              <a className="credits" href="/crediti/">Fotografie via Unsplash</a>
            </div>
          </div>
        </div>
      </footer>
      <nav className="actionbar" aria-label="Azioni rapide">
        <a className="btn btn--primary" href="#prenota">{site.cta}</a>
      </nav>
    </>
  );
}

function Col({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="span-2 footer__col">
      <h3>{title}</h3>
      <ul>{links.map(([href, label]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
    </div>
  );
}
