"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, MessageCircle, ArrowRight } from "lucide-react";
import { COUNTRIES, SERVICES_FALLBACK, COMPANY } from "@/lib/constants";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  from: "France",
  to: "Cameroun",
  service: "",
  nature: "",
  weight: "",
  message: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status === "error") setStatus(null);
  };

  /** Construit le message WhatsApp à partir du formulaire */
  const buildWhatsAppMessage = () => {
    const lines = [
      "*Nouvelle demande de devis PARISCAM*",
      "",
      `👤 *Nom complet :* ${form.name}`,
      `📞 *Téléphone :* ${form.phone}`,
      form.email ? `📧 *Email :* ${form.email}` : null,
      "",
      `📍 *Départ :* ${form.from}`,
      `🎯 *Destination :* ${form.to}`,
      form.service ? `🚚 *Service :* ${form.service}` : null,
      form.nature ? `📦 *Nature du colis :* ${form.nature}` : null,
      form.weight ? `⚖️ *Poids approximatif :* ${form.weight}` : null,
      form.message ? `\n💬 *Message :*\n${form.message}` : null,
      "",
      "_Envoyé depuis le formulaire de devis sur pariscam.com_",
    ].filter(Boolean);

    return lines.join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    setErrorMsg("");

    // Validation minimale
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus("error");
      setErrorMsg("Veuillez renseigner votre nom et votre téléphone.");
      return;
    }

    setLoading(true);

    const message = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;

    // Ouvre WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setLoading(false);
    setStatus("success");
  };

  // ── ÉCRAN DE SUCCÈS ──
  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-card">
        <div className="w-16 h-16 bg-pariscam-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-pariscam-green" />
        </div>

        <h3 className="text-2xl font-bold text-pariscam-text mb-2">
          WhatsApp est ouvert !
        </h3>

        <p className="text-pariscam-muted mb-6 max-w-md mx-auto leading-7">
          Votre demande a été pré-remplie dans WhatsApp. Il ne vous reste plus
          qu'à <strong>envoyer le message</strong> pour finaliser votre demande.
        </p>

        <div className="flex flex-col gap-3 items-center">
          <button
            onClick={() => {
              setStatus(null);
              setForm(INITIAL_FORM);
            }}
            className="text-pariscam-blue font-semibold hover:underline"
          >
            Envoyer une autre demande
          </button>
        </div>
      </div>
    );
  }

  // ── FORMULAIRE ──
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-card space-y-5"
    >
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{errorMsg}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-pariscam-text mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-pariscam-text mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition"
            placeholder="+33 6 00 00 00 00"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-pariscam-text mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition"
          placeholder="votre@email.com"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-pariscam-text mb-2">
            Pays de départ
          </label>
          <select
            name="from"
            value={form.from}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.label}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-pariscam-text mb-2">
            Pays de destination
          </label>
          <select
            name="to"
            value={form.to}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.label}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-pariscam-text mb-2">
          Type de service
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition"
        >
          <option value="">Sélectionner...</option>
          {SERVICES_FALLBACK.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-pariscam-text mb-2">
            Nature du colis
          </label>
          <input
            type="text"
            name="nature"
            value={form.nature}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition"
            placeholder="Vêtements, électronique..."
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-pariscam-text mb-2">
            Poids approximatif
          </label>
          <input
            type="text"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition"
            placeholder="5 kg"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-pariscam-text mb-2">
          Message complémentaire
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition resize-none"
          placeholder="Détails supplémentaires..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-pariscam-green hover:bg-pariscam-greenDark text-white font-semibold py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
      >
        {loading ? (
          "Envoi en cours..."
        ) : (
          <>
            <MessageCircle size={20} />
            Envoyer ma demande sur WhatsApp
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <p className="text-xs text-pariscam-muted text-center">
        En cliquant, WhatsApp s'ouvrira avec votre demande pré-remplie. Vos
        données restent confidentielles.
      </p>
    </form>
  );
}