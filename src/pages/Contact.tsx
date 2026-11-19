import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Send,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import MapCard from "../components/MapCard";
import { site, whatsappLink, fullAddress } from "../data/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "Table reservation",
  message: "",
};

const subjects = ["Table reservation", "Private event", "Large group", "Feedback", "Something else"];

function validate(values: FormState): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please tell us your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone.trim() && !/^[+\d\s().-]{6,20}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "A little more detail helps us reply properly (10 characters minimum).";
  }

  return errors;
}

const inputBase =
  "w-full rounded-xl border bg-cream px-4 py-3 text-[0.88rem] text-espresso placeholder:text-cocoa/35 transition-colors duration-300 focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${firstField}`)?.focus();
      return;
    }

    const message = [
      `Hello PRIMA CAFÉ,`,
      ``,
      `Subject: ${form.subject}`,
      form.message.trim(),
      ``,
      `— ${form.name.trim()}`,
      form.email.trim(),
      form.phone.trim() ? form.phone.trim() : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <>
      <Seo
        title="Contact & Directions — PRIMA CAFÉ, Les Berges du Lac, Tunis"
        description="Contact PRIMA CAFÉ in Les Berges du Lac, Tunis. Reserve a table by WhatsApp or phone, find opening hours, our address and directions."
        path="/contact"
        image="/images/terrace.jpg"
      />

      <PageHero
        image="/images/terrace.jpg"
        alt="The PRIMA CAFÉ terrace at golden hour"
        eyebrow="Contact"
        title={
          <>
            Let's talk
            <br className="hidden sm:block" /> over coffee.
          </>
        }
        description="Reservations, private mornings, feedback or simply a question about the beans — we answer everything ourselves."
        pageName="Contact"
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-lux grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Form */}
          <Reveal>
            <div className="rounded-[1.75rem] border border-espresso/10 bg-cream-soft p-6 sm:p-9">
              {sent ? (
                <div className="flex min-h-[28rem] flex-col items-start justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <CheckCircle2 size={26} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 font-display text-[2rem] leading-tight">
                    Your message is ready.
                  </h2>
                  <p className="mt-4 max-w-md text-[0.9rem] font-light leading-relaxed text-cocoa/70">
                    WhatsApp should have opened in a new tab with your message
                    already written. Press send there and our team will reply
                    during opening hours — usually within minutes.
                  </p>
                  <p className="mt-3 max-w-md text-[0.78rem] font-light leading-relaxed text-cocoa/50">
                    Nothing was stored on this website. If WhatsApp did not open,
                    call us on{" "}
                    <a href={site.phoneHref} className="text-espresso underline decoration-gold underline-offset-4">
                      {site.phoneDisplay}
                    </a>
                    .
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setForm(emptyForm);
                        setSent(false);
                      }}
                    >
                      Write another message
                    </Button>
                    <Button href={whatsappLink()} variant="solid">
                      Open WhatsApp
                      <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <span className="eyebrow">Send a message</span>
                  <h2 className="mt-4 font-display text-[clamp(1.7rem,3vw,2.3rem)] leading-tight">
                    Tell us what you need.
                  </h2>
                  <p className="mt-2 text-[0.82rem] font-light leading-relaxed text-cocoa/60">
                    All fields marked * are required. Your message opens in
                    WhatsApp, ready to send — no account or inbox needed.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-[0.6rem] uppercase tracking-[0.2em] text-cocoa/60">
                        Your name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(event) => update("name", event.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "error-name" : undefined}
                        className={`${inputBase} ${
                          errors.name ? "border-red-500/60" : "border-espresso/15 focus:border-gold"
                        }`}
                        placeholder="Amira Ben Salah"
                      />
                      {errors.name && (
                        <p id="error-name" className="mt-1.5 text-[0.7rem] text-red-700">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-[0.6rem] uppercase tracking-[0.2em] text-cocoa/60">
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(event) => update("email", event.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "error-email" : undefined}
                        className={`${inputBase} ${
                          errors.email ? "border-red-500/60" : "border-espresso/15 focus:border-gold"
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p id="error-email" className="mt-1.5 text-[0.7rem] text-red-700">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="mb-2 block text-[0.6rem] uppercase tracking-[0.2em] text-cocoa/60">
                        Phone (optional)
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(event) => update("phone", event.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "error-phone" : undefined}
                        className={`${inputBase} ${
                          errors.phone ? "border-red-500/60" : "border-espresso/15 focus:border-gold"
                        }`}
                        placeholder="+216 25 000 000"
                      />
                      {errors.phone && (
                        <p id="error-phone" className="mt-1.5 text-[0.7rem] text-red-700">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="mb-2 block text-[0.6rem] uppercase tracking-[0.2em] text-cocoa/60">
                        Subject
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={(event) => update("subject", event.target.value)}
                        className={`${inputBase} border-espresso/15 focus:border-gold`}
                      >
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="contact-message" className="mb-2 block text-[0.6rem] uppercase tracking-[0.2em] text-cocoa/60">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={(event) => update("message", event.target.value)}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "error-message" : undefined}
                        className={`${inputBase} resize-y ${
                          errors.message ? "border-red-500/60" : "border-espresso/15 focus:border-gold"
                        }`}
                        placeholder="A table for four on Saturday around 19:00, on the terrace if possible…"
                      />
                      {errors.message && (
                        <p id="error-message" className="mt-1.5 text-[0.7rem] text-red-700">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" variant="solid">
                      <Send size={14} strokeWidth={1.6} aria-hidden="true" />
                      Send via WhatsApp
                    </Button>
                    <p className="max-w-[15rem] text-[0.68rem] leading-relaxed text-cocoa/45">
                      Prefer email?{" "}
                      <a
                        href={`mailto:${site.email}`}
                        className="text-espresso underline decoration-gold/70 underline-offset-2"
                      >
                        {site.email}
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Details */}
          <div className="space-y-5">
            <Reveal delay={80}>
              <div className="rounded-[1.4rem] border border-espresso/10 bg-cream-soft p-6 sm:p-7">
                <h3 className="text-[0.6rem] uppercase tracking-[0.26em] text-gold">Reach us</h3>
                <ul className="mt-5 space-y-5">
                  <li>
                    <a href={site.phoneHref} className="group flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-colors group-hover:border-gold group-hover:text-gold">
                        <Phone size={15} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-cocoa/45">
                          Phone
                        </span>
                        <span className="mt-1 block text-[0.95rem] text-espresso">
                          {site.phoneDisplay}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="group flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-colors group-hover:border-gold group-hover:text-gold">
                        <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-cocoa/45">
                          Email
                        </span>
                        <span className="mt-1 block text-[0.95rem] text-espresso">
                          {site.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-espresso/15 text-espresso">
                      <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-cocoa/45">
                        Address
                      </span>
                      <span className="mt-1 block text-[0.88rem] leading-relaxed text-espresso">
                        {fullAddress}
                      </span>
                    </span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-espresso/10 pt-5">
                  <a
                    href={site.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="PRIMA CAFÉ on Facebook"
                    className="flex items-center gap-2 rounded-full border border-espresso/15 px-4 py-2.5 text-[0.62rem] uppercase tracking-[0.16em] text-cocoa transition-colors hover:border-espresso hover:text-espresso"
                  >
                    <Facebook size={13} strokeWidth={1.5} aria-hidden="true" />
                    Facebook
                  </a>
                  <a
                    href={site.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="PRIMA CAFÉ on Instagram"
                    className="flex items-center gap-2 rounded-full border border-espresso/15 px-4 py-2.5 text-[0.62rem] uppercase tracking-[0.16em] text-cocoa transition-colors hover:border-espresso hover:text-espresso"
                  >
                    <Instagram size={13} strokeWidth={1.5} aria-hidden="true" />
                    Instagram
                  </a>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-espresso px-4 py-2.5 text-[0.62rem] uppercase tracking-[0.16em] text-cream transition-colors hover:bg-cocoa"
                  >
                    <MessageCircle size={13} strokeWidth={1.5} aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-[1.4rem] border border-espresso/10 bg-espresso p-6 text-cream sm:p-7">
                <h3 className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.26em] text-gold-soft">
                  <Clock size={13} strokeWidth={1.6} aria-hidden="true" />
                  Opening hours
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {site.hours.map((entry) => (
                    <li key={entry.days} className="flex items-baseline justify-between gap-4 border-b border-cream/10 pb-3.5 last:border-0 last:pb-0">
                      <span className="text-[0.82rem] font-light text-cream/60">{entry.days}</span>
                      <span className="text-[0.82rem] text-cream">{entry.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[0.72rem] leading-relaxed text-cream/40">
                  Reservations are held for 15 minutes. For groups of eight or
                  more, message us at least a day ahead.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <MapCard className="min-h-[20rem]" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
