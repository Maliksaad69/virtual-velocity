import { motion } from 'framer-motion';
import { Palette, TrendingUp } from 'lucide-react';
import { AnimatedSectionBackground } from './PresentationSection';
import './CreativeVsPerformance.css';

export default function CreativeVsPerformance() {
  return (
    <section className="section creative-vs-performance-section" id="split-domains">
      <AnimatedSectionBackground
        imageSrc="/images/bg_creative_vs_performance.png"
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
            <span>DUAL ENGINE AGENT</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            CREATIVE VS <br />
            <span className="accent-text">PERFORMANCE.</span>
          </h2>
          <p className="text-sub">
            Most agencies pick one side. We believe high-end creative work and data-backed performance advertising are two halves of the exact same growth engine.
          </p>
        </motion.div>

        <div className="split-agency-grid">
          {/* Creative Card */}
          <motion.div
            className="split-card creative-side-card"
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="split-icon-tag">
              <Palette size={18} className="accent-text" />
              <span>DOMINATE ATTENTION</span>
            </div>
            <h3 className="split-title">MAKE THEM FEEL.</h3>
            <ul className="split-list">
              <li>Editorial visual identity & brand direction</li>
              <li>Viral short-form video & campaign creative</li>
              <li>High-converting packaging & ad assets</li>
              <li>Cinematic motion & interactive web design</li>
            </ul>
          </motion.div>

          {/* Performance Card */}
          <motion.div
            className="split-card performance-side-card"
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="split-icon-tag">
              <TrendingUp size={18} className="accent-text" />
              <span>SCALE REVENUE</span>
            </div>
            <h3 className="split-title">MAKE IT GROW.</h3>
            <ul className="split-list">
              <li>High-ROAS Meta & Google ad campaigns</li>
              <li>Conversion rate optimization (CRO)</li>
              <li>Automated AI workflows & lead funnels</li>
              <li>Cohort analysis & retention strategy</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Synthesis Banner */}
        <motion.div
          className="synthesis-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="synthesis-text">
            CREATIVITY GETS CLICKED. <span className="accent-text">PERFORMANCE GETS PAID.</span> WE DO BOTH.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
