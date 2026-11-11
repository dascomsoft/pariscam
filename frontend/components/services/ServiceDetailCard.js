import { Plane, ShoppingBag, Package, Truck, PackageCheck, Globe, Warehouse, CheckCircle, ArrowRight } from "lucide-react";
import Button from "../common/Button";

const ICONS = { Plane, ShoppingBag, Package, Truck, PackageCheck, Globe, Warehouse };

export default function ServiceDetailCard({ service, index }) {
  const Icon = ICONS[service.icon] || Package;
  const isEven = index % 2 === 0;

  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
      <div className={isEven ? "md:order-1" : "md:order-2"}>
        <div className="relative bg-gradient-to-br from-pariscam-blue to-pariscam-blueDark rounded-2xl p-12 flex items-center justify-center min-h-[280px]">
          <div className="absolute top-6 right-6 w-20 h-20 bg-pariscam-yellow rounded-full opacity-20"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-pariscam-green rounded-full opacity-20"></div>
          <Icon size={96} className="text-white relative z-10" strokeWidth={1.5} />
        </div>
      </div>
      <div className={isEven ? "md:order-2" : "md:order-1"}>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 bg-pariscam-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-pariscam-text">{service.title}</h3>
        </div>
        <p className="text-pariscam-muted leading-relaxed mb-6">{service.description}</p>
        {service.advantages && service.advantages.length > 0 && (
          <ul className="space-y-2 mb-8">
            {service.advantages.map((adv) => (
              <li key={adv} className="flex items-start gap-2 text-pariscam-text">
                <CheckCircle size={20} className="text-pariscam-green shrink-0 mt-0.5" />
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        )}
        <Button href="/contact" variant="primary" size="md">
          Demander un devis <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
}
