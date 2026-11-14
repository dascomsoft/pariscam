
import {
  Plane,
  ShoppingBag,
  Package,
  Truck,
  PackageCheck,
  Globe,
  Warehouse,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import Link from "next/link";
import { SERVICES_FALLBACK } from "@/lib/constants";

const ICONS = {
  Plane,
  ShoppingBag,
  Package,
  Truck,
  PackageCheck,
  Globe,
  Warehouse,
};

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-[#e5ffda] py-20 md:py-28">
      {/* Décoration d'arrière-plan */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="container-pariscam relative z-10">
        {/* En-tête éditorial */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-[2px] w-9 bg-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
                Nos services
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#071B36] sm:text-4xl lg:text-5xl">
              Tout ce qu'il faut pour
              <span className="text-emerald-600"> expédier en confiance.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-lg text-base leading-7 text-slate-600">
              Du petit colis aux marchandises volumineuses, nous proposons
              des solutions adaptées à vos besoins entre l'Europe et le
              Cameroun.
            </p>

            <Link
              href="/services"
              className="mt-5 inline-flex items-center gap-2 font-bold text-[#071B36] transition-colors hover:text-emerald-600"
            >
              Découvrir notre expertise
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Grille des services */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_FALLBACK.map((service, index) => {
            const Icon = ICONS[service.icon] || Package;
            const number = String(index + 1).padStart(2, "0");

            return (
              <Link
                href="/services"
                key={service.id}
                className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_30px_rgba(7,27,54,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_20px_45px_rgba(7,27,54,0.10)]"
              >
                {/* Numéro discret */}
                <span className="absolute right-6 top-5 text-5xl font-black tracking-tighter text-slate-100 transition-colors duration-300 group-hover:text-emerald-50">
                  {number}
                </span>

                {/* Icône */}
                <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B36] text-white transition-all duration-300 group-hover:bg-emerald-600 group-hover:rotate-3">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                {/* Contenu */}
                <div className="relative flex flex-1 flex-col">
                  <h3 className="mb-3 text-xl font-bold text-[#071B36] transition-colors group-hover:text-emerald-700">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-7">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-emerald-700">
                      En savoir plus
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>

                {/* Ligne d'accent */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
              </Link>
            );
          })}
        </div>

        {/* Bandeau de confiance */}
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-[#071B36] px-7 py-9 md:px-10 md:py-11">
          {/* Décoration */}
          <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full border-[35px] border-white/[0.04]" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-emerald-400 sm:flex">
                <ShieldCheck size={30} strokeWidth={1.7} />
              </div>

              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Votre partenaire de confiance
                </p>

                <h3 className="max-w-xl text-2xl font-bold leading-snug text-white md:text-3xl">
                  Votre prochain envoi commence ici.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                  Découvrez nos solutions et trouvons ensemble celle qui
                  correspond à votre expédition.
                </p>
              </div>
            </div>

            <Link
              href="/services"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Voir tous nos services
              <ArrowRight size={19} />
            </Link>
          </div>

          {/* Petite touche jaune */}
          <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#F4C542]" />
        </div>
      </div>
    </section>
  );
}
