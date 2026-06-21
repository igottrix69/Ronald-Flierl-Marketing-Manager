import Link from "next/link";
import { MapPin, Linkedin } from "lucide-react";
import { site, navLinks } from "@/data/site";
import { clients } from "@/data/clients";
import { LogoChip } from "./LogoChip";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface/30">
      <div className="container-px py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="font-display">{site.name}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {site.tagline}. Specialising in high-ticket paid acquisition, CRO
              and AI-powered marketing workflows for PNG&apos;s leading brands.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href={site.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2.5 text-muted transition-colors hover:text-accent"
              >
                <Linkedin size={15} /> {site.linkedin.label}
              </a>
              <span className="inline-flex w-fit items-center gap-2.5 text-muted">
                <MapPin size={15} /> {site.location} · {site.availability}
              </span>
            </div>

            <div className="mt-7">
              <Link
                href="/about#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-glow-sm transition-all duration-300 hover:shadow-glow hover:brightness-110"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="eyebrow mb-5">Sitemap</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#contact"
                  className="link-underline text-muted hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Clients */}
          <div>
            <h3 className="eyebrow mb-5">Trusted by</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {clients.map((client) => (
                <LogoChip
                  key={client.name}
                  client={client}
                  imgClass="h-5"
                  className="px-3 py-2.5"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Designed &amp; built in Port Moresby, PNG.</p>
        </div>
      </div>
    </footer>
  );
}
