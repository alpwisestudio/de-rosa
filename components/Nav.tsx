import { Mark } from "./ui";
import { nav, site } from "@/lib/content";
import { pic } from "@/lib/images";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Vai al contenuto</a>
        <a className="nav__logo" href="#top"><Mark />{site.short}</a>
        <nav className="nav__links" aria-label="Principale">
          <div className="nav__item">
            <a className="nav__link" href="#patenti">
              Patenti{" "}
              <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-3">
                  <p className="t-label">Moto e auto</p>
                  <a href="#patenti">AM, A1, A2 e A<span>Dai 14 anni, scooter e moto</span></a>
                  <a href="#patenti">Patente B<span>Dai 18 anni, auto e rimorchio leggero</span></a>
                  <a href="#patenti">B96 e BE<span>Rimorchi fino a 7.000 kg</span></a>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">Lavoro</p>
                  <a href="#professionali">C, CE, D e DE<span>Camion, autobus e pullman</span></a>
                  <a href="#professionali">CQC e ADR<span>Merci, persone, merci pericolose</span></a>
                  <a href="#professionali">Taxi e NCC<span>Il ruolo conducenti e la KB</span></a>
                </div>
                <a className="menu-card span-3 start-10" href="#percorso">
                  <div className="panel"><img className="frame__img" {...pic("aula", "302px")} alt="Allievi seduti ai banchi durante una lezione di teoria" loading="lazy" /></div>
                  <span className="t-card">Teoria anche da casa</span>
                  <span className="t-small muted">Lezioni in diretta, mattina, pomeriggio e sera</span>
                </a>
              </div>
            </div>
          </div>
          {nav.map((n) => (
            <div className="nav__item" key={n.href}><a className="nav__link" href={n.href}>{n.label}</a></div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href="#prenota">{site.cta}</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
      </div>
    </header>
  );
}
