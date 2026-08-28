import { motion } from 'framer-motion';
import './OrbitingResults.css';

const METRICS = [
  { val: '+240%', label: 'Lead generation growth' },
  { val: '180%', label: 'Average revenue growth' },
  { val: '4.2M', label: 'Campaign audience reach' },
  { val: '42%', label: 'Lower acquisition cost' },
  { val: '$45M+', label: 'Tracked client revenue' },
  { val: '150+', label: 'Projects delivered' }
];

export default function OrbitingResults() {
  return (
    <section id="results" className="section agency-results-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag">
            <span className="dot"></span>
            <span>MEASURABLE IMPACT</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            NO VANITY <br />
            <span className="accent-text">METRICS.</span>
          </h2>
          <p className="text-sub">
            Beautiful creative means nothing if it doesn't move the business. Here is the proof behind our work.
          </p>
        </motion.div>

        {/* Oversized Animated Statistics Grid */}
        <div className="oversized-metrics-grid">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              className="metric-card-editorial"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: 'var(--accent-coral)' }}
            >
              <div className="giant-metric-num">{metric.val}</div>
              <div className="metric-editorial-label">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
