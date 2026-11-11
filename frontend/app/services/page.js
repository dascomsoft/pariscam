// import { ArrowRight, ShieldCheck } from "lucide-react";
// import SectionTitle from "@/components/common/SectionTitle";
// import Button from "@/components/common/Button";
// import ServiceDetailCard from "@/components/services/ServiceDetailCard";
// import { SERVICES_FALLBACK } from "@/lib/constants";

// export const metadata = {
//   title: "Nos services de fret aérien Paris ↔ Cameroun",
//   description:
//     "Découvrez les 7 services PARISCAM : fret express, achat en ligne, transport de colis, cargo volumineux, fret alimentaire, import-export et pièces automobiles.",
// };

// export default function ServicesPage() {
//   return (
//     <>
//       {/* Header de page */}
//       <section className="bg-gradient-to-br from-pariscam-blueNight to-pariscam-blue text-white py-20">
//         <div className="container-pariscam text-center">
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//             <ShieldCheck size={16} className="text-pariscam-yellow" />
//             <span className="text-sm font-medium">7 services adaptés à vos besoins</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos services</h1>
//           <p className="text-lg text-gray-200 max-w-2xl mx-auto">
//             De l&apos;envoi d&apos;un simple colis au transport de marchandises volumineuses, PARISCAM vous accompagne.
//           </p>
//         </div>
//       </section>

//       {/* Liste des services */}
//       <section className="py-20 bg-white">
//         <div className="container-pariscam space-y-20">
//           {SERVICES_FALLBACK.map((service, index) => (
//             <ServiceDetailCard key={service.id} service={service} index={index} />
//           ))}
//         </div>
//       </section>

//       {/* CTA final */}
//       <section className="py-20 bg-pariscam-gray">
//         <div className="container-pariscam text-center">
//           <SectionTitle
//             eyebrow="Besoin d'un service spécifique ?"
//             title="Parlons de votre projet"
//             description="Contactez-nous pour un devis gratuit et personnalisé."
//           />
//           <Button href="/contact" variant="primary" size="lg">
//             Demander un devis <ArrowRight size={20} />
//           </Button>
//         </div>
//       </section>
//     </>
//   );
// }











import {
  ArrowRight,
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
  Quote,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Nos services de fret aérien Paris ↔ Cameroun",
  description:
    "Fret express, cargo alimentaire, facilitateur d'achat en ligne, import-export et pièces auto. PARISCAM, votre partenaire de confiance.",
};

const SERVICES = [
  {
    icon: Plane,
    title: "FRET EXPRESS",
    text: "Colis divers. Délai max 72 h.",
  },
  {
    icon: Package,
    title: "FRET CARGO ALIMENTAIRE",
    text: "Produits alimentaires Cameroun → Europe.",
  },
  {
    icon: ShoppingCart,
    title: "FACILITATEUR D'ACHAT EN LIGNE",
    text: "Vos achats en ligne, notre priorité.",
  },
  {
    icon: Globe2,
    title: "IMPORT-EXPORT",
    text: "Des opportunités sans frontières.",
  },
  {
    icon: Cog,
    title: "PIÈCES AUTO",
    text: "Qualité et fiabilité au rendez-vous.",
  },
];

