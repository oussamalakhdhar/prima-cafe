import { useState } from "react";
import { ArrowUpRight, Coffee, Wheat } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { categories, menuItems, formatPrice } from "../data/menu";
import { site, whatsappLink, defaultWhatsappMessage } from "../data/site";

type Filter = {
  id: string;
  name: string;
  shortName?: string;
  blurb: string;
};

const filters: Filter[] = [
  { id: "all", name: "Everything", blurb: "The whole bar, at a glance." },
  ...categories,
];

export default function Menu() {
  const [active, setActive] = useState("all");

  const activeFilter = filters.find((filter) => filter.id === active) ?? filters[0];
  const visibleItems =
    active === "all" ? menuItems : menuItems.filter((item) => item.category === active);

  return (
    <>
      <Seo
        title="Menu — PRIMA CAFÉ | Coffee, Juices & Pastries in Tunis"
        description="Explore the PRIMA CAFÉ menu: espresso and filter coffee, cappuccino and lattes, cold drinks, fresh juices, teas, desserts and pastries. Prices in Tunisian Dinar."
        path="/menu"
        image="/images/interior.jpg"
      />

      <PageHero
        image="/images/interior.jpg"
        alt="The warm interior of PRIMA CAFÉ with marble tables and brass lights"
        eyebrow="The menu"
        title={
          <>
            Coffee, poured with
            <br className="hidden sm:block" /> intention.
          </>
        }
        description="Six families of drinks and one pastry counter, written each season around what the roaster and the market give us."
        pageName="Menu"
      />

      {/* Filter bar */}
      <div className="sticky top-[74px] z-30 border-b border-espresso/10 bg-cream/95 backdrop-blur-xl lg:top-[86px]">
        <div className="container-lux">
          <div className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto py-3.5">
            {filters.map((filter) => {
              const isActive = filter.id === active;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActive(filter.id)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-[0.62rem] font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                    isActive
                      ? "bg-espresso text-cream shadow-[0_10px_20px_-14px_rgba(26,17,11,0.9)]"
                      : "text-cocoa/65 hover:bg-espresso/5 hover:text-espresso"
                  }`}
                >
                  {filter.id === "all" ? filter.name : filter.shortName ?? filter.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="bg-cream py-14 md:py-20">
        <div className="container-lux">
          <div className="flex flex-col gap-4 border-b border-espresso/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.58rem] uppercase tracking-[0.3em] text-gold">
                {active === "all" ? "Full selection" : "Category"}
              </p>
              <h2 className="mt-2 font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-tight">
                {activeFilter.name}
              </h2>
              <p className="mt-2 max-w-xl text-[0.86rem] font-light text-cocoa/60">
                {activeFilter.blurb}
              </p>
            </div>
            <p className="text-[0.62rem] uppercase tracking-[0.18em] text-cocoa/45">
              {visibleItems.length} {visibleItems.length === 1 ? "item" : "items"} · Prices in TND
            </p>
          </div>

          <div key={active} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, index) => (
              <article
                key={item.id}
                style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
                className="group flex animate-fade-up flex-col overflow-hidden rounded-[1.4rem] border border-espresso/10 bg-cream-soft transition-all duration-500 hover:-translate-y-1 hover:border-espresso/20 hover:shadow-[0_30px_60px_-40px_rgba(26,17,11,0.55)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    width={1184}
                    height={888}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  />
                  {item.tags && item.tags.length > 0 && (
                    <span className="absolute left-4 top-4 rounded-full bg-espresso-deep/80 px-3 py-1.5 text-[0.52rem] font-medium uppercase tracking-[0.16em] text-cream/90 backdrop-blur">
                      {item.tags[0]}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-[1.35rem] leading-tight">{item.name}</h3>
                    <span
                      aria-hidden="true"
                      className="mb-1 h-px flex-1 border-b border-dotted border-espresso/25"
                    />
                    <span className="shrink-0 font-display text-[1.05rem] text-espresso">
                      {formatPrice(item.price)}
                      <span className="ml-1 text-[0.5rem] uppercase tracking-[0.14em] text-cocoa/50">
                        TND
                      </span>
                    </span>
                  </div>
                  <p className="mt-3 text-[0.84rem] font-light leading-relaxed text-cocoa/70">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-5">
                    <span className="text-[0.56rem] uppercase tracking-[0.24em] text-gold">
                      {categories.find((category) => category.id === item.category)?.name}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Reveal className="mt-14 flex flex-col items-start gap-6 rounded-[1.5rem] border border-espresso/10 bg-sand p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div className="max-w-xl">
              <p className="flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.26em] text-gold">
                <Coffee size={13} strokeWidth={1.6} aria-hidden="true" />
                Good to know
              </p>
              <p className="mt-3 text-[0.88rem] font-light leading-relaxed text-cocoa/75">
                Oat and almond milk are available for every drink at +1.500 TND.
                Prices include service; all coffees are served with still water.
                Allergies? Tell us at the bar — the pastry counter handles nuts,
                gluten and dairy.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href={whatsappLink(defaultWhatsappMessage)} variant="solid">
                Order ahead
                <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
              </Button>
              <Button href={site.phoneHref} variant="outline">
                Call the café
              </Button>
            </div>
          </Reveal>

          <div className="mt-8 flex items-center gap-3 text-[0.68rem] text-cocoa/45">
            <Wheat size={14} strokeWidth={1.5} aria-hidden="true" />
            <span>
              Menu updated seasonally. Prices and availability may change — the bar
              team will always confirm before your order.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
