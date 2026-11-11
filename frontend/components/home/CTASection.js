import { ArrowRight, MessageCircle } from "lucide-react";
import Button from "../common/Button";
import { COMPANY } from "@/lib/constants";

export default function CTASection() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Bonjour PARISCAM, je souhaite avoir des informations sur vos services.")}`;
  return (
    <section className="py-20 bg-gradient-to-br from-pariscam-blueNight to-pariscam-blue text-white">
      <div className="container-pariscam text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Prêt à expédier votre colis ?
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd&apos;hui pour obtenir un devis gratuit et personnalisé.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="primary" size="lg">
            Demander un devis <ArrowRight size={20} />
          </Button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle size={20} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
