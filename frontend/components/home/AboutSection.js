
import {
  CheckCircle2,
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  HeartHandshake,
  Clock3,
} from "lucide-react";

import Button from "../common/Button";

const ENGAGEMENTS = [
  {
    icon: HeartHandshake,
    title: "Un accompagnement personnalisé",
    description: "Une équipe à votre écoute pour vous guider à chaque étape.",
  },
  {
    icon: ShieldCheck,
    title: "La sécurité avant tout",
    description: "Une attention particulière portée à la prise en charge de vos colis.",
  },
  {
    icon: Clock3,
    title: "Transparence et réactivité",
    description: "Des informations claires sur les tarifs, les délais et les modalités.",
  },
  {
    icon: CheckCircle2,
    title: "Un service à votre écoute",
    description: "Un interlocuteur disponible pour répondre à vos préoccupations.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container-pariscam">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* VISUEL IMMERSIF */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-[#071B36] md:min-h-[560px]">
              <img
                src="/images/about-pariscam.jpg"
                alt="Activités de transport et d'expédition de PARISCAM"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B36] via-[#071B36]/35 to-transparent" />

              {/* Décoration */}
              <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-white/20" />
              <div className="absolute right-14 top-14 h-12 w-12 rounded-full border border-emerald-400/50" />

              {/* Texte sur image */}
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-md">
                  <Globe2 size={15} />
                  Europe – Cameroun
                </div>

                <h3 className="max-w-md text-3xl font-extrabold leading-tight text-white md:text-4xl">
                  Plus que des colis,
                  <span className="text-emerald-400"> des liens qui nous rapprochent.</span>
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-200">
                  Nous facilitons vos échanges et vos expéditions entre
                  l'Europe et le Cameroun.
                </p>
              </div>
            </div>

            {/* Signature flottante */}
            <div className="absolute -bottom-6 right-5 flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_15px_45px_rgba(7,27,54,0.12)] sm:-right-5 sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <ShieldCheck size={27} />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#071B36]">
                  Votre confiance, notre priorité
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  À chaque expédition
                </p>
              </div>
            </div>
          </div>

          {/* CONTENU ÉDITORIAL */}
          <div className="pt-5 lg:pt-0">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-[2px] w-9 bg-emerald-500" />
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700">
                À propos de PARISCAM
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#071B36] sm:text-4xl lg:text-5xl">
              La distance ne doit jamais être un obstacle.
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-600">
              PARISCAM est une entreprise de droit camerounais spécialisée
              dans le transport de colis entre l'Europe, principalement Paris,
              et le Cameroun.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Notre mission est de faciliter les échanges entre les familles,
              les commerçants et les entreprises des deux continents, grâce
              à des solutions d'expédition adaptées à leurs besoins.
            </p>

            {/* Engagements */}
            <div className="mt-9 border-t border-slate-200">
              <h3 className="mb-2 pt-7 text-lg font-extrabold text-[#071B36]">
                Ce qui nous engage au quotidien
              </h3>

              <div className="divide-y divide-slate-100">
                {ENGAGEMENTS.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex gap-4 py-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F7F4] text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-bold text-[#071B36]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>
                      </div>

                      <span className="hidden text-xs font-bold text-slate-300 sm:block">
                        0{index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <Button href="/contact" variant="primary" size="md">
                Parlons de votre projet
                <ArrowUpRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
