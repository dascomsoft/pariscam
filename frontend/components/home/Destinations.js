import { Plane, ArrowRight } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export default function Destinations() {
  return (
    <section className="py-20 bg-pariscam-gray">
      <div className="container-pariscam">
        <SectionTitle
          eyebrow="Nos destinations"
          title="Europe ↔ Cameroun"
          description="Nous assurons le transport de vos colis dans les deux sens, de Paris vers le Cameroun et inversement."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pariscam-blue rounded-xl flex items-center justify-center">
                <Plane size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-pariscam-text">Paris → Cameroun</h3>
            </div>
            <p className="text-pariscam-muted text-sm leading-relaxed mb-6">
              Envoyez vos colis, achats en ligne et marchandises depuis la France vers le Cameroun.
            </p>
            <Button href="/contact" variant="outline" size="sm" className="w-full">
              Demander un devis <ArrowRight size={16} />
            </Button>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pariscam-green rounded-xl flex items-center justify-center">
                <Plane size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-pariscam-text">Cameroun → Paris</h3>
            </div>
            <p className="text-pariscam-muted text-sm leading-relaxed mb-6">
              Expédiez vos produits et marchandises depuis le Cameroun vers la France.
            </p>
            <Button href="/contact" variant="outline" size="sm" className="w-full">
              Demander un devis <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
