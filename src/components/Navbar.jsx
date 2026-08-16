import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'AI Solutions', href: '#ai-solutions' },
  { label: 'Clients', href: '#clients' },
  { label: 'Team', href: '#team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-inner container">
          <a href="#home" className="navbar-logo" onClick={(e) => handleClick(e, '#home')}>
            <span className="logo-vv">VV</span>
            <span className="logo-text">Virtual Velocity</span>
          </a>

          <div className="navbar-links">
            {NAV_LINKS.slice(0, 7).map((link) => (
              <a key={link.href} href={link.href} className="nav-link" onClick={(e) => handleClick(e, link.href)}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar-actions">
            <a href="#contact" className="btn btn-primary btn-nav" onClick={(e) => handleClick(e, '#contact')}>
              Get Started <ChevronRight size={16} />
            </a>
            <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              style={{ animationDelay: `${i * 0.05}s` }}
              onClick={(e) => handleClick(e, link.href)}
            >
              <span>{link.label}</span>
              <ChevronRight size={18} />
            </a>
          ))}
          <a href="#contact" className="btn btn-primary mobile-cta" onClick={(e) => handleClick(e, '#contact')}>
            Book Free Consultation
          </a>
        </div>
      </div>
    </>
  );
}
