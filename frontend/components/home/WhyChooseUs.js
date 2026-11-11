import { ShieldCheck, Clock, Globe, MapPin } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const FEATURES = [
  { icon: ShieldCheck, title: "Confiance", description: "Un partenaire fiable avec des années d'expérience dans le fret aérien." },
  { icon: Clock, title: "Rapidité", description: "Des départs réguliers et des délais optimisés pour vos colis." },
  { icon: Globe, title: "Expérience internationale", description: "Une expertise reconnue entre l'Europe et le Cameroun." },
  { icon: MapPin, title: "Proximité", description: "4 agences au plus près de vous, au Cameroun et en France." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container-pariscam">
        <SectionTitle
          eyebrow="Pourquoi PARISCAM"
          title="Votre partenaire de confiance"
          description="Nous mettons notre expertise et notre réseau au service de vos expéditions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center p-6 rounded-2xl hover:bg-pariscam-gray transition-colors">
                <div className="w-16 h-16 bg-pariscam-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-pariscam-green" />
                </div>
                <h3 className="text-lg font-bold text-pariscam-text mb-2">{feature.title}</h3>
                <p className="text-sm text-pariscam-muted leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
