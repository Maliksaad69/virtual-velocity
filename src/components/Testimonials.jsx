import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
  { name: 'Sarah Mitchell', role: 'CEO, Apex Dynamics', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', rating: 5, text: 'Virtual Velocity completely transformed our digital presence. Their strategic approach to social media and paid advertising delivered a 340% increase in qualified leads within just 3 months. Absolutely outstanding team.' },
  { name: 'James Rodriguez', role: 'Founder, Nova Studios', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', rating: 5, text: 'The video production quality exceeded our expectations. They managed our entire brand campaign from concept to delivery, and the results were phenomenal. Our brand awareness grew by 500% in our target market.' },
  { name: 'Emma Chen', role: 'Marketing Director, Quantum Labs', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', rating: 5, text: 'Their AI chatbot solution reduced our customer support costs by 60% while improving response times. The team is incredibly professional, innovative, and always ahead of the curve with latest technology.' },
  { name: 'David Park', role: 'COO, Stellar Corp', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', rating: 5, text: 'Working with Virtual Velocity on our website redesign was a game-changer. The new site increased our conversion rate by 180% and the design consistently receives compliments from our clients and partners.' },
  { name: 'Lisa Thompson', role: 'Brand Manager, Vertex Media', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', rating: 5, text: 'From influencer campaigns to performance marketing, VVM handles everything with precision and creativity. They are not just an agency — they are true strategic partners who care about our growth.' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  const t = TESTIMONIALS[current];

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="label">Testimonials</span>
          <h2 className="heading-lg">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-card glass-card">
            <Quote size={48} className="testimonial-quote-icon" />
            <div className="testimonial-stars">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} fill="var(--primary)" color="var(--primary)" />
              ))}
            </div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <img src={t.photo} alt={t.name} className="testimonial-photo" loading="lazy" />
              <div>
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>
          </div>

          <div className="testimonial-nav">
            <button className="testimonial-btn" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <div className="testimonial-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="testimonial-btn" onClick={next} aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
