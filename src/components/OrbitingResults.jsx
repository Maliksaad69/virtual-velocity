import { motion } from 'framer-motion';
import { AnimatedSectionBackground } from './PresentationSection';
import './OrbitingResults.css';

const RESULTS_METRICS = [
  { metric: '$42M+', label: 'Client Revenue Generated' },
  { metric: '4.2×', label: 'Average Campaign ROAS' },
  { metric: '+240%', label: 'Lead Growth Year-over-Year' },
  { metric: '150+', label: 'Global Campaigns Executed' },
  { metric: '94%', label: 'Client Partner Retention' },
  { metric: '12M+', label: 'Organic Organic Impressions' }
];

export default function OrbitingResults() {
  return (
    <section className="section agency-results-section" id="results">
      <AnimatedSectionBackground
        imageSrc="/images/bg_results.png"
        overlayGradient="linear-gradient(180deg, var(--bg-black) 0%, rgba(7, 8, 11, 0.4) 25%, rgba(7, 8, 11, 0.4) 75%, var(--bg-black) 100%)"
      />

      <div className="container relative-z">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="label-tag">
            <span className="dot"></span>
            <span>MEASURABLE IMPACT</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            PROVEN IN THE <br />
            <span className="accent-text">NUMBERS.</span>
          </h2>
          <p className="text-sub">
            Great aesthetics are only half the battle. Here is what happens when creative storytelling meets high-precision growth marketing.
          </p>
        </motion.div>

        <div className="oversized-metrics-grid">
          {RESULTS_METRICS.map((item, index) => (
            <motion.div
              key={index}
              className="metric-card-editorial"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -6 }}
            >
              <div className="giant-metric-num">{item.metric}</div>
              <div className="metric-editorial-label">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
