"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, ArrowUpRight, CheckCircle2, XCircle } from "lucide-react";
import { properties } from "@/content/developments";

const enquiryTypes = [
  "Buying a property",
  "FMBN Mortgage (up to ₦50M)",
  "Investment enquiry",
  "Book a viewing",
  "Request a brochure",
  "Land enquiry",
  "General question",
];

/** Map query params into initial form state. */
function getInitialType(search: string | null) {
  if (!search) return enquiryTypes[0];
  const s = search.toLowerCase();
  if (
    s.includes("mortgage") ||
    s.includes("fmbn") ||
    s.includes("mrief") ||
    s.includes("nhf")
  ) {
    return "FMBN Mortgage (up to ₦50M)";
  }
  return enquiryTypes[0];
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") ?? searchParams.get("type");
  const initialType = getInitialType(service);

  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    property: "",
    type: initialType,
    message:
      initialType === "FMBN Mortgage (up to ₦50M)"
        ? "Hi Vinhomes, I'd like to start my FMBN MRIEF mortgage application (up to ₦50M). Please guide me through the NHF registration, PMB pairing and document process."
        : "",
  });

  function up(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, intent: form.type, method: "Email" }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-4 border border-brand-gold/40 bg-brand-paper p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green900">
          <CheckCircle2 className="h-7 w-7 text-brand-goldLight" />
        </span>
        <h3 className="font-serif text-2xl text-brand-green900">Thank you — your message is on its way.</h3>
        <p className="max-w-md font-sans text-sm leading-relaxed text-brand-charcoal/75">
          A Vinhomes advisor will respond within one working day. For anything urgent, call or
          WhatsApp us on 0703 672 4517.
        </p>
      </div>
    );
  }

  const input =
    "w-full border border-brand-line bg-white px-4 py-3 font-sans text-sm text-brand-green950 outline-none transition-all focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 placeholder:text-brand-charcoal/40";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-sans text-[0.68rem] uppercase tracking-[0.18em] text-brand-charcoal/70">Name <span className="text-brand-goldDeep">*</span></span>
          <input required className={input} value={form.name} onChange={(e) => up("name", e.target.value)} placeholder="Your full name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-sans text-[0.68rem] uppercase tracking-[0.18em] text-brand-charcoal/70">Phone <span className="text-brand-goldDeep">*</span></span>
          <input required type="tel" className={input} value={form.phone} onChange={(e) => up("phone", e.target.value)} placeholder="+234 …" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block font-sans text-[0.68rem] uppercase tracking-[0.18em] text-brand-charcoal/70">Email <span className="text-brand-goldDeep">*</span></span>
        <input required type="email" className={input} value={form.email} onChange={(e) => up("email", e.target.value)} placeholder="you@email.com" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-sans text-[0.68rem] uppercase tracking-[0.18em] text-brand-charcoal/70">Property Interest</span>
          <select className={input} value={form.property} onChange={(e) => up("property", e.target.value)}>
            <option value="">Which property?</option>
            {properties.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
            <option value="General enquiry">General enquiry</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block font-sans text-[0.68rem] uppercase tracking-[0.18em] text-brand-charcoal/70">Enquiry Type</span>
          <select className={input} value={form.type} onChange={(e) => up("type", e.target.value)}>
            {enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block font-sans text-[0.68rem] uppercase tracking-[0.18em] text-brand-charcoal/70">Message</span>
        <textarea rows={5} className={`${input} resize-none`} value={form.message} onChange={(e) => up("message", e.target.value)} placeholder="Tell us how we can help…" />
      </label>
      <button type="submit" disabled={state === "sending"} className="btn-gold w-full disabled:opacity-60">
        {state === "sending" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : (<>Start a Conversation <ArrowUpRight className="h-4 w-4" /></>)}
      </button>
      {state === "error" && (
        <p className="flex items-start gap-2 font-sans text-xs text-red-700">
          <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
          We couldn't send your message. Please try again or contact us on 0703 672 4517.
        </p>
      )}
      <p className="font-sans text-[0.7rem] text-brand-charcoal/50">
        Your details are used solely to respond to your enquiry.
      </p>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="flex h-40 items-center justify-center font-sans text-sm text-brand-charcoal/60">
          Loading…
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
