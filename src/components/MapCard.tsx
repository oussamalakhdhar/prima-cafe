import { MapPin, ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

type MapCardProps = {
  className?: string;
};

/**
 * Stylised locator card standing in for an embedded Google Map.
 * The link opens the real location in Google Maps.
 */
export default function MapCard({ className = "" }: MapCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-espresso/10 bg-[#ece1cf] ${className}`.trim()}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 800 520"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <rect width="800" height="520" fill="#ece1cf" />
        <g stroke="#dccdb5" strokeWidth="1.2">
          <path d="M-40 120H840M-40 250H840M-40 380H840M120 -40V560M310 -40V560M520 -40V560M680 -40V560" />
        </g>
        <g stroke="#cbb797" strokeWidth="2.4">
          <path d="M-40 250H840M310 -40V560" />
          <path d="M-40 120H120M520 -40V120M120 380H310M520 380H840" strokeWidth="1.6" />
        </g>
        <path d="M0 470C160 440 240 480 400 460s280-40 400-20" fill="none" stroke="#c2ab88" strokeWidth="6" opacity="0.55" />
        <g fill="#e4d7c2">
          <rect x="140" y="140" width="150" height="90" rx="4" />
          <rect x="340" y="140" width="160" height="90" rx="4" />
          <rect x="140" y="270" width="150" height="90" rx="4" />
          <rect x="340" y="270" width="160" height="90" rx="4" />
          <rect x="545" y="140" width="115" height="220" rx="4" />
        </g>
        <circle cx="400" cy="250" r="66" fill="#b08d57" opacity="0.14" />
        <circle cx="400" cy="250" r="40" fill="#b08d57" opacity="0.18" />
      </svg>

      <div className="relative flex h-full min-h-[22rem] flex-col justify-between p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-cream/90 px-4 py-2 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-cocoa backdrop-blur">
            Find us
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.2em] text-cocoa/50">
            Les Berges du Lac
          </span>
        </div>

        <div className="self-center">
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-gold-soft shadow-[0_18px_30px_-14px_rgba(26,17,11,0.8)]">
            <MapPin size={22} strokeWidth={1.5} aria-hidden="true" />
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full border border-espresso/30 [animation-duration:3.5s]"
            />
          </span>
        </div>

        <div className="rounded-2xl border border-espresso/8 bg-cream/95 p-5 backdrop-blur">
          <p className="font-display text-lg leading-snug text-espresso">{site.address.street}</p>
          <p className="mt-1 text-[0.78rem] font-light text-cocoa/70">
            {site.address.district} · {site.address.city}, {site.address.country}
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-espresso transition-colors hover:text-gold"
          >
            Open in Google Maps
            <ArrowUpRight size={13} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
