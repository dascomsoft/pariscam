import {
  ArrowRight,
  Info,
  MessageCircle,
  Scale,
  Percent,
  Plane,
  ShoppingCart,
  Apple,
  Sparkles,
  Tv,
  Truck,
  Landmark,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: "Grille tarifaire Paris ↔ Cameroun | PARISCAM",
  description:
    "Tarifs officiels PARISCAM : fret express, cargo alimentaire, cosmétiques, télévisions et livraison à domicile à Paris et au Cameroun.",
};

/* ================= DONNÉES OFFICIELLES ================= */

const POIDS_PARIS_CAMEROUN = [
  { intervalle: "0 à 2 kg", tarif: "30 €" },
  { intervalle: "2,1 à 10 kg", tarif: "13 € / kg" },
  { intervalle: "10,1 kg et plus", tarif: "12,5 € / kg" },
];

const DOUANE = [
  { cout: "250 € – 400 €", taux: "30 €" },
  { cout: "401 € – 1 000 €", taux: "40 €" },
  { cout: "1 001 € – 2 000 €", taux: "100 €" },
  { cout: "Au-delà de 2 000 €", taux: "10 % sur la valeur" },
];

const CAMEROUN_PARIS = [
  {
    icon: Plane,
    titre: "Colis divers (Express)",
    delai: "Livraison 72 h dès le départ",
    lignes: [
      { poids: "0 à 2 kg", tarif: "32 € / kg" },
      { poids: "2 kg et plus", tarif: "10 € / kg" },
    ],
  },
  {
    icon: Apple,
    titre: "Aliments périssables & non périssables (Cargo)",
    delai: "Livraison 24 h dès le départ",
    lignes: [
      { poids: "0 à 50 kg", tarif: "7 € / kg" },
      { poids: "51 à 100 kg", tarif: "6 € / kg" },
      { poids: "100 kg et plus", tarif: "5 € / kg" },
    ],
  },
  {
    icon: Sparkles,
    titre: "Cosmétiques & médicaments spirituel et indigène",
    delai: "Livraison 72 h dès le départ",
    lignes: [
      { poids: "0 à 2 kg", tarif: "32 € / kg" },
      { poids: "2 kg et plus", tarif: "16,50 € / kg" },
    ],
  },
];

const TELEVISIONS = [
  { taille: '32"', express: "320 €", cargo: "201 €" },
  { taille: '39"', express: "455 €", cargo: "375 €" },
  { taille: '40"', express: "455 €", cargo: "325 €" },
  { taille: '42"', express: "510 €", cargo: "370 €" },
  { taille: '43"', express: "510 €", cargo: "415 €" },
  { taille: '46"', express: "545 €", cargo: "415 €" },
  { taille: '47"', express: "620 €", cargo: "475 €" },
  { taille: '50"', express: "620 €", cargo: "505 €" },
  { taille: '55"', express: "620 €", cargo: "595 €" },
  { taille: '60"', express: "—", cargo: "585 €" },
  { taille: '65"', express: "—", cargo: "615 €" },
  { taille: '70"', express: "—", cargo: "870 €" },
  { taille: '75"', express: "—", cargo: "900 €" },
  { taille: '80"', express: "—", cargo: "1 800 €" },
  { taille: '85"', express: "—", cargo: "2 100 €" },
];

const LIVRAISON_DOMICILE = [
  { nom: "Basic", prix: "30 €", km: "0 – 30 km", theme: "blue" },
  { nom: "Standard", prix: "40 €", km: "30 – 40 km", theme: "green" },
  { nom: "Pro", prix: "50 €", km: "40 – 50 km", theme: "blue" },
  { nom: "Gold", prix: "60 €", km: "50 – 60 km", theme: "green" },
];

/* ================= COMPOSANTS ================= */

function PillTitle({ children }) {
  return (
    <div className="flex justify-center mb-12">
      <h2 className="bg-pariscam-green text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-full shadow-lg shadow-pariscam-green/30">
        {children}
      </h2>
    </div>
  );
}

