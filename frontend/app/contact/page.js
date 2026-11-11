import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import QuoteForm from "@/components/forms/QuoteForm";
import { COMPANY, AGENCIES } from "@/lib/constants";

export const metadata = {
  title: "Contact & demande de devis",
  description:
    "Contactez PARISCAM pour un devis gratuit. Retrouvez nos agences à Paris, Yaoundé et Douala, nos coordonnées et notre WhatsApp.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    "Bonjour PARISCAM, je souhaite un devis pour un envoi."
  )}`;

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        {/* Image de fond en ligne : femme au téléphone */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/8067775/pexels-photo-8067775.jpeg?auto=compress&cs=tinysrgb&w=2000')",
          }}
        />
        {/* Voile vert léger */}
        <div className="absolute inset-0 bg-pariscam-green/40 mix-blend-multiply" />
        {/* Dégradé noir pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="container-pariscam relative z-10 py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
            <MessageCircle size={16} className="text-pariscam-yellow" />
            <span className="text-sm font-medium">Réponse rapide garantie</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto drop-shadow">
            Une question, un devis, un projet d&apos;expédition ? Notre équipe
            vous répond rapidement.
          </p>
        </div>
      </section>

      {/* ============ FORMULAIRE + COORDONNÉES ============ */}
      <section className="py-20 bg-pariscam-gray">
        <div className="container-pariscam">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Formulaire */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-1 bg-pariscam-green rounded-full" />
                  <h2 className="text-2xl font-bold text-pariscam-text">
                    Demande de devis
                  </h2>
                </div>
                <QuoteForm />
              </div>
            </div>

            {/* Coordonnées */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="text-lg font-bold text-pariscam-text mb-5">
                  Coordonnées directes
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-pariscam-green/10 flex items-center justify-center shrink-0 group-hover:bg-pariscam-green group-hover:scale-110 transition-all duration-300">
                      <Phone
                        size={20}
                        className="text-pariscam-green group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-pariscam-muted uppercase tracking-wide">
                        Téléphone
                      </p>
                      <a
                        href={`tel:+${COMPANY.whatsapp}`}
                        className="text-pariscam-text font-semibold hover:text-pariscam-green transition-colors"
                      >
                        +{COMPANY.whatsapp}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-pariscam-blue/10 flex items-center justify-center shrink-0 group-hover:bg-pariscam-blue group-hover:scale-110 transition-all duration-300">
                      <Mail
                        size={20}
                        className="text-pariscam-blue group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-pariscam-muted uppercase tracking-wide">
                        Email
                      </p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-pariscam-text font-semibold hover:text-pariscam-blue transition-colors break-all"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </span>
                  <div>
                    <p className="font-bold">Discuter sur WhatsApp</p>
                    <p className="text-sm text-white/80">
                      Réponse rapide garantie
                    </p>
                  </div>
                </div>
              </a>

              {/* Horaires */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={20} className="text-pariscam-green" />
                  <h3 className="text-lg font-bold text-pariscam-text">
                    Horaires
                  </h3>
                </div>
                <p className="text-sm text-pariscam-muted">
                  Contactez-nous pour connaître nos horaires d&apos;ouverture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AGENCES ============ */}
      <section className="py-20 bg-white">
        <div className="container-pariscam">
          <div className="flex justify-center mb-4">
            <h2 className="bg-pariscam-green text-white font-bold text-xl md:text-2xl px-10 py-3 rounded-full shadow-lg shadow-pariscam-green/30">
              NOS AGENCES
            </h2>
          </div>
          <p className="text-center text-pariscam-muted max-w-xl mx-auto mb-12">
            4 agences au Cameroun et en France pour vous accueillir.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENCIES.map((agency) => (
              <div
                key={agency.id}
                className="group bg-pariscam-gray rounded-2xl p-6 border border-transparent hover:border-pariscam-green/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-pariscam-green shrink-0 group-hover:scale-125 transition-transform" />
                  <div>
                    <h3 className="font-bold text-pariscam-text uppercase tracking-wide">
                      {agency.city}
                    </h3>
                    <p className="text-xs text-pariscam-muted">
                      {agency.country}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-pariscam-text leading-relaxed mb-5 min-h-[60px]">
                  {agency.address}
                </p>

                <a
                  href={`tel:${agency.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 w-full bg-pariscam-blue text-white text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-pariscam-blueDark transition-colors"
                >
                  <Phone size={16} /> Appeler l&apos;agence
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}