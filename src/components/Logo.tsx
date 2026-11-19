type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  markOnly?: boolean;
};

/**
 * PRIMA CAFÉ identity: an arched café doorway framing a coffee bean,
 * set beside a serif wordmark with a wide-tracked "CAFÉ".
 */
export default function Logo({ variant = "dark", className = "", markOnly = false }: LogoProps) {
  const isLight = variant === "light";

  return (
    <span
      className={`inline-flex items-center gap-3 ${isLight ? "text-cream" : "text-espresso"} ${className}`.trim()}
    >
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="PRIMA CAFÉ emblem"
        className="h-11 w-11 shrink-0"
        fill="none"
      >
        <circle cx="32" cy="32" r="30" stroke="currentColor" strokeOpacity="0.28" />
        <circle cx="32" cy="32" r="24.5" stroke="currentColor" strokeOpacity="0.12" />
        <path
          d="M24 44V29.5a8 8 0 0 1 16 0V44"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <g transform="rotate(-32 32 30)">
          <ellipse cx="32" cy="30" rx="4.6" ry="7.2" stroke="currentColor" strokeWidth="1.1" />
          <path
            d="M32 23.4c1.9 2.4 1.9 10.8 0 13.2"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </g>
        <path d="M27 47h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />
        <circle cx="32" cy="11.5" r="1.1" fill="currentColor" fillOpacity="0.7" />
      </svg>

      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.32rem] leading-none tracking-[0.2em]">PRIMA</span>
          <span
            className={`mt-1.5 text-[0.52rem] font-medium uppercase tracking-[0.62em] ${
              isLight ? "text-gold-soft" : "text-gold"
            }`}
          >
            Café
          </span>
        </span>
      )}
    </span>
  );
}
