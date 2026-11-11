"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Plane } from "lucide-react";
import Button from "../common/Button";
import { COMPANY } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-4"}`}>
      <div className="container-pariscam flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-pariscam-blue text-white p-2 rounded-lg group-hover:bg-pariscam-blueDark transition-colors"><Plane size={24} /></div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg text-pariscam-blueNight">PARISCAM</span>
            <span className="text-xs text-pariscam-muted hidden sm:block">Fret Aérien & E-Commerce</span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-pariscam-text hover:text-pariscam-blue transition-colors">{link.label}</Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:+${COMPANY.whatsapp}`} className="flex items-center gap-2 text-sm font-medium text-pariscam-text hover:text-pariscam-blue transition-colors"><Phone size={16} />Nous appeler</a>
          <Button href="/contact" variant="primary" size="sm">Demander un devis</Button>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-pariscam-text hover:text-pariscam-blue transition-colors" aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <nav className="container-pariscam py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="py-3 px-4 rounded-lg text-base font-medium text-pariscam-text hover:bg-pariscam-gray hover:text-pariscam-blue transition-colors">{link.label}</Link>
            ))}
            <Button href="/contact" variant="primary" size="md" className="mt-2">Demander un devis</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
