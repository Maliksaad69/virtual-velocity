import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_ITEMS = [
  { path: '/', label: 'HOME' },
  { path: '/work', label: 'WORK' },
  { path: '/services', label: 'SERVICES' },
  { path: '/about', label: 'ABOUT' },
  { path: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
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
        <Link to="/" onClick={() => handleNavClick('/')} className="agency-logo">
          <span className="logo-main">VIRTUAL VELOCITY</span>
          <span className="logo-badge">STUDIO</span>
        </Link>

        {/* Minimal Nav Links */}
        <ul className="agency-nav-links">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} style={{ position: 'relative' }}>
                <Link
                  to={item.path}
                  onClick={(e) => {
                    if (location.pathname === item.path) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
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
                </Link>
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
            onClick={() => handleNavClick('/contact')}
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
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mobile-cta-box">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary full-width">
                START A PROJECT <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
