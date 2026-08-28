import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin } from 'lucide-react';
import { AnimatedSectionBackground } from './PresentationSection';
import './Contact.css';

const GLOBAL_OFFICES = [
  {
    city: 'LAHORE',
    flag: '🇵🇰',
    hub: 'CREATIVE & DIGITAL HQ',
    address: 'Gulberg III, Main Boulevard, Lahore, Pakistan',
    email: 'lahore@virtualvelocity.co'
  },
  {
    city: 'DUBAI',
    flag: '🇦🇪',
    hub: 'MENA GROWTH HUB',
    address: 'Dubai Design District (D3), Building 7, Dubai, UAE',
    email: 'dubai@virtualvelocity.co'
  },
  {
    city: 'LONDON',
    flag: '🇬🇧',
    hub: 'EUROPEAN STRATEGY',
    address: 'Soho Works, 180 Strand, London WC2R 1EA, UK',
    email: 'london@virtualvelocity.co'
  }
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Creative & Performance',
    budget: '$5k - $15k',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section agency-contact-section" id="contact">
      <AnimatedSectionBackground
        imageSrc="/images/bg_creative_statement.png"
        overlayGradient="linear-gradient(180deg, var(--bg-black) 0%, rgba(7, 8, 11, 0.42) 30%, rgba(7, 8, 11, 0.42) 70%, var(--bg-black) 100%)"
      />

      <div className="container relative-z">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag">
            <span className="dot"></span>
            <span>INITIATE DISCUSSIONS</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            LET'S MAKE SOMETHING <br />
            <span className="accent-text">MATTER.</span>
          </h2>
          <p className="text-sub">
            Tell us about your brand goals. We'll outline a high-impact creative and performance strategy within 24 hours.
          </p>
        </motion.div>

        <div className="contact-main-grid">
          {/* Form Left Column */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <motion.div
                className="form-success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={48} className="accent-text" />
                <h3>PROJECT INQUIRY RECEIVED.</h3>
                <p>Thank you, {formData.name}. One of our creative directors will reach out to {formData.email} within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="minimal-inquiry-form">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="input-name">YOUR NAME *</label>
                    <input
                      id="input-name"
                      type="text"
                      name="name"
                      placeholder="e.g. Zayn Malik"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="input-email">WORK EMAIL *</label>
                    <input
                      id="input-email"
                      type="email"
                      name="email"
                      placeholder="zayn@brand.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="input-company">COMPANY / BRAND</label>
                    <input
                      id="input-company"
                      type="text"
                      name="company"
                      placeholder="e.g. Daily Deli Co."
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="select-service">INTERESTED DOMAIN</label>
                    <select
                      id="select-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="Creative & Performance">Creative & Performance (Full Service)</option>
                      <option value="Brand Identity">Brand Strategy & Identity</option>
                      <option value="Paid Advertising">Paid Advertising (Meta/Google)</option>
                      <option value="Content Production">Content Production & Motion</option>
                      <option value="Web & E-Commerce">Web & E-Commerce Development</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="textarea-message">PROJECT BRIEF & GOALS</label>
                  <textarea
                    id="textarea-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your brand, target timeline, and what success looks like..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary form-submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>SUBMIT PROJECT BRIEF</span>
                  <Send size={16} />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Global Offices Right Column */}
          <div className="contact-offices-col">
            <h3 className="offices-title">GLOBAL HUBS</h3>
            <p className="offices-sub">Operating across three key timezone hubs to serve global brands.</p>

            <div className="offices-list">
              {GLOBAL_OFFICES.map((office, index) => (
                <motion.div
                  key={index}
                  className="office-location-card"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="office-top">
                    <span className="office-flag">{office.flag}</span>
                    <span className="office-city">{office.city}</span>
                  </div>
                  <span className="office-hub-title">{office.hub}</span>
                  <span className="office-address">{office.address}</span>
                  <a href={`mailto:${office.email}`} className="office-email">{office.email}</a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
