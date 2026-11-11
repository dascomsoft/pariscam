"use client";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Bonjour PARISCAM, je souhaite avoir des informations sur vos services d'expédition.");
  const url = `https://wa.me/${COMPANY.whatsapp}?text=${message}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label="Contacter PARISCAM sur WhatsApp" className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
      <MessageCircle size={28} />
    </a>
  );
}
