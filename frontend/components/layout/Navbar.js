
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

import Button from "../common/Button";
import { COMPANY } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  // Gestion de l'apparence au défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fermer le menu après un changement de page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Bloquer le défilement lorsque le menu mobile est ouvert
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Déterminer si un lien est actif
  const isActiveLink = (href) => {
    return (
      pathname === href ||
      (href !== "/" && pathname.startsWith(`${href}/`))
    );
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/95 py-2 shadow-[0_8px_30px_rgba(7,27,54,0.08)] backdrop-blur-xl"
            : "border-b border-white/20 bg-white/95 py-3 backdrop-blur-md"
        }`}
      >
        <div className="container-pariscam flex items-center justify-between gap-5">

          {/* LOGO OFFICIEL */}
          <Link
            href="/"
            aria-label="PARISCAM - Accueil"
            className="relative z-50 flex shrink-0 items-center"
          >
            <Image
              src="/images/logo-pariscam.jpg"
              alt="PARISCAM - Fret Aérien et E-Commerce"
              width={190}
              height={65}
              priority
              className={`h-auto w-auto object-contain transition-all duration-300 ${
                scrolled ? "max-h-12 max-w-[155px]" : "max-h-14 max-w-[175px]"
              }`}
            />
          </Link>

          {/* NAVIGATION DESKTOP */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Navigation principale"
          >
            {NAV_LINKS.map((link) => {
              const isActive = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-5 py-3 text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#071B36]"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#159B62]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ACTIONS DESKTOP */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:+${COMPANY.whatsapp}`}
              className="group flex items-center gap-2 text-sm font-bold text-[#071B36] transition-colors hover:text-[#159B62]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors group-hover:bg-emerald-50 group-hover:text-[#159B62]">
                <Phone size={17} />
              </span>

              <span>Nous appeler</span>
            </a>

            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="rounded-full px-5 py-3"
            >
              Demander un devis
              <ArrowUpRight size={16} className="ml-2" />
            </Button>
          </div>

          {/* BOUTON MENU MOBILE */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className={`relative z-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 lg:hidden ${
              isOpen
                ? "bg-[#071B36] text-white"
                : "bg-slate-100 text-[#071B36] hover:bg-emerald-50 hover:text-[#159B62]"
            }`}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      {/* ================= MENU MOBILE ================= */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 bg-[#071B36] transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-28">

          {/* INTRODUCTION */}
          <div className="mb-9">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#159B62]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                Navigation
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-white">
              Bienvenue chez PARISCAM.
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-7 text-slate-400">
              Votre passerelle entre l'Europe et le Cameroun.
            </p>
          </div>

          {/* LIENS DE NAVIGATION */}
          <nav
            className="flex flex-col"
            aria-label="Navigation mobile"
          >
            {NAV_LINKS.map((link, index) => {
              const isActive = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  tabIndex={isOpen ? 0 : -1}
                  className={`group flex items-center justify-between border-b border-white/10 py-5 transition-colors ${
                    isActive
                      ? "text-[#42C58A]"
                      : "text-white hover:text-[#42C58A]"
                  }`}
                >
                  <span className="flex items-center gap-5">
                    <span className="text-xs font-bold text-slate-500">
                      0{index + 1}
                    </span>

                    <span className="text-lg font-bold">
                      {link.label}
                    </span>
                  </span>

                  <ChevronRight
                    size={19}
                    className="text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-[#42C58A]"
                  />
                </Link>
              );
            })}
          </nav>

          {/* ACTIONS MOBILE */}
          <div className="mt-auto pt-10">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#159B62] px-6 py-4 font-extrabold text-white transition-colors hover:bg-[#108653]"
            >
              Demander un devis
              <ArrowUpRight size={19} />
            </Link>

            <a
              href={`tel:+${COMPANY.whatsapp}`}
              tabIndex={isOpen ? 0 : -1}
              className="mt-4 flex items-center justify-center gap-3 rounded-xl border border-white/10 px-6 py-4 text-sm font-bold text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Phone size={17} className="text-[#42C58A]" />
              Nous appeler
            </a>

            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isOpen ? 0 : -1}
              className="mt-3 flex items-center justify-center gap-3 py-3 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <MessageCircle size={18} />
              Écrire sur WhatsApp
            </a>

            {/* SIGNATURE GRAPHIQUE */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#159B62]" />
              <span className="h-1 w-3 rounded-full bg-[#F4C542]" />
            </div>

            <p className="mt-4 text-center text-xs text-slate-500">
              PARISCAM — Fret Aérien & E-Commerce
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
