"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Matter from "matter-js";
import { Sparkles } from "lucide-react";

interface BrandItem {
  src: string;
  name: string;
}

const BRANDS: BrandItem[] = [
  { src: "/All logo in SVG Format/pizza hut.svg", name: "Pizza Hut" },
  { src: "/All logo in SVG Format/Gloria Jeans logo.svg", name: "Gloria Jeans" },
  { src: "/All logo in SVG Format/Anta logo.svg", name: "Anta" },
  { src: "/All logo in SVG Format/Unied nations.svg", name: "United Nations" },
  { src: "/All logo in SVG Format/chaaye khana.svg", name: "Chaaye Khana" },
  { src: "/All logo in SVG Format/Blue world city.svg", name: "Blue World City" },
  { src: "/All logo in SVG Format/Red apple.svg", name: "Red Apple" },
  { src: "/All logo in SVG Format/Megazone logo.svg", name: "Megazone" },
  { src: "/All logo in SVG Format/wild wings logo.svg", name: "Wild Wings" },
  { src: "/All logo in SVG Format/chinaar.svg", name: "Chinaar" },
  { src: "/All logo in SVG Format/maple vista.svg", name: "Maple Vista" },
  { src: "/All logo in SVG Format/Glamar.svg", name: "Glamar" },
  { src: "/All logo in SVG Format/andaz.svg", name: "Andaz" },
  { src: "/All logo in SVG Format/ariston.svg", name: "Ariston" },
  { src: "/All logo in SVG Format/capital arena.svg", name: "Capital Arena" },
  { src: "/All logo in SVG Format/cresto.svg", name: "Cresto" },
  { src: "/All logo in SVG Format/de asthethic.svg", name: "De Aesthetic" },
  { src: "/All logo in SVG Format/desi chapter.svg", name: "Desi Chapter" },
  { src: "/All logo in SVG Format/Untitled-1.svg", name: "Galaxy Hayatabad" },
  { src: "/All logo in SVG Format/iplexmarketing.svg", name: "IPlex Marketing" },
  { src: "/All logo in SVG Format/kapacious.svg", name: "Kapacious" },
  { src: "/All logo in SVG Format/levante.svg", name: "Levante" },
  { src: "/All logo in SVG Format/media sniffers.svg", name: "Media Sniffers" },
  { src: "/All logo in SVG Format/Mughlai logo.svg", name: "Mughlai" },
  { src: "/All logo in SVG Format/Pamir.svg", name: "Pamir" },
  { src: "/All logo in SVG Format/shake wake.svg", name: "Shake Wake" },
  { src: "/All logo in SVG Format/slice and cone.svg", name: "Slice and Cone" },
  { src: "/All logo in SVG Format/TSL.svg", name: "TSL" },
  { src: "/All logo in SVG Format/revival.svg", name: "Revival" },
  { src: "/All logo in SVG Format/oxbite.svg", name: "Oxbite" },
];

