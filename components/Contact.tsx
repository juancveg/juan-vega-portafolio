import type { ComponentType } from "react";
import { Mail, Linkedin, Github, ArrowUpRight, Circle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: ComponentType<any>;
  accent: string;
};

const CONTACTS: ContactItem[] = [
  {
    label: "Email",
    value: "juanvegarojano@hotmail.com",
    href: "mailto:juanvegarojano@hotmail.com",
    icon: Mail,
    accent: "text-signal",
  },
  {
    label: "WhatsApp",
    value: "+57 300 785 4790",
    href: "https://wa.me/573007854790",
    icon: FaWhatsapp,
    accent: "text-pulse",
  },
  {
    label: "LinkedIn",
    value: "juan-vega-4b1b1233a",
    href: "https://www.linkedin.com/in/juancvegarojano",
    icon: Linkedin,
    accent: "text-signal",
  },
  {
    label: "GitHub",
    value: "juancveg",
    href: "https://github.com/juancveg",
    icon: Github,
    accent: "text-ink",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Contact</span>
          <span className="eyebrow-line h-px flex-1" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {CONTACTS.map(({ label, value, href, icon: Icon, accent }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-signal/40"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface2 ${accent}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
                  <p className="mt-0.5 text-sm font-medium text-ink">{value}</p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
              />
            </a>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-pulse/30 bg-pulse/5 px-5 py-4">
          <Circle size={10} className="fill-pulse text-pulse animate-pulseGlow" />
          <p className="text-sm text-muted">
            <span className="font-medium text-ink">Open to new opportunities and collaborations.</span>{" "}
            Reach out through any of the channels above — I usually reply fastest on WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
