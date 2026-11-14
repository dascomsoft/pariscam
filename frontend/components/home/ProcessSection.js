
import {
  Package,
  Phone,
  CheckCircle2,
  Truck,
  Plane,
  PackageCheck,
  ArrowRight,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const STEPS = [
  {
    icon: Package,
    number: "01",
    title: "Préparez votre colis",
    description:
      "Préparez vos articles ou sélectionnez vos achats à expédier vers votre destination.",
    label: "Préparation",
  },
  {
    icon: Phone,
    number: "02",
    title: "Contactez PARISCAM",
    description:
      "Échangez avec notre équipe pour connaître les modalités et organiser votre expédition.",
    label: "Prise de contact",
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Confirmez votre envoi",
    description:
      "Validez les informations de votre colis ainsi que les conditions de transport.",
    label: "Confirmation",
  },
  {
    icon: Truck,
    number: "04",
    title: "Déposez votre colis",
    description:
      "Déposez votre colis en agence ou organisez sa prise en charge selon les modalités convenues.",
    label: "Prise en charge",
  },
  {
    icon: Plane,
    number: "05",
    title: "Suivez l'acheminement",
    description:
      "Votre colis est acheminé vers sa destination selon le mode de transport prévu.",
    label: "Transport",
  },
  {
    icon: PackageCheck,
    number: "06",
    title: "Récupérez votre colis",
    description:
      "Votre destinataire récupère son colis selon les modalités de livraison convenues.",
    label: "Livraison",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F4F7FA] py-20 md:py-28">

      {/* BACKGROUND DECORATION */}
      <div className="absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />

      {/* MAIN CONTAINER */}
      <div className="container-pariscam relative mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
                Notre processus
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#071B36] sm:text-4xl md:text-5xl">
              Expédier avec PARISCAM,
              <span className="text-emerald-600">
                {" "}c'est simple.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-500">
              De la préparation à la réception, nous vous accompagnons
              à chaque étape pour faciliter vos expéditions entre
              l'Europe et le Cameroun.
            </p>

          </div>

          {/* HEADER INFORMATION */}
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:min-w-[250px]">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
              <ShieldCheck size={25} className="text-emerald-600" />
            </div>

            <div>
              <p className="font-bold text-[#071B36]">
                Un parcours organisé
              </p>
              <p className="mt-1 text-xs text-slate-500">
                De votre premier contact à la réception
              </p>
            </div>

          </div>
        </div>

        {/* PROCESS TIMELINE */}
        <div className="relative">

          {/* CONNECTING LINE - DESKTOP */}
          <div className="absolute left-[16.66%] right-[16.66%] top-[39px] hidden h-px bg-gradient-to-r from-emerald-200 via-slate-300 to-emerald-200 lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-900/5 md:p-8"
                >

                  {/* CARD TOP */}
                  <div className="mb-8 flex items-center justify-between">

                    {/* ICON */}
                    <div className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 transition-all duration-300 group-hover:bg-emerald-600 group-hover:shadow-lg group-hover:shadow-emerald-600/20">

                      <Icon
                        size={26}
                        strokeWidth={1.8}
                        className="text-emerald-600 transition-colors duration-300 group-hover:text-white"
                      />

                    </div>

                    {/* STEP NUMBER */}
                    <span className="text-4xl font-black tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-emerald-100">
                      {step.number}
                    </span>

                  </div>

                  {/* STEP LABEL */}
                  <div className="mb-3 flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                      {step.label}
                    </span>

                  </div>

                  {/* TITLE */}
                  <h3 className="mb-3 text-xl font-bold text-[#071B36] transition-colors group-hover:text-emerald-700">
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm leading-7 text-slate-500">
                    {step.description}
                  </p>

                  {/* BOTTOM DECORATION */}
                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">

                    <span className="text-xs font-medium text-slate-400">
                      Étape {index + 1} / 6
                    </span>

                    <ArrowRight
                      size={17}
                      className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-600"
                    />

                  </div>

                  {/* HOVER ACCENT */}
                  <div className="absolute bottom-0 left-7 right-7 h-[2px] scale-x-0 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-x-100 md:left-8 md:right-8" />

                </article>
              );
            })}

          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="relative mt-12 overflow-hidden rounded-[24px] bg-[#071B36] p-7 sm:p-9">

          {/* DECORATIVE LIGHT */}
          <div className="absolute -right-20 -top-32 h-64 w-64 rounded-full bg-emerald-500/15 blur-[90px]" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">

              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:flex">
                <Clock3 size={26} className="text-emerald-400" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  Prêt à envoyer votre colis ?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Notre équipe est disponible pour vous renseigner
                  et vous accompagner.
                </p>
              </div>

            </div>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-emerald-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500"
            >
              Commencer mon expédition
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

          </div>

          {/* BOTTOM ACCENT */}
          <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-gradient-to-r from-emerald-500 to-yellow-400" />

        </div>

      </div>
    </section>
  );
}
