"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Magnetic } from "@/components/ui/Magnetic";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "BRANDING", href: "/branding" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const pathname = usePathname();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // Lock body scroll when mobile drawer is active
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSaltLine = pathname === "/the-salt-line";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-2.5 sm:pt-3 px-3 sm:px-6 lg:px-8 pointer-events-none">
        <div
          className={`max-w-[1700px] mx-auto pointer-events-auto h-14 sm:h-16 px-4 sm:px-6 lg:px-8 rounded-2xl flex items-center justify-between transition-all duration-300 transform ${
            scrolled
              ? isSaltLine
                ? "translate-y-2 sm:translate-y-2.5 bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 shadow-lg shadow-black/40"
                : "translate-y-2 sm:translate-y-2.5 bg-white/85 backdrop-blur-md border border-zinc-200/90 shadow-md shadow-zinc-950/5"
              : isSaltLine
              ? "translate-y-0 bg-black/40 backdrop-blur-xs border border-white/10"
              : "translate-y-0 bg-white/50 backdrop-blur-xs border border-zinc-200/50 shadow-xs"
          }`}
        >
          {/* Logo */}
          <Magnetic strength={0.15}>
            <Link
              href="/"
              className={`group relative flex items-center h-full font-outfit font-extrabold text-base sm:text-lg lg:text-xl tracking-tighter uppercase ${
                isSaltLine ? "text-white" : "text-zinc-950"
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-2xl bg-emerald-400/30 blur-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none"
              />
              <span className="flex items-center gap-2 sm:gap-2.5 origin-left">
                <Image
                  src="/VV png.png"
                  alt="Virtual Velocity Logo"
                  width={40}
                  height={40}
                  className={`h-7 sm:h-8 w-auto object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-105 ${
                    isSaltLine ? "brightness-0 invert" : "mix-blend-multiply"
                  }`}
                  priority
                />
                <span className={`transition-colors duration-300 font-black text-sm sm:text-base lg:text-lg ${
                  isSaltLine ? "text-white group-hover:text-emerald-400" : "text-zinc-950 group-hover:text-emerald-600"
                }`}>
                  VIRTUAL{" "}
                  <span className="text-emerald-500 font-black inline-block transition-transform duration-500 group-hover:rotate-180">
                    •
                  </span>{" "}
                  VELOCITY
                </span>
              </span>
            </Link>
          </Magnetic>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 h-full">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredHref === link.href;
              return (
                <Magnetic key={link.label} strength={0.1}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredHref(link.href)}
                    onMouseLeave={() => setHoveredHref(null)}
                    className={`relative px-3.5 py-2 rounded-lg text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-150 flex items-center justify-center shrink-0 ${
                      isActive
                        ? isSaltLine
                          ? "text-emerald-400 font-extrabold"
                          : "text-emerald-600 font-extrabold"
                        : isSaltLine
                        ? "text-zinc-300 hover:text-white"
                        : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    {/* Hover Background Pill */}
                    {isHovered && (
                      <span
                        className={`absolute inset-0 rounded-lg transition-opacity duration-150 ${
                          isSaltLine ? "bg-white/10" : "bg-zinc-100"
                        }`}
                      />
                    )}

                    <span className="relative z-10">{link.label}</span>

                    {/* Active Route indicator dot */}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-xs pointer-events-none" />
                    )}
                  </Link>
                </Magnetic>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden lg:flex items-center gap-4 h-full">
            <Magnetic strength={0.1}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-xl overflow-hidden active:scale-[0.98] transition-transform duration-200 shadow-xs"
              >
                {/* Revolving boundary animation */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-xl p-[2px] overflow-hidden pointer-events-none"
                  style={{
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                >
                  <span
                    className="absolute inset-[-250%]"
                    style={{
                      background: "conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 50%, rgba(0, 174, 172, 0.2) 65%, #00aeac 78%, #10b981 88%, #34d399 96%, transparent 100%)",
                      animation: "spin 3s linear infinite",
                      willChange: "transform",
                    }}
                  />
                </span>

                <span className={`relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-xl backdrop-blur-md text-[11px] font-outfit font-black tracking-[0.15em] uppercase border transition-colors duration-200 ${
                  isSaltLine
                    ? "bg-white/10 hover:bg-white/20 text-white group-hover:text-emerald-300 border-white/20"
                    : "bg-emerald-500/[0.08] hover:bg-emerald-500/[0.14] text-zinc-950 group-hover:text-emerald-600 border-emerald-500/25"
                }`}>
                  <span>LET&apos;S TALK</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 ${
                    isSaltLine ? "text-emerald-400" : "text-emerald-600"
                  }`} />
                </span>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative z-50 p-2 rounded-xl border transition-colors ${
              isSaltLine
                ? "bg-zinc-800/80 border-zinc-700 text-white"
                : "bg-zinc-100/80 border-zinc-200 text-zinc-900"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-white flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto shadow-2xl"
          >
            {/* Header in Mobile Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2"
              >
                <Image
                  src="/VV png.png"
                  alt="Virtual Velocity Logo"
                  width={36}
                  height={36}
                  className="h-7 w-auto object-contain"
                />
                <span className="font-extrabold text-base sm:text-lg text-zinc-950">
                  VIRTUAL <span className="text-emerald-600">•</span> VELOCITY
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-100 hover:bg-emerald-50 text-zinc-900 border border-zinc-200 text-xs font-mono font-bold uppercase transition-all"
                aria-label="Close menu"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="pt-6 flex flex-col gap-3">
              <span className="text-xs text-emerald-600 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" /> NAVIGATION MENU
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-3 border-b border-zinc-100 text-2xl font-extrabold font-outfit uppercase transition-colors ${
                      pathname === link.href ? "text-emerald-600" : "text-zinc-900 hover:text-emerald-600"
                    }`}
                  >
                    <span>{link.label}</span>
                    {pathname === link.href && (
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    )}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-outfit font-black text-sm uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>LET&apos;S TALK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Footer Inquiries */}
            <div className="space-y-1 pt-6 border-t border-zinc-200 mt-6">
              <span className="text-xs text-zinc-500 font-bold block">INQUIRIES</span>
              <a
                href="mailto:hello@virtualvelocity.agency"
                className="text-sm font-outfit text-zinc-900 hover:text-emerald-600 transition-colors font-bold block"
              >
                hello@virtualvelocity.agency
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
