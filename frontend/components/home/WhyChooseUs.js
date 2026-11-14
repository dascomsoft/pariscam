
import {
  ShieldCheck,
  Clock3,
  Globe2,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "La confiance",
    description:
      "Un partenaire engagé à prendre soin de vos expéditions et à vous accompagner avec sérieux.",
  },
  {
    icon: Clock3,
    number: "02",
    title: "La rapidité",
    description:
      "Des départs réguliers et des solutions adaptées pour acheminer vos colis dans les meilleurs délais.",
  },
  {
    icon: Globe2,
    number: "03",
    title: "L'expérience internationale",
    description:
      "Une expertise du transport entre l'Europe, principalement Paris, et le Cameroun.",
  },
  {
    icon: MapPin,
    number: "04",
    title: "La proximité",
    description:
      "Un réseau de 4 agences au Cameroun et en France pour rester au plus près de vos besoins.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FA] py-20 md:py-28">
      {/* Décoration d'arrière-plan */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-emerald-100/60 blur-[100px]" />

      <div className="container-pariscam relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* INTRODUCTION */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-[2px] w-9 bg-emerald-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700">
                Pourquoi PARISCAM ?
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#071B36] sm:text-4xl lg:text-5xl">
              Bien plus qu'un transporteur,
              <span className="text-emerald-600">
                {" "}un partenaire à vos côtés.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              Expédier un colis, c'est souvent bien plus qu'envoyer une
              marchandise. C'est transmettre quelque chose d'important.
              C'est pourquoi nous plaçons votre confiance au cœur de
              chaque expédition.
            </p>

            {/* Points de réassurance */}
            <div className="mt-9 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-emerald-600"
                />
                <span className="text-sm font-semibold text-[#071B36]">
                  Une équipe à votre écoute
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-emerald-600"
                />
                <span className="text-sm font-semibold text-[#071B36]">
                  Des solutions adaptées à vos besoins
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-emerald-600"
                />
                <span className="text-sm font-semibold text-[#071B36]">
                  Une présence entre la France et le Cameroun
                </span>
              </div>
            </div>

            {/* Accent graphique */}
            <div className="mt-10 flex items-center gap-3">
              <span className="h-1 w-14 rounded-full bg-emerald-500" />
              <span className="h-1 w-5 rounded-full bg-[#F4C542]" />
            </div>
          </div>

          {/* BLOC DES AVANTAGES */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#071B36] p-7 shadow-[0_25px_70px_rgba(7,27,54,0.14)] sm:p-10 lg:p-12">
            {/* Décorations */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/[0.035]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-500/[0.07] blur-[70px]" />

            <div className="relative z-10">
              <div className="mb-9 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                    Nos points forts
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-white">
                    Pourquoi nous choisir ?
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-emerald-400">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              {/* Grille des avantages */}
              <div className="grid gap-x-8 sm:grid-cols-2">
                {FEATURES.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <article
                      key={feature.number}
                      className={`group border-t border-white/10 py-7 transition-colors duration-300 ${
                        index >= 2 ? "sm:mt-2" : ""
                      }`}
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                          <Icon size={24} strokeWidth={1.8} />
                        </div>

                        <span className="text-xs font-bold tracking-widest text-slate-500">
                          {feature.number}
                        </span>
                      </div>

                      <h4 className="mb-3 text-lg font-bold text-white transition-colors group-hover:text-emerald-400">
                        {feature.title}
                      </h4>

                      <p className="text-sm leading-7 text-slate-400">
                        {feature.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Ligne jaune */}
            <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#F4C542]" />
          </div>
        </div>
      </div>
    </section>
  );
}
