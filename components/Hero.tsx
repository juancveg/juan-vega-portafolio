import { Linkedin, Github, Mail, Circle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import NetworkBackground from "./NetworkBackground";

export default function Hero() {
  return (
    <section id="profile" className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0">
        <NetworkBackground className="h-full w-full opacity-70" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center sm:py-28">
        {/* Photo slot — drop your portrait at /public/profile.jpg */}
        <div className="relative mb-8 h-36 w-36 overflow-hidden rounded-full border-2 border-signal/40 bg-surface shadow-[0_0_40px_-10px_rgba(34,211,238,0.6)] sm:h-44 sm:w-44">
          <img
            src="/profile.png"
            alt="Portrait of Juan Carlos Vega Rojano"
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl">
          Juan Vega
        </h1>

        <p className="mt-4 font-mono text-sm uppercase tracking-[0.2em] sm:text-base">
          <span className="text-ink">Systems Engineering Student</span>{" "}
          <span className="text-muted">|</span>{" "}
          <span className="text-signal">Networks</span>
          <span className="text-ink">,</span>{" "}
          <span className="text-ink">Cloud</span>
          <span className="text-ink"> &amp; </span>
          <span className="text-pulse">Segurity</span>
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Systems Engineering student (10th semester) with 2+ years of experience in
          customer service and independent tech operations. I lead academic projects
          in <span className="text-ink">fullstack development</span>,{" "}
          <span className="text-ink">AI-powered computer vision</span> and{" "}
          <span className="text-ink">e-commerce platforms</span>, designing database,
          geolocation and digital-inclusion solutions with{" "}
          <span className="text-signal">React</span>,{" "}
          <span className="text-signal">Node.js</span>,{" "}
          <span className="text-pulse">Python</span> and{" "}
          <span className="text-pulse">Java</span>.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-pulse/30 bg-pulse/10 px-4 py-1.5 font-mono text-sm text-pulse">
          <Circle size={8} className="fill-pulse text-pulse animate-pulseGlow" />
          Available for opportunities
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/juan-vega-4b1b1233a"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-signal/50 hover:text-signal"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/juancveg"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-signal/50 hover:text-signal"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="mailto:juanvegarojano@hotmail.com"
            className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-signal/50 hover:text-signal"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://wa.me/573007854790"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-pulse/50 hover:text-pulse"
          >
            <FaWhatsapp size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
