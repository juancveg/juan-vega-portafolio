"use client";

import { useState } from "react";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  categories: string[];
  github: string;
  image: string;
};

const CATEGORIES = [
  "All",
  "AI",
  "Computer Vision",
  "Web Development",
  "Networking",
  "Geolocation",
];

const PROJECTS: Project[] = [
  {
    title: "TechNova — Corporate VLAN Lab",
    description:
      "Cisco Packet Tracer lab implementing a 3-VLAN corporate network with inter-VLAN routing, VLSM, DHCP, DNS, Port Security, and ACLs.",
    highlight: "Applying enterprise networking concepts end-to-end",
    tags: ["Cisco Packet Tracer", "VLANs", "802.1Q", "VLSM", "DHCP", "ACLs", "Port Security", "DNS"],
    categories: ["Networking"],
    github: "https://github.com/juancveg/technova-vlan-lab",
    image: "/projects/technova-vlan.png",
  },
  {
    title: "Network Analyzer Dashboard",
    description:
      "Scans a local network via ARP and ICMP, calculates subnets with VLSM, and visualizes the topology as an interactive dashboard.",
    highlight: "Making networking theory concrete and measurable",
    tags: ["Python", "Scapy", "ARP", "ICMP", "VLSM", "Subnetting", "HTML", "Cisco"],
    categories: ["Networking"],
    github: "https://github.com/juancveg/Network-Analyzer-Dashboard",
    image: "/projects/network-analyzer.png",
  },
  {
    title: "BuildSafe",
    description:
      "Web platform that monitors PPE compliance on construction sites in real time using AI-powered computer vision.",
    highlight: "Improving safety on construction projects",
    tags: ["React", "Node.js", "Express", "Python", "Flask", "YOLOv11", "MySQL", "Cloudinary"],
    categories: ["AI", "Computer Vision", "Web Development"],
    github: "https://github.com/jhanhrndz/buildsafe-frontend",
    image: "/projects/buildsafe.png",
  },
  {
    title: "TiendaYa",
    description:
      "E-commerce platform that helps small local shops in Barranquilla go digital, managing products and orders online.",
    highlight: "Enhancing local e-commerce and digital inclusion",
    tags: ["React", "Node.js", "Express", "MySQL", "REST API"],
    categories: ["Web Development"],
    github: "https://github.com/jhanhrndz/tiendaYa-project",
    image: "/projects/tiendaya.png",
  },
  {
    title: "TransporMap",
    description:
      "Java app that lets transport operators report road hazards and obstructions in real time using geolocation.",
    highlight: "Reshaping urban mobility with real-time data",
    tags: ["Java", "Oracle", "Geolocation", "Maps"],
    categories: ["Geolocation", "Web Development"],
    github: "https://github.com/jhanhrndz/transpormap",
    image: "/projects/transpormap.png",
  },
];

const PER_PAGE = 3;

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(0);

  const filtered = PROJECTS.filter(
    (p) => filter === "All" || p.categories.includes(filter)
  );

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  function handleFilter(cat: string) {
    setFilter(cat);
    setPage(0);
  }

  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Projects
          </span>
          <span className="eyebrow-line h-px flex-1" />
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${
                filter === cat
                  ? "border-signal/60 bg-signal/10 text-signal"
                  : "border-line bg-surface text-muted hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards — fixed height on each card keeps size consistent across pages */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <div
              key={project.title}
              className="flex h-[480px] flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-signal/40"
            >
              <div className="relative aspect-video shrink-0 overflow-hidden bg-surface2">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-display text-base font-semibold leading-snug text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-surface2 px-2 py-0.5 font-mono text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 6 && (
                      <span
                        className="relative cursor-default rounded-full border border-line bg-surface2 px-2 py-0.5 font-mono text-xs text-muted group"
                      >
                        +{project.tags.length - 6}
                        <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-line bg-surface px-3 py-1.5 text-xs text-ink opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                          {project.tags.slice(6).join(" · ")}
                          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-line" />
                        </span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="flex items-center gap-1.5 text-sm text-pulse">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-pulse" />
                    {project.highlight}
                  </p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-line bg-surface2 px-3 py-1.5 text-sm text-ink transition-colors hover:border-signal/50 hover:text-signal"
                  >
                    <Github size={15} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination — only shown when more than one page */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-signal/50 hover:text-signal disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={14} /> Prev
            </button>

            <span className="font-mono text-xs text-muted">
              {page + 1} / {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-signal/50 hover:text-signal disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
