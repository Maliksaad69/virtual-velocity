import { motion } from 'framer-motion';
import { Target, Lightbulb, Zap, Users } from 'lucide-react';
import ScrollClipReveal from './ScrollClipReveal';
import './About.css';

const PILLARS = [
  { icon: <Lightbulb size={24} />, title: 'Creative Vision', desc: 'Award-winning creative direction that captivates audiences and elevates brands.' },
  { icon: <Target size={24} />, title: 'Strategic Marketing', desc: 'Data-driven marketing strategies that deliver measurable results and ROI.' },
  { icon: <Zap size={24} />, title: 'AI & Technology', desc: 'Cutting-edge AI solutions and automation that future-proof your business.' },
  { icon: <Users size={24} />, title: 'Expert Team', desc: 'A team of 40+ specialists across design, marketing, development, and production.' },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label">About Us</span>
            <h2 className="heading-lg">
              Where Creativity Meets <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-lg">
              Virtual Velocity Marketing is a full-service digital marketing and creative agency
              that combines creativity, marketing strategy, production, AI automation, and technology
              to help businesses achieve extraordinary growth.
            </p>
            <p className="text-md" style={{ marginTop: '16px' }}>
              Founded with a vision to bridge the gap between creative excellence and data-driven
              performance, we've helped over 100 businesses transform their digital presence and
              achieve sustainable growth across every channel.
            </p>
            <div className="about-tags">
              {['Digital Marketing', 'Creative Production', 'AI Solutions', 'Web Development', 'Brand Strategy'].map((t, idx) => (
                <motion.span
                  key={t}
                  className="about-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                  whileHover={{ scale: 1.08, borderColor: 'var(--primary)' }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ScrollClipReveal>
              <div className="about-image-grid">
                <motion.div
                  className="about-img-wrapper about-img-1"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80" alt="Team collaboration" loading="lazy" />
                </motion.div>
                <motion.div
                  className="about-img-wrapper about-img-2"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80" alt="Creative process" loading="lazy" />
                </motion.div>
                <motion.div
                  className="about-experience-badge"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
                >
                  <span className="badge-number">10+</span>
                  <span className="badge-text">Years of<br />Excellence</span>
                </motion.div>
              </div>
            </ScrollClipReveal>
          </motion.div>
        </div>

        <motion.div
          className="about-pillars"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {PILLARS.map((p, i) => (
            <motion.div
              key={i}
              className="about-pillar glass-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              whileHover={{ y: -8, boxShadow: '0 15px 35px rgba(0, 212, 170, 0.2)' }}
            >
              <div className="pillar-icon">{p.icon}</div>
              <h3 className="heading-sm">{p.title}</h3>
              <p className="text-md">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
