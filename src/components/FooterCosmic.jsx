import { Sparkles } from 'lucide-react';
import './FooterCosmic.css';

export default function FooterCosmic() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-cosmic">
      <div className="container footer-container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon-glow">
                <Sparkles size={16} className="logo-icon" />
              </div>
              <span className="logo-text">VIRTUAL <span className="logo-accent">VELOCITY</span></span>
            </div>
            <p className="footer-tagline">
              DIGITAL GROWTH FOR AMBITIOUS BRANDS.
            </p>
          </div>

          {/* Nav Links */}
          <div className="footer-nav">
            <div className="footer-col">
              <span className="footer-col-title">NAVIGATION</span>
              <button onClick={() => scrollToSection('universe')}>WORK</button>
              <button onClick={() => scrollToSection('services')}>SERVICES</button>
              <button onClick={() => scrollToSection('engine')}>ENGINE</button>
              <button onClick={() => scrollToSection('about')}>ABOUT</button>
              <button onClick={() => scrollToSection('contact')}>CONTACT</button>
            </div>

            {/* Social Links */}
            <div className="footer-col">
              <span className="footer-col-title">SOCIAL ORBITS</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">X (TWITTER)</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} VIRTUAL VELOCITY. ALL RIGHTS RESERVED.</p>
          <span className="footer-momentum-tag">BUILT FOR MOMENTUM.</span>
        </div>
      </div>
    </footer>
  );
}
