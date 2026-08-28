import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, CheckCircle } from 'lucide-react';
import './Contact.css';

const GLOBAL_OFFICES = [
  {
    flag: '🇵🇰',
    city: 'Lahore, Pakistan',
    title: 'Creative & Operations Hub',
    address: 'Gulberg III, Main Boulevard, Lahore',
    email: 'lahore@virtualvelocity.co'
  },
  {
    flag: '🇺🇸',
    city: 'Chesapeake, USA',
    title: 'Americas Growth & Media Hub',
    address: 'Executive Center Pkwy, Chesapeake, VA',
    email: 'usa@virtualvelocity.co'
  },
  {
    flag: '🇲🇾',
    city: 'Kuala Lumpur, Malaysia',
    title: 'APAC Regional Hub',
    address: 'KLCC Boulevard, Kuala Lumpur',
    email: 'apac@virtualvelocity.co'
  }
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Creative Strategy & Branding',
    budget: '$10k - $25k',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section agency-contact-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag">
            <span className="dot"></span>
            <span>START A PROJECT</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            LET'S MAKE <br />
            SOMETHING <br />
            <span className="accent-text">MATTER.</span>
          </h2>
        </motion.div>

        <div className="contact-main-grid">
          {/* Form Col */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="form-success-message">
                <CheckCircle size={48} className="accent-text" />
                <h3>PROJECT INQUIRY RECEIVED</h3>
                <p>Thank you for reaching out. A Senior Brand Strategist will review your brief and respond within 12 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="minimal-inquiry-form">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Zainab Malik"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>COMPANY / BRAND *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Close-Knit Hosiery"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>PHONE NUMBER</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>SERVICE REQUIRED</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option>Creative Strategy & Branding</option>
                      <option>Paid Advertising & ROAS Scaling</option>
                      <option>Social Content & Motion Video</option>
                      <option>Custom Web Design & E-Commerce</option>
                      <option>Full-Service Agency Retainer</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>ESTIMATED BUDGET</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option>$5k - $10k</option>
                      <option>$10k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>PROJECT DETAILS *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your brand, goals, target revenue, and campaign timelines..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary form-submit-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>SEND PROJECT INQUIRY</span>
                  <Send size={16} />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Global Offices Col */}
          <motion.div
            className="global-offices-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="offices-title">GLOBAL LOCATIONS</h3>
            <p className="offices-sub">Operating globally across three key creative and growth hubs.</p>

            <div className="offices-list">
              {GLOBAL_OFFICES.map((office, idx) => (
                <div key={idx} className="office-location-card">
                  <div className="office-top">
                    <span className="office-flag">{office.flag}</span>
                    <span className="office-city">{office.city}</span>
                  </div>
                  <div className="office-hub-title">{office.title}</div>
                  <div className="office-address">{office.address}</div>
                  <a href={`mailto:${office.email}`} className="office-email">{office.email}</a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
