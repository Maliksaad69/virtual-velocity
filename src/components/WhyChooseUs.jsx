import { motion } from 'framer-motion';
import { Brain, BarChart3, Users, Cpu, Zap, MessageCircle, Shield, Headphones } from 'lucide-react';
import './WhyChooseUs.css';

const REASONS = [
  { icon: <Brain size={24} />, title: 'Creative Thinking', desc: 'We approach every project with fresh, innovative ideas that set brands apart.' },
  { icon: <BarChart3 size={24} />, title: 'Data-Driven Marketing', desc: 'Every strategy is backed by analytics, insights, and measurable performance data.' },
  { icon: <Users size={24} />, title: 'Professional Team', desc: '40+ specialists in design, marketing, development, production, and AI.' },
  { icon: <Cpu size={24} />, title: 'Latest AI Technology', desc: 'We leverage cutting-edge AI tools and automation for superior results.' },
  { icon: <Zap size={24} />, title: 'Fast Turnaround', desc: 'Rapid execution without compromising quality — speed is in our DNA.' },
  { icon: <MessageCircle size={24} />, title: 'Transparent Communication', desc: 'Regular updates, detailed reporting, and open lines of communication always.' },
  { icon: <Shield size={24} />, title: 'Premium Quality', desc: 'We never cut corners — every deliverable meets the highest standards.' },
  { icon: <Headphones size={24} />, title: 'Long-Term Support', desc: 'We build lasting partnerships and provide ongoing support beyond project delivery.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose" id="why-choose">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="label">Why Choose Us</span>
          <h2 className="heading-lg">
            The <span className="text-gradient">Virtual Velocity</span> Advantage
          </h2>
          <p className="text-lg">What makes us the preferred partner for 100+ businesses worldwide.</p>
        </motion.div>

        <motion.div
          className="why-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {REASONS.map((r, i) => (
            <motion.div
              key={i}
              className="why-card"
              variants={{
                hidden: { opacity: 0, y: 35, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              whileHover={{ y: -8, boxShadow: '0 15px 35px rgba(0, 212, 170, 0.2)' }}
            >
              <div className="why-card-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="why-card-icon">{r.icon}</div>
              <h3 className="why-card-title">{r.title}</h3>
              <p className="why-card-desc">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
