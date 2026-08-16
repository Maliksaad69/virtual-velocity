import { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle, Calendar } from 'lucide-react';
import './Contact.css';

const SERVICE_OPTIONS = [
  'Digital Marketing', 'Social Media Marketing', 'Paid Advertising', 'SEO',
  'Brand Strategy', 'Creative Design', 'Video Production', 'Photography',
  'Web Design & Development', 'E-Commerce', 'CRM Development',
  'AI Solutions', 'Influencer Marketing', 'Business Automation', 'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '',
    service: '', budget: '', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you within 24 hours.');
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact-glow" />
      <div className="container">
        <div className="section-header">
          <span className="label">Get In Touch</span>
          <h2 className="heading-lg">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-lg">Ready to grow your business? Start with a free consultation.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info reveal-left">
            <div className="contact-info-card glass-card">
              <Phone size={22} className="contact-info-icon" />
              <div>
                <h4>Call Us</h4>
                <p>+1 (800) VVM-GROW</p>
              </div>
            </div>
            <div className="contact-info-card glass-card">
              <Mail size={22} className="contact-info-icon" />
              <div>
                <h4>Email Us</h4>
                <p>hello@virtualvelocity.com</p>
              </div>
            </div>
            <div className="contact-info-card glass-card">
              <MapPin size={22} className="contact-info-icon" />
              <div>
                <h4>Visit Us</h4>
                <p>Innovation Tower, Business Bay, Dubai</p>
              </div>
            </div>
            <div className="contact-info-card glass-card">
              <MessageCircle size={22} className="contact-info-icon" />
              <div>
                <h4>WhatsApp</h4>
                <p>+971 50 000 0000</p>
              </div>
            </div>

            <div className="contact-quick-actions">
              <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Calendar size={18} /> Book Consultation
              </a>
              <a href="https://wa.me/971500000000" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form glass-card reveal-right" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Full Name *</label>
                <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-company">Company</label>
                <input type="text" id="contact-company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-phone">Phone *</label>
                <input type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email *</label>
                <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-service">Service Required</label>
                <select id="contact-service" name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contact-budget">Budget Range</label>
                <select id="contact-budget" name="budget" value={formData.budget} onChange={handleChange}>
                  <option value="">Select budget</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                <Send size={18} /> Request Proposal
              </button>
            </div>
          </form>
        </div>

        {/* Map placeholder */}
        <div className="contact-map reveal">
          <iframe
            title="Virtual Velocity Marketing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178787592594!2d55.26395!3d25.18732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzE0LjQiTiA1NcKwMTUnNTAuMiJF!5e0!3m2!1sen!2sae!4v1"
            width="100%" height="300" style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
            allowFullScreen="" loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
