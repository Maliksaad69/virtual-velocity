import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_SECTIONS = [
  { id: 'work', label: 'WORK' },
  { id: 'capabilities', label: 'CAPABILITIES' },
  { id: 'agency', label: 'ABOUT' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPos = window.scrollY + 220;
      for (const sec of NAV_SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`agency-navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="agency-navbar-inner">
        {/* Minimal Editorial Agency Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="agency-logo">
          <span className="logo-main">VIRTUAL VELOCITY</span>
          <span className="logo-badge">STUDIO</span>
        </a>

        {/* Minimal Nav Links */}
        <ul className="agency-nav-links">
          {NAV_SECTIONS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} style={{ position: 'relative' }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`agency-nav-link ${isActive ? 'active' : ''}`}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="nav-active-pill"
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid var(--border-medium)',
                        zIndex: 1,
                      }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right Status & Persistent CTA */}
        <div className="agency-nav-right">
          <div className="availability-status">
            <span className="pulse-dot"></span>
            <span className="status-text">AVAILABLE FOR Q3/Q4</span>
          </div>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="btn-primary nav-cta-btn"
            data-cursor="TALK"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>START A PROJECT</span>
            <ArrowUpRight size={15} className="btn-icon-arrow" />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="agency-mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-links">
              {NAV_SECTIONS.map((sec) => (
                <li key={sec.id}>
                  <button onClick={() => scrollToSection(sec.id)}>
                    {sec.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mobile-cta-box">
              <button onClick={() => scrollToSection('contact')} className="btn-primary full-width">
                START A PROJECT <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
