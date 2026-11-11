import { Quote } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

// ⚠️ À remplacer par de vrais témoignages validés par PARISCAM
const TESTIMONIALS = [
  { name: "Client PARISCAM", city: "Paris", text: "Service fiable et rapide. Mes colis arrivent toujours à bon port.", rating: 5 },
  { name: "Client PARISCAM", city: "Douala", text: "Une équipe à l'écoute et professionnelle. Je recommande.", rating: 5 },
  { name: "Client PARISCAM", city: "Yaoundé", text: "Grâce à PARISCAM, je reçois mes achats en ligne sans souci.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container-pariscam">
        <SectionTitle
          eyebrow="Témoignages"
          title="Ils nous font confiance"
          description="Découvrez ce que nos clients disent de nos services."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-pariscam-gray rounded-2xl p-6 hover:shadow-card transition-shadow">
              <Quote size={32} className="text-pariscam-blue/20 mb-4" />
              <p className="text-pariscam-text leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pariscam-blue rounded-full flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-pariscam-text text-sm">{t.name}</p>
                  <p className="text-xs text-pariscam-muted">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
