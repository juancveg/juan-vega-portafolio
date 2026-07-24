"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import {
  Puzzle,
  MessageCircle,
  Shuffle,
  Users,
  Search,
  Lightbulb,
  Globe,
  Network,
  Router,
  GitBranch,
  Database,
  Terminal,
  Monitor,
  GitMerge,
} from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit,
  SiGithub,
  SiPython,
  SiLinux,
  SiWindows,
} from "react-icons/si";

type AnyIcon = ComponentType<any>;

const SOFT_SKILLS: { icon: AnyIcon; title: string; description: string }[] = [
  {
    icon: Puzzle,
    title: "Problem Solving",
    description: "Identifying root causes quickly and finding clear, practical solutions under pressure.",
  },
  {
    icon: MessageCircle,
    title: "Assertive Communication",
    description: "Expressing ideas and concerns clearly, directly, and respectfully in both Spanish and English.",
  },
  {
    icon: Shuffle,
    title: "Adaptability",
    description: "Adjusting to new situations, changing priorities, and unfamiliar environments without losing focus.",
  },
  {
    icon: Users,
    title: "Teamwork & Collaboration",
    description: "Contributing effectively within diverse teams, sharing responsibility and supporting shared goals.",
  },
  {
    icon: Search,
    title: "Attention to Detail",
    description: "Careful and methodical in diagnosing faults, reviewing configurations, and documenting technical work.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Proactively seeking new knowledge, staying current, and applying what I learn to real situations.",
  },
];

const TECH_CATEGORIES: { title: string; items: { icon: AnyIcon; label: string; tooltip?: boolean }[] }[] = [
  {
    title: "Networking & Protocols",
    items: [
      { icon: Globe, label: "TCP/IP" },
      { icon: Network, label: "VLANs / 802.1Q" },
      { icon: Router, label: "Routing & Switching" },
      { icon: GitBranch, label: "Subnetting / VLSM" },
    ],
  },
  {
    title: "Network Tools & Systems",
    items: [
      { icon: Router, label: "Cisco Packet Tracer", tooltip: true },
      { icon: Database, label: "Oracle VirtualBox" },
      { icon: Network, label: "Scapy" },
      { icon: SiPython, label: "Python" },
    ],
  },
  {
    title: "OS & Infrastructure",
    items: [
      { icon: SiWindows, label: "Windows Server" },
      { icon: SiLinux, label: "Linux CLI" },
      { icon: SiGit, label: "Git" },
      { icon: SiGithub, label: "GitHub" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { icon: SiReact, label: "React.js" },
      { icon: SiJavascript, label: "JavaScript" },
      { icon: SiHtml5, label: "HTML5" },
      { icon: SiTailwindcss, label: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiExpress, label: "Express" },
      { icon: SiMysql, label: "MySQL" },
      { icon: Database, label: "Oracle" },
    ],
  },
];

export default function Capabilities() {
  const [tab, setTab] = useState<"soft" | "tech">("soft");

  return (
    <section id="toolkit" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Toolkit</span>
          <span className="eyebrow-line h-px flex-1" />
        </div>

        <div className="mb-10 flex gap-6 border-b border-line font-display text-sm sm:text-base">
          <button
            onClick={() => setTab("soft")}
            className={`-mb-px border-b-2 pb-3 transition-colors ${
              tab === "soft" ? "border-signal text-signal" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            Soft Skills
          </button>
          <button
            onClick={() => setTab("tech")}
            className={`-mb-px border-b-2 pb-3 transition-colors ${
              tab === "tech" ? "border-signal text-signal" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            Tech Stack
          </button>
        </div>

        {tab === "soft" ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SOFT_SKILLS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="dot-grid flex min-h-[172px] flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-signal/40"
              >
                <div className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface2 text-signal">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="flex min-h-[160px] flex-col rounded-xl border border-line bg-surface p-5"
              >
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {category.items.map(({ icon: Icon, label, tooltip }) => (
                    <div
                      key={label}
                      className="group relative flex items-center gap-2 rounded-lg border border-line bg-surface2 px-3 py-2 transition-colors hover:border-signal/40"
                    >
                      <Icon size={15} className="shrink-0 text-signal" />
                      <span className={`text-xs text-ink${tooltip ? " truncate" : ""}`}>
                        {label}
                      </span>
                      {tooltip && (
                        <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-line bg-surface px-3 py-1.5 text-xs text-ink opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                          {label}
                          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-line" />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
