"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const FAQS = [
  { q: "Quels sont les délais de livraison ?", a: "Les délais varient selon le type de service. Contactez-nous pour connaître les délais exacts pour votre envoi." },
  { q: "Quels types de colis acceptez-vous ?", a: "Nous transportons la plupart des colis : vêtements, produits alimentaires non périssables, pièces auto, marchandises. Certains produits sont interdits." },
  { q: "Comment obtenir un devis ?", a: "Vous pouvez nous contacter par WhatsApp, téléphone, ou remplir le formulaire de devis sur notre page Contact. Réponse sous 24h." },
  { q: "Puis-je suivre mon colis ?", a: "Nous communiquons régulièrement sur l'état de votre envoi. Contactez notre équipe pour plus d'informations." },
  { q: "Où se trouvent vos agences ?", a: "Nous avons 4 agences : Paris (France), Yaoundé Emombo, Yaoundé Melen et Douala (Cameroun)." },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="py-20 bg-pariscam-gray">
      <div className="container-pariscam">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions fréquentes"
          description="Retrouvez les réponses aux questions les plus courantes."
        />
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-pariscam-gray/50 transition-colors"
              >
                <span className="font-semibold text-pariscam-text pr-4">{faq.q}</span>
                <span className="shrink-0 w-8 h-8 bg-pariscam-blue/10 rounded-full flex items-center justify-center text-pariscam-blue">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-pariscam-muted leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
