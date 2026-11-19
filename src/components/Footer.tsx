import { Link } from "react-router-dom";
import { Instagram, Facebook, ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "./Logo";
import { site, fullAddress } from "../data/site";

const explore = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Our Story", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso-deep text-cream/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-lux relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1.1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-xs text-[0.9rem] font-light leading-relaxed text-cream/55">
              A specialty coffee house in Les Berges du Lac. Slow mornings, careful
              extractions and a table that is always yours.
            </p>
            <p className="mt-7 font-display text-xl italic text-gold-soft">
              {site.tagline}
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PRIMA CAFÉ on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <Instagram size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PRIMA CAFÉ on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <Facebook size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <span className="ml-2 text-[0.7rem] tracking-[0.18em] text-cream/40">
                {site.instagramHandle}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-gold">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="lux-link text-[0.86rem] font-light text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-gold">
              Visit
            </h3>
            <ul className="mt-5 space-y-4 text-[0.86rem] font-light text-cream/60">
              <li className="flex gap-3">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold/70" aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.district}, {site.address.city}
                  <br />
                  {site.address.country}
                </span>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 transition-colors hover:text-cream">
                  <Phone size={15} strokeWidth={1.5} className="shrink-0 text-gold/70" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-cream"
                >
                  <Mail size={15} strokeWidth={1.5} className="shrink-0 text-gold/70" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-soft"
            >
              Get directions
              <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>

          <div>
            <h3 className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-gold">
              Opening hours
            </h3>
            <ul className="mt-5 space-y-4 text-[0.82rem] font-light">
              {site.hours.map((entry) => (
                <li key={entry.days}>
                  <span className="block text-cream/45">{entry.days}</span>
                  <span className="mt-0.5 flex items-center gap-2 text-cream/80">
                    <Clock size={12} strokeWidth={1.5} className="text-gold/60" aria-hidden="true" />
                    {entry.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.7rem] leading-relaxed text-cream/35">
              Kitchen closes 45 minutes before we do. Last filter brew of the day
              is poured at 20:30.
            </p>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-cream/15 to-transparent" />

        <div className="mt-7 flex flex-col items-start justify-between gap-4 text-[0.7rem] text-cream/35 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} PRIMA CAFÉ · {fullAddress}</p>
          <p className="tracking-[0.16em] uppercase">Crafted for slow mornings · Tunis</p>
        </div>
      </div>
    </footer>
  );
}
