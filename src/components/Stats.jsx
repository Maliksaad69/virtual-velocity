import { useScrollReveal, useCounter } from '../hooks/useScrollReveal';
import { Briefcase, BarChart3, Users, Film, Globe, Target } from 'lucide-react';
import './Stats.css';

const STATS = [
  { icon: <Briefcase size={28} />, value: 250, suffix: '+', label: 'Projects' },
  { icon: <Target size={28} />, value: 500, suffix: '+', label: 'Campaigns' },
  { icon: <BarChart3 size={28} />, value: 2, suffix: 'M+', label: 'Leads Generated' },
  { icon: <Users size={28} />, value: 100, suffix: '+', label: 'Brands Served' },
  { icon: <Film size={28} />, value: 800, suffix: '+', label: 'Videos Produced' },
  { icon: <Globe size={28} />, value: 150, suffix: '+', label: 'Websites Delivered' },
];

export default function Stats() {
  const [ref, visible] = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="section stats-section" id="stats" ref={ref}>
      <div className="stats-bg-glow" />
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <StatCard key={i} stat={s} visible={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, visible, index }) {
  const count = useCounter(stat.value, 2500, visible);
  return (
    <div className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="stat-icon">{stat.icon}</div>
      <span className="stat-value">{count}{stat.suffix}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}
