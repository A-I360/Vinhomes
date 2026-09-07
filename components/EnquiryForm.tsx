"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, CheckCircle2, XCircle, ArrowUpRight, CalendarCheck } from "lucide-react";
import { properties } from "@/content/developments";
import { cn } from "@/lib/utils";

const methodOptions = ["Phone Call", "WhatsApp", "Email"];
const buttonModes = {
  request: { label: "Request Details" },
  viewing: { label: "Book a Viewing" },
} as const;

export default function EnquiryForm({
  defaultProperty = "",
  variant = "request",
  dual = false,
  compact = false,
}: {
  defaultProperty?: string;
  variant?: keyof typeof buttonModes;
  dual?: boolean;
  compact?: boolean;
}) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const intentRef = useRef<(typeof buttonModes)[keyof typeof buttonModes]["label"]>(buttonModes[variant].label);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    property: defaultProperty,
    method: "WhatsApp",
    message: "",
  });

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function choose(intent: (typeof buttonModes)[keyof typeof buttonModes]["label"]) {
    intentRef.current = intent;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          intent: intentRef.current,
        }),
      });
      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <SuccessState
        title="Thank you — request received."
        body="A Vinhomes advisor will contact you shortly through your preferred channel. For an immediate response, call or WhatsApp us on 0703 672 4517."
      />
    );
  }

  const inputCls =
    "w-full border border-brand-line bg-white px-4 py-3 font-sans text-sm text-brand-green950 outline-none transition-colors focus:border-brand-gold placeholder:text-brand-charcoal/40";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <Field label="Full Name" required>
          <input className={inputCls} required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" />
        </Field>
        <Field label="Phone Number" required>
          <input className={inputCls} required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+234 ..." />
        </Field>
      </div>
      <Field label="Email" required>
        <input className={inputCls} required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" />
      </Field>
      <Field label="Property of Interest">
        <select className={inputCls} value={form.property} onChange={(e) => update("property", e.target.value)}>
          <option value="">Select a development or residence</option>
          {properties.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
          <option value="General enquiry">General enquiry — not sure yet</option>
        </select>
      </Field>
      <Field label="Preferred Contact Method">
        <div className="flex flex-wrap gap-2">
          {methodOptions.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => update("method", m)}
              className={cn(
                "rounded-full border px-4 py-2 font-sans text-xs uppercase tracking-[0.12em] transition-colors",
                form.method === m
                  ? "border-brand-green900 bg-brand-green900 text-brand-ivory"
                  : "border-brand-line bg-white text-brand-charcoal/70 hover:border-brand-gold"
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </Field>
      <Field label="Message">
        <textarea rows={compact ? 3 : 4} className={cn(inputCls, "resize-none")} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us what you are looking for — timeline, budget, preferred location." />
      </Field>

      <div className="mt-1 grid gap-3">
        {dual ? (
          <>
            <button type="submit" onClick={() => choose(buttonModes.request.label)} disabled={state === "sending"} className="btn-gold w-full disabled:opacity-60">
              {state === "sending" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : (<>{buttonModes.request.label} <ArrowUpRight className="h-4 w-4" /></>)}
            </button>
            <button type="submit" onClick={() => choose(buttonModes.viewing.label)} disabled={state === "sending"} className="btn-dark w-full disabled:opacity-60">
              {state === "sending" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : (<><CalendarCheck className="h-4 w-4" /> {buttonModes.viewing.label}</>)}
            </button>
          </>
        ) : (
          <button type="submit" disabled={state === "sending"} className="btn-gold w-full disabled:opacity-60">
            {state === "sending" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              <>
                {buttonModes[variant].label} <ArrowUpRight className="h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>
      {state === "error" && (
        <p className="flex items-start gap-2 font-sans text-xs text-red-700">
          <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
          Something went wrong sending your enquiry. Please try again, or contact us on 0703 672 4517.
        </p>
      )}
      <p className="font-sans text-[0.7rem] text-brand-charcoal/50">
        By submitting, you agree to be contacted by a Vinhomes advisor. We treat your details with care.
      </p>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-sans text-[0.68rem] uppercase tracking-[0.18em] text-brand-charcoal/70">
        {label} {required && <span className="text-brand-goldDeep">*</span>}
      </span>
      {children}
    </label>
  );
}

export function SuccessState({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-none border border-brand-gold/40 bg-brand-paper p-8 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green900">
        <CheckCircle2 className="h-7 w-7 text-brand-goldLight" />
      </span>
      <h4 className="font-serif text-2xl text-brand-green900">{title}</h4>
      <p className="max-w-md font-sans text-sm leading-relaxed text-brand-charcoal/75">{body}</p>
    </div>
  );
}
