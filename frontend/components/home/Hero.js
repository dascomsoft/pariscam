// import { Plane, ArrowRight, ShieldCheck, Package, Star, MapPin } from "lucide-react";
// import Button from "../common/Button";

// export default function Hero() {
//   return (
//     <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white">
//       {/* ——————————————— BACKGROUND IMAGE + OVERLAYS ——————————————— */}
//       <div className="absolute inset-0">
//         <img
//           src="/images/hero-plane.jpg"
//           alt="Vol commercial PARISCAM en direction du Cameroun"
//           className="w-full h-full object-cover object-[center_right]"
//         />
//         {/* Voile blanc à gauche (lisibilité du texte) → transparent à droite (visuel) */}
//         <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />
//         {/* Voile vert très subtil pour harmoniser la palette */}
//         <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent" />
//       </div>

//       {/* ——————————————— CONTENU ——————————————— */}
//       <div className="container-pariscam relative w-full py-20 md:py-28">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* ——— Colonne gauche ——— */}
//           <div>
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full mb-8">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
//               </span>
//               <span className="text-sm font-semibold text-emerald-700">
//                 Transport sécurisé Europe ↔ Cameroun
//               </span>
//             </div>

//             {/* Titre */}
//             <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight text-slate-900 mb-6">
//               Votre passerelle
//               <br />
//               entre <span className="text-emerald-600">vos proches</span>
//               <br />
//               et vous
//             </h1>

//             <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl mb-9">
//               PARISCAM, le lien de confiance entre le Cameroun et l&apos;Europe.
//               Expédiez vos colis en toute sérénité avec un partenaire expérimenté.
//             </p>

//             {/* CTA */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//               <Button
//                 href="/contact"
//                 variant="primary"
//                 size="lg"
//                 className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all"
//               >
//                 Demander un devis
//                 <ArrowRight size={20} />
//               </Button>
//               <Button
//                 href="/services"
//                 variant="outline"
//                 size="lg"
//                 className="border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
//               >
//                 Découvrir nos services
//               </Button>
//             </div>

//             {/* Stats + note */}
//             <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
//               <div className="flex items-center gap-10">
//                 {[
//                   { value: "4", label: "Agences" },
//                   { value: "7", label: "Services" },
//                   { value: "2", label: "Continents" },
//                 ].map((stat, i) => (
//                   <div key={stat.label} className={i > 0 ? "pl-10 border-l border-slate-200" : ""}>
//                     <p className="text-3xl font-extrabold text-slate-900">
//                       {stat.value}
//                     </p>
//                     <p className="text-xs uppercase tracking-widest text-slate-400 mt-1">
//                       {stat.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-full">
//                 <div className="flex items-center gap-0.5 text-emerald-400">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
//                   ))}
//                 </div>
//                 <span className="text-xs font-medium text-slate-300">4.9/5</span>
//               </div>
//             </div>
//           </div>

//           {/* ——— Colonne droite : l'agent PARISCAM ——— */}
//           <div className="relative hidden lg:flex items-end justify-center">
//             {/* Halo vert derrière l'agent */}
//             <div className="absolute bottom-0 w-[480px] h-[480px] bg-emerald-500/20 rounded-full blur-[100px]" />

//             {/* Anneau décoratif */}
//             <div className="absolute bottom-8 w-[420px] h-[420px] border-2 border-dashed border-emerald-300/60 rounded-full" />

//             {/* Image agent — détourée, posée sur le bas */}
//             <img
//               src="/images/hero-agent.png"
//               alt="Agent PARISCAM prêt à expédier votre colis"
//               className="relative z-10 w-[420px] object-contain drop-shadow-2xl"
//             />

//             {/* Carte flottante : suivi colis */}
//             <div className="absolute z-20 top-16 -left-2 bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-3">
//               <span className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
//                 <Package size={18} className="text-white" />
//               </span>
//               <div>
//                 <p className="text-sm font-bold text-slate-900">Colis #PC-2481</p>
//                 <p className="text-xs text-emerald-600 font-medium">En transit — Douala</p>
//               </div>
//             </div>

//             {/* Carte flottante : sécurité */}
//             <div className="absolute z-20 top-1/2 -right-2 bg-slate-900 rounded-2xl shadow-xl p-4 flex items-center gap-3">
//               <span className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
//                 <ShieldCheck size={18} className="text-emerald-400" />
//               </span>
//               <div>
//                 <p className="text-sm font-bold text-white">100% sécurisé</p>
//                 <p className="text-xs text-slate-400">Colis assurés</p>
//               </div>
//             </div>

//             {/* Carte flottante : trajet */}
//             <div className="absolute z-20 bottom-10 left-0 bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-slate-100 px-5 py-3.5 flex items-center gap-3">
//               <div className="flex items-center gap-2">
//                 <MapPin size={15} className="text-slate-400" />
//                 <span className="text-sm font-bold text-slate-900">PAR</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
//                 <div className="w-8 border-t-2 border-dashed border-emerald-400" />
//                 <Plane size={14} className="text-emerald-600 -rotate-45" />
//                 <div className="w-8 border-t-2 border-dashed border-emerald-400" />
//                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-sm font-bold text-slate-900">DLA</span>
//                 <MapPin size={15} className="text-emerald-600" />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Indicateur scroll */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
//         <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
//           <div className="w-1 h-2 rounded-full bg-emerald-500 animate-bounce" />
//         </div>
//       </div>
//     </section>
//   );
// }












































































