import { Brain, BarChart3, Users, Cpu, Zap, MessageCircle, Shield, Headphones } from 'lucide-react';
import './WhyChooseUs.css';

const REASONS = [
  { icon: <Brain size={24} />, title: 'Creative Thinking', desc: 'We approach every project with fresh, innovative ideas that set brands apart.' },
  { icon: <BarChart3 size={24} />, title: 'Data-Driven Marketing', desc: 'Every strategy is backed by analytics, insights, and measurable performance data.' },
  { icon: <Users size={24} />, title: 'Professional Team', desc: '40+ specialists in design, marketing, development, production, and AI.' },
  { icon: <Cpu size={24} />, title: 'Latest AI Technology', desc: 'We leverage cutting-edge AI tools and automation for superior results.' },
  { icon: <Zap size={24} />, title: 'Fast Turnaround', desc: 'Rapid execution without compromising quality — speed is in our DNA.' },
  { icon: <MessageCircle size={24} />, title: 'Transparent Communication', desc: 'Regular updates, detailed reporting, and open lines of communication always.' },
  { icon: <Shield size={24} />, title: 'Premium Quality', desc: 'We never cut corners — every deliverable meets the highest standards.' },
  { icon: <Headphones size={24} />, title: 'Long-Term Support', desc: 'We build lasting partnerships and provide ongoing support beyond project delivery.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose" id="why-choose">
      <div className="container">
        <div className="section-header">
          <span className="label">Why Choose Us</span>
          <h2 className="heading-lg">
            The <span className="text-gradient">Virtual Velocity</span> Advantage
          </h2>
          <p className="text-lg">What makes us the preferred partner for 100+ businesses worldwide.</p>
        </div>

        <div className="why-grid">
          {REASONS.map((r, i) => (
            <div key={i} className="why-card reveal" style={{ transitionDelay: `${(i % 4) * 0.1}s` }}>
              <div className="why-card-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="why-card-icon">{r.icon}</div>
              <h3 className="why-card-title">{r.title}</h3>
              <p className="why-card-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