export const BrandPhysicsBalls = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cleanupPhysicsRef = useRef<(() => void) | null>(null);
  const startLoopRef = useRef<(() => void) | null>(null);
  const stopLoopRef = useRef<(() => void) | null>(null);
  const hasTriggeredRef = useRef(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [ballRadius, setBallRadius] = useState(36);

  // Uniform circle radius: 110px diameter (radius 55) on desktop, 90px diameter (radius 45) on mobile
  const getRadius = useCallback(() => {
    if (typeof window === "undefined") return 55;
    const w = window.innerWidth;
    if (w < 640) return 45; // 90px circle on mobile
    if (w < 1024) return 50; // 100px circle on tablet
    return 55; // 110px circle on desktop
  }, []);

  const initPhysics = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clean up previous engine if any
    if (cleanupPhysicsRef.current) {
      cleanupPhysicsRef.current();
      cleanupPhysicsRef.current = null;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width <= 0 || height <= 0) return;

    const radius = getRadius();
    setBallRadius(radius);

    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 1.0, scale: 0.0012 },
      enableSleeping: true,
    });

    // Wall boundaries (Floor, Left, Right)
    const wallOptions: Matter.IChamferableBodyDefinition = {
      isStatic: true,
      restitution: 0.45,
      friction: 0.35,
    };

    const wallThickness = 120;
    const floor = Matter.Bodies.rectangle(
      width / 2,
      height + wallThickness / 2,
      width * 3,
      wallThickness,
      wallOptions
    );
    const leftWall = Matter.Bodies.rectangle(
      -wallThickness / 2,
      height / 2,
      wallThickness,
      height * 8,
      wallOptions
    );
    const rightWall = Matter.Bodies.rectangle(
      width + wallThickness / 2,
      height / 2,
      wallThickness,
      height * 8,
      wallOptions
    );

    Matter.Composite.add(engine.world, [floor, leftWall, rightWall]);

    // Create falling circular bodies for each brand
    const bodies: Matter.Body[] = BRANDS.map((_, i) => {
      const minX = radius + 20;
      const maxX = Math.max(width - radius - 20, minX + 10);
      const randomX = minX + Math.random() * (maxX - minX);
      // Drop staggered from above the box edge
      const randomY = -40 - (i * 26) - Math.random() * 40;

      const body = Matter.Bodies.circle(randomX, randomY, radius, {
        restitution: 0.55,
        friction: 0.3,
        frictionAir: 0.015,
        density: 0.002,
        angle: (Math.random() - 0.5) * 0.4,
      });

      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 2,
        y: Math.random() * 2,
      });

      return body;
    });

    Matter.Composite.add(engine.world, bodies);

    // Mouse / Touch Drag Constraint
    const mouse = Matter.Mouse.create(container);
    const typedMouse = mouse as unknown as {
      mousewheel: (e: WheelEvent) => void;
      mousemove: (e: MouseEvent | TouchEvent) => void;
      mousedown: (e: MouseEvent | TouchEvent) => void;
      mouseup: (e: MouseEvent | TouchEvent) => void;
    };

    // Detach default Matter.js wheel and touch listeners so page scrolling is never blocked
    mouse.element.removeEventListener("wheel", typedMouse.mousewheel);
    mouse.element.removeEventListener("touchmove", typedMouse.mousemove);
    mouse.element.removeEventListener("touchstart", typedMouse.mousedown);
    mouse.element.removeEventListener("touchend", typedMouse.mouseup);

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.Composite.add(engine.world, mouseConstraint);

    // Runner loop
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Render loop directly updating DOM transforms (GPU accelerated)
    let animationFrameId: number;
    let isRunning = true;
    let isInteracting = false;
    let idleFrames = 0;

    const wakeUp = () => {
      idleFrames = 0;
      if (!isRunning) {
        isRunning = true;
        Matter.Runner.run(runner, engine);
        animationFrameId = requestAnimationFrame(updateDOM);
      }
    };

    const updateDOM = () => {
      if (!isRunning) return;

      let maxSpeed = 0;
      for (let idx = 0; idx < bodies.length; idx++) {
        const body = bodies[idx];
        const el = ballElementsRef.current[idx];
        if (el) {
          const x = body.position.x - radius;
          const y = body.position.y - radius;
          const deg = (body.angle * 180) / Math.PI;
          el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${deg}deg)`;
        }
        if (body.speed > maxSpeed) {
          maxSpeed = body.speed;
        }
      }

      // Check if user is actively touching or dragging
      if (isInteracting || mouseConstraint.body) {
        idleFrames = 0;
      } else if (maxSpeed < 0.12) {
        // Balls have virtually stopped moving
        idleFrames++;
      } else {
        idleFrames = 0;
      }

      // Once balls have settled for 50 consecutive frames, pause RAF loop & physics engine to free 100% CPU/GPU
      if (idleFrames > 50) {
        isRunning = false;
        Matter.Runner.stop(runner);
        return;
      }

      animationFrameId = requestAnimationFrame(updateDOM);
    };

    animationFrameId = requestAnimationFrame(updateDOM);

    // Custom non-intrusive touch handling: only drag if touching a ball
    let activeTouch = false;
    const onTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-ball='true']")) {
        activeTouch = true;
        isInteracting = true;
        wakeUp();
        typedMouse.mousedown(e);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (activeTouch && mouseConstraint.body) {
        if (e.cancelable) e.preventDefault();
        wakeUp();
        typedMouse.mousemove(e);
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (activeTouch) {
        activeTouch = false;
        isInteracting = false;
        wakeUp();
        typedMouse.mouseup(e);
      }
    };

    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-ball='true']")) {
        isInteracting = true;
        wakeUp();
      }
    };

    const onPointerUp = () => {
      if (isInteracting) {
        isInteracting = false;
        wakeUp();
      }
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    container.addEventListener("touchcancel", onTouchEnd, { passive: true });
    container.addEventListener("mousedown", onPointerDown, { passive: true });
    window.addEventListener("mouseup", onPointerUp, { passive: true });

    // Pause physics & RAF when out of view to preserve 120fps smooth scrolling
    startLoopRef.current = () => {
      wakeUp();
      Matter.Runner.run(runner, engine);
    };

    stopLoopRef.current = () => {
      if (isRunning) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
        Matter.Runner.stop(runner);
      }
    };

    // Set cleanup
    cleanupPhysicsRef.current = () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("touchcancel", onTouchEnd);
      container.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mouseup", onPointerUp);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
    };
  }, [getRadius]);

  // Trigger when user reaches this section in view & pause when offscreen
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasTriggeredRef.current) {
            hasTriggeredRef.current = true;
            setHasTriggered(true);
            initPhysics();
          } else if (startLoopRef.current) {
            startLoopRef.current();
          }
        } else {
          if (stopLoopRef.current) {
            stopLoopRef.current();
          }
        }
      },
      {
        threshold: 0.05,
        rootMargin: "80px 0px 80px 0px",
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [initPhysics]);

  // Handle window resize cleanly
  useEffect(() => {
    const handleResize = () => {
      if (hasTriggeredRef.current) {
        initPhysics();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initPhysics]);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (cleanupPhysicsRef.current) {
        cleanupPhysicsRef.current();
        cleanupPhysicsRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative w-full bg-white text-zinc-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto border-t border-zinc-200 select-none">
      {/* Header section - clean without drag/drop buttons */}
      <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-zinc-200">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-600 font-extrabold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>OUR CLIENTS & PARTNERS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-black text-zinc-950 uppercase tracking-tight leading-none">
          Trusted by <span className="text-emerald-600">Ambitious Brands.</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-black max-w-xl font-normal leading-relaxed">
          From high-growth scaleups to international enterprises, we engineer measurable momentum for brands worldwide.
        </p>
      </div>

      {/* Interactive Physics Arena Box - Increased height on mobile */}
      <div
        ref={containerRef}
        className="relative w-full h-[320px] sm:h-[340px] lg:h-[360px] rounded-3xl overflow-hidden border-2 border-zinc-200 bg-gradient-to-b from-zinc-50/70 via-white to-zinc-100/90 shadow-inner"
        style={{ touchAction: "pan-y" }}
      >
        {/* Subtle decorative grid backdrop */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#18181b 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Scaled watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden px-2">
          <span className="font-outfit font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.2em] sm:tracking-[0.3em] uppercase text-emerald-500/20 whitespace-nowrap text-center w-full">
            VELOCITY
          </span>
        </div>

        {/* Physics balls rendered as crisp DOM elements */}
        {BRANDS.map((brand, idx) => (
          <div
            key={brand.name}
            data-ball="true"
            ref={(el) => {
              ballElementsRef.current[idx] = el;
            }}
            className={`absolute top-0 left-0 rounded-full bg-white border border-zinc-200/90 shadow-[0_6px_20px_rgba(0,0,0,0.06)] flex items-center justify-center p-1 sm:p-1.5 select-none cursor-grab active:cursor-grabbing hover:border-emerald-500 hover:shadow-[0_8px_25px_rgba(16,185,129,0.2)] transition-colors will-change-transform z-10 touch-none ${
              hasTriggered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: `${ballRadius * 2}px`,
              height: `${ballRadius * 2}px`,
              transform: "translate3d(-200px, -200px, 0)",
            }}
            title={brand.name}
          >
            <img
              src={brand.src}
              alt={brand.name}
              loading="lazy"
              decoding="async"
              className="max-h-[85%] max-w-[85%] w-auto h-auto object-contain pointer-events-none select-none drop-shadow-2xs"
              draggable={false}
            />
          </div>
        ))}

        {/* Bottom Arena Floor Lip */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 rounded-b-3xl opacity-85" />
      </div>

      {/* Bottom caption */}
      <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-zinc-700">
        <span className="uppercase tracking-wider">30+ Global Partner Brands</span>
        <span className="hidden sm:inline uppercase tracking-widest text-emerald-600 font-bold">
          Virtual Velocity Network
        </span>
      </div>
    </section>
  );
};
