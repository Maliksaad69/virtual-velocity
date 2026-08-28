import { motion } from 'framer-motion';
import { AnimatedSectionBackground } from './PresentationSection';
import './CreativeStatement.css';

export default function CreativeStatement() {
  return (
    <section className="section creative-statement-section">
      <AnimatedSectionBackground
        imageSrc="/images/bg_creative_statement.png"
        overlayGradient="linear-gradient(180deg, var(--bg-black) 0%, rgba(7, 8, 11, 0.38) 35%, rgba(7, 8, 11, 0.38) 65%, var(--bg-black) 100%)"
      />

      <div className="container text-center relative-z">
        <motion.div
          className="statement-header-box"
          initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 25 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="label-tag justify-center">
            <span className="dot"></span>
            <span>CREATIVE PHILOSOPHY</span>
          </div>

          <motion.h2
            className="statement-giant-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ATTENTION <br />
            IS THE NEW <br />
            <span className="accent-text">CURRENCY.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="statement-copy-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
