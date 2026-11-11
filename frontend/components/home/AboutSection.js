import { CheckCircle } from "lucide-react";
import Button from "../common/Button";

const ENGAGEMENTS = [
  "Un accompagnement personnalisé à chaque étape",
  "Une transparence totale sur les tarifs et délais",
  "Un service client réactif et à l'écoute",
  "La sécurité de vos colis avant tout",
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-pariscam-gray">
      <div className="container-pariscam">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-pariscam-green mb-3">À propos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-pariscam-text mb-6">
              PARISCAM, votre partenaire de confiance
            </h2>
            <p className="text-pariscam-muted leading-relaxed mb-4">
              PARISCAM est une entreprise de droit camerounais spécialisée dans le transport de colis entre l&apos;Europe, principalement Paris, et le Cameroun.
            </p>
            <p className="text-pariscam-muted leading-relaxed mb-6">
              Notre mission est simple : faciliter les échanges entre les familles, les commerçants et les entreprises des deux continents, en offrant un service fiable, rapide et sécurisé.
            </p>
            <Button href="/contact" variant="primary" size="md">
              En savoir plus
            </Button>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-bold text-pariscam-text mb-6">Nos engagements</h3>
            <ul className="space-y-4">
              {ENGAGEMENTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-pariscam-green shrink-0 mt-0.5" />
                  <span className="text-pariscam-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
