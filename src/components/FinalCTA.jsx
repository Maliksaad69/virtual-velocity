import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle, X } from 'lucide-react';
import CosmicBot from './CosmicBot';
import './FinalCTA.css';

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', budget: '$10k - $25k', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
    }, 2500);
  };

  return (
    <section id="contact" className="final-cta-section section">
      {/* Background Focus Zone Darkener for Content Safe Zone */}
      <div className="cta-focus-zone-bg" />

      <div className="container">
        <div className="spatial-cta-composition">
          
          {/* Futuristic Floating 3D AI Companion Bot */}
          <div className="cosmic-bot-wrapper">
            <CosmicBot isCtaHovered={isHovered} />
          </div>

          {/* Section Eyebrow Label */}
          <div className="label cta-label">
            <Sparkles size={14} className="label-icon" />
            <span>10 • LAUNCH DESTINATION</span>
          </div>

          {/* Dynamic Color Satoshi Headline */}
          <h2 className="heading-hero spatial-cta-title">
            <span className="heading-line-ready">READY TO</span> <br />
            <span className="heading-line-move">MOVE FASTER?</span>
          </h2>

          <p className="text-lg spatial-cta-lead">
            Let's build something impossible to ignore.
          </p>

          {/* Hero Physical CTA Button with Multi-Tone Gravitational Energy Aura */}
          <div className="spatial-cta-actions">
            <div className={`cta-aura-wrapper ${isHovered ? 'aura-active' : ''}`}>
              
              {/* Localized Energy Orbit Rings & Pulses */}
              <div className="aura-orbit-ring" />
              <div className="aura-pulse-wave" />

              {/* Physical Hero CTA Button with Dynamic Shifting Multi-Color Surface */}
              <button
                onClick={() => setModalOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="btn-hero-physical-cta"
                data-cursor="LAUNCH"
              >
                <span className="cta-btn-text">START A PROJECT</span>
                <ArrowRight size={22} className="cta-arrow-icon" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* PROJECT LAUNCH FORM MODAL */}
      {modalOpen && (
        <div className="spatial-modal-overlay">
          <div className="spatial-modal-content">
            <button onClick={() => setModalOpen(false)} className="spatial-close-btn" aria-label="Close modal">
              <X size={20} />
            </button>

            {submitted ? (
              <div className="modal-success-state">
                <CheckCircle size={48} className="success-icon" />
                <h3 className="heading-md">TRANSMISSION RECEIVED</h3>
                <p className="text-lg">Your project signal has been received. Our directors will respond within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="spatial-form">
                <div className="modal-header">
                  <span className="label">PROJECT LAUNCH</span>
                  <h3 className="heading-md">START A PROJECT</h3>
                </div>

                <div className="form-group">
                  <label>YOUR NAME / BRAND</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Vance, Apex Corp"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@apexcorp.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>MONTHLY GROWTH BUDGET</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k - $100k+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>PROJECT OBJECTIVES</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your growth goals and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-editorial-primary modal-submit-btn">
                  <span>INITIATE LAUNCH →</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
