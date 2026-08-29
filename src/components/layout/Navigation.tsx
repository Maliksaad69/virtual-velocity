"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
            ? "py-4 bg-[#08080a]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo */}
          <Magnetic strength={0.25}>
            <Link
              href="/"
              className="group flex items-center gap-3 font-outfit font-extrabold text-xl sm:text-2xl tracking-tighter text-white uppercase"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00f0ff]"></span>
              </span>
              <span className="group-hover:text-[#00f0ff] transition-colors duration-300">
                AURA <span className="font-light text-white/50">//</span> LABS
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
                      isActive ? "text-[#00f0ff]" : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="text-[10px] text-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1.5">
                      [{link.id}]
                    </span>
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#00f0ff] transition-all duration-300 ${
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
            <Magnetic strength={0.4}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] text-white uppercase overflow-hidden hover:border-[#00f0ff] transition-all duration-500"
              >
                <span className="absolute inset-0 bg-[#00f0ff] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  LET'S TALK
                </span>
                <ArrowUpRight className="relative z-10 w-4 h-4 text-[#00f0ff] group-hover:text-black transition-colors duration-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 p-2 text-white/90 hover:text-[#00f0ff] focus:outline-none"
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
            className="fixed inset-0 z-40 bg-[#08080a] flex flex-col justify-between p-8 sm:p-12 md:hidden"
          >
            <div className="pt-20 flex flex-col gap-6">
              <span className="text-meta text-[#00f0ff] uppercase tracking-widest">
                // NAVIGATION MENU
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
                    className="group flex items-baseline justify-between py-3 border-b border-white/10 text-3xl font-extrabold font-outfit text-white tracking-tight uppercase"
                  >
                    <span className="group-hover:text-[#00f0ff] transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="text-xs font-mono text-white/40 group-hover:text-[#00f0ff]">
                      {link.id}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-white/10">
              <span className="text-meta text-white/40 block">INQUIRIES</span>
              <a
                href="mailto:hello@auralabs.agency"
                className="text-lg font-outfit text-white hover:text-[#00f0ff] transition-colors"
              >
                hello@auralabs.agency
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
