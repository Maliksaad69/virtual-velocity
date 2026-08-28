import { motion } from 'framer-motion';
import './CreativeStatement.css';

export default function CreativeStatement() {
  return (
    <section className="section creative-statement-section">
      <div className="container text-center">
        <motion.div
          className="statement-header-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="label-tag justify-center">
            <span className="dot"></span>
            <span>CREATIVE PHILOSOPHY</span>
          </div>

          <h2 className="statement-giant-title">
            ATTENTION <br />
            IS THE NEW <br />
            <span className="accent-text">CURRENCY.</span>
          </h2>
        </motion.div>

        <motion.div
          className="statement-copy-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="statement-lead-paragraph">
            People don't remember another template. They remember the brand that made them stop scrolling.
          </p>
          <p className="statement-sub-paragraph">
            Virtual Velocity combines creative thinking, design, content and performance marketing to make brands impossible to ignore.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
