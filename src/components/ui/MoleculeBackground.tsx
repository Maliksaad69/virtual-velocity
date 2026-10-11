"use client";

import { useEffect, useRef } from "react";

interface Atom {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
  glowColor: string;
  isNucleus: boolean;
}

const ATOM_COLORS = [
  { color: "#00A29F", glow: "rgba(0, 162, 159, 0.45)" },
  { color: "#22bcba", glow: "rgba(34, 188, 186, 0.35)" },
  { color: "#8ee4e2", glow: "rgba(142, 228, 226, 0.30)" },
  { color: "#008280", glow: "rgba(0, 130, 128, 0.40)" },
];

export const MoleculeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameIdRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const isMobile = width < 768;
    const atomCount = isMobile ? 26 : 64;
    const maxBondDistance = isMobile ? 110 : 145;

    // Device Pixel Ratio scaling for crisp non-blurry canvas on Retina
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setupCanvasSize = () => {
      if (!container || !canvas) return;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setupCanvasSize();

    // Initialize atoms with random positions and velocities
    const atoms: Atom[] = [];
    for (let i = 0; i < atomCount; i++) {
      const colorScheme = ATOM_COLORS[i % ATOM_COLORS.length];
      const isNucleus = i % 7 === 0;
      const baseRadius = isNucleus ? 4 + Math.random() * 2.5 : 2 + Math.random() * 2;

      atoms.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.55),
        vy: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.55),
        radius: baseRadius,
        baseRadius,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        color: colorScheme.color,
        glowColor: colorScheme.glow,
        isNucleus,
      });
    }

    // Mouse movement listener
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });

    // Handle window resize
    const onResize = () => {
      setupCanvasSize();
    };
    window.addEventListener("resize", onResize, { passive: true });

    // IntersectionObserver to pause rendering when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );
    observer.observe(container);

    // Animation Loop
    const render = () => {
      if (isVisibleRef.current) {
        ctx.clearRect(0, 0, width, height);

        // 1. Draw Molecule Connecting Bonds (Lines)
        for (let i = 0; i < atoms.length; i++) {
          const a = atoms[i];
          for (let j = i + 1; j < atoms.length; j++) {
            const b = atoms[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxBondDistance) {
              const alpha = (1 - dist / maxBondDistance) * 0.32;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 162, 159, ${alpha})`;
              ctx.lineWidth = dist < maxBondDistance * 0.4 ? 1.4 : 0.8;
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }

          // Optional bond to mouse cursor if nearby
          if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
            const dx = a.x - mouseRef.current.x;
            const dy = a.y - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              const alpha = (1 - dist / 150) * 0.45;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(34, 188, 186, ${alpha})`;
              ctx.lineWidth = 1.2;
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
              ctx.stroke();
            }
          }
        }

        // 2. Update and Draw Atoms (Nodes)
        for (let i = 0; i < atoms.length; i++) {
          const atom = atoms[i];

          // Position step
          atom.x += atom.vx;
          atom.y += atom.vy;

          // Gentle edge wrap with soft margin
          if (atom.x < -10) atom.x = width + 10;
          else if (atom.x > width + 10) atom.x = -10;

          if (atom.y < -10) atom.y = height + 10;
          else if (atom.y > height + 10) atom.y = -10;

          // Pulse breathing
          atom.pulsePhase += atom.pulseSpeed;
          atom.radius =
            atom.baseRadius + Math.sin(atom.pulsePhase) * (atom.isNucleus ? 1.0 : 0.4);

          // Draw outer atom glow for nucleus
          if (atom.isNucleus) {
            ctx.beginPath();
            ctx.arc(atom.x, atom.y, atom.radius * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = atom.glowColor;
            ctx.fill();
          }

          // Draw atom body
          ctx.beginPath();
          ctx.arc(atom.x, atom.y, atom.radius, 0, Math.PI * 2);
          ctx.fillStyle = atom.color;
          ctx.fill();

          // Subtle bright core highlight
          ctx.beginPath();
          ctx.arc(
            atom.x - atom.radius * 0.3,
            atom.y - atom.radius * 0.3,
            Math.max(1, atom.radius * 0.35),
            0,
            Math.PI * 2
          );
          ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
          ctx.fill();
        }
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* Soft Ambient Radial Glow Behind Molecule Constellation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,162,159,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-emerald-100/40 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-emerald-100/40 blur-[100px] pointer-events-none" />

      {/* High-Resolution Dynamic Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none opacity-85"
      />
    </div>
  );
};
