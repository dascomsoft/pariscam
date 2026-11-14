import { API_URL } from "./constants";

// ============================================================
// WRAPPER API — Toutes les requêtes vers le backend passent ici.
// En cas d'erreur réseau, on renvoie un objet d'erreur clair.
// ============================================================

async function fetchAPI(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    credentials: "include", // envoie les cookies (JWT admin)
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.message || "Erreur serveur", data: null };
    }

    return { success: true, error: null, data };
  } catch (error) {
    return { success: false, error: "Impossible de contacter le serveur", data: null };
  }
}

// --- Endpoints publics ---
export const api = {
  // Services
  getServices: () => fetchAPI("/services"),

  // Tarifs
  getTariffs: () => fetchAPI("/tariffs"),

  // Devis
  createQuote: (data) =>
    fetchAPI("/quotes", { method: "POST", body: JSON.stringify(data) }),

  // --- Endpoints admin (nécessitent d'être connecté) ---
  auth: {
    login: (email, password) =>
      fetchAPI("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }),
    logout: () => fetchAPI("/auth/logout", { method: "POST" }),
    me: () => fetchAPI("/auth/me"),
  },

  admin: {
    getQuotes: () => fetchAPI("/quotes"),
    updateQuoteStatus: (id, status) =>
      fetchAPI(`/quotes/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      }),
    getDashboard: () => fetchAPI("/dashboard"),
  },
};