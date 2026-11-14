
import {
  ArrowRight,
  MessageCircle,
  Plane,
  ShieldCheck,
  Package,
  MoveUpRight,
} from "lucide-react";

import Button from "../common/Button";
import { COMPANY } from "@/lib/constants";

export default function CTASection() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    "Bonjour PARISCAM, je souhaite avoir des informations sur vos services."
  )}`;

  return (
    <section className="relative overflow-hidden bg-[#071B36] py-20 md:py-24">

      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0">
        <div className="absolute -right-32 -top-40 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container-pariscam relative mx-auto">

        {/* MAIN CTA CARD */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#102A48] via-[#102A48] to-[#1E3A5F] px-6 py-12 shadow-2xl shadow-black/20 sm:px-10 md:px-14 md:py-16">

          {/* CARD DECORATION */}
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/5" />
          <div className="absolute -right-10 -top-16 h-64 w-64 rounded-full border border-white/5" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl">

              {/* LABEL */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
                <Plane size={15} className="text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">
                  Votre prochain envoi commence ici
                </span>
              </div>

              {/* TITLE */}
              <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Un colis à envoyer ?
                <br />
                <span className="text-emerald-400">
                  Nous sommes là pour vous.
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                Europe ou Cameroun, confiez vos expéditions à une équipe
                expérimentée. Contactez PARISCAM et obtenez un devis
                adapté à vos besoins.
              </p>

              {/* TRUST POINTS */}
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">

                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <ShieldCheck size={17} className="text-emerald-400" />
                  Service de confiance
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Package size={17} className="text-yellow-400" />
                  Plusieurs types de colis
                </div>

              </div>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="relative z-10 flex flex-col gap-4 lg:min-w-[245px]">

              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="group w-full justify-center bg-emerald-600 text-white shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500"
              >
                Demander un devis
                <ArrowRight
                  size={19}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle size={20} />
                Discuter sur WhatsApp
                <MoveUpRight
                  size={16}
                  className="opacity-60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <p className="mt-1 text-center text-xs text-slate-400">
                Notre équipe est à votre écoute.
              </p>

            </div>
          </div>

          {/* BOTTOM ACCENT */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 via-yellow-400 to-transparent" />

        </div>

        {/* BOTTOM BRAND SIGNATURE */}
        <div className="mt-7 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            PARISCAM
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-emerald-500 sm:block" />
          <span className="text-xs text-slate-500">
            Le lien de confiance entre le Cameroun et l'Europe.
          </span>
        </div>

      </div>
    </section>
  );
}
