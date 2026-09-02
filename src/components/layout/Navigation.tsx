"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Magnetic } from "@/components/ui/Magnetic";

const NAV_LINKS = [
  { label: "WORK", href: "/work", id: "01" },
  { label: "SERVICES", href: "/services", id: "02" },
  { label: "ABOUT", href: "/about", id: "03" },
  { label: "CONTACT", href: "/contact", id: "04" },
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

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-white/90 backdrop-blur-xl border-b border-zinc-200/80 shadow-sm"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo */}
          <Magnetic strength={0.25}>
            <Link
              href="/"
              className="group flex items-center gap-3 font-outfit font-extrabold text-xl sm:text-2xl tracking-tighter text-zinc-950 uppercase"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
              </span>
              <span className="group-hover:text-emerald-600 transition-colors duration-300 font-extrabold">
                VIRTUAL <span className="text-emerald-600 font-extrabold">•</span> VELOCITY
              </span>
            </Link>
          </Magnetic>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Magnetic key={link.label} strength={0.2}>
                  <Link
                    href={link.href}
                    className={`group relative py-1 text-xs font-semibold tracking-[0.25em] uppercase transition-colors duration-300 ${
                      isActive ? "text-zinc-950 font-bold" : "text-zinc-700 hover:text-emerald-600"
                    }`}
                  >
                    <span className="text-[10px] text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1.5">
                      [{link.id}]
                    </span>
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-emerald-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </Magnetic>
              );
            })}
          </nav>

          {/* Right Magnetic Action CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Magnetic strength={0.05}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-emerald-600 bg-emerald-600 text-xs font-extrabold tracking-[0.15em] text-white uppercase overflow-hidden hover:bg-emerald-700 hover:border-emerald-700 transition-all duration-200 shadow-sm shadow-emerald-600/20 active:scale-[0.98]"
              >
                <span className="relative z-10">
                  LET'S TALK
                </span>
                <ArrowUpRight className="relative z-10 w-4 h-4 text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 p-2 text-zinc-950 hover:text-emerald-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Editorial Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] as const }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-between p-8 sm:p-12 md:hidden"
          >
            <div className="pt-20 flex flex-col gap-6">
              <span className="text-meta text-emerald-600 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-emerald-600" /> NAVIGATION MENU
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-baseline justify-between py-3 border-b border-zinc-200 text-3xl font-extrabold font-outfit text-zinc-950 tracking-tight uppercase"
                  >
                    <span className="group-hover:text-emerald-600 transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="text-xs font-outfit text-emerald-600 font-bold">
                      {link.id}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-zinc-200">
              <span className="text-meta text-zinc-500 font-bold block">INQUIRIES</span>
              <a
                href="mailto:hello@virtualvelocity.agency"
                className="text-lg font-outfit text-zinc-950 hover:text-emerald-600 transition-colors font-bold"
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
