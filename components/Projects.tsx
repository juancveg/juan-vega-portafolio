"use client";

import { useState } from "react";
import { Github, HardHat, ShoppingCart, Map as MapIcon } from "lucide-react";

type Project = {
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  categories: string[];
  github: string;
  icon: typeof HardHat;
};

const CATEGORIES = ["All", "AI & Computer Vision", "Web Development", "Geolocation"];

const PROJECTS: Project[] = [
  {
    title: "BuildSafe",
    description:
      "Smart safety platform that monitors Personal Protective Equipment (PPE) compliance on construction sites in real time.",
    highlight: "Improving safety on construction projects",
    tags: ["React", "Node.js", "Express", "Python", "Flask", "YOLOv11", "MySQL", "Cloudinary"],
    categories: ["AI & Computer Vision", "Web Development"],
    github: "https://github.com/jhanhrndz/buildsafe-frontend",
    icon: HardHat,
  },
  {
    title: "TiendaYa",
    description:
      "E-commerce platform that helps small local shops in Barranquilla go digital, from product listings to order management.",
    highlight: "Enhancing local e-commerce and digital inclusion",
    tags: ["React", "Node.js", "Express", "MySQL", "REST API"],
    categories: ["Web Development"],
    github: "https://github.com/jhanhrndz/tiendaYa-project",
    icon: ShoppingCart,
  },
  {
    title: "TransporMap",
    description:
      "Java application that lets transport operators and users report road hazards and obstructions on a live map.",
    highlight: "Reshaping urban mobility with real-time data",
    tags: ["Java", "Oracle", "Geolocation", "Maps"],
    categories: ["Geolocation", "Web Development"],
    github: "https://github.com/jhanhrndz/transpormap",
    icon: MapIcon,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = PROJECTS.filter((p) => filter === "All" || p.categories.includes(filter));

  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Projects</span>
          <span className="eyebrow-line h-px flex-1" />
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-signal/40"
              >
                {/*
                  Image placeholder — 16:9 cover image.
                  Replace this div with:
                  <img src="/projects/your-image.jpg" alt="..." className="h-full w-full object-cover" />
                  once your generated image is ready (recommended 1200x675px).
                */}
                <div className="dot-grid relative flex aspect-video items-center justify-center bg-surface2">
                  <Icon size={40} className="text-signal/70" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-surface2 px-2 py-0.5 font-mono text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 flex items-center gap-1.5 text-sm text-pulse">
                    <span className="h-1 w-1 rounded-full bg-pulse" /> {project.highlight}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-line bg-surface2 px-3 py-1.5 text-sm text-ink transition-colors hover:border-signal/50 hover:text-signal"
                  >
                    <Github size={15} /> GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
