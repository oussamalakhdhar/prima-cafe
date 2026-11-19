import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X, Instagram, Expand } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { galleryImages } from "../data/gallery";
import { site } from "../data/site";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? index : (index + 1) % galleryImages.length
    );
  }, []);
  const showPrevious = useCallback(() => {
    setActiveIndex((index) =>
      index === null
        ? index
        : (index - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, showNext, showPrevious]);

  const current = activeIndex === null ? null : galleryImages[activeIndex];

  return (
    <>
      <Seo
        title="Gallery — PRIMA CAFÉ | The Room, the Cups, the Mornings"
        description="A visual tour of PRIMA CAFÉ: coffee preparation, cups, the interior, desserts and guests enjoying their mornings in Les Berges du Lac, Tunis."
        path="/gallery"
        image="/images/interior.jpg"
      />

      <PageHero
        image="/images/terrace.jpg"
        alt="The PRIMA CAFÉ terrace at golden hour with marble tables and olive trees"
        eyebrow="Gallery"
        title={
          <>
            A room best seen
            <br className="hidden sm:block" /> slowly.
          </>
        }
        description="Mornings at the bar, the light across the salon, and the pastry counter before the first rush. Photographed in-house."
        pageName="Gallery"
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-lux">
          <div className="flex flex-col gap-5 border-b border-espresso/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.58rem] uppercase tracking-[0.3em] text-gold">Photo journal</p>
              <h2 className="mt-2 font-display text-[clamp(1.7rem,3vw,2.4rem)]">
                Moments from the café
              </h2>
            </div>
            <p className="max-w-xs text-[0.8rem] font-light leading-relaxed text-cocoa/55">
              {galleryImages.length} frames · Select any image to view it full size.
            </p>
          </div>

          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {galleryImages.map((image, index) => (
              <Reveal
                key={image.src}
                delay={(index % 3) * 80}
                className="mb-4 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View larger: ${image.caption}`}
                  className="group relative block w-full overflow-hidden rounded-xl bg-espresso/5 text-left"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-espresso-deep/85 via-espresso-deep/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span>
                      <span className="block font-display text-lg text-cream">{image.caption}</span>
                      <span className="mt-1 block text-[0.55rem] uppercase tracking-[0.24em] text-gold-soft">
                        {image.category}
                      </span>
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/40 text-cream">
                      <Expand size={14} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-col items-center gap-5 rounded-[1.5rem] border border-espresso/10 bg-sand px-7 py-10 text-center">
            <p className="font-display text-2xl text-espresso">See the café as it happens.</p>
            <p className="max-w-md text-[0.86rem] font-light text-cocoa/60">
              New frames from the bar and the room are posted most mornings.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href={site.socials.instagram} variant="solid">
                <Instagram size={14} strokeWidth={1.6} aria-hidden="true" />
                Follow {site.instagramHandle}
              </Button>
              <Button to="/contact" variant="outline">
                Plan your visit
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${current.caption}`}
          className="fixed inset-0 z-[70] flex flex-col bg-espresso-deep/96 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between px-5 py-5 sm:px-8">
            <p className="text-[0.6rem] uppercase tracking-[0.24em] text-cream/50">
              {String((activeIndex ?? 0) + 1).padStart(2, "0")} /{" "}
              {String(galleryImages.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-espresso"
            >
              <X size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-16">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 bg-espresso-deep/60 text-cream transition-colors hover:bg-cream hover:text-espresso sm:left-6 sm:h-12 sm:w-12"
            >
              <ArrowLeft size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>

            <figure className="max-h-full">
              <img
                src={current.src}
                alt={current.alt}
                className="mx-auto max-h-[70svh] w-auto max-w-full rounded-lg object-contain"
              />
              <figcaption className="mt-5 text-center">
                <p className="font-display text-xl text-cream">{current.caption}</p>
                <p className="mt-1 text-[0.58rem] uppercase tracking-[0.24em] text-gold-soft">
                  {current.category}
                </p>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 bg-espresso-deep/60 text-cream transition-colors hover:bg-cream hover:text-espresso sm:right-6 sm:h-12 sm:w-12"
            >
              <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 pb-6">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to image ${index + 1}: ${image.caption}`}
                aria-current={index === activeIndex}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-gold" : "w-1.5 bg-cream/30 hover:bg-cream/60"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
