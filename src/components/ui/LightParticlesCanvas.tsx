"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export const LightParticlesCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Light, airy particle count for elegant sky flow
    const particleCount = Math.min(Math.floor((width * height) / 13000), 75);
    const particles: Particle[] = [];
    
    // Soft, delicate sky palette (light indigo, soft sky blue, translucent slate & silver)
    const colors = [
      "rgba(99, 102, 241, 0.45)",   // Soft Indigo
      "rgba(56, 189, 248, 0.40)",   // Light Sky Blue
      "rgba(148, 163, 184, 0.42)",  // Soft Slate
      "rgba(203, 213, 225, 0.38)",  // Light Silver
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: Math.random() * 0.7 + 0.35, // Ambient downward falling sky velocity
        size: Math.random() * 1.5 + 1.2, // Delicate light particle sizes (1.2px - 2.7px)
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;
    let lastScrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Scroll Parallax calculation (downward flow when scrolling down)
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // 1. Draw delicate connection lines between particles (Sky Connectors)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // 2. Cursor connection line (Light Sky Blue beam)
        if (mouseX > 0 && mouseY > 0) {
          const mdx = particles[i].x - mouseX;
          const mdy = particles[i].y - mouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 160) {
            const malpha = (1 - mdist / 160) * 0.45;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${malpha})`;
            ctx.lineWidth = 1.0;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }
        }
      }

      // 3. Render and update falling particles with scroll acceleration
      particles.forEach((p) => {
        p.x += p.vx;
        // Move downwards + scroll delta parallax
        p.y += p.vy + scrollDelta * 0.4;

        // Wrap around top/bottom seamlessly like a continuous sky stream
        if (p.y > height + 20) {
          p.y = -15;
          p.x = Math.random() * width;
        } else if (p.y < -20) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Mouse interaction displacement
        if (mouseX > 0 && mouseY > 0) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const mouseDist = Math.sqrt(dx * dx + dy * dy);
          if (mouseDist < 110) {
            const force = (110 - mouseDist) / 110;
            p.x += (dx / mouseDist) * force * 1.4;
            p.y += (dy / mouseDist) * force * 1.4;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-20 opacity-80"
    />
  );
};
