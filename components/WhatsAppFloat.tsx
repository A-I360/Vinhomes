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
      title="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center overflow-hidden rounded-full bg-[#1fa855]/90 text-white shadow-soft backdrop-blur-sm transition-all duration-500 ease-luxe hover:w-44 hover:bg-[#1fa855] hover:shadow-lift"
    >
      <span className="flex items-center pl-[0.9rem]">
        <MessageCircle className="h-5 w-5 shrink-0" />
        <span className="ml-2.5 whitespace-nowrap font-sans text-[0.68rem] uppercase tracking-[0.16em] opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
          Chat with us
        </span>
      </span>
    </a>
  );
}
