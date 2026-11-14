
"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  MessageCircle,
  ArrowUpRight,
  HelpCircle,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import Link from "next/link";

const FAQS = [
  {
    q: "Quels sont les délais de livraison ?",
    a: "Les délais varient selon le type de service et la destination. Contactez notre équipe pour obtenir une estimation adaptée à votre expédition.",
    icon: Clock3,
  },
  {
    q: "Quels types de colis acceptez-vous ?",
    a: "Nous transportons différents types de colis et marchandises : vêtements, produits alimentaires autorisés, pièces automobiles et autres articles. Certains produits sont soumis à des restrictions ou interdits. Contactez-nous avant votre envoi pour vérifier leur admissibilité.",
    icon: ShieldCheck,
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Vous pouvez demander un devis en nous contactant par WhatsApp ou par téléphone, ou en remplissant le formulaire disponible sur notre page Contact. Notre équipe vous renseignera sur les modalités de votre expédition.",
    icon: MessageCircle,
  },
  {
    q: "Puis-je suivre mon colis ?",
    a: "Notre équipe vous communique des informations sur l'état de votre expédition. Contactez-nous pour obtenir des nouvelles de votre colis.",
    icon: HelpCircle,
  },
  {
    q: "Où se trouvent vos agences ?",
    a: "PARISCAM dispose de quatre agences : Paris en France, Yaoundé Emombo, Yaoundé Melen et Douala au Cameroun. Contactez-nous pour obtenir les coordonnées et les horaires de l'agence souhaitée.",
    icon: HelpCircle,
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#F4F7FA] py-20 md:py-28">
      {/* Décorations */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-emerald-100/60 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100/50 blur-[100px]" />

      <div className="container-pariscam relative z-10">
        {/* En-tête */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-[2px] w-9 bg-emerald-500" />
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700">
              Centre d'aide
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#071B36] sm:text-4xl lg:text-5xl">
            Des réponses claires
            <span className="text-emerald-600"> à vos questions.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            Vous souhaitez expédier un colis entre l'Europe et le Cameroun ?
            Retrouvez ici les informations essentielles pour préparer votre envoi.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">

          {/* COLONNE GAUCHE */}
          <aside className="relative overflow-hidden rounded-[2rem] bg-[#071B36] p-8 md:p-10">
            {/* Décoration */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border-[30px] border-white/[0.04]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-emerald-500/10 blur-[70px]" />

            <div className="relative z-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                <HelpCircle size={30} strokeWidth={1.7} />
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Besoin d'assistance ?
              </p>

              <h3 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
                Nous sommes là pour vous accompagner.
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                Vous n'avez pas trouvé la réponse à votre question ?
                Notre équipe est disponible pour vous renseigner sur vos
                expéditions et nos différents services.
              </p>

              <div className="my-8 h-px bg-white/10" />

              {/* Points de contact */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <MessageCircle size={18} className="text-emerald-400" />
                  Échangez directement avec notre équipe
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <ShieldCheck size={18} className="text-emerald-400" />
                  Obtenez des informations sur votre envoi
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                Contacter PARISCAM
                <ArrowUpRight size={19} />
              </Link>

              <p className="mt-5 text-center text-xs text-slate-400">
                Votre partenaire entre l'Europe et le Cameroun.
              </p>
            </div>

            {/* Accent jaune */}
            <div className="absolute bottom-0 left-0 h-1 w-20 bg-[#F4C542]" />
          </aside>

          {/* COLONNE DROITE : ACCORDÉON */}
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              const Icon = faq.icon;

              return (
                <article
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-emerald-200 bg-white shadow-[0_12px_35px_rgba(7,27,54,0.07)]"
                      : "border-slate-200/80 bg-white/80 hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  >
                    {/* Numéro */}
                    <span
                      className={`hidden text-xs font-extrabold tracking-widest sm:block ${
                        isOpen ? "text-emerald-600" : "text-slate-300"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    {/* Icône */}
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isOpen
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 text-sm font-extrabold leading-6 sm:text-base ${
                        isOpen ? "text-[#071B36]" : "text-slate-700"
                      }`}
                    >
                      {faq.q}
                    </span>

                    {/* Bouton d'ouverture */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-emerald-500 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={17} />
                      ) : (
                        <Plus size={17} />
                      )}
                    </span>
                  </button>

                  {/* Réponse */}
                  <div
                    id={`faq-answer-${index}`}
                    hidden={!isOpen}
                  >
                    <div className="border-t border-slate-100 px-5 pb-6 pt-4 sm:pl-[5.75rem] sm:pr-8">
                      <p className="text-sm leading-7 text-slate-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Indication complémentaire */}
            <div className="flex items-center gap-3 px-2 pt-5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <p className="text-xs leading-6 text-slate-500">
                Une question spécifique ? Notre équipe peut vous apporter
                des informations complémentaires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
