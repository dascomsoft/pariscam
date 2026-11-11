"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { COUNTRIES, SERVICES_FALLBACK } from "@/lib/constants";
import { api } from "@/lib/api";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    from: "France", to: "Cameroun",
    service: "", nature: "", weight: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Validation minimale
    if (!form.name || !form.phone) {
      setStatus("error");
      setLoading(false);
      return;
    }

    const result = await api.createQuote(form);
    if (result.success) {
      setStatus("success");
      setForm({ name: "", phone: "", email: "", from: "France", to: "Cameroun", service: "", nature: "", weight: "", message: "" });
    } else {
      setStatus("error");
    }
    setLoading(false);
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-card">
        <div className="w-16 h-16 bg-pariscam-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-pariscam-green" />
        </div>
        <h3 className="text-2xl font-bold text-pariscam-text mb-2">Demande envoyée !</h3>
        <p className="text-pariscam-muted mb-6">Nous vous contacterons dans les plus brefs délais.</p>
        <button onClick={() => setStatus(null)} className="text-pariscam-blue font-semibold hover:underline">
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-card space-y-5">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">Veuillez vérifier les champs obligatoires (nom et téléphone).</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-pariscam-text mb-2">Nom complet *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition" placeholder="Votre nom" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-pariscam-text mb-2">Téléphone *</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition" placeholder="+33 6 00 00 00 00" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-pariscam-text mb-2">Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition" placeholder="votre@email.com" />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-pariscam-text mb-2">Pays de départ</label>
          <select name="from" value={form.from} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition">
            {COUNTRIES.map((c) => <option key={c.code} value={c.label}>{c.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-pariscam-text mb-2">Pays de destination</label>
          <select name="to" value={form.to} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition">
            {COUNTRIES.map((c) => <option key={c.code} value={c.label}>{c.label}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-pariscam-text mb-2">Type de service</label>
        <select name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition">
          <option value="">Sélectionner...</option>
          {SERVICES_FALLBACK.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-pariscam-text mb-2">Nature du colis</label>
          <input type="text" name="nature" value={form.nature} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition" placeholder="Vêtements, électronique..." />
        </div>
        <div>
          <label className="block text-sm font-semibold text-pariscam-text mb-2">Poids approximatif</label>
          <input type="text" name="weight" value={form.weight} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition" placeholder="5 kg" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-pariscam-text mb-2">Message complémentaire</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pariscam-blue focus:ring-2 focus:ring-pariscam-blue/20 outline-none transition resize-none" placeholder="Détails supplémentaires..."></textarea>
      </div>

      <button type="submit" disabled={loading} className="w-full bg-pariscam-blue hover:bg-pariscam-blueDark text-white font-semibold py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2">
        {loading ? "Envoi en cours..." : <><Send size={20} /> Envoyer ma demande</>}
      </button>
      <p className="text-xs text-pariscam-muted text-center">* Champs obligatoires. Vos données restent confidentielles.</p>
    </form>
  );
}
