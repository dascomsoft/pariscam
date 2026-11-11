// ============================================================
// CONSTANTES GLOBALES DU SITE PARISCAM
// Toutes les données statiques du site sont centralisées ici.
// Pour modifier une agence, un service ou le numéro WhatsApp,
// c'est CE fichier qu'il faut éditer.
// ============================================================

// --- Informations entreprise ---
export const COMPANY = {
  name: "PARISCAM",
  fullName: "PARISCAM Fret Aérien & E-Commerce",
  tagline: "Le lien de confiance entre le Cameroun et l'Europe.",
  signature: "Votre passerelle entre vos proches et vous.",
  promise: "Votre partenaire de confiance pour tous vos besoins d'expédition et d'import-export.",
  email: "pariscamfret@gmail.com",
  website: "www.pariscamfret.com",
  // ⚠️ À CONFIRMER PAR PARISCAM : numéro WhatsApp Business officiel
  whatsapp: "33642713750", // format international sans + ni espaces
};

// --- Les 4 agences (statiques — modifiables dans ce fichier uniquement) ---
export const AGENCIES = [
  {
    id: "paris",
    city: "Paris",
    country: "France",
    address: "26 Rue de la Prévoyance, 93440 Dugny",
    phone: "+33 6 42 71 37 50",
    phoneRaw: "33642713750",
    whatsapp: "33642713750",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=26+Rue+de+la+Prévoyance+93440+Dugny",
    hours: null, // ⚠️ À fournir par PARISCAM
  },
  {
    id: "yaounde-emombo",
    city: "Yaoundé — Emombo",
    country: "Cameroun",
    address: "Emombo 2e, immeuble Express Exchange, après CCA Bank",
    phone: "+237 696 21 76 89",
    phoneRaw: "237696217689",
    whatsapp: "237696217689",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Emombo+2+Yaoundé+Cameroun",
    hours: null,
  },
  {
    id: "yaounde-melen",
    city: "Yaoundé — Melen",
    country: "Cameroun",
    address: "Melen, immeuble Ntarikon, en face du CHU, Cooperative Union LTD, 1er étage",
    phone: "+237 696 21 76 89",
    phoneRaw: "237696217689",
    whatsapp: "237696217689",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Melen+Yaoundé+Cameroun",
    hours: null,
  },
  {
    id: "douala",
    city: "Douala",
    country: "Cameroun",
    address: "Face à l'immeuble Le Messager du Temps de la Fin, 1er étage, près du Carrefour Agip",
    phone: "+237 675 62 09 61",
    phoneRaw: "237675620961",
    whatsapp: "237675620961",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Carrefour+Agip+Douala+Cameroun",
    hours: null,
  },
];

// --- Les 7 services (fallback si l'API n'est pas disponible) ---
// Ces données sont aussi semées dans MongoDB via le backend.
export const SERVICES_FALLBACK = [
  {
    id: "fret-express",
    title: "Fret express",
    icon: "Plane",
    description: "Acheminement rapide de vos colis entre la France et le Cameroun.",
    advantages: ["Départs réguliers", "Suivi personnalisé", "Emballage sécurisé"],
  },
  {
    id: "achat-en-ligne",
    title: "Achat en ligne & livraison",
    icon: "ShoppingBag",
    description: "Nous achetons pour vous en Europe et livrons au Cameroun.",
    advantages: ["Achat sécurisé", "Livraison à domicile", "Consolidation de colis"],
  },
  {
    id: "transport-colis",
    title: "Transport de colis",
    icon: "Package",
    description: "Envoi de colis standards entre l'Europe et le Cameroun.",
    advantages: ["Tarifs compétitifs", "Colis jusqu'à 30 kg", "Assurance disponible"],
  },
  {
    id: "cargo-volumineux",
    title: "Cargo volumineux",
    icon: "Truck",
    description: "Pour vos envois volumineux ou en grande quantité.",
    advantages: ["Pas de limite de poids", "Solutions sur mesure", "Devis rapide"],
  },
  {
    id: "fret-alimentaire",
    title: "Fret alimentaire",
    icon: "PackageCheck",
    description: "Transport de produits alimentaires non périssables.",
    advantages: ["Colis alimentaires", "Respect des normes", "Emballage adapté"],
  },
  {
    id: "import-export",
    title: "Import-export",
    icon: "Globe",
    description: "Solutions d'approvisionnement entre l'Europe et le Cameroun.",
    advantages: ["Sourcing Europe", "Dédouanement", "Logistique complète"],
  },
  {
    id: "pieces-auto",
    title: "Pièces automobiles",
    icon: "Warehouse",
    description: "Approvisionnement et expédition de pièces automobiles.",
    advantages: ["Sourcing garages Europe", "Livraison Cameroun", "Devis personnalisé"],
  },
];

// --- Pays de départ / destination (pour le formulaire de devis) ---
export const COUNTRIES = [
  { code: "FR", label: "France" },
  { code: "BE", label: "Belgique" },
  { code: "DE", label: "Allemagne" },
  { code: "IT", label: "Italie" },
  { code: "ES", label: "Espagne" },
  { code: "CM", label: "Cameroun" },
  { code: "GA", label: "Gabon" },
  { code: "CG", label: "Congo" },
  { code: "TD", label: "Tchad" },
  { code: "CF", label: "République Centrafricaine" },
];

// --- Statuts des devis (utilisés dans l'admin) ---
export const QUOTE_STATUSES = [
  { value: "new", label: "Nouveau", color: "blue" },
  { value: "processing", label: "En cours", color: "yellow" },
  { value: "sent", label: "Devis envoyé", color: "green" },
  { value: "converted", label: "Converti", color: "green" },
  { value: "cancelled", label: "Annulé", color: "gray" },
];

// --- URL de l'API backend ---
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";