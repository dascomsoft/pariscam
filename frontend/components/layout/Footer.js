import Link from "next/link";
import { Mail, MapPin, Phone, Plane } from "lucide-react";
import { COMPANY, AGENCIES } from "@/lib/constants";

const FOOTER_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-pariscam-blueNight text-gray-300">
      <div className="container-pariscam py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-pariscam-yellow text-pariscam-blueNight p-2 rounded-lg"><Plane size={24} /></div>
              <span className="font-bold text-xl text-white">PARISCAM</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">{COMPANY.tagline}</p>
            <p className="text-sm leading-relaxed text-gray-400 italic">{COMPANY.signature}</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm hover:text-pariscam-yellow transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 shrink-0" /><a href={`mailto:${COMPANY.email}`} className="hover:text-pariscam-yellow transition-colors break-all">{COMPANY.email}</a></li>
              <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 shrink-0" /><a href={`tel:+${COMPANY.whatsapp}`} className="hover:text-pariscam-yellow transition-colors">+{COMPANY.whatsapp}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Nos agences</h3>
            <ul className="space-y-3 text-sm">
              {AGENCIES.slice(0, 3).map((agency) => (
                <li key={agency.id} className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <div><span className="text-white font-medium">{agency.city}</span><br /><span className="text-xs text-gray-400">{agency.address}</span></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {COMPANY.fullName}. Tous droits réservés.</p>
          <p>Site web — <span className="text-gray-400">{COMPANY.website}</span></p>
        </div>
      </div>
    </footer>
  );
}
