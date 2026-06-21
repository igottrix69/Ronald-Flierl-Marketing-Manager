"use client";

import { useState } from "react";
import {
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { GlowAccent } from "@/components/Backgrounds";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
      company: String(form.get("company") || ""), // honeypot
    };

    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      formEl.reset();
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  const details = [
    {
      icon: Linkedin,
      label: site.linkedin.label,
      href: site.linkedin.href,
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
          {/* Left: pitch */}
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Get in touch
            </span>
            <h2 className="mt-5 max-w-md text-balance font-display text-4xl font-bold leading-[1.04] tracking-tightest sm:text-5xl">
              Let&apos;s talk about your next campaign.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Drop a message below — I typically reply within 24 hours.
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
                    {d.href ? (
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
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
            {status === "success" ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-3xl border border-line bg-surface/40 p-8 text-center">
                <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckCircle2 size={28} />
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  Message sent
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted">
                  Thanks — I&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
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
                      minLength={10}
                      rows={5}
                      placeholder="Tell me about your goals…"
                      className="form-input resize-none"
                    />
                  </Field>

                  {/* Honeypot — hidden from users, catches bots */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden"
                  >
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white shadow-glow-sm transition-all duration-300 hover:shadow-glow hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending…
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

                  {status === "error" && (
                    <p className="flex items-center justify-center gap-2 text-center text-sm text-red-400">
                      <AlertCircle size={15} /> {errorMsg}
                    </p>
                  )}
                </div>
              </form>
            )}
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
