import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Instagram,
  MapPin,
  Clock,
  Phone,
  Bean,
  Coffee,
  Croissant,
  Armchair,
  Quote,
  Star,
} from "lucide-react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import MapCard from "../components/MapCard";
import { featuredItems, formatPrice, categories } from "../data/menu";
import { testimonials } from "../data/testimonials";
import { homeGallery } from "../data/gallery";
import { site, whatsappLink, defaultWhatsappMessage, fullAddress } from "../data/site";

const marqueeWords = [
  "Single origin",
  "Hand poured",
  "Baked before sunrise",
  "Slow mornings",
  "Les Berges du Lac",
  "Since 2016",
];

const reasons = [
  {
    icon: Bean,
    title: "Beans with a passport",
    copy: "Ethiopia, Colombia, Yemen. Roasted in small batches and rested five days before they ever meet water.",
  },
  {
    icon: Coffee,
    title: "Milk, poured by hand",
    copy: "No shortcuts, no automatic steam wands. Every cappuccino is free-poured by the person who serves it.",
  },
  {
    icon: Croissant,
    title: "Baked before sunrise",
    copy: "Croissants laminated on Mondays, pastries out of the oven by 7:30. When they finish, they finish.",
  },
  {
    icon: Armchair,
    title: "A room to stay in",
    copy: "Deep banquettes, warm light and no time limit. Bring the laptop, the book or the whole family.",
  },
];

const stats = [
  { value: "2016", label: "First cup poured" },
  { value: "12", label: "Origins on rotation" },
  { value: "40", label: "Seats to linger in" },
];

