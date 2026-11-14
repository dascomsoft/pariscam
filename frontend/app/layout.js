
import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

// Police principale
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

// Métadonnées SEO
export const metadata = {
  metadataBase: new URL("https://www.pariscamfret.com"),

  title: {
    default: "PARISCAM | Fret aérien et transport de colis Paris - Cameroun",
    template: "%s | PARISCAM",
  },

  description:
    "Expédiez vos colis entre Paris et le Cameroun avec PARISCAM. Fret express, cargo, achats en ligne, livraison et import-export.",

  keywords: [
    "PARISCAM",
    "fret aérien",
    "transport de colis",
    "fret Paris Cameroun",
    "expédition de colis Cameroun",
    "fret express",
    "achat en ligne Cameroun",
    "import export Cameroun",
  ],

  authors: [{ name: "PARISCAM" }],
  creator: "PARISCAM",
  publisher: "PARISCAM",

  // Icône du site
  // Next.js détecte automatiquement app/favicon.ico

  // Partage Facebook, WhatsApp et autres plateformes
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "PARISCAM",
    title: "PARISCAM | Votre partenaire entre Paris et le Cameroun",
    description:
      "Votre passerelle entre vos proches et vous. Découvrez nos solutions de fret aérien, transport de colis et import-export.",
    images: [
      {
        url: "/images/logo-pariscam.jpg",
        alt: "PARISCAM - Fret aérien et E-Commerce",
      },
    ],
  },

  // Partage sur X (Twitter)
  twitter: {
    card: "summary_large_image",
    title: "PARISCAM | Fret aérien et transport de colis",
    description:
      "Expédiez vos colis entre Paris et le Cameroun avec PARISCAM.",
    images: ["/images/logo-pariscam.jpg"],
  },

  // Indexation par les moteurs de recherche
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={nunito.variable}>
      <body className="font-sans antialiased">
        <Navbar />

        <main className="pt-20">
          {children}
        </main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}
