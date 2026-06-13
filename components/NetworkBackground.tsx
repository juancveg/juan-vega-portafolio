"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
  pulseSpeed: number;
  accent: boolean;
};

/**
 * Animated network topology: drifting nodes connected by lines that
 * brighten as nodes draw near, evoking a live network map / system graph.
 * Respects prefers-reduced-motion by rendering a single static frame.
 */
export default function NetworkBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let animationId = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const LINK_DISTANCE = 170;

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(18, Math.min(60, Math.floor((width * height) / 22000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        accent: Math.random() < 0.12,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.35;
            ctx!.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const glow = 0.5 + Math.sin(n.pulse) * 0.5;
        const color = n.accent ? "52, 211, 153" : "103, 232, 249";
        ctx!.beginPath();
        ctx!.fillStyle = `rgba(${color}, ${0.35 + glow * 0.5})`;
        ctx!.arc(n.x, n.y, n.r + glow * 0.8, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      draw();
      animationId = requestAnimationFrame(step);
    }

    resize();
    if (prefersReduced) {
      draw();
    } else {
      step();
    }

    const onResize = () => {
      resize();
      if (prefersReduced) draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