const LOCATIONS = [
  {
    city: "YAOUNDÉ",
    isNew: false,
    address: "Nkombo 2ème, immeuble Express Exchange, après CCA Bank.",
  },
  {
    city: "YAOUNDÉ",
    isNew: true,
    address:
      "Melen, Immeuble Ntarikon, En Face du CHU (Cooperative Union LTD, 1er étage).",
  },
  {
    city: "DOUALA",
    isNew: false,
    address: "Face à l'immeuble Le Messager du Temps de la Fin, 1er étage, non loin du Carrefour Agip.",
    highlight: true,
  },
  {
    city: "PARIS",
    isNew: false,
    address: "26 Rue de la Prévoyance, 93440 Dugny.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden min-h-[520px] flex items-center">
        {/* Background image + overlay dégradé bleu nuit */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pariscam-blueNight/95 via-pariscam-blueNight/80 to-pariscam-blue/40" />

        {/* Avion positionné à droite */}
        <img
          src="/images/avion-hero.png"
          alt="Avion cargo PARISCAM"
          className="absolute right-[-5%] md:right-[2%] top-1/2 -translate-y-1/2 w-[90%] sm:w-[60%] md:w-[48%] max-w-[720px] pointer-events-none select-none animate-[float_6s_ease-in-out_infinite] drop-shadow-2xl"
        />

        <div className="container-pariscam relative z-10 py-24">
          <div className="max-w-2xl text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
              <ShieldCheck size={16} className="text-pariscam-yellow" />
              <span className="text-sm font-medium">
                Votre partenaire de confiance
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              PARIS<span className="text-pariscam-green">CAM</span>
              <span className="block text-lg md:text-xl font-semibold mt-2 text-pariscam-yellow tracking-wide">
                FRET AÉRIEN & E-COMMERCE
              </span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed">
              <Quote size={18} className="inline mr-1 text-pariscam-green" />
              Votre partenaire de <strong className="text-white">confiance</strong>{" "}
              pour tous vos besoins d&apos;expédition et d&apos;import-export.{" "}
              <Quote size={18} className="inline ml-1 text-pariscam-green" />
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Demander un devis <ArrowRight size={20} />
              </Button>
              <Button href="#services" variant="outline" size="lg">
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NOS SERVICES ============ */}
      <section id="services" className="py-20 bg-white relative">
        <div className="container-pariscam">
          {/* Pillule titre */}
          <div className="flex justify-center mb-14">
            <h2 className="bg-pariscam-green text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-full shadow-lg shadow-pariscam-green/30">
              NOS SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="group relative border-l-2 border-pariscam-green/40 pl-5 pr-2 py-2 hover:border-pariscam-green transition-colors duration-300"
              >
                {/* Numéro cercle vert */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-pariscam-green text-white font-bold text-lg shadow-md shadow-pariscam-green/40 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-pariscam-blue text-sm leading-snug uppercase">
                    {service.title}
                  </h3>
                </div>

                {/* Icône */}
                <service.icon
                  size={48}
                  strokeWidth={1.4}
                  className="text-pariscam-green mb-4 group-hover:-translate-y-1 transition-transform duration-300"
                />

                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NOS LOCALISATIONS ============ */}
      <section className="pb-20 bg-white">
        <div className="container-pariscam">
          <div className="flex justify-center mb-10">
            <h2 className="bg-pariscam-green text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-full shadow-lg shadow-pariscam-green/30">
              NOS LOCALISATIONS
            </h2>
          </div>

          <div className="border border-pariscam-green/30 rounded-2xl p-8 md:p-10 shadow-sm bg-gradient-to-b from-white to-pariscam-gray/40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {LOCATIONS.map((loc, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin
                      size={22}
                      className={
                        loc.highlight
                          ? "text-pariscam-blue"
                          : "text-pariscam-green"
                      }
                      fill="currentColor"
                    />
                    <h3
                      className={`font-bold text-lg uppercase ${
                        loc.highlight
                          ? "text-pariscam-blue"
                          : "text-pariscam-green"
                      }`}
                    >
                      {loc.city}
                    </h3>
                    {loc.isNew && (
                      <span className="bg-pariscam-green text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        Nouvelle adresse
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ BANDEAU CONTACT ============ */}
      <section className="bg-gradient-to-r from-pariscam-green to-[#5a9e00] text-white py-8">
        <div className="container-pariscam">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 text-center md:text-left">
            <a
              href="tel:+33642713750"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <span className="w-11 h-11 rounded-full border-2 border-white/60 flex items-center justify-center">
                <Phone size={20} />
              </span>
              <span className="font-semibold tracking-wide">
                +33 6 42 71 37 50
              </span>
            </a>

            <a
              href="mailto:pariscamfret@gmail.com"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <span className="w-11 h-11 rounded-full border-2 border-white/60 flex items-center justify-center">
                <Mail size={20} />
              </span>
              <span className="font-medium">pariscamfret@gmail.com</span>
            </a>

            <a
              href="https://www.pariscamfret.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <span className="w-11 h-11 rounded-full border-2 border-white/60 flex items-center justify-center">
                <Globe size={20} />
              </span>
              <span className="font-medium">www.pariscamfret.com</span>
            </a>

            <p className="hidden lg:block italic text-white/90 text-sm max-w-[220px] border-l border-white/30 pl-4">
              « ParisCam Fret, le lien sûr entre vos ambitions et le monde. »
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="py-20 bg-pariscam-gray">
        <div className="container-pariscam text-center">
          <SectionTitle
            eyebrow="Besoin d'un service spécifique ?"
            title="Parlons de votre projet"
            description="Contactez-nous pour un devis gratuit et personnalisé."
          />
          <Button href="/contact" variant="primary" size="lg">
            Demander un devis <ArrowRight size={20} />
          </Button>
        </div>
      </section>
    </>
  );
}