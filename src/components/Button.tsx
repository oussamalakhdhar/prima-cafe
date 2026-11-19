import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "solid" | "gold" | "light" | "outline";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

const variants: Record<Variant, string> = {
  solid:
    "bg-espresso text-cream shadow-[0_18px_36px_-18px_rgba(26,17,11,0.7)] hover:bg-cocoa hover:-translate-y-0.5",
  gold: "bg-gold text-espresso-deep shadow-[0_18px_36px_-18px_rgba(43,29,20,0.6)] hover:bg-gold-soft hover:-translate-y-0.5",
  light:
    "border border-cream/45 text-cream hover:bg-cream hover:text-espresso hover:-translate-y-0.5",
  outline:
    "border border-espresso/25 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream hover:-translate-y-0.5",
};

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
};

export default function Button({
  children,
  to,
  href,
  variant = "solid",
  className = "",
  type = "button",
  onClick,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
