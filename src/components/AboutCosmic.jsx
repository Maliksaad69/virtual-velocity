import { Sparkles, ArrowRight } from 'lucide-react';
import './AboutCosmic.css';

export default function AboutCosmic() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="about-cosmic-section section">
      <div className="container">
        {/* Header Label */}
        <div className="section-header">
          <div className="label">
            <Sparkles size={14} className="label-icon" />
            <span>07 • BRAND PHILOSOPHY</span>
          </div>
        </div>

        {/* Huge Spatial Editorial Headline with Dynamic Shifting Colors */}
        <div className="about-spatial-composition">
          <h2 className="about-editorial-title">
            <span className="heading-line-1">WE DON'T</span> <br />
            <span className="heading-line-2">CHASE TRENDS.</span>
          </h2>

          <div className="about-editorial-divider" />

          <h2 className="about-editorial-title hero-line-momentum">
            <span className="heading-line-3">WE BUILD</span> <br />
            <span className="heading-line-4">MOMENTUM.</span>
          </h2>

          {/* Minimal Story Points */}
          <div className="about-spatial-points">
            <div className="spatial-point">
              <span className="point-num">01</span>
              <p>Marketing creates the atmosphere.</p>
            </div>
            <div className="spatial-point">
              <span className="point-num">02</span>
              <p>Content creates signals.</p>
            </div>
            <div className="spatial-point">
              <span className="point-num">03</span>
              <p>Advertising creates propulsion.</p>
            </div>
            <div className="spatial-point">
              <span className="point-num">04</span>
              <p>Conversion creates velocity.</p>
            </div>
          </div>

          <div className="about-spatial-cta">
            <button onClick={scrollToContact} className="btn-editorial-primary">
              <span>START A PROJECT</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
