import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP = "https://wa.me/2348133227930?text=Hi! I want to place an order 🛒";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] animate-float hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} color="#fff" />
    </a>
  );
}
