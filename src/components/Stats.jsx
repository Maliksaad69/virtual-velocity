import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCounter } from '../hooks/useScrollReveal';
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
  const [inView, setInView] = useState(false);

  return (
    <section className="section stats-section" id="stats">
      <div className="stats-bg-glow" />
      <div className="container">
        <motion.div
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setInView(true)}
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {STATS.map((s, i) => (
            <StatCard key={i} stat={s} visible={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ stat, visible }) {
  const count = useCounter(stat.value, 2000, visible);
  return (
    <motion.div
      className="stat-card"
      variants={{
        hidden: { opacity: 0, scale: 0.85, y: 30 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      whileHover={{ y: -6, boxShadow: '0 15px 35px rgba(0, 212, 170, 0.2)' }}
    >
      <div className="stat-icon">{stat.icon}</div>
      <span className="stat-value">{count}{stat.suffix}</span>
      <span className="stat-label">{stat.label}</span>
    </motion.div>
  );
}
