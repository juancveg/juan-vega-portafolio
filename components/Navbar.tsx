"use client";

import { useState } from "react";
import { Menu, X, Network } from "lucide-react";

const LINKS = [
  { href: "#profile", label: "Profile" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-base/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#profile" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface text-signal">
            <Network size={16} />
          </span>
          Juan Vega
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted transition-colors hover:text-signal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="rounded-lg border border-line p-2 text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line px-6 py-4 md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2 font-mono text-sm text-muted transition-colors hover:bg-surface hover:text-signal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