function TarifTable({ title, icon: Icon, subtitle, head, data, accent = "blue" }) {
  const headBg = accent === "green" ? "bg-pariscam-green" : "bg-pariscam-blue";
  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden h-full">
      <div className={`${headBg} text-white p-6`}>
        <div className="flex items-center gap-3">
          <Icon size={22} />
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            {subtitle && <p className="text-sm text-white/80 mt-0.5">{subtitle}</p>}
          </div>
        </div>
      </div>
      <table className="w-full">
        <thead className="bg-pariscam-gray">
          <tr>
            {head.map((h) => (
              <th key={h} className="text-left p-4 font-semibold text-pariscam-text text-sm">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-pariscam-gray/50" : ""}>
              <td className="p-4 text-pariscam-text font-medium">{row.intervalle ?? row.cout ?? row.taille ?? row.poids}</td>
              {"tarif" in row && <td className="p-4 font-semibold text-pariscam-green">{row.tarif}</td>}
              {"taux" in row && <td className="p-4 font-semibold text-pariscam-green">{row.taux}</td>}
              {"express" in row && <td className="p-4 font-semibold text-pariscam-blue">{row.express}</td>}
              {"cargo" in row && <td className="p-4 font-semibold text-pariscam-green">{row.cargo}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ================= PAGE ================= */

export default function TarifsPage() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    "Bonjour PARISCAM, je souhaite connaître vos tarifs pour un envoi."
  )}`;

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/28763701/pexels-photo-28763701.jpeg?auto=compress&cs=tinysrgb&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-pariscam-blueNight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-pariscam-blueNight/90 via-pariscam-blueNight/60 to-transparent" />

        <div className="container-pariscam relative z-10 py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
            <Landmark size={16} className="text-pariscam-yellow" />
            <span className="text-sm font-medium">Grille tarifaire officielle</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Nos <span className="text-pariscam-green">tarifs</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
            Des prix clairs et transparents pour vos envois entre Paris et le
            Cameroun. Service d&apos;envoi et de retrait entre l&apos;Europe et
            le Cameroun.
          </p>
        </div>
      </section>

      {/* Bandeau info */}
      <div className="bg-pariscam-yellow/10 border-y border-pariscam-yellow/30">
        <div className="container-pariscam py-4">
          <div className="flex items-center gap-3 justify-center text-center">
            <Info size={20} className="text-pariscam-blue shrink-0" />
            <p className="text-sm text-pariscam-text">
              <strong>L&apos;arrondi pour la facturation est fait en marge supérieure.</strong>{" "}
              Le prix peut varier selon le poids, le volume et la valeur.
            </p>
          </div>
        </div>
      </div>

      {/* ============ PARIS → CAMEROUN ============ */}
      <section className="py-20 bg-pariscam-gray">
        <div className="container-pariscam">
          <PillTitle>PARIS → CAMEROUN</PillTitle>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TarifTable
              title="Fret par intervalle de poids"
              icon={Scale}
              subtitle="Service d'envoi et de retrait de colis"
              head={["Intervalle de poids", "Tarifs"]}
              data={POIDS_PARIS_CAMEROUN}
            />
            <TarifTable
              title="Tarifs à la valeur (Douane)"
              icon={Percent}
              subtitle="Frais selon le coût de l'article"
              head={["Coût de l'article", "Taux"]}
              data={DOUANE}
              accent="green"
            />
          </div>
        </div>
      </section>

      {/* ============ CAMEROUN → PARIS ============ */}
      <section className="py-20 bg-white">
        <div className="container-pariscam">
          <PillTitle>CAMEROUN → PARIS</PillTitle>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CAMEROUN_PARIS.map((cat) => (
              <div key={cat.titre} className="bg-white rounded-2xl shadow-card overflow-hidden border border-pariscam-gray hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
                <div className="bg-pariscam-green text-white p-5">
                  <cat.icon size={22} className="mb-2" />
                  <h3 className="font-bold text-sm leading-snug">{cat.titre}</h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-3">
                    {cat.lignes.map((l) => (
                      <li key={l.poids} className="flex justify-between items-center text-sm border-b border-pariscam-gray pb-2">
                        <span className="text-pariscam-muted">{l.poids}</span>
                        <span className="font-bold text-pariscam-green">{l.tarif}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs font-semibold text-pariscam-blue bg-pariscam-blue/5 rounded-lg px-3 py-2 text-center">
                    {cat.delai}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* NB Douane Cameroun */}
          <div className="max-w-6xl mx-auto mt-8">
            <div className="flex items-start gap-3 bg-pariscam-yellow/10 border border-pariscam-yellow/40 rounded-2xl p-5">
              <Info size={20} className="text-pariscam-blue shrink-0 mt-0.5" />
              <p className="text-sm text-pariscam-text leading-relaxed">
                <strong>NB :</strong> Au-delà de 100 000 FCFA (150 €), un supplément
                de <strong>10 % sur la valeur</strong> s&apos;applique pour les
                frais de douane. Livraison à Paris pour une distance de moins de
                25 km : <strong>30 €</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TÉLÉVISIONS ============ */}
      <section className="py-20 bg-pariscam-gray">
        <div className="container-pariscam">
          <PillTitle>TÉLÉVISIONS</PillTitle>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="bg-pariscam-blue text-white p-6 flex items-center gap-3">
              <Tv size={22} />
              <div>
                <h3 className="text-xl font-bold">Grille tarifaire des télévisions</h3>
                <p className="text-sm text-white/80">
                  Fret Express 72 h · Fret Cargo Plus 1 semaine
                </p>
              </div>
            </div>
            <div className="overflow-x-auto max-h-[480px] overflow-y-auto">
              <table className="w-full">
                <thead className="bg-pariscam-gray sticky top-0">
                  <tr>
                    <th className="text-left p-4 font-semibold text-pariscam-text text-sm">Téléviseur</th>
                    <th className="text-left p-4 font-semibold text-pariscam-text text-sm">Express (72 h)</th>
                    <th className="text-left p-4 font-semibold text-pariscam-text text-sm">Cargo Plus (1 sem.)</th>
                  </tr>
                </thead>
                <tbody>
                  {TELEVISIONS.map((tv, i) => (
                    <tr key={tv.taille} className={i % 2 === 1 ? "bg-pariscam-gray/50" : ""}>
                      <td className="p-4 font-bold text-pariscam-text">{tv.taille}</td>
                      <td className="p-4 font-semibold text-pariscam-blue">{tv.express}</td>
                      <td className="p-4 font-semibold text-pariscam-green">{tv.cargo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LIVRAISON À DOMICILE ============ */}
      <section className="py-20 bg-white">
        <div className="container-pariscam">
          <div className="flex justify-center mb-4">
            <h2 className="bg-pariscam-green text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-full shadow-lg shadow-pariscam-green/30">
              LIVRAISON À DOMICILE
            </h2>
          </div>
          <p className="text-center text-pariscam-muted mb-12">
            À Paris et en banlieue parisienne
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {LIVRAISON_DOMICILE.map((formule) => (
              <div
                key={formule.nom}
                className={`rounded-2xl overflow-hidden shadow-card text-center hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300 ${
                  formule.theme === "green" ? "bg-pariscam-green text-white" : "bg-pariscam-blue text-white"
                }`}
              >
                <div className="bg-white/95 py-4">
                  <p className={`font-bold text-lg ${formule.theme === "green" ? "text-pariscam-green" : "text-pariscam-blue"}`}>
                    {formule.nom}
                  </p>
                  <p className={`text-3xl font-extrabold ${formule.theme === "green" ? "text-pariscam-green" : "text-pariscam-blue"}`}>
                    {formule.prix}
                  </p>
                </div>
                <div className="py-8 px-4">
                  <Truck size={28} className="mx-auto mb-4 opacity-90" />
                  <div className="w-16 h-px bg-white/50 mx-auto mb-4" />
                  <p className="font-semibold text-lg">{formule.km}</p>
                  <div className="w-16 h-px bg-white/50 mx-auto mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 bg-gradient-to-br from-pariscam-blueNight to-pariscam-blue text-white">
        <div className="container-pariscam text-center">
          <div className="flex justify-center mb-6">
            <span className="bg-pariscam-green text-white font-bold text-xl px-10 py-3 rounded-full shadow-lg">
              UN PROJET D&apos;ENVOI ?
            </span>
          </div>
          <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
            Contactez-nous pour obtenir un tarif personnalisé et connaître les
            prochains départs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Demander un devis <ArrowRight size={20} />
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}