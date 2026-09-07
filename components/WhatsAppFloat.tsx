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
      className="group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#1fa855]/90 text-white shadow-soft backdrop-blur-sm transition-all duration-500 hover:bg-[#1fa855]"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
