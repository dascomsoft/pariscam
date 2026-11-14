
import {
  Plane,
  ArrowRight,
  MapPin,
  Globe2,
  Package,
  MoveUpRight,
} from "lucide-react";

import SectionTitle from "../common/SectionTitle";

const destinations = [
  {
    id: 1,
    departure: "FRANCE",
    arrival: "CAMEROUN",
    title: "Paris vers le Cameroun",
    description:
      "Faites parvenir vos colis, achats en ligne et marchandises à vos proches au Cameroun.",
    image: "/images/destination-cameroun.jpg",
    route: "Paris → Douala",
    accent: "from-emerald-500 to-emerald-400",
    tag: "Depuis l'Europe",
  },
  {
    id: 2,
    departure: "CAMEROUN",
    arrival: "FRANCE",
    title: "Cameroun vers Paris",
    description:
      "Expédiez vos produits, documents et marchandises vers la France en toute simplicité.",
    image: "/images/destination-paris.jpg",
    route: "Douala → Paris",
    accent: "from-blue-500 to-cyan-400",
    tag: "Depuis le Cameroun",
  },
];

export default function Destinations() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FA] py-20 md:py-28">

      {/* BACKGROUND DECORATION */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/5 blur-[100px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="container-pariscam relative mx-auto">

        {/* SECTION INTRODUCTION */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
                Nos destinations
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#071B36] sm:text-4xl md:text-5xl">
              Entre l'Europe et le Cameroun,
              <span className="text-emerald-600"> nous rapprochons les distances.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-500">
              Où que vous soyez, PARISCAM vous accompagne pour vos
              expéditions internationales dans les deux sens.
            </p>
          </div>

          {/* GLOBAL ROUTE INDICATOR */}
          <div className="hidden items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm lg:flex">
            <Globe2 size={25} className="text-emerald-600" />
            <div>
              <p className="text-sm font-bold text-[#071B36]">
                Une liaison dans les deux sens
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Europe ↔ Afrique
              </p>
            </div>
          </div>

        </div>

        {/* DESTINATION CARDS */}
        <div className="grid gap-7 lg:grid-cols-2">

          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group relative isolate min-h-[460px] overflow-hidden rounded-[28px] bg-[#071B36] shadow-xl shadow-slate-900/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* BACKGROUND IMAGE */}
              <img
                src={destination.image}
                alt={`Destination ${destination.arrival}`}
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* OVERLAYS */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071B36] via-[#071B36]/65 to-[#071B36]/10" />

              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071B36]/50 to-transparent" />

              {/* TOP CONTENT */}
              <div className="absolute left-7 right-7 top-7 flex items-center justify-between sm:left-9 sm:right-9">

                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {destination.tag}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-emerald-500 group-hover:text-white">
                  <MoveUpRight size={20} />
                </div>

              </div>

              {/* CARD CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

                {/* ROUTE */}
                <div className="mb-5 flex items-center gap-3">

                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-emerald-400" />
                    <span className="text-xs font-bold tracking-wider text-white">
                      {destination.departure}
                    </span>
                  </div>

                  <div className="flex flex-1 items-center gap-1">
                    <span className="h-px flex-1 bg-white/30" />
                    <Plane size={17} className="rotate-45 text-emerald-400" />
                    <span className="h-px flex-1 bg-white/30" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-wider text-white">
                      {destination.arrival}
                    </span>
                    <MapPin size={15} className="text-yellow-400" />
                  </div>

                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  {destination.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                  {destination.description}
                </p>

                {/* ACTION */}
                <a
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#071B36] transition-all duration-300 hover:bg-emerald-500 hover:text-white"
                >
                  Organiser mon expédition
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

              </div>

              {/* BOTTOM ACCENT */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${destination.accent} transition-all duration-500 group-hover:w-full`} />

            </article>
          ))}

        </div>

        {/* BOTTOM INFORMATION */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm sm:flex-row">

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
              <Package size={23} className="text-emerald-600" />
            </div>

            <div>
              <p className="font-bold text-[#071B36]">
                Un envoi particulier ?
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Notre équipe vous accompagne selon vos besoins.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-emerald-700 transition-colors hover:text-emerald-500"
          >
            Contactez-nous
            <ArrowRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}
