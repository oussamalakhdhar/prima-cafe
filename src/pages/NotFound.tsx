import { ArrowRight, Coffee } from "lucide-react";
import Seo from "../components/Seo";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found — PRIMA CAFÉ"
        description="This page has gone cold. Head back to PRIMA CAFÉ for coffee, the menu and opening hours."
        path="/404"
      />

      <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-espresso-deep">
        <img
          src="/images/espresso.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-espresso-deep/80 to-espresso-deep/60" />

        <div className="container-narrow relative py-32 text-center">
          <span className="inline-flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-gold-soft">
            <Coffee size={14} strokeWidth={1.5} aria-hidden="true" />
            Error 404
          </span>
          <p className="mt-6 font-display text-[clamp(5rem,16vw,11rem)] leading-none text-cream/15">
            404
          </p>
          <h1 className="mt-2 font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-tight text-cream">
            This page has gone cold.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[0.92rem] font-light leading-relaxed text-cream/60">
            The link you followed no longer exists. Let us pour you something
            else — the menu is a good place to start.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/" variant="gold">
              Back to home
              <ArrowRight size={14} strokeWidth={1.6} aria-hidden="true" />
            </Button>
            <Button to="/menu" variant="light">
              Explore the menu
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
