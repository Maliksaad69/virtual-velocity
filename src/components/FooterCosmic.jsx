import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import './FooterCosmic.css';

export default function FooterCosmic() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="agency-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-main">VIRTUAL VELOCITY</span>
              <span className="logo-badge">AGENCY</span>
            </div>
            <p className="footer-tagline">
              A full-service digital marketing & creative agency engineering clean, high-converting brand systems, paid media campaigns, and digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">NAVIGATION</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/work">Selected Work</Link></li>
              <li><Link to="/services">Services & Capabilities</Link></li>
              <li><Link to="/about">About Agency</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">CONNECT</h4>
            <ul className="footer-links">
              <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="footer-back-col">
            <button onClick={scrollToTop} className="back-to-top-btn">
              <span>BACK TO TOP</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} VIRTUAL VELOCITY DIGITAL MARKETING & CREATIVE AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="footer-legal-links">
            <Link to="/contact">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
