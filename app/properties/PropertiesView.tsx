"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, RotateCcw, X, ArrowUpRight } from "lucide-react";
import { properties, developments } from "@/content/developments";
import PropertyCard from "@/components/PropertyCard";
import EnquiryForm from "@/components/EnquiryForm";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type SortKey = "featured" | "newest" | "low" | "high";

const devSlugs = developments.map((d) => d.slug);
const devNames = Object.fromEntries(developments.map((d) => [d.slug, d.name]));
const types = [...new Set(properties.map((p) => p.propertyType))];
const availOptions = ["AVAILABLE", "LIMITED AVAILABILITY", "SOLD OUT", "COMING SOON"];

export default function PropertiesView() {
  const params = useSearchParams();
  const devFromUrl = params.get("dev") ?? "";

  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [q, setQ] = useState("");
  const [dev, setDev] = useState(devSlugs.includes(devFromUrl) ? devFromUrl : "");
  const [type, setType] = useState("");
  const [beds, setBeds] = useState("");
  const [avail, setAvail] = useState("");
  const [cat, setCat] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    let list = properties.filter((p) => {
      const dName = devNames[p.development] ?? "";
      if (term) {
        const hay = `${p.name} ${p.location} ${dName} ${p.propertyType}`.toLowerCase();
        if (!hay.includes(term)) return false;
      }
      if (dev && p.development !== dev) return false;
      if (type && p.propertyType !== type) return false;
      if (beds && String(p.bedrooms ?? "") !== beds) return false;
      if (avail && p.status !== avail) return false;
      if (cat && p.category !== cat) return false;
      return true;
    });

    const parsePrice = (p: string | null | undefined) => {
      if (!p) return Infinity;
      const n = Number(p.replace(/[^0-9]/g, ""));
      return isNaN(n) ? Infinity : n;
    };

    list = [...list].sort((a, b) => {
      if (sort === "featured") return Number(b.isFeatured ?? false) - Number(a.isFeatured ?? false);
      if (sort === "newest") return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      if (sort === "low") return parsePrice(a.price) - parsePrice(b.price);
      if (sort === "high") return parsePrice(b.price) - parsePrice(a.price);
      return 0;
    });
    return list;
  }, [q, dev, type, beds, avail, cat, sort]);

  function reset() {
    setQ("");
    setDev("");
    setType("");
    setBeds("");
    setAvail("");
    setCat("");
    setSort("featured");
  }

  const hasActive =
    !!q || !!dev || !!type || !!beds || !!avail || !!cat || sort !== "featured";

  const selectCls =
    "w-full appearance-none border border-brand-line bg-white px-3 py-2.5 pr-8 font-sans text-sm text-brand-green950 outline-none transition-colors focus:border-brand-gold bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23a5813d%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.75rem_center]";

  return (
    <div className="bg-brand-paper pb-24">
      {/* Hero band */}
      <section className="relative flex min-h-[44vh] items-end overflow-hidden bg-brand-green950 pt-28">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/images/video-hero.jpg" alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green950 via-brand-green950/60 to-brand-green950/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-10 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 font-sans text-[0.7rem] uppercase tracking-[0.16em] text-brand-ivory/60">
              <li><Link href="/" className="hover:text-brand-goldLight">Home</Link></li>
              <li className="text-brand-gold">/</li>
              <li aria-current="page" className="text-brand-ivory">Properties</li>
            </ol>
          </nav>
          <h1 className="display display-light text-4xl sm:text-6xl">Discover your property</h1>
          {dev ? (
            <p className="mt-4 font-serif text-xl italic text-brand-goldLight">{devNames[dev]}</p>
          ) : null}
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Filter bar */}
        <div className="-mt-1 border-b border-brand-line bg-brand-paper py-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-xl flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-charcoal/40" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, location or development…"
                aria-label="Search properties"
                className="w-full border border-brand-line bg-white py-3 pl-11 pr-4 font-sans text-sm text-brand-green950 outline-none transition-colors focus:border-brand-gold placeholder:text-brand-charcoal/40"
              />
              {q && (
                <button onClick={() => setQ("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-charcoal/50 hover:text-brand-green900">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters((v) => !v)}
                className={cn(
                  "inline-flex items-center gap-2 border px-4 py-2.5 font-sans text-xs uppercase tracking-[0.14em] transition-colors",
                  showFilters || hasActive ? "border-brand-green900 bg-brand-green900 text-brand-ivory" : "border-brand-line text-brand-green900 hover:border-brand-gold"
                )}
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} className={selectCls} aria-label="Sort properties">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {showFilters && (
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-brand-line pt-5 md:grid-cols-3 lg:grid-cols-6">
              <FilterSelect label="Development" value={dev} onChange={setDev} options={developments.map((d) => [d.slug, d.name])} placeholder="All developments" />
              <FilterSelect label="Type" value={type} onChange={setType} options={types.map((t) => [t, t])} placeholder="All types" />
              <FilterSelect label="Bedrooms" value={beds} onChange={setBeds} options={[["2", "2+"],["3","3"],["4","4"]]} placeholder="Any" />
              <FilterSelect label="Availability" value={avail} onChange={setAvail} options={availOptions.map((a) => [a, a])} placeholder="Any status" />
              <FilterSelect label="Category" value={cat} onChange={setCat} options={[["Residential","Residential"],["Investment","Investment"]]} placeholder="Any" />
              <div className="flex items-end">
                {hasActive && (
                  <button onClick={reset} className="btn-ghost-link">
                    <RotateCcw className="h-3.5 w-3.5" /> Clear all
                  </button>
                )}
              </div>
            </div>
          )}

          <p className="mt-4 font-sans text-sm text-brand-charcoal/70">
            {q.trim()
              ? <span>Search results for “<strong className="text-brand-green900">{q}</strong>” — </span>
              : null}
            {results.length} {results.length === 1 ? "residence" : "residences"} found
          </p>
        </div>

        {/* Grid / states */}
        <div className="pt-10">
          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse bg-brand-ivory/70">
                  <div className="aspect-[3/2] bg-brand-line/50" />
                  <div className="space-y-3 p-7">
                    <div className="h-3 w-1/3 bg-brand-line/60" />
                    <div className="h-5 w-3/4 bg-brand-line/70" />
                    <div className="h-3 w-1/2 bg-brand-line/50" />
                    <div className="h-12 w-full bg-brand-line/40" />
                  </div>
                </div>
              ))}
            </div>
          ) : results.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {results.map((p, i) => (
                <PropertyCard key={p.slug} property={p} index={i} />
              ))}
            </div>
          ) : (
            <EmptyState onReset={reset} q={q} />
          )}
        </div>
      </div>

      {/* note + consultancy */}
      <div className="mx-auto mt-20 max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 border-t border-brand-line pt-12 lg:grid-cols-3">
          <div className="border border-brand-line bg-white p-7">
            <h3 className="font-serif text-xl text-brand-green900">Not what you&apos;re looking for?</h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-brand-charcoal/75">
              Our portfolio evolves regularly. Tell us your ideal property and we&apos;ll let you know
              the moment something suitable becomes available.
            </p>
            <Link href="/contact" className="link-arrow mt-5">
              Register your interest <ArrowUpRight className="arrow h-4 w-4" />
            </Link>
          </div>
          <div className="border border-brand-line bg-white p-7">
            <h3 className="font-serif text-xl text-brand-green900">Prefer to speak to someone?</h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-brand-charcoal/75">
              A senior advisor is available by phone, WhatsApp or email for a private conversation.
            </p>
            <a
              href={whatsappLink("Hi Vinhomes Platinum Living, I'd like to ask about available properties.")}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-5"
            >
              Chat on WhatsApp <ArrowUpRight className="arrow h-4 w-4" />
            </a>
          </div>
          <div className="border border-brand-line bg-brand-green950 p-7">
            <h3 className="font-serif text-xl text-brand-ivory">Pricing</h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-brand-ivory/75">
              Published prices are current for their listing at the time shown. Where a home is
              “on request,” figures are confirmed personally and in writing by an advisor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: [string, string][];
  placeholder: string;
}) {
  const selectCls =
    "w-full appearance-none border border-brand-line bg-white px-3 py-2.5 pr-8 font-sans text-sm text-brand-green950 outline-none transition-colors focus:border-brand-gold bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23a5813d%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.75rem_center]";
  return (
    <label className="block">
      <span className="mb-1 block font-sans text-[0.62rem] uppercase tracking-[0.18em] text-brand-charcoal/60">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className={selectCls}>
        <option value="">{placeholder}</option>
        {options.map(([v, l]) => (
          <option key={v} value={v}>{l}</option>
        ))}
      </select>
    </label>
  );
}

function EmptyState({ onReset, q }: { onReset: () => void; q: string }) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center border border-brand-line bg-white px-8 py-16 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-gold/40 text-2xl">⌕</span>
      <h3 className="mt-6 font-serif text-2xl text-brand-green900">No properties match your criteria</h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-brand-charcoal/75">
        {q.trim()
          ? <>Nothing matched “<strong>{q}</strong>”. Try a broader search, or let an advisor find the right home for you.</>
          : "Refine your filters or clear them to see all available residences."}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button onClick={onReset} className="btn-dark px-6 py-3 text-[0.68rem]">Clear filters</button>
        <a
          href={whatsappLink("Hi Vinhomes Platinum Living, I need help finding a suitable property.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline px-6 py-3 text-[0.68rem]"
        >
          Ask an advisor
        </a>
      </div>
      <div className="mt-10 w-full border-t border-brand-line pt-8 text-left">
        <h4 className="font-serif text-lg text-brand-green900">Register your interest</h4>
        <div className="mt-4">
          <EnquiryForm compact />
        </div>
      </div>
    </div>
  );
}
