"use client";

import { GraduationCap, Languages, MapPin, Calendar } from "lucide-react";

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
    title: "Administrative Assistant",
    org: "CODETEC, Barranquilla",
    date: "Dec 2021",
    tag: "Technical Program",
  },
];

function TimelineList({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-[5px] top-5 bottom-5 w-px bg-pulse/25" />
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function TimelineDot() {
  return (
    <span className="absolute -left-8 top-5 h-3 w-3 rounded-full border-2 bg-base border-pulse" />
  );
}

export default function Education() {
  return (
    <section id="education" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-10 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Education</span>
          <span className="eyebrow-line h-px flex-1" />
        </div>

        <TimelineList>

          {/* Row 1 — degree + english side by side */}
          <div className="grid gap-4 sm:grid-cols-2">

            {/* Systems Engineering */}
            <div className="relative">
              <TimelineDot />
              <div className="rounded-xl border border-line bg-surface p-5 h-full">
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

            {/* English — EF SET Certificate */}
            <div className="rounded-xl border border-line bg-surface p-5 h-full">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface2 text-pulse">
                  <Languages size={18} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">English — EF SET Certificate</h3>
                  <p className="text-sm text-ink/80">EF Standard English Test</p>
                </div>
              </div>
              <p className="mt-3 flex items-center gap-1.5 font-mono text-xs text-muted">
                <Calendar size={12} /> Jul 15, 2026
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-line bg-surface2 px-2 py-0.5 font-mono text-xs text-pulse">
                  B2 Upper Intermediate
                </span>
                <span className="rounded-full border border-line bg-surface2 px-2 py-0.5 font-mono text-xs text-signal">
                  58/100 · Reading C2
                </span>
              </div>
            </div>
          </div>

          {/* Row 2 — complementary training 2x2 grid */}
          <div className="relative">
            <TimelineDot />
            <div className="rounded-xl border border-line bg-surface p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-4">Complementary Training</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {COMPLEMENTARY.map((c) => (
                  <div key={c.title} className="rounded-lg border border-line bg-surface2 p-4">
                    <p className="text-sm font-medium text-ink">{c.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{c.org}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-muted">{c.date}</span>
                      <span className="rounded-full border border-line bg-surface px-2 py-0.5 font-mono text-xs text-pulse">
                        {c.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </TimelineList>
      </div>
    </section>
  );
}
