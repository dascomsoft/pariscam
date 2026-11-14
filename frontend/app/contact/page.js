
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ArrowRight,
  Send,
  Headphones,
  ShieldCheck,
  Globe2,
} from "lucide-react";

import QuoteForm from "@/components/forms/QuoteForm";
import { COMPANY, AGENCIES } from "@/lib/constants";

export const metadata = {
  title: "Contact & demande de devis | PARISCAM",
  description:
    "Contactez PARISCAM pour votre demande de devis. Retrouvez nos coordonnées, nos agences à Paris, Yaoundé et Douala.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    "Bonjour PARISCAM, je souhaite obtenir un devis pour un envoi."
  )}`;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071B36]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/8067775/pexels-photo-8067775.jpeg?auto=compress&cs=tinysrgb&w=2000')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-[#071B36]/85" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071B36] via-[#071B36]/90 to-[#071B36]/45" />

        <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -top-20 -right-8 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute bottom-0 left-0 h-1 w-40 bg-[#159B62]" />

        <div className="container-pariscam relative py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#159B62] text-white">
                <MessageCircle size={17} />
              </span>
              <span className="text-sm font-semibold text-white">
                PARISCAM — Toujours à votre écoute
              </span>
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#F4C542]">
              Parlons de votre expédition
            </p>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Nous sommes là pour{" "}
              <span className="text-[#42C58A]">vous accompagner.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              Besoin d'un renseignement ou d'un devis ? Contactez notre équipe
              et préparons ensemble votre prochain envoi entre l'Europe et le
              Cameroun.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#demande-devis"
                className="inline-flex items-center gap-3 rounded-xl bg-[#159B62] px-6 py-4 font-bold text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-1 hover:bg-[#108653]"
              >
                Faire une demande
                <ArrowRight size={19} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/25 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <MessageCircle size={19} />
                WhatsApp
              </a>
            </div>

            <div className="mt-14 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="shrink-0 text-[#42C58A]" size={22} />
                <span className="text-sm font-medium text-slate-200">
                  Un accompagnement dédié
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Globe2 className="shrink-0 text-[#42C58A]" size={22} />
                <span className="text-sm font-medium text-slate-200">
                  Europe et Cameroun
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Headphones className="shrink-0 text-[#42C58A]" size={22} />
                <span className="text-sm font-medium text-slate-200">
                  À votre écoute
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULAIRE ET CONTACTS */}
      <section
        id="demande-devis"
        className="bg-[#F4F7FA] py-20 md:py-28"
      >
        <div className="container-pariscam">
          <div className="mb-12 max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#159B62]">
              <span className="h-1 w-8 rounded-full bg-[#159B62]" />
              Entrons en contact
            </span>

            <h2 className="text-3xl font-extrabold leading-tight text-[#071B36] md:text-4xl">
              Comment pouvons-nous{" "}
              <span className="text-[#159B62]">vous aider ?</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Remplissez le formulaire pour nous présenter votre besoin.
              Vous pouvez également nous contacter directement par téléphone
              ou sur WhatsApp.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-5">
            {/* FORMULAIRE */}
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
                <div className="relative overflow-hidden bg-[#071B36] px-7 py-7 md:px-10">
                  <div className="absolute -right-12 -top-20 h-48 w-48 rounded-full border border-white/10" />
                  <div className="absolute -right-5 -top-12 h-32 w-32 rounded-full border border-white/10" />

                  <div className="relative flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#159B62] text-white">
                      <Send size={22} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#42C58A]">
                        Votre projet
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-white md:text-2xl">
                        Demande de devis
                      </h3>
                    </div>
                  </div>

                  <p className="relative mt-4 text-sm leading-6 text-slate-300">
                    Décrivez votre besoin. Notre équipe pourra ainsi mieux
                    comprendre votre demande.
                  </p>
                </div>

                <div className="p-6 md:p-10">
                  <QuoteForm />
                </div>
              </div>
            </div>

            {/* INFORMATIONS DE CONTACT */}
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-3xl bg-[#071B36] p-7 text-white shadow-xl shadow-slate-900/10 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#42C58A]">
                  Contact direct
                </p>

                <h3 className="mt-3 text-2xl font-extrabold">
                  Parlons de votre envoi.
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Notre équipe est disponible pour vous renseigner sur nos
                  services et vos expéditions.
                </p>

                <div className="mt-8 space-y-6">
                  <a
                    href={`tel:+${COMPANY.whatsapp}`}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#42C58A] transition group-hover:bg-[#159B62] group-hover:text-white">
                      <Phone size={21} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-xs text-slate-400">
                        Téléphone
                      </span>
                      <span className="mt-1 block break-all font-bold text-white transition group-hover:text-[#42C58A]">
                        +{COMPANY.whatsapp}
                      </span>
                    </span>
                  </a>

                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#42C58A] transition group-hover:bg-[#159B62] group-hover:text-white">
                      <Mail size={21} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-xs text-slate-400">
                        Adresse email
                      </span>
                      <span className="mt-1 block break-all font-bold text-white transition group-hover:text-[#42C58A]">
                        {COMPANY.email}
                      </span>
                    </span>
                  </a>
                </div>

                <div className="mt-8 border-t border-white/10 pt-7">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#159B62] px-5 py-4 font-bold text-white transition hover:bg-[#108653]"
                  >
                    <MessageCircle size={21} />
                    Discuter sur WhatsApp
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* HORAIRES */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Clock size={22} />
                  </div>

                  <div>
                    <h3 className="font-extrabold text-[#071B36]">
                      Nos horaires
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Informations pratiques
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Contactez-nous pour connaître les horaires d'ouverture de
                  nos différentes agences.
                </p>
              </div>

              {/* MESSAGE */}
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 shrink-0 text-[#159B62]" size={21} />
                  <div>
                    <h3 className="font-bold text-[#071B36]">
                      Retrouvez-nous
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Nos agences sont présentes au Cameroun et en France
                      pour vous accompagner dans vos expéditions.
                    </p>
                    <a
                      href="#nos-agences"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#159B62] hover:underline"
                    >
                      Découvrir nos agences
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOS AGENCES */}
      <section id="nos-agences" className="bg-white py-20 md:py-28">
        <div className="container-pariscam">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#159B62]">
              <span className="h-1 w-8 rounded-full bg-[#159B62]" />
              Notre présence
              <span className="h-1 w-8 rounded-full bg-[#159B62]" />
            </span>

            <h2 className="text-3xl font-extrabold text-[#071B36] md:text-4xl">
              Nos agences
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Retrouvez nos différents points de contact et rapprochez-vous
              de l'agence la plus proche de vous.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AGENCIES.map((agency, index) => (
              <article
                key={agency.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F4F7FA] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#159B62]/40 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#159B62]/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071B36] text-white transition group-hover:bg-[#159B62]">
                      <MapPin size={22} />
                    </span>

                    <span className="text-3xl font-extrabold text-slate-200">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold uppercase tracking-wide text-[#071B36]">
                    {agency.city}
                  </h3>

                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#159B62]">
                    {agency.country}
                  </p>

                  <div className="my-5 h-px bg-slate-200" />

                  <p className="min-h-[80px] text-sm leading-7 text-slate-600">
                    {agency.address}
                  </p>

                  <a
                    href={`tel:${agency.phoneRaw}`}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#071B36] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#159B62]"
                  >
                    <Phone size={16} />
                    Appeler l'agence
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-[#071B36] py-16 md:py-20">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-20 h-56 w-56 rounded-full border border-white/10" />

        <div className="container-pariscam relative flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42C58A]">
              PARISCAM — Votre partenaire de confiance
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              Votre prochain envoi commence ici.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Contactez notre équipe pour discuter de votre projet
              d'expédition entre l'Europe et le Cameroun.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#159B62] px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#108653]"
          >
            <MessageCircle size={21} />
            Contacter PARISCAM
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
