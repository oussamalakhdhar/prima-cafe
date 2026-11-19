import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`.trim()}
    >
      {eyebrow && (
        <span className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</span>
      )}
      <h2
        className={`mt-5 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.08] ${
          isLight ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-[0.98rem] font-light leading-relaxed ${
            isLight ? "text-cream/70" : "text-cocoa/80"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
