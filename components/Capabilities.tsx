"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import {
  Puzzle,
  MessageCircle,
  Shuffle,
  Users,
  Heart,
  Workflow,
  ScanEye,
  Database,
  Network,
  Router,
  Globe,
} from "lucide-react";
import {
  SiPython,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiCloudinary,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type AnyIcon = ComponentType<any>;

const SOFT_SKILLS: { icon: AnyIcon; title: string; description: string }[] = [
  {
    icon: Puzzle,
    title: "Problem Solving",
    description: "Breaking down technical challenges and finding practical, working solutions under real constraints.",
  },
  {
    icon: MessageCircle,
    title: "Assertive Communication",
    description: "Explaining technical ideas clearly to clients, teammates and end users, in Spanish and English (B2).",
  },
  {
    icon: Shuffle,
    title: "Adaptability",
    description: "Comfortable switching between stacks, roles and real-time requirements without losing pace.",
  },
  {
    icon: Users,
    title: "Teamwork & Collaboration",
    description: "Working across frontend, backend and AI sub-teams to ship academic projects on shared timelines.",
  },
  {
    icon: Heart,
    title: "Customer Focus & Empathy",
    description: "Two+ years guiding users through interactive tech in real time, sustaining a 100% satisfaction record.",
  },
  {
    icon: Workflow,
    title: "Agile Methodologies",
    description: "Comfortable with iterative delivery, user validation cycles and confidentiality of sensitive data.",
  },
];

const TECH_CATEGORIES: { title: string; items: { icon: AnyIcon; label: string }[] }[] = [
  {
    title: "Frontend Development",
    items: [
      { icon: SiReact, label: "React" },
      { icon: SiJavascript, label: "JavaScript" },
      { icon: SiHtml5, label: "HTML5" },
      { icon: SiTailwindcss, label: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiExpress, label: "Express" },
      { icon: FaJava, label: "Java" },
      { icon: SiFlask, label: "Flask" },
    ],
  },
  {
    title: "AI & Computer Vision",
    items: [
      { icon: SiPython, label: "Python" },
      { icon: ScanEye, label: "YOLOv11" },
      { icon: Network, label: "Scapy" },
    ],
  },
  {
    title: "Databases",
    items: [
      { icon: SiMysql, label: "MySQL" },
      { icon: Database, label: "Oracle" },
    ],
  },
  {
    title: "Networking & Systems",
    items: [
      { icon: Globe, label: "TCP/IP" },
      { icon: Router, label: "Cisco Packet Tracer" },
      { icon: Network, label: "VLANs / 802.1Q" },
      { icon: Database, label: "Oracle VirtualBox" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { icon: SiGit, label: "Git" },
      { icon: SiGithub, label: "GitHub" },
      { icon: SiCloudinary, label: "Cloudinary" },
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
          /* Soft Skills — fixed min-h so all 6 cards are the same height */
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
          /* Tech Stack — uniform min-h, items in 2-col grid inside each card */
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
                  {category.items.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="group relative flex items-center gap-2 rounded-lg border border-line bg-surface2 px-3 py-2 text-sm text-ink transition-colors hover:border-signal/40"
                    >
                      <Icon size={15} className="shrink-0 text-signal" />
                      <span className="truncate text-xs">{label}</span>
                      {/* Tooltip — only visible when text is truncated */}
                      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-line bg-surface px-3 py-1.5 text-xs text-ink opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                        {label}
                        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-line" />
                      </span>
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
