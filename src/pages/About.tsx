import { ArrowRight, ArrowUpRight, Check, Quote } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { site, whatsappLink, defaultWhatsappMessage } from "../data/site";

type Chapter = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
  points: string[];
};

const chapters: Chapter[] = [
  {
    id: "philosophy",
    eyebrow: "Our philosophy",
    title: "Coffee is a craft, not a transaction.",
    paragraphs: [
      "We opened in 2016 with a short menu and a long idea: that a cup of coffee can be the most considered thing in someone's day. That means knowing the farm, roasting in batches small enough to taste every change, and refusing to serve a shot we would not drink ourselves.",
      "It also means taking our time with you. Nobody is turned over at Prima. The table is yours until you decide otherwise.",
    ],
    image: "/images/beans.jpg",
    alt: "Freshly roasted single-origin coffee beans spilling from a linen sack",
    points: [
      "Single-origin beans, roasted in small batches",
      "Recipes re-dialled every morning and afternoon",
      "A menu that changes with the season, not the trend",
    ],
  },
  {
    id: "quality",
    eyebrow: "Coffee quality",
    title: "Weighed, rested, dialled, tasted.",
    paragraphs: [
      "Green beans arrive through two small importers we have worked with for years. We roast in 6 kg batches, rest the coffee for five days, then dial in the grinder by taste — never by habit.",
      "Espresso is pulled at 93°C with a 1:2 ratio in 27 seconds. Filter is brewed at 92°C, one pour at a time. If a shot runs fast or slow, it goes down the sink, not across the counter.",
    ],
    image: "/images/v60.jpg",
    alt: "A barista hand-pouring a V60 filter coffee on the PRIMA CAFÉ counter",
    points: [
      "Traceable lots from Ethiopia, Colombia and Yemen",
      "Roasted weekly, never older than 21 days on the bar",
      "Refractometer-checked filter brews every morning",
    ],
  },
  {
    id: "atmosphere",
    eyebrow: "The atmosphere",
    title: "A room designed for staying.",
    paragraphs: [
      "Arched windows, oak, cream marble and brass — the room takes its cues from the Mediterranean cafés we grew up in, with the quiet of a library and the warmth of a living room.",
      "We keep the music low, the lights warm and the tables far enough apart to talk. In the afternoon, the sun crosses the room from the lake side and everything turns the colour of caramel.",
    ],
    image: "/images/interior.jpg",
    alt: "The arched windows, cream banquettes and brass lights of the PRIMA CAFÉ salon",
    points: [
      "40 seats indoors, 20 on the terrace",
      "Fast Wi-Fi and quiet corners for working",
      "Family-friendly, with a small library of books",
    ],
  },
  {
    id: "experience",
    eyebrow: "The experience",
    title: "Served by people who remember your order.",
    paragraphs: [
      "Our team is small on purpose. You will see the same faces, and they will learn how you take your coffee — the temperature, the milk, whether you want the pastry warmed.",
      "If something is not right, tell us. We will remake it, replace it, or simply sit down and fix it with you. Hospitality is not a script; it is attention.",
    ],
    image: "/images/guests.jpg",
    alt: "Two guests laughing over coffee at a marble table in PRIMA CAFÉ",
    points: [
      "Table service, no queue at the bar",
      "Reservations by WhatsApp, answered in minutes",
      "Private mornings and events hosted with care",
    ],
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="Our Story — PRIMA CAFÉ | Specialty Coffee in Les Berges du Lac"
        description="The story of PRIMA CAFÉ: a Tunis specialty coffee house built on single-origin beans, careful extraction and a room made for lingering."
        path="/about"
        image="/images/barista.jpg"
      />

      <PageHero
        image="/images/beans.jpg"
        alt="Roasted coffee beans spilling from a linen sack"
        eyebrow="Our story"
        title={
          <>
            A house of
            <br className="hidden sm:block" /> small rituals.
          </>
        }
        description="PRIMA CAFÉ began in 2016 in Les Berges du Lac with two grinders, one marble counter and a belief that coffee deserves the same attention as wine."
        pageName="Our Story"
      />

      {/* Opening statement */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Since 2016"
            title={
              <>
                It started with a counter
                <br className="hidden sm:block" /> and a stubborn idea.
              </>
            }
          />

          <Reveal delay={120} className="space-y-5 text-[0.95rem] font-light leading-relaxed text-cocoa/75">
            <p>
              Tunis already had coffee. What it did not have, we thought, was a
              place that treated it as a craft — where the beans had names and
              farms, where the milk was poured rather than pushed, and where you
              could sit for two hours without anyone hovering.
            </p>
            <p>
              So we built one. A narrow room on Rue du Lac Léman, a second-hand
              La Marzocco, and a menu of five drinks. The first month, we sold
              eleven cups a day. The regulars came for the quiet, then stayed for
              the coffee.
            </p>
            <p>
              Nine years later the room has grown into the courtyard, the menu
              has grown into six families of drinks, and the pastry counter has
              its own following. The idea has not changed.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 font-display text-lg italic text-gold"
              >
                PC
              </span>
              <div>
                <p className="font-display text-lg text-espresso">Sami & Ines Ferchichi</p>
                <p className="text-[0.64rem] uppercase tracking-[0.18em] text-cocoa/50">
                  Founders, PRIMA CAFÉ
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="relative overflow-hidden bg-espresso py-20 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 30%, rgba(176,141,87,0.4), transparent 40%), radial-gradient(circle at 85% 80%, rgba(176,141,87,0.25), transparent 35%)",
          }}
        />
        <div className="container-narrow relative text-center">
          <Reveal>
            <Quote size={34} strokeWidth={1} className="mx-auto text-gold/80" aria-hidden="true" />
            <blockquote className="mt-7">
              <p className="font-display text-[clamp(1.5rem,3.4vw,2.6rem)] font-light italic leading-[1.25] text-cream">
                “We are not here to sell the fastest coffee in Tunis. We are here
                to sell the one you remember.”
              </p>
            </blockquote>
            <p className="mt-7 text-[0.62rem] uppercase tracking-[0.28em] text-cream/45">
              Ines Ferchichi · Co-founder
            </p>
          </Reveal>
        </div>
      </section>

      {/* Chapters */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux space-y-20 md:space-y-28">
          {chapters.map((chapter, index) => {
            const imageFirst = index % 2 === 0;
            return (
              <div
                key={chapter.id}
                id={chapter.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                  <div className="relative overflow-hidden rounded-[1.75rem]">
                    <img
                      src={chapter.image}
                      alt={chapter.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-[22rem] w-full object-cover sm:h-[30rem] lg:h-[34rem]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent"
                    />
                    <span className="absolute bottom-5 left-6 font-display text-[0.8rem] tracking-[0.3em] text-cream/60">
                      0{index + 1} / 04
                    </span>
                  </div>
                </Reveal>

                <Reveal
                  delay={100}
                  className={imageFirst ? "lg:order-2" : "lg:order-1"}
                >
                  <span className="eyebrow">{chapter.eyebrow}</span>
                  <h2 className="mt-5 font-display text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.1]">
                    {chapter.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-[0.92rem] font-light leading-relaxed text-cocoa/75">
                    {chapter.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                    ))}
                  </div>
                  <ul className="mt-7 space-y-3 border-t border-espresso/10 pt-6">
                    {chapter.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-[0.86rem] text-cocoa/80">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                          <Check size={12} strokeWidth={2} aria-hidden="true" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-sand py-16 md:py-20">
        <div className="container-lux">
          <div className="grid gap-8 border-y border-espresso/10 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: site.established, label: "Year the doors opened" },
              { value: "3", label: "Coffee origins at a time" },
              { value: "6", label: "Families on the menu" },
              { value: "40k", label: "Cups poured since 2016" },
            ].map((stat, index) => (
              <Reveal key={stat.label} delay={index * 90} className="text-center sm:text-left">
                <p className="font-display text-[2.6rem] leading-none text-espresso">{stat.value}</p>
                <p className="mt-3 text-[0.62rem] uppercase tracking-[0.2em] text-cocoa/55">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="bg-cream py-20 md:py-24">
        <div className="container-lux">
          <Reveal className="overflow-hidden rounded-[1.75rem] bg-espresso-deep">
            <div className="grid items-center gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-8 sm:p-12 lg:p-14">
                <span className="eyebrow text-gold-soft">Come taste the story</span>
                <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] text-cream">
                  There is a cup
                  <br />
                  <span className="italic text-gold-soft">with your name on it.</span>
                </h2>
                <p className="mt-5 max-w-md text-[0.9rem] font-light leading-relaxed text-cream/60">
                  Visit us on Rue du Lac Léman, or send a message and we will hold
                  your favourite table.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={whatsappLink(defaultWhatsappMessage)} variant="gold">
                    Reserve on WhatsApp
                    <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
                  </Button>
                  <Button to="/menu" variant="light">
                    Browse the menu
                    <ArrowRight size={14} strokeWidth={1.6} aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="relative h-64 w-full lg:h-full lg:min-h-[22rem]">
                <img
                  src="/images/barista.jpg"
                  alt="A barista finishing a latte at the PRIMA CAFÉ bar"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-espresso-deep via-espresso-deep/20 to-transparent lg:from-espresso-deep lg:via-espresso-deep/40"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