import {
  Plane,
  ArrowRight,
  ShieldCheck,
  Package,
  MapPin,
  Clock3,
  Globe2,
} from "lucide-react";

import Button from "../common/Button";

const cargoImage =
  "https://static.wixstatic.com/media/6b4160_dc28c141a7cb45c6b62bddbf8f4d8ae5~mv2.png/v1/fill/w_980%2Ch_653%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Airfreight.png";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[90vh] overflow-hidden bg-[#049b82] text-white">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hero-plane.jpg"
          alt=""
          className="h-full w-full object-cover object-center opacity-30"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071B36] via-[#071B36]/95 to-[#071B36]/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071B36] via-transparent to-[#071B36]/40" />

      {/* DECORATIVE LIGHT */}
      <div className="absolute -top-40 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[130px]" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="container-pariscam relative mx-auto flex min-h-[90vh] items-center py-24 md:py-28">

        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* LEFT: CONTENT */}
          <div className="relative z-20 max-w-2xl">

            {/* BADGE */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2.5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-semibold tracking-wide text-emerald-300 sm:text-sm">
                EUROPE ↔ CAMEROUN
              </span>
            </div>

            {/* TITLE */}
            <h1 className="mb-7 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-[68px]">
              Vos colis,
              <br />
              <span className="text-white">plus proches de</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                ceux que vous aimez.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mb-9 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              De l'Europe au Cameroun et du Cameroun vers l'Europe,
              PARISCAM facilite vos expéditions avec un accompagnement
              professionnel, un service fiable et une attention
              particulière à chacun de vos colis.
            </p>

            {/* CTA */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">

              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="group justify-center bg-emerald-600 text-white shadow-xl shadow-emerald-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:shadow-emerald-500/20"
              >
                Demander un devis
                <ArrowRight
                  size={19}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>

              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="justify-center border-white/25 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-400 hover:bg-white/10 hover:text-emerald-300"
              >
                Découvrir nos services
              </Button>

            </div>

            {/* TRUST INDICATORS */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/10 pt-7">

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                  <ShieldCheck size={21} className="text-emerald-400" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">
                    Expédition suivie
                  </p>
                  <p className="text-xs text-slate-400">
                    Un meilleur suivi de vos colis
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10">
                  <Globe2 size={21} className="text-yellow-400" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">
                    Europe & Cameroun
                  </p>
                  <p className="text-xs text-slate-400">
                    Dans les deux sens
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: MAIN IMAGE */}
          <div className="relative mx-auto hidden w-full max-w-[580px] lg:block">

            {/* IMAGE HALO */}
            <div className="absolute inset-10 rounded-full bg-emerald-500/20 blur-[100px]" />

            {/* DECORATIVE RING */}
            <div className="absolute inset-5 rounded-[48%] border border-white/10 rotate-6" />

            {/* MAIN PHOTO */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-slate-800 shadow-2xl shadow-black/40">

              <img
                src={cargoImage}
                alt="Chargement de marchandises dans un avion cargo"
                className="h-[480px] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071B36]/95 via-[#071B36]/10 to-transparent" />

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-0 left-0 right-0 p-7">

                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                  <Plane size={14} className="text-emerald-400" />
                  <span className="text-xs font-semibold text-white">
                    FRET AÉRIEN INTERNATIONAL
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white">
                  Du départ à la destination.
                </h2>

                <p className="mt-2 text-sm text-slate-300">
                  Votre partenaire pour rapprocher les distances.
                </p>

              </div>
            </div>

            {/* FLOATING CARD: PACKAGE */}
            <div className="absolute -left-10 top-16 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#102A48]/95 p-4 shadow-2xl backdrop-blur-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500">
                <Package size={23} className="text-white" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Vos colis voyagent
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Europe – Cameroun
                </p>
              </div>
            </div>

            {/* FLOATING CARD: ROUTE */}
            <div className="absolute -right-7 bottom-28 flex items-center gap-3 rounded-2xl border border-white/10 bg-white p-4 shadow-2xl">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <MapPin size={20} className="text-[#071B36]" />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500">
                  VOTRE DESTINATION
                </p>
                <p className="text-sm font-extrabold text-[#071B36]">
                  Paris ↔ Douala
                </p>
              </div>

            </div>

            {/* YELLOW ACCENT */}
            <div className="absolute -bottom-4 left-14 h-2 w-24 rounded-full bg-yellow-400" />

          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
          Découvrir
        </span>
        <div className="flex h-9 w-5 justify-center rounded-full border border-white/30 pt-2">
          <span className="h-2 w-1 animate-bounce rounded-full bg-emerald-400" />
        </div>
      </div>

    </section>
  );
}










