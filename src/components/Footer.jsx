import { ArrowUpRight } from 'lucide-react';
import { IconInstagram as Instagram, IconFacebook as Facebook, IconLinkedin as Linkedin, IconTwitter as Twitter, IconYoutube as Youtube } from './SocialIcons';
import './Footer.css';

const QUICK_LINKS = ['Home', 'About', 'Services', 'Portfolio', 'Case Studies', 'Blog', 'Careers', 'Contact'];
const SERVICES = ['Digital Marketing', 'Social Media', 'Video Production', 'Web Development', 'AI Solutions', 'Brand Strategy', 'SEO', 'CRM Development'];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-vv">VV</span>
              <span className="logo-text">Virtual Velocity</span>
            </div>
            <p className="footer-desc">
              Premium digital marketing and creative agency helping businesses grow through
              innovation, strategy, and technology.
            </p>
            <p className="footer-tagline">innovative. inspire. impact.</p>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Quick Links</h4>
            {QUICK_LINKS.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="footer-link">
                {link}
              </a>
            ))}
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Services</h4>
            {SERVICES.map((service) => (
              <a key={service} href="#services" className="footer-link">{service}</a>
            ))}
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-contact-line">Innovation Tower, Business Bay</p>
            <p className="footer-contact-line">Dubai, UAE</p>
            <p className="footer-contact-line" style={{ marginTop: '12px' }}>hello@virtualvelocity.com</p>
            <p className="footer-contact-line">+1 (800) VVM-GROW</p>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '20px', padding: '10px 24px', fontSize: '0.85rem' }}>
              Get a Quote <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Virtual Velocity Marketing. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
          <button className="back-to-top" onClick={scrollTop} aria-label="Back to top">↑</button>
        </div>
      </div>
    </footer>
  );
}
