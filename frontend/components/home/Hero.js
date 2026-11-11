import { Plane, ArrowRight, ShieldCheck, Package, Star, MapPin } from "lucide-react";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white">
      {/* ——————————————— BACKGROUND IMAGE + OVERLAYS ——————————————— */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-plane.jpg"
          alt="Vol commercial PARISCAM en direction du Cameroun"
          className="w-full h-full object-cover object-[center_right]"
        />
        {/* Voile blanc à gauche (lisibilité du texte) → transparent à droite (visuel) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />
        {/* Voile vert très subtil pour harmoniser la palette */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent" />
      </div>

      {/* ——————————————— CONTENU ——————————————— */}
      <div className="container-pariscam relative w-full py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ——— Colonne gauche ——— */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm font-semibold text-emerald-700">
                Transport sécurisé Europe ↔ Cameroun
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight text-slate-900 mb-6">
              Votre passerelle
              <br />
              entre <span className="text-emerald-600">vos proches</span>
              <br />
              et vous
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl mb-9">
              PARISCAM, le lien de confiance entre le Cameroun et l&apos;Europe.
              Expédiez vos colis en toute sérénité avec un partenaire expérimenté.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all"
              >
                Demander un devis
                <ArrowRight size={20} />
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
              >
                Découvrir nos services
              </Button>
            </div>

            {/* Stats + note */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
              <div className="flex items-center gap-10">
                {[
                  { value: "4", label: "Agences" },
                  { value: "7", label: "Services" },
                  { value: "2", label: "Continents" },
                ].map((stat, i) => (
                  <div key={stat.label} className={i > 0 ? "pl-10 border-l border-slate-200" : ""}>
                    <p className="text-3xl font-extrabold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-slate-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-full">
                <div className="flex items-center gap-0.5 text-emerald-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-xs font-medium text-slate-300">4.9/5</span>
              </div>
            </div>
          </div>

          {/* ——— Colonne droite : l'agent PARISCAM ——— */}
          <div className="relative hidden lg:flex items-end justify-center">
            {/* Halo vert derrière l'agent */}
            <div className="absolute bottom-0 w-[480px] h-[480px] bg-emerald-500/20 rounded-full blur-[100px]" />

            {/* Anneau décoratif */}
            <div className="absolute bottom-8 w-[420px] h-[420px] border-2 border-dashed border-emerald-300/60 rounded-full" />

            {/* Image agent — détourée, posée sur le bas */}
            <img
              src="/images/hero-agent.png"
              alt="Agent PARISCAM prêt à expédier votre colis"
              className="relative z-10 w-[420px] object-contain drop-shadow-2xl"
            />

            {/* Carte flottante : suivi colis */}
            <div className="absolute z-20 top-16 -left-2 bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                <Package size={18} className="text-white" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">Colis #PC-2481</p>
                <p className="text-xs text-emerald-600 font-medium">En transit — Douala</p>
              </div>
            </div>

            {/* Carte flottante : sécurité */}
            <div className="absolute z-20 top-1/2 -right-2 bg-slate-900 rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <ShieldCheck size={18} className="text-emerald-400" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">100% sécurisé</p>
                <p className="text-xs text-slate-400">Colis assurés</p>
              </div>
            </div>

            {/* Carte flottante : trajet */}
            <div className="absolute z-20 bottom-10 left-0 bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-slate-100 px-5 py-3.5 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-900">PAR</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <div className="w-8 border-t-2 border-dashed border-emerald-400" />
                <Plane size={14} className="text-emerald-600 -rotate-45" />
                <div className="w-8 border-t-2 border-dashed border-emerald-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-900">DLA</span>
                <MapPin size={15} className="text-emerald-600" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Indicateur scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-emerald-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}