import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight, Instagram, Facebook } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { site, whatsappLink, defaultWhatsappMessage, fullAddress } from "../data/site";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Our Story", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            solid
              ? "border-b border-espresso/10 bg-cream/92 shadow-[0_10px_40px_-30px_rgba(26,17,11,0.8)] backdrop-blur-xl"
              : "border-b border-cream/10 bg-gradient-to-b from-espresso-deep/45 to-transparent"
          }`}
        >
          <div className="container-lux flex h-[74px] items-center justify-between gap-6 lg:h-[86px]">
            <Link
              to="/"
              aria-label="PRIMA CAFÉ — home"
              className="shrink-0 transition-opacity duration-300 hover:opacity-80"
            >
              <Logo variant={solid ? "dark" : "light"} />
            </Link>

            <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `group relative py-2 text-[0.68rem] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                      solid
                        ? isActive
                          ? "text-espresso"
                          : "text-cocoa/70 hover:text-espresso"
                        : isActive
                          ? "text-cream"
                          : "text-cream/70 hover:text-cream"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-500 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-6 lg:flex">
              <a
                href={site.phoneHref}
                className={`flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.14em] transition-colors duration-300 ${
                  solid ? "text-cocoa hover:text-espresso" : "text-cream/80 hover:text-cream"
                }`}
              >
                <Phone size={13} strokeWidth={1.5} aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <Button
                href={whatsappLink(defaultWhatsappMessage)}
                variant={solid ? "outline" : "light"}
                className="!px-6 !py-3 !text-[0.62rem]"
              >
                Reserve a table
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              className={`flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-[0.62rem] uppercase tracking-[0.22em] transition-colors duration-300 lg:hidden ${
                solid
                  ? "border-espresso/20 text-espresso"
                  : "border-cream/35 text-cream"
              }`}
            >
              <Menu size={16} strokeWidth={1.5} aria-hidden="true" />
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close navigation menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 h-full w-full cursor-default bg-espresso-deep"
        />

        <div className="container-lux relative flex h-full flex-col overflow-y-auto py-6">
          <div className="flex items-center justify-between">
            <Logo variant="light" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              tabIndex={open ? 0 : -1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors duration-300 hover:bg-cream hover:text-espresso"
            >
              <X size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="mt-14 flex flex-col">
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                tabIndex={open ? 0 : -1}
                style={{ transitionDelay: open ? `${120 + index * 55}ms` : "0ms" }}
                className={({ isActive }) =>
                  `group flex items-baseline justify-between border-b border-cream/10 py-5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  } ${isActive ? "text-gold-soft" : "text-cream"}`
                }
              >
                <span className="font-display text-[1.9rem] leading-none">{item.label}</span>
                <span className="text-[0.6rem] tracking-[0.3em] text-cream/35">
                  0{index + 1}
                </span>
              </NavLink>
            ))}
          </nav>

          <div
            style={{ transitionDelay: open ? "460ms" : "0ms" }}
            className={`mt-auto pt-12 transition-all duration-700 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <a
              href={site.phoneHref}
              tabIndex={open ? 0 : -1}
              className="flex items-center gap-3 font-display text-xl text-cream"
            >
              <Phone size={16} strokeWidth={1.5} className="text-gold" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <p className="mt-3 max-w-xs text-[0.8rem] leading-relaxed text-cream/55">
              {fullAddress}
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-espresso-deep"
              >
                WhatsApp us
                <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                aria-label="PRIMA CAFÉ on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:text-gold"
              >
                <Instagram size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                aria-label="PRIMA CAFÉ on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:text-gold"
              >
                <Facebook size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