export default function Home() {
  return (
    <>
      <Seo
        title="PRIMA CAFÉ — Specialty Coffee House in Tunis"
        description="A specialty coffee house in Les Berges du Lac, Tunis. Single-origin espresso, slow filter brews, fresh juices and pastries baked each morning. Every cup tells a story."
        path="/"
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-espresso-deep">
        <img
          src="/images/hero.jpg"
          alt="An espresso with golden crema in a porcelain cup on a cream marble table"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-espresso-deep/92 via-espresso-deep/60 to-espresso-deep/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-espresso-deep/25 to-espresso-deep/55"
        />

        <div className="container-lux relative flex flex-1 flex-col justify-center pb-16 pt-32 sm:pb-24">
          <div className="max-w-3xl">
            <span className="eyebrow text-gold-soft">Specialty coffee · Tunis</span>
            <h1 className="mt-6 font-display text-[clamp(2.85rem,7.6vw,6.1rem)] leading-[0.97] text-cream">
              Every Cup
              <br />
              Tells a <span className="italic text-gold-soft">Story.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[0.98rem] font-light leading-relaxed text-cream/70 sm:text-[1.05rem]">
              A specialty coffee house in Les Berges du Lac, where single-origin
              beans are weighed, ground and poured with the same care we give the
              room you sit in.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/menu" variant="gold">
                Explore Our Menu
                <ArrowRight size={15} strokeWidth={1.6} aria-hidden="true" />
              </Button>
              <Button to="/contact" variant="light">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="relative border-t border-cream/15 bg-espresso-deep/30 backdrop-blur-sm">
          <div className="container-lux flex flex-col gap-4 py-5 text-[0.68rem] uppercase tracking-[0.18em] text-cream/60 sm:flex-row sm:items-center sm:justify-between">
            <span className="flex items-center gap-2.5">
              <MapPin size={13} strokeWidth={1.6} className="text-gold" aria-hidden="true" />
              {site.address.district}, Tunis
            </span>
            <span className="hidden items-center gap-2.5 md:flex">
              <Clock size={13} strokeWidth={1.6} className="text-gold" aria-hidden="true" />
              Open today until 22:00
            </span>
            <a href="#featured" className="group flex items-center gap-2.5 transition-colors hover:text-cream">
              Scroll to discover
              <ArrowDown
                size={13}
                strokeWidth={1.6}
                aria-hidden="true"
                className="text-gold transition-transform duration-500 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section aria-label="What defines PRIMA CAFÉ" className="overflow-hidden border-y border-cream/10 bg-espresso py-5">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
              {marqueeWords.map((word) => (
                <span
                  key={`${group}-${word}`}
                  className="flex items-center gap-8 pr-8 text-[0.66rem] uppercase tracking-[0.32em] text-cream/55"
                >
                  {word}
                  <span className="h-1 w-1 rotate-45 bg-gold/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Featured drinks */}
      <section id="featured" className="bg-cream py-20 md:py-28">
        <div className="container-lux">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="From the bar"
              title={
                <>
                  Three cups worth
                  <br className="hidden sm:block" /> crossing town for.
                </>
              }
              description="The drinks our regulars order without looking at the menu — pulled, poured and finished by hand each morning."
            />
            <Reveal delay={120} className="shrink-0">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-3 text-[0.66rem] font-medium uppercase tracking-[0.22em] text-espresso"
              >
                View the full menu
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/20 transition-all duration-500 group-hover:border-espresso group-hover:bg-espresso group-hover:text-cream">
                  <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item, index) => {
              const category = categories.find((entry) => entry.id === item.category);
              return (
                <Reveal key={item.id} delay={index * 110}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-espresso/10 bg-cream-soft transition-all duration-700 hover:-translate-y-1 hover:border-espresso/20 hover:shadow-[0_30px_60px_-40px_rgba(26,17,11,0.6)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        width={1184}
                        height={888}
                        className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                      />
                      <span className="absolute right-4 top-4 rounded-full bg-cream/95 px-3.5 py-1.5 text-[0.7rem] font-medium text-espresso backdrop-blur">
                        {formatPrice(item.price)}{" "}
                        <span className="text-[0.52rem] uppercase tracking-[0.14em] text-cocoa/60">TND</span>
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <p className="text-[0.56rem] uppercase tracking-[0.28em] text-gold">
                        {category?.name}
                      </p>
                      <h3 className="mt-3 font-display text-[1.65rem] leading-tight">{item.name}</h3>
                      <p className="mt-2.5 text-[0.86rem] font-light leading-relaxed text-cocoa/70">
                        {item.description}
                      </p>
                      <Link
                        to="/menu"
                        className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-espresso/70 transition-colors group-hover:text-espresso"
                      >
                        See it on the menu
                        <ArrowUpRight size={13} strokeWidth={1.6} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="relative overflow-hidden bg-sand py-20 md:py-28">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src="/images/barista.jpg"
                alt="A PRIMA CAFÉ barista pouring milk into a cup to create latte art"
                loading="lazy"
                decoding="async"
                className="h-[26rem] w-full object-cover sm:h-[34rem] lg:h-[38rem]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <p className="font-display text-lg italic text-cream/90">
                  “Poured slowly, by someone who cares.”
                </p>
              </div>
            </div>
            <div className="absolute -right-3 -top-3 hidden rounded-2xl border border-espresso/10 bg-cream px-5 py-4 text-center shadow-[0_20px_40px_-30px_rgba(26,17,11,0.7)] sm:block lg:-right-6">
              <p className="font-display text-2xl text-espresso">Est.</p>
              <p className="text-[0.7rem] tracking-[0.24em] text-gold">{site.established}</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  A café built around
                  <br className="hidden sm:block" /> the ritual of a good cup.
                </>
              }
              description="PRIMA began with a marble counter, two grinders and a stubborn belief that Tunis deserved a room where coffee is treated like wine — and time is not a currency."
            />
            <Reveal delay={120}>
              <p className="mt-5 max-w-xl text-[0.92rem] font-light leading-relaxed text-cocoa/70">
                Nine years later, the counter is longer and the room is warmer, but
                the rule has not changed: weigh the dose, watch the pour, taste the
                shot. Everything else — the linen, the lighting, the playlists — is
                there so you stay a little longer.
              </p>

              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-espresso/10 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-[2rem] leading-none text-espresso">
                        {stat.value}
                      </span>
                      <span className="mt-2 block text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-cocoa/55">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-9">
                <Button to="/about" variant="outline">
                  Read our story
                  <ArrowRight size={14} strokeWidth={1.6} aria-hidden="true" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="relative overflow-hidden bg-espresso py-20 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="container-lux relative">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              tone="light"
              eyebrow="Why Prima"
              title="Small details, repeated daily."
              description="Nothing here is an accident — from the temperature of the milk to the weight of the cup in your hand."
            />
            <Reveal delay={140} className="hidden shrink-0 md:block">
              <span className="block h-px w-28 bg-gold/40" />
              <span className="mt-4 block text-[0.62rem] uppercase tracking-[0.26em] text-cream/40">
                Four reasons, one ritual
              </span>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Reveal key={reason.title} delay={index * 100}>
                  <div className="group h-full border-t border-cream/15 pt-7">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10">
                        <Icon size={19} strokeWidth={1.4} aria-hidden="true" />
                      </span>
                      <span className="font-display text-sm text-cream/25">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 font-display text-xl text-cream">{reason.title}</h3>
                    <p className="mt-3 text-[0.84rem] font-light leading-relaxed text-cream/55">
                      {reason.copy}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux">
          <SectionHeading
            align="center"
            eyebrow="Kind words"
            title="Guests who became regulars."
            description="The best review we get is a second visit — but these are a close second."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 110}>
                <figure className="flex h-full flex-col rounded-[1.4rem] border border-espresso/10 bg-cream-soft p-7 transition-all duration-500 hover:-translate-y-1 hover:border-espresso/20">
                  <Quote size={26} strokeWidth={1.2} className="text-gold/70" aria-hidden="true" />
                  <blockquote className="mt-5 flex-1">
                    <p className="font-display text-[1.12rem] font-light italic leading-relaxed text-espresso/90">
                      “{testimonial.quote}”
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-espresso/10 pt-5">
                    <div className="flex items-center gap-1 text-gold" aria-label="Rated 5 out of 5">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star key={star} size={11} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                      ))}
                    </div>
                    <p className="mt-3 text-[0.86rem] font-medium text-espresso">{testimonial.name}</p>
                    <p className="mt-0.5 text-[0.68rem] uppercase tracking-[0.16em] text-cocoa/50">
                      {testimonial.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram gallery */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-lux">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Instagram"
              title="Mornings at Prima."
              description="A few frames from the bar, the room and the pastry counter."
            />
            <Reveal delay={120}>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[0.64rem] font-medium uppercase tracking-[0.2em] text-espresso"
              >
                <Instagram size={15} strokeWidth={1.5} aria-hidden="true" className="text-gold" />
                {site.instagramHandle}
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.6}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {homeGallery.map((image, index) => (
              <Reveal key={image.src} delay={index * 70}>
                <Link
                  to="/gallery"
                  className="group relative block aspect-square overflow-hidden rounded-xl"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    width={image.width}
                    height={image.height}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-espresso-deep/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Instagram size={20} strokeWidth={1.4} className="text-cream" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location & hours */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <MapCard className="h-full" />
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Visit"
              title="A quiet corner of Lac 1."
              description="Two minutes from the lake, a little further from the noise. Parking on Rue du Lac Léman, terrace open whenever the weather allows."
            />

            <Reveal delay={120}>
              <div className="mt-8 rounded-[1.4rem] border border-espresso/10 bg-cream-soft p-6 sm:p-7">
                <p className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.26em] text-gold">
                  <Clock size={13} strokeWidth={1.6} aria-hidden="true" />
                  Opening hours
                </p>
                <ul className="mt-4 divide-y divide-espresso/10">
                  {site.hours.map((entry) => (
                    <li key={entry.days} className="flex items-baseline justify-between gap-4 py-3">
                      <span className="text-[0.85rem] text-cocoa/75">{entry.days}</span>
                      <span className="text-[0.85rem] font-medium tracking-wide text-espresso">
                        {entry.time}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-col gap-3 border-t border-espresso/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[0.78rem] font-light leading-relaxed text-cocoa/60">
                    {fullAddress}
                  </p>
                  <a
                    href={site.phoneHref}
                    className="inline-flex shrink-0 items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-espresso transition-colors hover:text-gold"
                  >
                    <Phone size={13} strokeWidth={1.6} aria-hidden="true" />
                    Call us
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={whatsappLink(defaultWhatsappMessage)} variant="solid">
                  Reserve a table
                  <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
                </Button>
                <Button to="/contact" variant="outline">
                  Contact & directions
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing invitation */}
      <section className="relative overflow-hidden bg-espresso-deep py-20 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(176,141,87,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(176,141,87,0.25), transparent 40%)",
          }}
        />
        <div className="container-lux relative text-center">
          <Reveal>
            <span className="eyebrow justify-center text-gold-soft">Come sit with us</span>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.1rem,5vw,3.8rem)] leading-[1.06] text-cream">
              Your table is waiting,
              <br />
              <span className="italic text-gold-soft">the kettle is on.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[0.92rem] font-light leading-relaxed text-cream/60">
              Walk in, or message us and we will keep a corner free. Groups and
              private mornings are always welcome.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href={whatsappLink(defaultWhatsappMessage)} variant="gold">
                Message on WhatsApp
                <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
              </Button>
              <Button to="/menu" variant="light">
                Browse the menu
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
