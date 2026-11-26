// Tutti i testi della home in un posto solo: le sezioni li leggono da qui.
// Fonte: il sito attuale autoscuoladerosa.it. Nulla di inventato oltre a quanto è lì.

export const site = {
  name: "Autoscuola De Rosa",
  short: "De Rosa",
  street: "Via Giordano Bruno",
  town: "Gallarate",
  mapUrl: "https://www.openstreetmap.org/search?query=Via%20Giordano%20Bruno%20Gallarate",
  // Indirizzo segnaposto finché il modulo non è collegato a un servizio di invio vero.
  formAction: "mailto:info@autoscuoladerosa.example",
  cta: "Prenota un colloquio",
};

export type Row = { name: string; note?: string; value?: string };

export const patenti: Row[] = [
  { name: "AM, A1, A2 e A", note: "Scooter e moto, la A dopo la A2", value: "da 14 anni" },
  { name: "Guida accompagnata", note: "Con la A1, al volante a 17 anni con un tutor", value: "da 17 anni" },
  { name: "B", note: "Auto, anche con rimorchio leggero fino a 750 kg", value: "da 18 anni" },
  { name: "B96 e BE", note: "Un esame pratico, rimorchi fino a 4.250 e 7.000 kg", value: "con la B" },
  { name: "C e CE", note: "Camion e autotreni per le merci, con la CQC", value: "da 21 anni" },
  { name: "D e DE", note: "Autobus e pullman per le persone, con la CQC", value: "da 24 anni" },
];

export const capitoli = [
  {
    img: "aula",
    alt: "Un insegnante parla a una classe di allievi seduti ai banchi",
    subject: "lezione di teoria",
    title: "La teoria, in aula o da casa",
    text: "Lezioni la mattina, il pomeriggio o la sera, in sede o in diretta streaming. Le rivedi quando vuoi.",
  },
  {
    img: "strada-albero",
    alt: "Vista dal sedile del passeggero su una strada di campagna con un albero isolato",
    subject: "guida su strada",
    title: "Le guide, sul tuo passo",
    text: "L’istruttore costruisce le lezioni sulle tue capacità: prima il piazzale, poi il traffico di Gallarate.",
  },
  {
    img: "guida-sera",
    alt: "Una ragazza alla guida, le mani sul volante, in città",
    subject: "allieva alla guida",
    title: "L’esame, con i progressi sotto controllo",
    text: "Con l’app SIDA fai i quiz ministeriali e noi vediamo in tempo reale quanto sei pronto.",
  },
];

export const professionali: Row[] = [
  { name: "CQC merci e persone", note: "Il certificato che si aggiunge alle patenti C e D", value: "rinnovo 35 ore" },
  { name: "CFP ADR base e cisterna", note: "Per il trasporto di merci pericolose", value: "nel weekend" },
  { name: "Taxi e NCC", note: "La KB e l’iscrizione al ruolo dei conducenti", value: "teoria e pratica" },
  { name: "Tachigrafo digitale e analogico", note: "Tempi di guida e di riposo, per le aziende", value: "8 ore" },
  { name: "Sistemazione del carico", note: "Come fissare il carico perché non si sposti", value: "per le aziende" },
];

export const domande = [
  { q: "Posso seguire la teoria da casa?", a: "Sì. Le lezioni sono in diretta streaming oltre che in aula, e puoi rivederle quando vuoi." },
  { q: "Quanto costa la patente?", a: "Dipende dalla categoria e da quante guide ti servono. All’iscrizione ti diamo tutti i costi, senza sorprese." },
  { q: "La visita medica si fa da voi?", a: "Sì, in sede, anche per il porto d’armi e la patente nautica." },
  { q: "Ho perso punti: come li recupero?", a: "Con il corso serale di 12 ore recuperi 6 punti sulla patente B." },
];

export const servizi: Row[][] = [
  [
    { name: "Rinnovo di ogni patente e del CAP", note: "Con la visita medica in sede, nello stesso giorno" },
    { name: "Duplicato per furto o smarrimento", note: "Anche per patente deteriorata, CAP, ADR e CQC" },
    { name: "Conversione di patenti estere", note: "E delle patenti militari, verificata per Stato" },
  ],
  [
    { name: "Patente internazionale", note: "Per guidare in tutti gli Stati che la chiedono" },
    { name: "Commissione medica", note: "La prenotiamo noi, quando serve la visita speciale" },
    { name: "Visite mediche in sede", note: "Anche per porto d’armi e patente nautica" },
  ],
];

export const nav = [
  { href: "#professionali", label: "Professionali" },
  { href: "#servizi", label: "Servizi" },
  { href: "#domande", label: "Domande" },
];

export const crediti = [
  "Bas Peperzak",
  "Vitaly Gariev",
  "Alexander Lunyov",
  "Jan Baborák",
  "Joshua Reddekopp",
  "Sven Brandsma",
  "Jack Lucas Smith",
  "Vanessa Krebs",
  "Jeremy Bishop",
];
