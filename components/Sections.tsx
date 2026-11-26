import { Head, Photo, Rows, SplitWords } from "./ui";
import { capitoli, domande, patenti, professionali, servizi, site } from "@/lib/content";
import { pic } from "@/lib/images";

// I riquadri ritagliano la foto in altezza (cover): chiediamo una versione più larga del riquadro, così non si sgrana.
const HALF = "(min-width: 1024px) 1000px, (min-width: 640px) 100vw, 200vw";

export function Hero() {
  return (
    <section className="hero hero--split" data-enter="" aria-labelledby="hero-h">
      <div className="wrap"><div className="hero-text grid hero__grid">
        <div className="hero__text span-5">
          <p className="hero__kicker"><span className="dot" aria-hidden="true" />A Gallarate dal 1976</p>
          <h1 id="hero-h" className="h1-words"><SplitWords text="Autoscuola a Gallarate per tutte le patenti" /></h1>
          <p className="hero__lead hero-in" style={{ ["--d" as string]: "650ms" }}>Dalla AM a 14 anni alla D per l’autobus. Teoria in aula o in diretta da casa, guide sulle tue esigenze e visite mediche in sede.</p>
          <div className="btn-row hero-in" style={{ ["--d" as string]: "800ms" }}>
            <a className="btn btn--primary" href="#prenota">{site.cta}</a>
            <a className="btn btn--secondary" href="#patenti">Vedi le patenti</a>
          </div>
        </div>
        <div className="hero__media span-6 start-7 hero-photo">
          <img {...pic("istruttore", HALF)} alt="Un istruttore con la cartellina spiega la manovra a un allievo, accanto ai coni del piazzale" style={{ ["--ly-pos" as string]: "50% 45%" }} fetchPriority="high" data-parallax="" data-source="stand-in" data-subject="istruttore e allievo al piazzale" />
          <div className="ly-float hero-in" style={{ ["--d" as string]: "1100ms" }}>
            <div className="ly-float__row"><span>Corsi di teoria</span><span>3 fasce</span></div>
            <div className="ly-float__title">Mattina, pomeriggio e sera</div>
          </div>
        </div>
      </div></div>
    </section>
  );
}

export function Patenti() {
  return (
    <section className="section" id="patenti" aria-labelledby="patenti-h">
      <div className="wrap grid grid--top">
        <div className="span-6">
          <Head id="patenti-h" title="Le patenti, dalla moto all’autobus" lead="Teoria e guida per ogni categoria, con l’età minima." />
          <Rows rows={patenti} />
        </div>
        <Photo className="frame frame--photo frame--fill span-6 start-7" name="moto" sizes={HALF} alt="Un motociclista con casco integrale su una moto sportiva rossa, su una strada di campagna al tramonto" subject="moto in strada" />
      </div>
    </section>
  );
}

