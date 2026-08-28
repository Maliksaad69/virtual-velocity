import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle, Send, X } from 'lucide-react';
import './FinalCTA.css';

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
      <div className="container">
        <div className="spatial-cta-content">
          {/* Spatial Label */}
          <div className="label">
            <Sparkles size={14} className="label-icon" />
            <span>06 • LAUNCH DESTINATION</span>
          </div>

          {/* Oversized Headline */}
          <h2 className="heading-hero spatial-cta-title">
            <span className="heading-main">READY TO</span> <br />
            <span className="heading-accent">MOVE FASTER?</span>
          </h2>

          <p className="text-lg spatial-cta-lead">
            Let's build something impossible to ignore.
          </p>

          {/* Control Button */}
          <div className="spatial-cta-actions">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-editorial-primary"
              data-cursor="LAUNCH"
            >
              <span>START A PROJECT</span>
              <ArrowRight size={18} />
            </button>
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
