import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ChiSiamo, Domande, Hero, Patenti, Percorso, Prenota, Professionali, Servizi } from "@/components/Sections";

/* type: service (autoscuola)
   deal: hero split, nav nav-mega, close close-type, footer footer-columns, rhythm dark-band, buttons arrow, mark ring
   palette linen-harbour, type red-hat
   moments: photo-chapters (#percorso), word-highlight (#chi-siamo), picture-develops (#domande)
   in più, su richiesta del cliente: titolo dell'hero a parole, foto che si scoprono, righe in sequenza, parallax e fascia delle sigle */
export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Patenti />
        <Percorso />
        <Professionali />
        <ChiSiamo />
        <Domande />
        <Servizi />
        <Prenota />
      </main>
      <Footer />
    </>
  );
}
