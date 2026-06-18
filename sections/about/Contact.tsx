"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { GlowAccent } from "@/components/Backgrounds";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`New enquiry from ${name || "your website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    // No backend required — fall back to the user's mail client.
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  type ContactDetail = {
    icon: LucideIcon;
    label: string;
    href?: string;
    external?: boolean;
  };

  const details: ContactDetail[] = [
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    ...site.phones.map((p) => ({
      icon: Phone,
      label: p,
      href: `tel:${p.replace(/\s/g, "")}`,
    })),
    {
      icon: Linkedin,
      label: site.linkedin.label,
      href: site.linkedin.href,
      external: true,
    },
    { icon: MapPin, label: `${site.location} · ${site.availability}` },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden border-t border-line py-20 sm:py-28"
    >
      <GlowAccent className="left-1/2 top-0 h-[320px] w-[680px] -translate-x-1/2" />
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: pitch + details */}
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Get in touch
            </span>
            <h2 className="mt-5 max-w-md text-balance font-display text-4xl font-bold leading-[1.04] tracking-tightest sm:text-5xl">
              Let&apos;s talk about your next campaign.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Drop a message below or reach me directly. I typically reply within
              24 hours.
            </p>

            <ul className="mt-9 flex flex-col gap-4">
              {details.map((d, i) => {
                const Icon = d.icon;
                const inner = (
                  <span className="flex items-center gap-3 text-sm text-muted transition-colors group-hover:text-accent">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/50 text-accent">
                      <Icon size={16} />
                    </span>
                    {d.label}
                  </span>
                );
                return (
                  <li key={i}>
                    {"href" in d && d.href ? (
                      <a
                        href={d.href}
                        target={d.external ? "_blank" : undefined}
                        rel={d.external ? "noopener noreferrer" : undefined}
                        className="group inline-flex"
                      >
                        {inner}
                      </a>
                    ) : (
                      <span className="group inline-flex">{inner}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Right: form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-line bg-surface/40 p-6 sm:p-8"
            >
              <div className="flex flex-col gap-5">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="form-input"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="form-input"
                  />
                </Field>
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your goals…"
                    className="form-input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white shadow-glow-sm transition-all duration-300 hover:shadow-glow hover:brightness-110"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 size={16} /> Opening your mail app…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
                {sent && (
                  <p className="text-center text-xs text-muted">
                    If nothing opened, email me directly at{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="text-accent underline"
                    >
                      {site.email}
                    </a>
                    .
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
