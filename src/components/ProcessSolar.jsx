import { motion } from 'framer-motion';
import { Search, Flame, Rocket, BarChart3 } from 'lucide-react';
import { AnimatedSectionBackground } from './PresentationSection';
import './ProcessSolar.css';

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'DISCOVER',
    subtitle: 'Audit & Positioning',
    desc: 'Deconstructing your brand, audience behavior, competitors, and growth levers to define a high-impact strategy.',
    icon: Search
  },
  {
    num: '02',
    title: 'BUILD',
    subtitle: 'Creative Production',
    desc: 'Crafting editorial identities, campaign systems, viral ad creatives, and high-converting web applications.',
    icon: Flame
  },
  {
    num: '03',
    title: 'LAUNCH',
    subtitle: 'Media & Scaling',
    desc: 'Deploying high-ROAS paid ad campaigns, influencer networks, and automated funnel workflows across channels.',
    icon: Rocket
  },
  {
    num: '04',
    title: 'OPTIMIZE',
    subtitle: 'Data & Growth',
    desc: 'Continuous CRO, cohort analysis, ad creative iteration, and retention scaling to compound your monthly ROI.',
    icon: BarChart3
  }
];

export default function ProcessSolar() {
  return (
    <section className="section agency-process-section" id="process">
      <AnimatedSectionBackground
        imageSrc="/images/bg_process.png"
        overlayGradient="linear-gradient(180deg, var(--bg-black) 0%, rgba(7, 8, 11, 0.42) 30%, rgba(7, 8, 11, 0.42) 70%, var(--bg-black) 100%)"
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
            <span>HOW WE WORK</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            THE AGENCY <br />
            <span className="accent-text">METHODOLOGY.</span>
          </h2>
          <p className="text-sub">
            Four disciplined phases to transform brand vision into predictable market dominance.
          </p>
        </motion.div>

        <div className="process-timeline-grid">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="process-timeline-card"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.03 }}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
