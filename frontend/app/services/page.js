
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Plane,
  Package,
  ShoppingCart,
  Globe2,
  Cog,
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
  Clock3,
  Building2,
} from "lucide-react";

import Button from "@/components/common/Button";

export const metadata = {
  title: "Nos services de fret aérien Paris ↔ Cameroun",
  description:
    "Fret express, cargo alimentaire, facilitateur d'achat en ligne, import-export et pièces auto. PARISCAM, votre partenaire de confiance.",
};

const SERVICES = [
  {
    icon: Plane,
    number: "01",
    title: "FRET EXPRESS",
    text: "Colis divers. Délai max 72 h.",
    category: "Transport rapide",
  },
  {
    icon: Package,
    number: "02",
    title: "FRET CARGO ALIMENTAIRE",
    text: "Produits alimentaires Cameroun → Europe.",
    category: "Transport alimentaire",
  },
  {
    icon: ShoppingCart,
    number: "03",
    title: "FACILITATEUR D'ACHAT EN LIGNE",
    text: "Vos achats en ligne, notre priorité.",
    category: "E-commerce",
  },
  {
    icon: Globe2,
    number: "04",
    title: "IMPORT-EXPORT",
    text: "Des opportunités sans frontières.",
    category: "Commerce international",
  },
  {
    icon: Cog,
    number: "05",
    title: "PIÈCES AUTO",
    text: "Qualité et fiabilité au rendez-vous.",
    category: "Automobile",
  },
];

