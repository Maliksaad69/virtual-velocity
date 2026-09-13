"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Magnetic } from "@/components/ui/Magnetic";

const NAV_LINKS = [
  { label: "ABOUT", href: "/about", id: "01" },
  { label: "SERVICES", href: "/services", id: "02" },
  { label: "BLOG", href: "/blog", id: "03" },
  { label: "CAREERS", href: "/careers", id: "04" },
  { label: "CONTACT", href: "/contact", id: "05" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3 sm:py-4 bg-white/90 backdrop-blur-xl border-b border-zinc-200/80 shadow-sm"
            : "py-5 sm:py-8 bg-transparent"
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Magnetic strength={0.25}>
            <Link
              href="/"
              className="group relative flex items-center font-outfit font-extrabold text-lg sm:text-xl lg:text-2xl tracking-tighter text-zinc-950 uppercase"
            >
              {/* Emerald glow that pops in behind the logo on hover */}
              <span
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-2xl bg-emerald-400/30 blur-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none"
              />
              {/* Springy pop: the whole logo (mark + wordmark) lifts, scales and tilts */}
              <motion.span
                whileHover={{ scale: 1.14, rotate: -2.5, y: -3 }}
                transition={{ type: "spring", stiffness: 380, damping: 13 }}
                className="flex items-center gap-2.5 sm:gap-3 origin-left"
              >
                <Image
                  src="/VV png.png"
                  alt="Virtual Velocity Logo"
                  width={44}
                  height={44}
                  className="h-7 sm:h-8 lg:h-9 w-auto object-contain drop-shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_6px_16px_rgba(0,174,172,0.5)] mix-blend-multiply"
                  priority
                />
                <span className="group-hover:text-emerald-600 transition-colors duration-300 font-extrabold text-base sm:text-xl lg:text-2xl">
                  VIRTUAL{" "}
                  <span className="text-emerald-600 font-extrabold inline-block transition-transform duration-500 group-hover:rotate-180">
                    •
                  </span>{" "}
                  VELOCITY
                </span>
              </motion.span>
            </Link>
          </Magnetic>

          {/* Desktop Nav Links (≥1024px) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Magnetic key={link.label} strength={0.2}>
                  <Link
                    href={link.href}
                    className={`group relative py-1 px-1.5 text-xs font-semibold tracking-[0.22em] uppercase transition-colors duration-300 flex items-center ${
                      isActive ? "text-zinc-950 font-bold" : "text-zinc-700 hover:text-emerald-600"
                    }`}
                  >
                    <span className="text-[10px] text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1">
                      [{link.id}]
                    </span>
                    <span className="relative inline-block">
                      {link.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-600 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </span>
                  </Link>
                </Magnetic>
              );
            })}
          </nav>

          {/* Right Magnetic Action CTA (≥1024px) */}
          <div className="hidden lg:flex items-center gap-6">
            <Magnetic strength={0.05}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl border border-emerald-600 bg-emerald-600 text-xs font-extrabold tracking-[0.15em] text-white uppercase overflow-hidden hover:bg-emerald-700 hover:border-emerald-700 transition-all duration-200 shadow-sm shadow-emerald-600/20 active:scale-[0.98]"
              >
                <span className="relative z-10">
                  LET&apos;S TALK
                </span>
                <ArrowUpRight className="relative z-10 w-4 h-4 text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile / Tablet Hamburger Button (<1024px) */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden relative z-40 p-2 rounded-xl text-zinc-950 hover:text-emerald-600 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center transition-opacity duration-200 active:scale-90 ${
              mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </motion.header>

      {/* Mobile & Tablet Editorial Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              clipPath: "circle(0px at calc(100% - 38px) 38px)",
              opacity: 0,
            }}
            animate={{
              clipPath: "circle(150% at calc(100% - 38px) 38px)",
              opacity: 1,
              transition: {
                clipPath: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.2, ease: "easeOut" },
              },
            }}
            exit={{
              clipPath: "circle(0px at calc(100% - 38px) 38px)",
              opacity: 0,
              transition: {
                clipPath: { duration: 0.38, ease: [0.76, 0, 0.24, 1] },
                opacity: { duration: 0.25, delay: 0.1, ease: "easeIn" },
              },
            }}
            style={{ willChange: "clip-path" }}
            className="fixed inset-0 z-[60] bg-white flex flex-col justify-between p-5 sm:p-10 lg:hidden overflow-y-auto shadow-2xl"
          >
            {/* Top Drawer Header with Logo & Explicit Close Button */}
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
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-100 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 text-zinc-900 border border-zinc-200 text-xs font-mono font-bold uppercase transition-all shadow-xs active:scale-95 shrink-0 whitespace-nowrap"
                aria-label="Close navigation menu"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4 text-zinc-900" />
              </button>
            </div>

            <div className="pt-6 sm:pt-8 flex flex-col gap-3 sm:gap-5">
              <span className="text-meta text-emerald-600 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-emerald-600" /> NAVIGATION MENU
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-baseline justify-between py-3 sm:py-3.5 border-b border-zinc-200 text-2xl sm:text-3xl font-extrabold font-outfit text-zinc-950 tracking-tight uppercase min-h-[44px]"
                  >
                    <span className={`relative inline-block transition-colors duration-300 ${pathname === link.href ? "text-emerald-600 font-black" : "group-hover:text-emerald-600"}`}>
                      {link.label}
                      {pathname === link.href && (
                        <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-emerald-600 rounded-full" />
                      )}
                    </span>
                    <span className="text-xs font-outfit text-emerald-600 font-bold">
                      {link.id}
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Drawer CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="pt-3"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-emerald-600 text-white font-outfit font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/25 active:scale-[0.98] transition-all"
                >
                  <span>LET&apos;S TALK</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              </motion.div>
            </div>

            <div className="space-y-2 pt-6 pb-2 border-t border-zinc-200 mt-6">
              <span className="text-meta text-zinc-700 font-bold block">INQUIRIES</span>
              <a
                href="mailto:hello@virtualvelocity.agency"
                className="text-sm sm:text-base font-outfit text-zinc-950 hover:text-emerald-600 transition-colors font-bold block"
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
