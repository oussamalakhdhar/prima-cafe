import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X, Phone } from "lucide-react";
import { site, whatsappLink, defaultWhatsappMessage } from "../data/site";

export default function WhatsAppFloat() {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  const message = encodeURIComponent(
    "Hello PRIMA CAFÉ! I'd like to ask about "
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {expanded && (
        <div
          role="dialog"
          aria-label="Contact PRIMA CAFÉ on WhatsApp"
          className="w-[17rem] overflow-hidden rounded-2xl border border-espresso/10 bg-cream shadow-[0_30px_60px_-30px_rgba(26,17,11,0.6)]"
        >
          <div className="bg-espresso-deep px-5 py-4">
            <p className="font-display text-lg text-cream">Prima, at your service</p>
            <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-gold-soft">
              Usually replies in minutes
            </p>
          </div>
          <div className="space-y-2 p-4">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl bg-espresso px-4 py-3 text-[0.78rem] text-cream transition-colors hover:bg-cocoa"
            >
              Reserve a table
              <MessageCircle size={14} aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(`${decodeURIComponent(message)}a private event.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-espresso/15 px-4 py-3 text-[0.78rem] text-espresso transition-colors hover:border-espresso"
            >
              Private events
              <MessageCircle size={14} aria-hidden="true" />
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center justify-between rounded-xl px-4 py-2.5 text-[0.78rem] text-cocoa transition-colors hover:text-espresso"
            >
              Call the café
              <Phone size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-label={expanded ? "Close WhatsApp contact panel" : "Chat with PRIMA CAFÉ on WhatsApp"}
          className="group flex h-14 items-center gap-3 rounded-full bg-espresso-deep pl-4 pr-4 text-cream shadow-[0_20px_40px_-18px_rgba(26,17,11,0.8)] transition-all duration-500 hover:bg-espresso sm:pr-5"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold-soft">
            {expanded ? (
              <X size={17} strokeWidth={1.6} aria-hidden="true" />
            ) : (
              <MessageCircle size={17} strokeWidth={1.6} aria-hidden="true" />
            )}
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full bg-gold/20 [animation-duration:3s]"
            />
          </span>
          <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] sm:text-[0.66rem]">
            WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}
