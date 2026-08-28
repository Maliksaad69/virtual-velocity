import { useState } from 'react';
import { Sparkles, Quote } from 'lucide-react';
import './TestimonialsCapsules.css';

const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Elena Rostova',
    role: 'Chief Marketing Officer',
    company: 'Aura Luxury Apparel',
    quote: 'Virtual Velocity transformed the way we think about digital growth. Their acceleration engine and paid social strategy delivered an unprecedented 4.7× ROAS within 6 months.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    metrics: '+$1.8M Revenue',
    color: '#e9d5ff'
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    role: 'VP of Growth',
    company: 'Nexus Enterprise AI',
    quote: 'Working with Virtual Velocity felt like stepping into a futuristic agency. Their search architecture generated +$4.2M in net new ARR while reducing our enterprise CAC by 45%.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    metrics: '+$4.2M ARR',
    color: '#c084fc'
  },
  {
    id: 't3',
    name: 'Dr. Sarah Lin',
    role: 'Managing Director',
    company: 'Synapse Health Systems',
    quote: 'Their team engineered a privacy-compliant digital patient acquisition funnel that scaled our appointment booking by 220%. Unmatched technical sophistication.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    metrics: '+220% Bookings',
    color: '#e879f9'
  }
];

export default function TestimonialsCapsules() {
  const [selected, setSelected] = useState(TESTIMONIALS[0]);

  return (
    <section id="testimonials" className="testimonials-capsules-section section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="label">
            <Sparkles size={14} className="label-icon" />
            <span>08 • EXECUTIVE TESTIMONIALS</span>
          </div>
          <h2 className="heading-xl">
            <span className="heading-main">CLIENT</span> <br />
            <span className="heading-accent">TESTIMONIALS.</span>
          </h2>
          <p className="text-lg">
            Hear from visionary executives whose brands achieved exponential market velocity.
          </p>
        </div>

        {/* Spatial Testimonial Layout */}
        <div className="spatial-testimonials-layout">
          {/* Selector List */}
          <div className="spatial-author-selector">
            {TESTIMONIALS.map((t) => {
              const isSel = selected.id === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelected(t)}
                  className={`spatial-author-btn ${isSel ? 'active' : ''}`}
                >
                  <span className="author-btn-name">{t.name}</span>
                  <span className="author-btn-company">{t.company}</span>
                </button>
              );
            })}
          </div>

          {/* Active Quote Display */}
          <div className="spatial-quote-display" key={selected.id}>
            <Quote size={32} className="quote-icon" style={{ color: selected.color }} />
            <blockquote className="spatial-quote-text">
              "{selected.quote}"
            </blockquote>

            <div className="spatial-quote-author">
              <span className="author-full-name">{selected.name}</span>
              <span className="author-full-role">{selected.role}, {selected.company}</span>
              <span className="author-metric-badge" style={{ color: selected.color }}>{selected.metrics}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
