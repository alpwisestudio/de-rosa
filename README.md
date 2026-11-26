# Autoscuola De Rosa · sito

Next.js 16 (App Router) con export statico: `next build` scrive il sito in `out/`, pronto per qualsiasi hosting statico.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # sito statico in out/
```

- `app/` pagine (home, privacy, crediti) e layout con meta, font e kit di design
- `components/` sezioni della home; `Motion.tsx` le animazioni allo scroll; `KitScripts.tsx` carica gli script del kit dopo l'idratazione
- `lib/content.ts` tutti i testi; `lib/images.ts` dimensioni e srcset delle foto
- `public/assets/` kit di design (CSS/JS statici, non modificare); `public/site.css` stili e animazioni del sito; `public/img/` foto a 640 e 1280 px

Da completare prima della pubblicazione: foto vere della scuola (ora segnaposto Unsplash), indirizzo del modulo
(ora `mailto:` su `.example`), telefono, email e numero civico, dominio nel `canonical`.
