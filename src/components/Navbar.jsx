import { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_SECTIONS = [
  { id: 'hero', label: 'OVERVIEW' },
  { id: 'services', label: 'SERVICES' },
  { id: 'engine', label: 'THE ENGINE' },
  { id: 'universe', label: 'CASE STUDIES' },
  { id: 'process', label: 'METHODOLOGY' },
  { id: 'about', label: 'PHILOSOPHY' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active Section Intersection Detection
      const scrollPos = window.scrollY + 200;
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`spatial-navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="spatial-navbar-inner">
        {/* Editorial Brand Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="spatial-logo">
          <Sparkles className="logo-sparkle-icon" size={16} />
          <span className="logo-text">VIRTUAL <span className="logo-accent">VELOCITY</span></span>
        </a>

        {/* Floating Precision Nav Dock */}
        <ul className="spatial-nav-links">
          {NAV_SECTIONS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`spatial-link ${isActive ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Precision Physical Launch Trigger */}
        <div className="spatial-cta-wrapper">
          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn-editorial-primary spatial-cta-btn"
            data-cursor="LAUNCH"
          >
            <span>START PROJECT →</span>
          </button>
        </div>

        {/* Mobile Minimal Toggle */}
        <button 
          className="mobile-toggle-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Editorial Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-spatial-drawer">
          <ul className="mobile-spatial-links">
            {NAV_SECTIONS.map((sec) => (
              <li key={sec.id}>
                <button onClick={() => scrollToSection(sec.id)}>
                  {sec.label}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => scrollToSection('contact')} className="btn-editorial-primary mobile-cta">
            START PROJECT →
          </button>
        </div>
      )}
    </header>
  );
}
