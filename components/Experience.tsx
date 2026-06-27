"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Calendar, GraduationCap, Languages } from "lucide-react";

type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  tag: string;
  bullets: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Fullstack Developer — BuildSafe",
    org: "Academic Capstone Project",
    location: "Barranquilla, Atlántico",
    period: "Jan 2025 – Jun 2025",
    tag: "Academic Project",
    bullets: [
      "Built a web platform to monitor PPE (Personal Protective Equipment) use on construction sites using React, Node.js and Express.",
      "Integrated a Python/Flask AI service running YOLOv11 for automatic image-based PPE detection.",
      "Implemented user management and interactive dashboards backed by MySQL, with media stored on Cloudinary, under agile delivery.",
    ],
  },
  {
    role: "Fullstack Developer — TiendaYa",
    org: "Academic Project",
    location: "Barranquilla, Atlántico",
    period: "Jun 2024 – Dec 2024",
    tag: "Academic Project",
    bullets: [
      "Developed an e-commerce platform with React, Node.js and Express aimed at digitizing small local stores in Barranquilla.",
      "Integrated RESTful services with a MySQL database to manage products, orders and store accounts.",
      "Focused on digital inclusion, designing a simple flow for shop owners with little prior tech experience.",
    ],
  },
  {
    role: "Fullstack Developer — TransporMap",
    org: "Academic Project",
    location: "Barranquilla, Atlántico",
    period: "Jun 2023 – Dec 2023",
    tag: "Academic Project",
    bullets: [
      "Designed and built a Java application that displays real-time road conditions for transport operators.",
      "Implemented geolocation features and a user-reporting system for hazards and obstructions.",
      "Optimized queries against an Oracle database to keep the live map responsive.",
    ],
  },
];

const COMPLEMENTARY = [
  {
    title: "Networking Basics",
    org: "Cisco Networking Academy",
    date: "Jun 2026",
    tag: "Certificate",
  },
  {
    title: "Database Administrator Course",
    org: "Capacítate para el Empleo, Barranquilla",
    date: "Sep 2025",
    tag: "Certificate",
  },
  {
    title: "Basic Computing Course",
    org: "Capacítate para el Empleo, Barranquilla",
    date: "Mar 2025",
    tag: "Certificate",
  },
  {
    title: "Administrative Assistant Technician",
    org: "CODETEC, Barranquilla",
    date: "Dec 2021",
    tag: "Technical Program",
  },
];

/**
 * Timeline strategy: a single continuous line runs down the left side of the
 * entire list container (position: absolute, top-0 to bottom-0 on the wrapper).
 * Each item only contributes its dot — no per-item line segment, so there are
 * no gaps or overflows between cards regardless of card height.
 */
function TimelineList({
  children,
  color = "signal",
}: {
  children: React.ReactNode;
  color?: "signal" | "pulse";
}) {
  return (
    <div className="relative pl-8">
      {/* single continuous line for the whole list */}
      <span
        className={`absolute left-[5px] top-5 bottom-5 w-px ${
          color === "pulse" ? "bg-pulse/25" : "bg-signal/25"
        }`}
      />
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function TimelineDot({ color = "signal" }: { color?: "signal" | "pulse" }) {
  return (
    <span
      className={`absolute -left-8 top-5 h-3 w-3 rounded-full border-2 bg-base ${
        color === "pulse" ? "border-pulse" : "border-signal"
      }`}
    />
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <TimelineDot color="signal" />
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full rounded-xl border border-line bg-surface p-5 text-left transition-colors hover:border-signal/40"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-base font-semibold text-ink">{item.role}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={13} /> {item.location}
            </p>
          </div>
          <ChevronDown
            size={18}
            className={`mt-1 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="font-medium text-sm text-ink">{item.org}</span>
          <span className="rounded-full border border-line bg-surface2 px-2 py-0.5 font-mono text-xs text-signal">
            {item.tag}
          </span>
        </div>
        <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-muted">
          <Calendar size={12} /> {item.period}
        </p>

        {open && (
          <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm leading-relaxed text-muted">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </button>
    </div>
  );
}

export default function ExperienceEducation() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">

        {/* ── EXPERIENCE ── */}
        <div id="experience">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Experience</span>
            <span className="eyebrow-line h-px flex-1" />
          </div>

          <TimelineList color="signal">
            {EXPERIENCE.map((item) => (
              <ExperienceCard key={item.role} item={item} />
            ))}
          </TimelineList>
        </div>

        {/* ── EDUCATION ── */}
        <div id="education">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Education</span>
            <span className="eyebrow-line h-px flex-1" />
          </div>

          <TimelineList color="pulse">

            {/* Systems Engineering */}
            <div className="relative">
              <TimelineDot color="pulse" />
              <div className="rounded-xl border border-line bg-surface p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface2 text-pulse">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">Systems Engineering</h3>
                    <p className="text-sm text-ink/80">Universidad Simón Bolívar</p>
                  </div>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={13} /> Barranquilla, Atlántico
                </p>
                <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted">
                  <Calendar size={12} /> Feb 2022 – Present
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-line bg-surface2 px-2 py-0.5 font-mono text-xs text-pulse">
                    Bachelor&apos;s Degree
                  </span>
                  <span className="rounded-full border border-line bg-surface2 px-2 py-0.5 font-mono text-xs text-signal">
                    10th Semester · In Progress
                  </span>
                </div>
              </div>
            </div>

            {/* English — Foreign Languages Program */}
            <div className="relative">
              <TimelineDot color="pulse" />
              <div className="rounded-xl border border-line bg-surface p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface2 text-pulse">
                    <Languages size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">English</h3>
                    <p className="text-sm text-ink/80">Foreign Languages Program · Universidad Simón Bolívar</p>
                  </div>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={13} /> Barranquilla, Atlántico
                </p>
                <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted">
                  <Calendar size={12} /> Jul 2022 – Jun 2025
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-line bg-surface2 px-2 py-0.5 font-mono text-xs text-pulse">
                    Language Certificate
                  </span>
                  <span className="rounded-full border border-line bg-surface2 px-2 py-0.5 font-mono text-xs text-signal">
                    B2 Level
                  </span>
                </div>
              </div>
            </div>

            {/* Complementary Training */}
            <div className="relative">
              <TimelineDot color="pulse" />
              <div className="rounded-xl border border-line bg-surface p-5">
                <h3 className="font-display text-base font-semibold text-ink">Complementary Training</h3>
                <ul className="mt-3 space-y-3">
                  {COMPLEMENTARY.map((c) => (
                    <li key={c.title} className="border-t border-line pt-3 first:border-t-0 first:pt-0">
                      <p className="text-sm font-medium text-ink">{c.title}</p>
                      <p className="text-sm text-muted">{c.org}</p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-muted">{c.date}</span>
                        <span className="rounded-full border border-line bg-surface2 px-2 py-0.5 font-mono text-xs text-pulse">
                          {c.tag}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </TimelineList>
        </div>

      </div>
    </section>
  );
}
