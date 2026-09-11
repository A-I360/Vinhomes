"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sent" | "error">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setState("error");
      return;
    }
    // TODO: wire to email/CRM/ESP provider (see integrations).
    setState("sent");
  }

  return (
    <div>
      <p className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-brand-goldLight">
        Subscribe to Vinhomes Insights
      </p>
      <h3 className="mt-3 font-serif text-xl leading-snug text-brand-ivory">
        Development news, market notes &amp; exclusive previews
      </h3>

      {state === "sent" ? (
        <p className="mt-4 font-sans text-sm leading-relaxed text-brand-goldLight">
          Thank you — you are subscribed. We will be in touch with considered updates only.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 flex max-w-md">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full border border-brand-ivory/25 bg-white/5 px-4 py-3.5 font-sans text-sm text-brand-ivory outline-none transition-all placeholder:text-brand-ivory/40 focus:border-brand-gold focus:bg-white/10"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full border border-brand-gold bg-brand-gold px-6 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-brand-green950 transition-colors duration-300 hover:border-brand-goldLight hover:bg-brand-goldLight"
          >
            Join
          </button>
        </form>
      )}
      {state === "error" && (
        <p className="mt-2 font-sans text-xs text-red-300">Please enter a valid email address.</p>
      )}
    </div>
  );
}