const LOCATIONS = [
  {
    city: "YAOUNDÉ",
    country: "CAMEROUN",
    isNew: false,
    address:
      "Nkombo 2ème, immeuble Express Exchange, après CCA Bank.",
  },
  {
    city: "YAOUNDÉ",
    country: "CAMEROUN",
    isNew: true,
    address:
      "Melen, Immeuble Ntarikon, En Face du CHU (Cooperative Union LTD, 1er étage).",
  },
  {
    city: "DOUALA",
    country: "CAMEROUN",
    isNew: false,
    address:
      "Face à l'immeuble Le Messager du Temps de la Fin, 1er étage, non loin du Carrefour Agip.",
    highlight: true,
  },
  {
    city: "PARIS",
    country: "FRANCE",
    isNew: false,
    address: "26 Rue de la Prévoyance, 93440 Dugny.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[620px] flex items-center overflow-hidden bg-[#071B36]">
        {/* Background image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071B36] via-[#071B36]/95 to-[#071B36]/65" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071B36]/70 via-transparent to-[#071B36]/20" />

        {/* Decorative elements */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full border border-white/10" />
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full border border-white/10" />

        {/* Plane image */}
        <img
          src="/images/avion-hero.png"
          alt="Avion de transport aérien"
          className="absolute right-[-18%] bottom-5 sm:right-[-8%] md:right-[-3%] md:top-1/2 md:bottom-auto md:-translate-y-1/2 w-[95%] sm:w-[75%] md:w-[55%] lg:w-[52%] max-w-[780px] opacity-80 md:opacity-100 pointer-events-none select-none object-contain"
        />

        <div className="container-pariscam relative z-10 py-28 md:py-36">
          <div className="max-w-2xl text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-4 py-2 mb-8">
              <ShieldCheck size={16} className="text-[#F4C542]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">
                Votre partenaire de confiance
              </span>
            </div>

            {/* Heading */}
            <p className="text-emerald-400 font-bold text-sm tracking-[0.25em] uppercase mb-4">
              PARISCAM FRET AÉRIEN & E-COMMERCE
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-7">
              Des solutions pour
              <span className="block text-emerald-400">
                aller plus loin.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
              De l'envoi d'un simple colis au transport de marchandises,
              PARISCAM vous accompagne dans vos besoins d'expédition et
              d'import-export entre l'Europe et le Cameroun.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="rounded-full px-7 py-3"
              >
                Demander un devis
                <ArrowRight size={19} />
              </Button>

              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="rounded-full px-7 py-3"
              >
                Découvrir nos services
                <ArrowUpRight size={18} />
              </Button>
            </div>

            {/* Trust information */}
            <div className="flex flex-wrap gap-x-7 gap-y-4 mt-12 pt-7 border-t border-white/15">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <Plane size={17} className="text-emerald-400" />
                Europe – Cameroun
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-200">
                <ShieldCheck size={17} className="text-emerald-400" />
                Partenaire de confiance
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-emerald-500" />
        <div className="absolute bottom-0 left-1/3 h-1 w-16 bg-[#F4C542]" />
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="relative py-24 lg:py-32 bg-[#F4F7FA] overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="container-pariscam relative z-10">
          {/* Section heading */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase mb-5">
              <span className="w-7 h-[2px] bg-emerald-500" />
              Ce que nous proposons
              <span className="w-7 h-[2px] bg-emerald-500" />
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B36] tracking-tight leading-tight mb-5">
              Des services pensés pour
              <span className="text-emerald-600"> vos besoins.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Découvrez nos différentes solutions pour faciliter vos
              expéditions, vos achats et vos opérations commerciales.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className={`group relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/5 hover:border-emerald-200 ${
                    index === 3 ? "lg:col-start-1" : ""
                  }`}
                >
                  {/* Number */}
                  <div className="absolute top-6 right-7 text-5xl font-extrabold text-slate-100 transition-colors duration-300 group-hover:text-emerald-50">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className="relative w-14 h-14 rounded-2xl bg-[#071B36] flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-emerald-600 group-hover:rotate-3">
                    <Icon
                      size={27}
                      strokeWidth={1.7}
                      className="text-white"
                    />
                  </div>

                  {/* Content */}
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-emerald-600 mb-3">
                    {service.category}
                  </p>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#071B36] leading-snug mb-4 min-h-[3.5rem]">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.text}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>

          {/* Service bottom note */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl bg-[#071B36] p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
                <Package size={24} className="text-emerald-400" />
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-1">
                  Un besoin particulier ?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                  Parlons de votre expédition et trouvons ensemble la
                  solution adaptée.
                </p>
              </div>
            </div>

            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="rounded-full px-6 py-3 shrink-0"
            >
              Nous contacter
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* ================= LOCATIONS ================= */}
      <section className="relative py-24 lg:py-28 bg-white overflow-hidden">
        <div className="container-pariscam relative z-10">
          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase mb-5">
                <MapPin size={15} />
                Retrouvez-nous
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B36] leading-tight tracking-tight">
                Nos points de
                <span className="text-emerald-600"> présence.</span>
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed max-w-md">
              Nos adresses pour vous accueillir et vous accompagner dans
              vos opérations entre l'Europe et le Cameroun.
            </p>
          </div>

          {/* Locations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LOCATIONS.map((location, index) => (
              <article
                key={`${location.city}-${index}`}
                className={`relative rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  location.highlight
                    ? "bg-[#071B36] border-[#071B36] text-white"
                    : "bg-[#F4F7FA] border-slate-100 text-[#071B36]"
                }`}
              >
                {/* New badge */}
                {location.isNew && (
                  <span className="absolute top-5 right-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1">
                    Nouvelle adresse
                  </span>
                )}

                {/* Location icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-7 ${
                    location.highlight
                      ? "bg-white/10 text-emerald-400"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  <MapPin size={23} />
                </div>

                <p
                  className={`text-xs font-bold tracking-[0.18em] uppercase mb-2 ${
                    location.highlight
                      ? "text-emerald-400"
                      : "text-emerald-700"
                  }`}
                >
                  {location.country}
                </p>

                <h3 className="text-2xl font-extrabold mb-4">
                  {location.city}
                </h3>

                <div
                  className={`w-10 h-1 rounded-full mb-5 ${
                    location.highlight ? "bg-[#F4C542]" : "bg-emerald-500"
                  }`}
                />

                <p
                  className={`text-sm leading-relaxed ${
                    location.highlight ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {location.address}
                </p>
              </article>
            ))}
          </div>

          {/* Route information */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-6 border-y border-slate-200">
            <div className="flex items-center gap-2 text-[#071B36] font-bold text-sm">
              <Globe size={18} className="text-emerald-600" />
              France
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <span className="w-12 h-px bg-slate-300" />
              <Plane size={19} className="text-emerald-600" />
              <span className="w-12 h-px bg-slate-300" />
            </div>

            <div className="flex items-center gap-2 text-[#071B36] font-bold text-sm">
              <MapPin size={18} className="text-emerald-600" />
              Cameroun
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT STRIP ================= */}
      <section className="relative overflow-hidden bg-emerald-600 py-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/10" />
        <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full border border-white/10" />

        <div className="container-pariscam relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            <a
              href="tel:+33642713750"
              className="flex items-center gap-4 text-white group"
            >
              <span className="w-12 h-12 shrink-0 rounded-2xl border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Phone size={21} />
              </span>

              <span>
                <span className="block text-xs text-white/70 mb-1">
                  Appelez-nous
                </span>
                <span className="font-bold tracking-wide">
                  +33 6 42 71 37 50
                </span>
              </span>
            </a>

            <a
              href="mailto:pariscamfret@gmail.com"
              className="flex items-center gap-4 text-white group"
            >
              <span className="w-12 h-12 shrink-0 rounded-2xl border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Mail size={21} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-white/70 mb-1">
                  Écrivez-nous
                </span>
                <span className="font-bold break-all">
                  pariscamfret@gmail.com
                </span>
              </span>
            </a>

            <a
              href="https://www.pariscamfret.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white group"
            >
              <span className="w-12 h-12 shrink-0 rounded-2xl border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Globe size={21} />
              </span>

              <span>
                <span className="block text-xs text-white/70 mb-1">
                  Visitez notre site
                </span>
                <span className="font-bold">
                  www.pariscamfret.com
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#F4F7FA] py-24 lg:py-28">
        <div className="absolute -top-32 right-0 w-80 h-80 rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="container-pariscam relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#071B36] flex items-center justify-center mb-7 shadow-lg shadow-slate-900/10">
              <Building2 size={28} className="text-emerald-400" />
            </div>

            <span className="text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase">
              Votre prochain envoi commence ici
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B36] leading-tight tracking-tight mt-5 mb-6">
              Parlons de votre
              <span className="text-emerald-600"> projet.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9">
              Vous avez un colis à expédier, un achat à effectuer ou un
              besoin en import-export ? Notre équipe est à votre écoute.
            </p>

            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="rounded-full px-8 py-3"
            >
              Demander un devis
              <ArrowRight size={19} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
