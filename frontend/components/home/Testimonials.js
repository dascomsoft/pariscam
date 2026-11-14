
import {
  Quote,
  Star,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

const TESTIMONIALS = [
  {
    name: "Client PARISCAM",
    city: "Paris",
    initials: "P",
    text: "Service fiable et rapide. Mes colis arrivent toujours à bon port.",
  },
  {
    name: "Client PARISCAM",
    city: "Douala",
    initials: "D",
    text: "Une équipe à l'écoute et professionnelle. Je recommande.",
  },
  {
    name: "Client PARISCAM",
    city: "Yaoundé",
    initials: "Y",
    text: "Grâce à PARISCAM, je reçois mes achats en ligne sans souci.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#071B36] py-20 md:py-28">

      {/* Décorations d'arrière-plan */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="container-pariscam relative z-10">

        {/* En-tête */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-[2px] w-9 bg-emerald-400" />
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-400">
                Témoignages
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              La confiance se construit,
              <span className="text-emerald-400"> un envoi après l'autre.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Chaque expédition est une occasion de rapprocher les personnes
              et de renforcer la confiance que nos clients nous accordent.
            </p>
          </div>

          {/* Citation décorative */}
          <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] lg:flex">
            <Quote size={48} className="text-emerald-400/80" />
          </div>
        </div>

        {/* Témoignages */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={testimonial.city}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white/[0.08] ${
                index === 1
                  ? "bg-white/[0.09] lg:-translate-y-4"
                  : "bg-white/[0.04]"
              }`}
            >
              {/* Numéro décoratif */}
              <span className="absolute right-6 top-4 text-6xl font-black tracking-tighter text-white/[0.04]">
                0{index + 1}
              </span>

              {/* Étoiles */}
              <div className="mb-7 flex items-center gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    className="fill-[#F4C542] text-[#F4C542]"
                  />
                ))}
              </div>

              {/* Citation */}
              <div className="relative flex-1">
                <Quote
                  size={27}
                  className="mb-4 text-emerald-400/70"
                />

                <p className="text-base leading-8 text-slate-200">
                  « {testimonial.text} »
                </p>
              </div>

              {/* Séparateur */}
              <div className="my-7 h-px w-full bg-white/10" />

              {/* Profil client */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-lg font-extrabold text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin size={13} className="text-emerald-400" />
                    {testimonial.city}
                  </p>
                </div>

                <div className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all group-hover:border-emerald-400 group-hover:text-emerald-400">
                  <Quote size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bas de section */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-9 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-emerald-400">
              <MessageCircle size={22} />
            </div>

            <div>
              <p className="font-bold text-white">
                Votre expérience compte aussi.
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Contactez notre équipe pour échanger avec nous.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-7 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            Nous contacter
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Accent jaune */}
        <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#F4C542]" />
      </div>
    </section>
  );
}
