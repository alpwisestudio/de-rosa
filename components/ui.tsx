import { Fragment } from "react";
import type { Row } from "@/lib/content";
import { pic } from "@/lib/images";

export function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

export function Mark() {
  return <span className="mark" data-mark="ring" aria-hidden="true" />;
}

// Le righe entrano una dopo l'altra quando la lista arriva sullo schermo (components/Motion.tsx).
export function Rows({ rows, className = "rows" }: { rows: Row[]; className?: string }) {
  return (
    <ul className={className}>
      {rows.map((r, i) => (
        <li key={r.name} data-reveal="" style={{ ["--d" as string]: `${i * 70}ms` }}>
          <span className="rows__name">
            {r.name}
            {r.note && <small>{r.note}</small>}
          </span>
          {r.value && <span className="rows__value">{r.value}</span>}
        </li>
      ))}
    </ul>
  );
}

// Il titolo della sezione e la sua riga salgono insieme quando entrano nello schermo.
export function Head({ id, title, lead, className = "section-head" }: { id: string; title: string; lead: string; className?: string }) {
  return (
    <div className={className} data-reveal="">
      <h2 id={id}>{title}</h2>
      <p>{lead}</p>
    </div>
  );
}

type PhotoProps = { name: string; sizes: string; alt: string; subject: string; className?: string; style?: React.CSSProperties };

// Ogni foto è un segnaposto Unsplash (data-source lo dichiara). Entra scoprendosi dal basso, con un leggero zoom.
export function Photo({ name, sizes, alt, subject, className = "frame frame--photo", style }: PhotoProps) {
  return (
    <div className={className} data-reveal="photo">
      <img className="frame__img" {...pic(name, sizes)} alt={alt} loading="lazy" decoding="async" style={style} data-source="stand-in" data-subject={subject} />
    </div>
  );
}

// Il titolo dell'hero diviso in parole, che salgono in sequenza al caricamento.
export function SplitWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="w"><span style={{ ["--i" as string]: i }}>{w}</span></span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </>
  );
}
