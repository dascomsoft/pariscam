import { Plane, ShoppingBag, Package, Truck, PackageCheck, Globe, Warehouse, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import { SERVICES_FALLBACK } from "@/lib/constants";

const ICONS = { Plane, ShoppingBag, Package, Truck, PackageCheck, Globe, Warehouse };

// Alternance des couleurs pastel pour les icônes
const ICON_COLORS = [
  { bg: "bg-pariscam-blueLight", text: "text-pariscam-blue" },
  { bg: "bg-pariscam-greenLight", text: "text-pariscam-greenDark" },
  { bg: "bg-pariscam-yellow/20", text: "text-pariscam-blue" },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container-pariscam">
        <SectionTitle
          eyebrow="Nos services"
          title="Des solutions adaptées à tous vos besoins"
          description="De l'envoi d'un simple colis au transport de marchandises volumineuses, PARISCAM vous accompagne."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_FALLBACK.map((service, index) => {
            const Icon = ICONS[service.icon] || Package;
            const color = ICON_COLORS[index % ICON_COLORS.length];
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-7 border border-pariscam-border hover:border-pariscam-blue/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* Icône pastel */}
                <div className={`w-14 h-14 ${color.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className={color.text} strokeWidth={2} />
                </div>

                <h3 className="text-lg font-bold text-pariscam-text mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-pariscam-muted leading-relaxed mb-5">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-pariscam-blue hover:gap-2 transition-all"
                >
                  En savoir plus
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-pariscam-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-pariscam-blueDark transition-all shadow-soft hover:shadow-card"
          >
            Voir tous les services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
