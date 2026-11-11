import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  title: { default: "PARISCAM — Fret Aérien & E-Commerce Paris ↔ Cameroun", template: "%s | PARISCAM" },
  description: "PARISCAM, votre partenaire de confiance pour le transport de colis entre Paris et le Cameroun. Fret express, achat en ligne, import-export.",
  keywords: ["fret aérien", "Paris Cameroun", "transport colis", "import export Cameroun", "achat en ligne Cameroun", "PARISCAM"],
  authors: [{ name: "PARISCAM" }],
  openGraph: {
    title: "PARISCAM — Fret Aérien & E-Commerce",
    description: "Votre passerelle entre vos proches et vous. Transport de colis entre Paris et le Cameroun.",
    url: "https://www.pariscamfret.com",
    siteName: "PARISCAM",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
