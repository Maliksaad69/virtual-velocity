import { Search, Lightbulb, PenTool, Play, Megaphone, Settings, TrendingUp } from 'lucide-react';
import './Process.css';

const STEPS = [
  { icon: <Search size={22} />, title: 'Discovery', desc: 'Deep dive into your brand, audience, competitors, and goals.' },
  { icon: <Lightbulb size={22} />, title: 'Strategy', desc: 'Craft a data-driven roadmap tailored to your business objectives.' },
  { icon: <PenTool size={22} />, title: 'Creative Planning', desc: 'Design concepts, content calendars, and creative direction.' },
  { icon: <Play size={22} />, title: 'Production', desc: 'Execute world-class content, campaigns, and deliverables.' },
  { icon: <Megaphone size={22} />, title: 'Marketing', desc: 'Launch and promote across all relevant channels and platforms.' },
  { icon: <Settings size={22} />, title: 'Optimization', desc: 'Continuously test, measure, and refine for peak performance.' },
  { icon: <TrendingUp size={22} />, title: 'Scaling', desc: 'Scale what works and expand into new markets and audiences.' },
];

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-header">
          <span className="label">Our Process</span>
          <h2 className="heading-lg">
            From Vision to <span className="text-gradient">Results</span>
          </h2>
          <p className="text-lg">A proven 7-step methodology that delivers consistent, measurable outcomes.</p>
        </div>

        <div className="process-timeline">
          <div className="timeline-line" />
          {STEPS.map((step, i) => (
            <div key={i} className={`timeline-item reveal ${i % 2 === 0 ? 'left' : 'right'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="timeline-dot">
                <span className="timeline-number">{i + 1}</span>
              </div>
              <div className="timeline-card glass-card">
                <div className="timeline-icon">{step.icon}</div>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
