"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export const ResizableNavbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 20);
  });

  return (
    <motion.div
      animate={{
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        backgroundColor: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0)",
        boxShadow: scrolled
          ? "0 1px 0 0 rgba(0,0,0,0.06), 0 4px 24px -4px rgba(0,0,0,0.08)"
          : "none",
        borderBottomColor: scrolled ? "rgba(0,0,0,0.07)" : "rgba(0,0,0,0)",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 font-outfit",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-[1700px] items-center justify-between px-4 sm:px-8 lg:px-12 py-3 sm:py-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({
  items,
  className,
  activeHref,
}: {
  items: NavItem[];
  className?: string;
  activeHref?: string;
}) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className={cn("hidden lg:flex items-center gap-1", className)}>
      {items.map((item) => {
        const isActive = activeHref === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            onMouseEnter={() => setHovered(item.href)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "relative px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-200",
              isActive
                ? "text-zinc-950"
                : "text-zinc-600 hover:text-zinc-950"
            )}
          >
            {hovered === item.href && (
              <motion.span
                layoutId="nav-hover-bg"
                className="absolute inset-0 rounded-lg bg-zinc-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {item.icon}
              {item.label}
            </span>
            {isActive && (
              <motion.span
                layoutId="nav-active-dot"
                className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-600"
              />
            )}
          </a>
        );
      })}
    </nav>
  );
};

export const MobileNav = ({
  children,
  isOpen,
  className,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "fixed inset-x-0 top-0 z-[55] bg-white/95 backdrop-blur-xl shadow-xl border-b border-zinc-200 lg:hidden",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-5 py-4 border-b border-zinc-100",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col px-5 py-4 gap-1", className)}>
      {children}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors"
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="flex flex-col gap-1.5 w-4"
      >
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 6 },
          }}
          transition={{ duration: 0.2 }}
          className="block h-0.5 w-full bg-zinc-800 rounded-full origin-center"
        />
        <motion.span
          variants={{
            closed: { opacity: 1, scaleX: 1 },
            open: { opacity: 0, scaleX: 0 },
          }}
          transition={{ duration: 0.2 }}
          className="block h-0.5 w-full bg-zinc-800 rounded-full"
        />
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -6 },
          }}
          transition={{ duration: 0.2 }}
          className="block h-0.5 w-full bg-zinc-800 rounded-full origin-center"
        />
      </motion.div>
    </button>
  );
};
