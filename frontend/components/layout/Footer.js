
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  MessageCircle,
  Plane,
  ShieldCheck,
} from "lucide-react";

import { COMPANY, AGENCIES } from "@/lib/constants";

const FOOTER_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos services" },
  { href: "/tarifs", label: "Nos tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#071B36] text-slate-300">

      {/* Accent supérieur */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-600 via-[#F4C542] to-emerald-600" />

      {/* Décoration d'arrière-plan */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-400/5 blur-3xl" />

      <div className="container-pariscam relative">

        {/* Partie principale */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">

          {/* Identité PARISCAM */}
          <div className="lg:col-span-4">

            <Link
              href="/"
              className="mb-6 inline-flex items-center rounded-lg bg-white px-3 py-2"
              aria-label="PARISCAM - Accueil"
            >
              <Image
                src="/images/logo-pariscam.jpg"
                alt="Logo PARISCAM"
                width={190}
                height={65}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-300">
              {COMPANY.tagline}
            </p>

            <p className="mt-4 max-w-sm border-l-2 border-emerald-500 pl-4 text-sm italic leading-6 text-slate-400">
              {COMPANY.signature}
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span className="text-xs font-medium text-slate-300">
                Votre partenaire de confiance
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-white">
              Navigation
            </h3>

            <ul className="space-y-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-emerald-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-emerald-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-white">
              Contactez-nous
            </h3>

            <ul className="space-y-5">

              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Mail size={17} />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs text-slate-500">Adresse e-mail</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="break-all text-sm text-slate-300 transition-colors hover:text-emerald-400"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="mb-1 text-xs text-slate-500">Téléphone</p>
                  <a
                    href={`tel:+${COMPANY.whatsapp}`}
                    className="text-sm text-slate-300 transition-colors hover:text-emerald-400"
                  >
                    +{COMPANY.whatsapp}
                  </a>
                </div>
              </li>

              <li className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-500"
                >
                  <MessageCircle size={17} />
                  Écrivez-nous sur WhatsApp
                  <ArrowUpRight size={15} />
                </a>
              </li>

            </ul>
          </div>

          {/* Agences */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-white">
              Nos agences
            </h3>

            <ul className="space-y-5">
              {AGENCIES.slice(0, 3).map((agency) => (
                <li key={agency.id} className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-emerald-400">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {agency.city}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {agency.address}
                    </p>
                  </div>

                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              Voir nos coordonnées
              <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>

        {/* Séparateur */}
        <div className="border-t border-white/10" />

        {/* Barre inférieure */}
        <div className="flex flex-col items-center justify-between gap-4 py-7 text-center md:flex-row md:text-left">

          <p className="text-xs leading-5 text-slate-500">
            © {currentYear}{" "}
            <span className="font-semibold text-slate-300">
              {COMPANY.fullName}
            </span>
            . Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
            <Plane size={14} className="text-emerald-500" />
            <span>Votre passerelle entre l'Europe et le Cameroun</span>
          </div>

          <a
            href="#top"
            className="text-xs font-medium text-slate-400 transition-colors hover:text-emerald-400"
          >
            Retour en haut ↑
          </a>

        </div>

      </div>
    </footer>
  );
}
