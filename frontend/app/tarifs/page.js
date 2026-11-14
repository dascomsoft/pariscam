
import {
  ArrowRight,
  ArrowUpRight,
  Info,
  MessageCircle,
  Scale,
  Percent,
  Plane,
  Apple,
  Sparkles,
  Truck,
  Landmark,
  Tv,
  ShieldCheck,
  Package,
  MapPin,
} from "lucide-react";

import Button from "@/components/common/Button";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: "Grille tarifaire Paris ↔ Cameroun | PARISCAM",
  description:
    "Tarifs PARISCAM : fret express, cargo alimentaire, cosmétiques, télévisions et livraison à domicile à Paris et au Cameroun.",
};

/* ================= DONNÉES TARIFAIRES ================= */

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

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14">
      <span className="inline-flex items-center gap-2 text-emerald-700 text-xs font-extrabold uppercase tracking-[0.2em] mb-5">
        <span className="w-7 h-[2px] bg-emerald-500" />
        {eyebrow}
        <span className="w-7 h-[2px] bg-emerald-500" />
      </span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B36] tracking-tight leading-tight mb-5">
        {title}
      </h2>

      {description && (
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

function SectionLabel({ children, number }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-extrabold">
        {number}
      </span>

      <div>
        <p className="text-xs text-emerald-700 font-bold uppercase tracking-[0.18em] mb-1">
          Tarification PARISCAM
        </p>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#071B36]">
          {children}
        </h2>
      </div>
    </div>
  );
}

function TarifTable({ title, subtitle, icon: Icon, headers, rows }) {
  return (
    <div className="h-full bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-slate-900/5 transition-shadow duration-300">
      {/* Table heading */}
      <div className="bg-[#071B36] p-6 sm:p-7">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center">
            <Icon size={23} className="text-emerald-400" />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-slate-300 mt-1">{subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="text-left px-5 py-4 font-bold text-slate-600 whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={`border-t border-slate-100 ${
                  index % 2 === 1 ? "bg-slate-50/70" : "bg-white"
                }`}
              >
                <td className="px-5 py-5 font-semibold text-slate-700">
                  {row.label}
                </td>

                <td className="px-5 py-5 font-extrabold text-emerald-700 whitespace-nowrap">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[530px] flex items-center overflow-hidden bg-[#071B36]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/28763701/pexels-photo-28763701.jpeg?auto=compress&cs=tinysrgb&w=2000')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071B36]/95 via-[#071B36]/85 to-[#071B36]/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071B36]/70 via-transparent to-transparent" />

        {/* Décoration */}
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full border border-white/10" />
        <div className="absolute -top-16 -right-8 w-64 h-64 rounded-full border border-white/10" />

        <div className="container-pariscam relative z-10 py-28 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full mb-8">
              <Landmark size={17} className="text-[#F4C542]" />
              <span className="text-xs sm:text-sm font-semibold text-white">
                Grille tarifaire PARISCAM
              </span>
            </div>

            <p className="text-emerald-400 font-bold text-xs sm:text-sm uppercase tracking-[0.22em] mb-4">
              Transparence et simplicité
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-7">
              Nos tarifs,
              <span className="block text-emerald-400">
                en toute clarté.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Consultez nos tarifs pour vos envois entre Paris et le
              Cameroun, nos formules de fret et nos solutions de livraison
              à domicile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Button
                href="#grille-tarifaire"
                variant="primary"
                size="lg"
                className="rounded-full px-7 py-3"
              >
                Consulter les tarifs
                <ArrowRight size={19} />
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3 text-white font-bold hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={19} />
                Demander un renseignement
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-12 pt-7 border-t border-white/15">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <Plane size={17} className="text-emerald-400" />
                Fret aérien
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <Package size={17} className="text-emerald-400" />
                Colis et marchandises
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <Truck size={17} className="text-emerald-400" />
                Livraison à domicile
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-emerald-500" />
        <div className="absolute bottom-0 left-1/3 h-1 w-16 bg-[#F4C542]" />
      </section>

      {/* ================= INFORMATION ================= */}
      <section className="bg-amber-50 border-b border-amber-200">
        <div className="container-pariscam py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F4C542]/20 flex items-center justify-center">
              <Info size={21} className="text-[#071B36]" />
            </div>

            <div>
              <p className="font-extrabold text-[#071B36] mb-1">
                Information importante sur la facturation
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                L'arrondi pour la facturation est fait en marge supérieure.
                Le prix peut varier selon le poids, le volume et la valeur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARIS → CAMEROUN ================= */}
      <section
        id="grille-tarifaire"
        className="py-20 lg:py-28 bg-[#F4F7FA]"
      >
        <div className="container-pariscam">
          <SectionHeading
            eyebrow="Vos expéditions"
            title="De Paris vers le Cameroun."
            description="Retrouvez les tarifs applicables aux envois de colis et les frais liés à la valeur des articles."
          />

          <SectionLabel number="01">
            Paris <ArrowRight size={18} className="inline mx-1 text-emerald-600" /> Cameroun
          </SectionLabel>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <TarifTable
              title="Fret par poids"
              subtitle="Service d'envoi et de retrait de colis"
              icon={Scale}
              headers={["Intervalle de poids", "Tarif"]}
              rows={POIDS_PARIS_CAMEROUN.map((item) => ({
                label: item.intervalle,
                price: item.tarif,
              }))}
            />

            <TarifTable
              title="Frais de douane"
              subtitle="Tarification selon le coût de l'article"
              icon={Percent}
              headers={["Coût de l'article", "Taux"]}
              rows={DOUANE.map((item) => ({
                label: item.cout,
                price: item.taux,
              }))}
            />
          </div>
        </div>
      </section>

      {/* ================= CAMEROUN → PARIS ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-pariscam">
          <SectionHeading
            eyebrow="Dans l'autre sens"
            title="Du Cameroun vers Paris."
            description="Découvrez nos différentes catégories de fret, leurs tarifs au kilogramme et les délais indiqués."
          />

          <SectionLabel number="02">
            Cameroun <ArrowRight size={18} className="inline mx-1 text-emerald-600" /> Paris
          </SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMEROUN_PARIS.map((category, index) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.titre}
                  className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Card header */}
                  <div className="relative bg-[#071B36] p-7 min-h-[175px] overflow-hidden">
                    <span className="absolute top-4 right-5 text-5xl font-extrabold text-white/10">
                      0{index + 1}
                    </span>

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                        <Icon
                          size={24}
                          className="text-emerald-400"
                        />
                      </div>

                      <h3 className="text-lg font-extrabold text-white leading-snug max-w-xs">
                        {category.titre}
                      </h3>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-20 bg-emerald-500" />
                  </div>

                  {/* Card body */}
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-5">
                      Tarifs par poids
                    </p>

                    <div className="space-y-4">
                      {category.lignes.map((line) => (
                        <div
                          key={line.poids}
                          className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100 last:border-0"
                        >
                          <span className="text-sm text-slate-600">
                            {line.poids}
                          </span>

                          <span className="font-extrabold text-emerald-700 whitespace-nowrap">
                            {line.tarif}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-xl bg-emerald-50 px-4 py-3 flex items-center gap-3">
                      <Plane size={18} className="text-emerald-700 shrink-0" />
                      <p className="text-xs font-bold text-emerald-800">
                        {category.delai}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Additional customs information */}
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-[#F4C542]/30 flex items-center justify-center">
              <Info size={20} className="text-[#071B36]" />
            </div>

            <div>
              <h3 className="font-extrabold text-[#071B36] mb-2">
                Note sur les frais de douane
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed">
                Au-delà de 100 000 FCFA (150 €), un supplément de{" "}
                <strong>10 % sur la valeur</strong> s'applique pour les
                frais de douane. Livraison à Paris pour une distance de
                moins de 25 km : <strong>30 €</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TELEVISIONS ================= */}
      <section className="py-20 lg:py-28 bg-[#F4F7FA]">
        <div className="container-pariscam">
          <SectionHeading
            eyebrow="Transport spécifique"
            title="Tarifs des télévisions."
            description="Consultez les tarifs selon la taille de votre téléviseur et le mode de transport."
          />

          <SectionLabel number="03">
            Grille tarifaire des téléviseurs
          </SectionLabel>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-[#071B36] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Tv size={27} className="text-emerald-400" />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white">
                    Transport de télévisions
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    Express et Cargo Plus
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <span className="rounded-full bg-emerald-500/15 text-emerald-300 px-3 py-2">
                  Express : 72 h
                </span>
                <span className="rounded-full bg-white/10 text-white px-3 py-2">
                  Cargo Plus : 1 semaine
                </span>
              </div>
            </div>

            <div className="overflow-x-auto max-h-[520px] overflow-y-auto">
              <table className="w-full min-w-[520px] text-sm">
                <thead className="sticky top-0 z-10 bg-slate-100">
                  <tr>
                    <th className="text-left px-6 py-4 font-bold text-slate-600">
                      Taille du téléviseur
                    </th>
                    <th className="text-left px-6 py-4 font-bold text-slate-600">
                      Express (72 h)
                    </th>
                    <th className="text-left px-6 py-4 font-bold text-slate-600">
                      Cargo Plus (1 sem.)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {TELEVISIONS.map((tv, index) => (
                    <tr
                      key={tv.taille}
                      className={`border-t border-slate-100 ${
                        index % 2 === 1 ? "bg-slate-50" : "bg-white"
                      }`}
                    >
                      <td className="px-6 py-4 font-extrabold text-[#071B36]">
                        {tv.taille}
                      </td>

                      <td className="px-6 py-4 font-bold text-slate-700">
                        {tv.express}
                      </td>

                      <td className="px-6 py-4 font-extrabold text-emerald-700">
                        {tv.cargo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-slate-100 p-4 flex items-center gap-2 text-xs text-slate-500">
              <Info size={15} className="shrink-0 text-emerald-600" />
              Les tarifs sont présentés selon les informations de la grille PARISCAM.
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIVRAISON À DOMICILE ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-pariscam">
          <SectionHeading
            eyebrow="Service de proximité"
            title="La livraison à domicile."
            description="Retrouvez nos formules de livraison à Paris et en banlieue parisienne."
          />

          <SectionLabel number="04">
            Nos formules de livraison
          </SectionLabel>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {LIVRAISON_DOMICILE.map((formula, index) => {
              const isGreen = formula.theme === "green";

              return (
                <article
                  key={formula.nom}
                  className={`relative rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    isGreen
                      ? "bg-emerald-600 border-emerald-600 text-white"
                      : "bg-[#071B36] border-[#071B36] text-white"
                  }`}
                >
                  <div className="p-5 sm:p-7">
                    <p className="text-xs uppercase tracking-[0.18em] font-bold text-white/65 mb-4">
                      Formule 0{index + 1}
                    </p>

                    <h3 className="text-xl sm:text-2xl font-extrabold mb-3">
                      {formula.nom}
                    </h3>

                    <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {formula.prix}
                    </p>

                    <div className="w-10 h-1 bg-[#F4C542] rounded-full my-6" />

                    <div className="flex items-center gap-2 text-white/90 mb-3">
                      <Truck size={19} />
                      <span className="text-xs sm:text-sm font-semibold">
                        Livraison
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-bold">
                      {formula.km}
                    </p>
                  </div>

                  <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full bg-white/5" />
                </article>
              );
            })}
          </div>

          <p className="text-center text-xs text-slate-500 mt-7">
            Formules indiquées pour Paris et la banlieue parisienne.
          </p>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="relative overflow-hidden bg-[#071B36] py-20 lg:py-28">
        <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="container-pariscam relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-7">
              <ShieldCheck size={29} className="text-emerald-400" />
            </div>

            <span className="text-emerald-400 font-bold text-xs tracking-[0.22em] uppercase">
              Votre projet d'expédition
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mt-5 mb-6">
              Besoin d'un tarif
              <span className="block text-emerald-400">
                personnalisé ?
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9">
              Contactez notre équipe pour obtenir des renseignements
              complémentaires et connaître les prochains départs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="rounded-full px-8 py-3"
              >
                Demander un devis
                <ArrowRight size={19} />
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 font-bold transition-colors"
              >
                <MessageCircle size={20} />
                Écrire sur WhatsApp
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-emerald-500" />
        <div className="absolute bottom-0 left-1/3 h-1 w-16 bg-[#F4C542]" />
      </section>
    </>
  );
}
