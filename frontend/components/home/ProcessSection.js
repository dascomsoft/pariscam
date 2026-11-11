import { Package, Phone, CheckCircle, Truck, Plane, PackageCheck } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const STEPS = [
  { icon: Package, title: "Préparez votre colis", description: "Préparez ou sélectionnez votre achat à expédier." },
  { icon: Phone, title: "Contactez-nous", description: "Appelez-nous ou rendez-vous en agence." },
  { icon: CheckCircle, title: "Confirmez", description: "Validez les informations et les conditions." },
  { icon: Truck, title: "Déposez votre colis", description: "Déposez-le ou faites-le prendre en charge." },
  { icon: Plane, title: "Acheminement", description: "Votre colis voyage en toute sécurité." },
  { icon: PackageCheck, title: "Récupération", description: "Récupérez votre colis selon les modalités." },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-pariscam">
        <SectionTitle
          eyebrow="Comment ça marche"
          title="Expédiez en 6 étapes simples"
          description="Un processus clair et transparent, de la préparation à la réception."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative bg-pariscam-gray rounded-2xl p-6 hover:shadow-card-hover transition-shadow">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-pariscam-blue text-white rounded-full flex items-center justify-center font-bold shadow-md">
                  {index + 1}
                </div>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 mt-2">
                  <Icon size={28} className="text-pariscam-blue" />
                </div>
                <h3 className="text-lg font-bold text-pariscam-text mb-2">{step.title}</h3>
                <p className="text-sm text-pariscam-muted leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
