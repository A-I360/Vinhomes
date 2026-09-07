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
      <p className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-brand-goldDeep">
        Subscribe to Vinhomes Insights
      </p>
      <h3 className="mt-3 font-serif text-xl text-brand-green900">
        Development news, market notes &amp; exclusive previews
      </h3>

      {state === "sent" ? (
        <p className="mt-4 font-sans text-sm text-brand-green700">
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
            className="w-full border border-brand-line bg-brand-paper px-4 py-3.5 font-sans text-sm text-brand-green950 outline-none transition-colors focus:border-brand-gold"
          />
          <button
            type="submit"
            className="shrink-0 border border-brand-green900 bg-brand-green900 px-6 text-[0.7rem] uppercase tracking-[0.18em] text-brand-ivory transition-colors hover:bg-brand-gold hover:text-brand-green950"
          >
            Join
          </button>
        </form>
      )}
      {state === "error" && (
        <p className="mt-2 font-sans text-xs text-red-700">Please enter a valid email address.</p>
      )}
    </div>
  );
}
