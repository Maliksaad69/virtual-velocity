import { motion } from 'framer-motion';
import { Lightbulb, Palette, Rocket, TrendingUp } from 'lucide-react';
import './ProcessSolar.css';

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'THINK',
    subtitle: 'Strategy & Positioning',
    desc: 'Strategy, positioning, audience research and campaign direction.',
    icon: Lightbulb
  },
  {
    num: '02',
    title: 'MAKE',
    subtitle: 'Creative & Systems',
    desc: 'Creative concepts, brand systems, content and digital experiences.',
    icon: Palette
  },
  {
    num: '03',
    title: 'LAUNCH',
    subtitle: 'Distribution & Media',
    desc: 'Campaigns, media, websites and distribution.',
    icon: Rocket
  },
  {
    num: '04',
    title: 'GROW',
    subtitle: 'Optimize & Scale',
    desc: 'Measure, optimize and scale what works.',
    icon: TrendingUp
  }
];

export default function ProcessSolar() {
  return (
    <section id="process" className="section agency-process-section">
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
            <span>AGENCY METHODOLOGY</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            THINK. MAKE. <br />
            <span className="accent-text">LAUNCH. GROW.</span>
          </h2>
          <p className="text-sub">
            Our agile framework balances high-level creative thinking with rapid media execution and data scaling.
          </p>
        </motion.div>

        {/* Process Timeline Grid */}
        <div className="process-timeline-grid">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                className="process-timeline-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, borderColor: 'var(--accent-coral)' }}
              >
                <div className="process-step-top">
                  <span className="process-num-large">{step.num}</span>
                  <div className="process-icon-box">
                    <Icon size={20} className="accent-text" />
                  </div>
                </div>

                <h3 className="process-step-title">{step.title}</h3>
                <span className="process-step-subtitle">{step.subtitle}</span>
                <p className="process-step-desc">{step.desc}</p>

                <div className="process-connector-line" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
