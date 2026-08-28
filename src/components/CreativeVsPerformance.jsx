import { motion } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';
import './CreativeVsPerformance.css';

export default function CreativeVsPerformance() {
  return (
    <section className="section creative-vs-performance-section">
      <div className="container">
        {/* Split Grid */}
        <div className="split-agency-grid">
          {/* Left: Creative */}
          <motion.div
            className="split-card creative-split-side"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="split-icon-tag">
              <Sparkles size={20} className="accent-text" />
              <span>CREATIVE DOMAIN</span>
            </div>
            <h2 className="split-title">
              MAKE THEM <br />
              <span className="accent-text">FEEL.</span>
            </h2>
            <ul className="split-list">
              <li>Branding & Visual Architecture</li>
              <li>Viral Campaign Content</li>
              <li>Art Direction & Photography</li>
              <li>Emotional Brand Storytelling</li>
            </ul>
          </motion.div>

          {/* Right: Performance */}
          <motion.div
            className="split-card performance-split-side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="split-icon-tag">
              <TrendingUp size={20} className="accent-text" />
              <span>PERFORMANCE DOMAIN</span>
            </div>
            <h2 className="split-title">
              MAKE IT <br />
              <span className="accent-text">GROW.</span>
            </h2>
            <ul className="split-list">
              <li>Paid Media Scaling (Meta / Google)</li>
              <li>Technical SEO Dominance</li>
              <li>Conversion Rate Optimization (CRO)</li>
              <li>Revenue Tracking & Analytics</li>
            </ul>
          </motion.div>
        </div>

        {/* Center Synthesis Statement */}
        <motion.div
          className="synthesis-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="synthesis-text">
            CREATIVITY GETS ATTENTION. <span className="accent-text">PERFORMANCE TURNS IT INTO GROWTH.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
