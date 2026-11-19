import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  image: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  pageName: string;
};

export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
  description,
  pageName,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-espresso-deep">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full animate-soft-in object-cover"
        loading="eager"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-espresso-deep/92 via-espresso-deep/70 to-espresso-deep/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-espresso-deep/85 via-transparent to-espresso-deep/40"
      />

      <div className="container-lux relative pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.22em] text-cream/50">
            <li>
              <Link to="/" className="transition-colors hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={12} strokeWidth={1.5} />
            </li>
            <li aria-current="page" className="text-gold">
              {pageName}
            </li>
          </ol>
        </nav>

        <span className="eyebrow mt-8 text-gold-soft">{eyebrow}</span>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.02] text-cream">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-[0.95rem] font-light leading-relaxed text-cream/65 sm:text-[1rem]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
