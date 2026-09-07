import { cn } from "@/lib/utils";

export default function SectionHeading({
  kicker,
  title,
  accent,
  lede,
  align = "left",
  tone = "dark",
  className,
  id,
}: {
  kicker?: string;
  title: string;
  accent?: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  id?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker && (
        <span className={cn("kicker", align === "center" && "justify-center", tone === "light" && "kicker-light")}>
          <span className="rule" />
          {kicker}
          {align === "center" && <span className="rule" />}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          "display mt-4",
          tone === "light" ? "display-light" : "text-brand-green950"
        )}
      >
        {title}
        {accent ? (
          <span className={cn("block font-serif italic", tone === "light" ? "text-brand-goldLight" : "text-brand-goldDeep")}>
            {accent}
          </span>
        ) : null}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-5 font-sans leading-relaxed",
            align === "center" && "mx-auto",
            tone === "light" ? "text-brand-ivory/75" : "text-brand-charcoal/75"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
