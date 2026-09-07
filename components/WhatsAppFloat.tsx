import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const message =
  "Hi Vinhomes Platinum Living, I'd like to speak with an advisor about your properties.";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Vinhomes Platinum Living on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#1fa855] py-3 pl-3.5 pr-4 text-white shadow-lift transition-all duration-500 hover:scale-[1.03] sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden font-sans text-xs uppercase tracking-[0.14em] sm:block">
        Chat with us
      </span>
    </a>
  );
}
