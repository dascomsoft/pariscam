
import {
  Plane,
  ShoppingBag,
  Package,
  Truck,
  PackageCheck,
  Globe,
  Warehouse,
  CheckCircle,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import Button from "../common/Button";

const ICONS = {
  Plane,
  ShoppingBag,
  Package,
  Truck,
  PackageCheck,
  Globe,
  Warehouse,
};

export default function ServiceDetailCard({ service, index }) {
  const Icon = ICONS[service.icon] || Package;
  const isEven = index % 2 === 0;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center ${
        isEven ? "" : "md:[&>div:first-child]:order-2"
      }`}
    >
      {/* VISUAL PANEL */}
      <div className="relative group">
        <div className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[410px] overflow-hidden rounded-[2rem] bg-[#071B36]">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D2B50] via-[#071B36] to-[#041225]" />

          <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute -top-10 -right-6 w-52 h-52 rounded-full border border-white/10" />

          <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4C542]/10 rounded-bl-[5rem]" />

          {/* Top information */}
          <div className="absolute top-7 left-7 right-7 flex items-center justify-between z-10">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/60">
              PARISCAM SERVICES
            </span>

            <span className="text-4xl font-bold text-white/15">
              {number}
            </span>
          </div>

          {/* Main icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
              <div className="absolute inset-3 rounded-full border border-emerald-400/20" />

              <div className="absolute -top-2 right-5 w-5 h-5 rounded-full bg-[#F4C542] shadow-lg shadow-yellow-500/30" />

              <Icon
                size={76}
                strokeWidth={1.3}
                className="relative z-10 text-white"
              />
            </div>
          </div>

          {/* Bottom information */}
          <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between z-10">
            <div>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                Notre expertise
              </p>

              <p className="text-white text-lg sm:text-xl font-bold max-w-[230px] leading-snug">
                Des solutions adaptées à vos expéditions.
              </p>
            </div>

            <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Accent line */}
          <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-emerald-500" />
          <div className="absolute bottom-0 left-1/3 h-1 w-16 bg-[#F4C542]" />
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-5 right-5 sm:right-8 flex items-center gap-3 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 px-4 py-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
            <ShieldCheck size={21} className="text-emerald-600" />
          </div>

          <div>
            <p className="text-xs text-slate-500">Votre partenaire</p>
            <p className="text-sm font-bold text-[#071B36]">
              En toute confiance
            </p>
          </div>
        </div>
      </div>

      {/* SERVICE CONTENT */}
      <div className={`pt-5 md:pt-0 ${isEven ? "" : "md:order-1"}`}>
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
            {number}
          </span>

          <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-700">
            Nos solutions de transport
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-extrabold text-[#071B36] leading-tight tracking-tight mb-6">
          {service.title}
          <span className="block w-16 h-1 bg-[#F4C542] rounded-full mt-5" />
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
          {service.description}
        </p>

        {/* Advantages */}
        {service.advantages?.length > 0 && (
          <div className="mb-9">
            <p className="text-sm font-bold text-[#071B36] mb-5">
              Les avantages de ce service
            </p>

            <ul className="space-y-4">
              {service.advantages.map((advantage, i) => (
                <li
                  key={`${advantage}-${i}`}
                  className="flex items-start gap-3 group/item"
                >
                  <span className="w-6 h-6 shrink-0 rounded-full bg-emerald-50 flex items-center justify-center mt-0.5">
                    <CheckCircle
                      size={15}
                      className="text-emerald-600"
                    />
                  </span>

                  <span className="text-slate-700 leading-relaxed">
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="rounded-full px-7 py-3"
          >
            Demander un devis
            <ArrowRight size={18} />
          </Button>

          <span className="text-xs text-slate-500">
            Une question sur ce service ? Contactez notre équipe.
          </span>
        </div>
      </div>
    </article>
  );
}