// Moment photo-chapters (kit): la sezione resta ferma e scopre una foto dopo l'altra mentre scorri.
export function Percorso() {
  return (
    <section className="section" id="percorso" data-moment="photo-chapters" aria-labelledby="percorso-h">
      <div className="wrap mo-ph">
        <div className="mo-ph__head">
          <h2 id="percorso-h">Dal primo quiz all’esame di guida</h2>
          <p>All’iscrizione ti spieghiamo ogni passaggio e ogni costo, prima di cominciare.</p>
        </div>
        <ol className="mo-ph__list">
          {capitoli.map((c) => (
            <li className="mo-ph__ch" key={c.title}>
              <figure className="mo-ph__pic"><img {...pic(c.img, "(max-width: 639px) 1280px, (min-width: 1440px) 1280px, 100vw")} alt={c.alt} data-source="stand-in" data-subject={c.subject} /></figure>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Professionali() {
  return (
    <section className="section ground-inverse" id="professionali" aria-labelledby="pro-h">
      <div className="wrap grid grid--top">
        <div className="span-6">
          <Head id="pro-h" title="Corsi per chi guida per lavoro" lead="Patenti superiori, qualifiche e corsi per le aziende di autotrasporto." />
          <Rows rows={professionali} />
        </div>
        <div className="pair span-6 start-7">
          <Photo name="camion-pale" sizes="(min-width: 1024px) 900px, 100vw" alt="Un camion con semirimorchio su una strada dritta tra i campi" subject="camion su strada" />
          <Photo name="bus" sizes="(min-width: 1024px) 900px, 100vw" alt="Un autista al volante di un autobus, visto dal finestrino" subject="autista di autobus" style={{ objectPosition: "40% 50%" }} />
        </div>
      </div>
    </section>
  );
}

const sigle = ["AM", "A1", "A2", "A", "B", "B96", "BE", "C", "CE", "D", "DE", "CQC", "ADR", "KB"];

// Moment word-highlight (kit): la frase si accende parola per parola. Sotto, le sigle delle patenti scorrono in una fascia.
export function ChiSiamo() {
  return (
    <section className="section statement" id="chi-siamo" data-moment="word-highlight" aria-label="Chi siamo">
      <div className="wrap">
        <p className="t-label">Chi siamo</p>
        <p className="mo-wh__text">
          Nel 1976 Giuseppe De Rosa ha unito le sue due passioni, l’insegnamento e le automobili. Oggi la scuola è dei figli Giorgio, Massimiliano e Deborha, e la regola è rimasta quella: <strong>la strada è una cosa seria</strong>.
        </p>
      </div>
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[0, 1].map((copy) => (
            <span className="ticker__set" key={copy}>
              {sigle.map((s) => <span className="ticker__item" key={s}>{s}</span>)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Moment picture-develops (kit): la foto compare come una stampa nella bacinella di sviluppo, una volta sola.
export function Domande() {
  return (
    <section className="section" id="domande" aria-labelledby="domande-h">
      <div className="wrap grid grid--top">
        <div className="span-6">
          <Head id="domande-h" title="Domande frequenti" lead="Il resto te lo spieghiamo in sede, al colloquio." />
          <div className="faq" data-reveal="list">
            {domande.map((d, i) => (
              <div className="faq__item" key={d.q} style={{ ["--i" as string]: i }}><h3>{d.q}</h3><p>{d.a}</p></div>
            ))}
          </div>
        </div>
        <figure className="develop span-6 start-7" data-moment="picture-develops">
          <img {...pic("casco", HALF)} alt="Un casco da moto appoggiato sull’asfalto, tra le strisce gialle" loading="lazy" data-source="stand-in" data-subject="casco da moto" />
        </figure>
      </div>
    </section>
  );
}

export function Servizi() {
  return (
    <section className="section" id="servizi" aria-labelledby="servizi-h">
      <div className="wrap">
        <Head id="servizi-h" title="Rinnovi, duplicati e pratiche" lead="Le pratiche della patente si fanno qui, anche se l’hai presa altrove." />
        <div className="grid grid--top">
          {servizi.map((col, i) => <Rows key={i} rows={col} className="rows span-4" />)}
          <Photo className="frame frame--photo span-4 svc-photo" name="volante-chiaro" sizes="(min-width: 1024px) 900px, 100vw" alt="Le mani di un guidatore sul volante, nella luce del mattino" subject="guidatore al volante" />
        </div>
      </div>
    </section>
  );
}

// Il modulo segue la ricetta del kit (system.js lo valida e mostra gli errori sotto i campi).
export function Prenota() {
  return (
    <section className="section" id="prenota" aria-labelledby="prenota-h">
      <div className="wrap grid grid--top">
        <div className="span-5 section-head">
          <h2 id="prenota-h">Prenota un colloquio in sede</h2>
          <p>Scrivici quale patente ti interessa: ti richiamiamo per fissare un orario e ti spieghiamo percorso e costi.</p>
          <ul className="facts" data-reveal="list">
            <li style={{ ["--i" as string]: 0 }}><span>Dove</span><span>{site.street}, {site.town}</span></li>
            <li style={{ ["--i" as string]: 1 }}><span>Teoria</span><span>In aula o in diretta streaming</span></li>
            <li style={{ ["--i" as string]: 2 }}><span>Corsi</span><span>Mattina, pomeriggio e sera</span></li>
            <li style={{ ["--i" as string]: 3 }}><span>Costi</span><span>Tutti spiegati all’iscrizione</span></li>
          </ul>
          <p><a className="link" href={site.mapUrl}>Indicazioni stradali</a></p>
        </div>
        <div className="span-6 start-7" data-reveal="" style={{ ["--d" as string]: "150ms" }}>
          <form className="form visit--card" action={site.formAction} method="post" encType="text/plain" data-endpoint="" data-sent="La tua richiesta di colloquio è arrivata. Ti richiamiamo entro un giorno lavorativo." noValidate>
            <Field id="f-name" label="Nome e cognome" name="name" autoComplete="name" error="Scrivi il tuo nome e cognome." />
            <Field id="f-email" label="Email" name="email" type="email" autoComplete="email" inputMode="email" error="Scrivi un indirizzo email con la @, come nome@esempio.it." />
            <Field id="f-tel" label="Telefono" name="telefono" type="tel" autoComplete="tel" inputMode="tel" error="Scrivi un numero a cui richiamarti." />
            <Field id="f-pat" label="Patente o corso" name="patente" autoComplete="off" error="Scrivi la patente o il corso, per esempio B o CQC." />
            <div className="field">
              <label htmlFor="f-msg">Messaggio, se vuoi</label>
              <textarea id="f-msg" name="messaggio" rows={7} autoComplete="off" />
            </div>
            <div className="btn-row"><button className="btn btn--primary" type="submit">{site.cta}</button></div>
            <p className="form__status" role="status" data-form-status="" />
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string; label: string; name: string; error: string;
  type?: string; autoComplete?: string; inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

function Field({ id, label, name, error, type = "text", autoComplete, inputMode }: FieldProps) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} autoComplete={autoComplete} inputMode={inputMode} required aria-describedby={`${id}-err`} />
      <p className="field__error" id={`${id}-err`} hidden>{error}</p>
    </div>
  );
}
