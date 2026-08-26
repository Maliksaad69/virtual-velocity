import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Search, Lightbulb, PenTool, Play, Megaphone, Settings, TrendingUp } from 'lucide-react';
import './Process.css';

const STEPS = [
  { icon: <Search size={22} />, title: 'Discovery', desc: 'Deep dive into your brand, audience, competitors, and goals.' },
  { icon: <Lightbulb size={22} />, title: 'Strategy', desc: 'Craft a data-driven roadmap tailored to your business objectives.' },
  { icon: <PenTool size={22} />, title: 'Creative Planning', desc: 'Design concepts, content calendars, and creative direction.' },
  { icon: <Play size={22} />, title: 'Production', desc: 'Execute world-class content, campaigns, and deliverables.' },
  { icon: <Megaphone size={22} />, title: 'Marketing', desc: 'Launch and promote across all relevant channels and platforms.' },
  { icon: <Settings size={22} />, title: 'Optimization', desc: 'Continuously test, measure, and refine for peak performance.' },
  { icon: <TrendingUp size={22} />, title: 'Scaling', desc: 'Scale what works and expand into new markets and audiences.' },
];

export default function Process() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="section process" id="process" ref={containerRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="label">Our Process</span>
          <h2 className="heading-lg">
            From Vision to <span className="text-gradient">Results</span>
          </h2>
          <p className="text-lg">A proven 7-step methodology that delivers consistent, measurable outcomes.</p>
        </motion.div>

        <div className="process-timeline">
          {/* Scroll-Driven Animated Central Line */}
          <motion.div
            className="timeline-line"
            style={{ scaleY, transformOrigin: 'top' }}
          />

          {STEPS.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className={`timeline-item ${isEven ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: isEven ? -60 : 60, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.1 + 0.2 }}
                >
                  <span className="timeline-number">{i + 1}</span>
                </motion.div>

                <motion.div
                  className="timeline-card glass-card"
                  whileHover={{ y: -6, boxShadow: '0 15px 35px rgba(0, 212, 170, 0.2)' }}
                >
                  <div className="timeline-icon">{step.icon}</div>
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-desc">{step.desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
