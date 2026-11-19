import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const VIEWPORT_MARGIN = 60;

type Entry = {
  element: HTMLElement;
  reveal: () => void;
};

/**
 * A single shared registry keeps one scroll listener for every revealed
 * section instead of one per component. Content is measured against the
 * viewport, which behaves consistently in every browser and panel.
 */
const entries = new Set<Entry>();
let frame = 0;
let listening = false;

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= viewportHeight - VIEWPORT_MARGIN && rect.bottom >= 0;
}

function scan() {
  frame = 0;
  for (const entry of entries) {
    if (isInViewport(entry.element)) {
      entries.delete(entry);
      entry.reveal();
    }
  }
}

function scheduleScan() {
  if (frame) return;
  frame = window.requestAnimationFrame(scan);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", scheduleScan, { passive: true });
  window.addEventListener("resize", scheduleScan);
  window.addEventListener("load", scheduleScan);
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Fades and lifts content into view once. Falls back to showing content
 * immediately when the document is hidden, so nothing stays invisible.
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (document.visibilityState === "hidden") {
      setInstant(true);
      setVisible(true);
      return;
    }

    startListening();

    const entry: Entry = {
      element: node,
      reveal: () => setVisible(true),
    };
    entries.add(entry);
    scheduleScan();

    // Re-measure once fonts and images have settled the layout.
    const settle = window.setTimeout(scheduleScan, 700);

    return () => {
      entries.delete(entry);
      window.clearTimeout(settle);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${
        instant ? "reveal-instant" : ""
      } ${className}`.replace(/\s+/g, " ").trim()}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
