import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const WHY_STATEMENTS = [
  {
    num: '01',
    title: 'CREATIVE WITH A PURPOSE.',
    desc: 'Every visual decision has a business objective behind it.'
  },
  {
    num: '02',
    title: 'ZERO COOKIE-CUTTER.',
    desc: 'No generic templates. No recycled campaigns. No copy-paste identities.'
  },
  {
    num: '03',
    title: 'BEAUTIFUL + MEASURABLE.',
    desc: 'We care about aesthetics and the numbers behind them.'
  },
  {
    num: '04',
    title: 'ONE GROWTH PARTNER.',
    desc: 'Strategy, creative, digital and performance under one roof.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section why-agency-section">
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
            <span>WHY VIRTUAL VELOCITY</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            THE AGENCY <br />
            <span className="accent-text">DIFFERENCE.</span>
          </h2>
        </motion.div>

        {/* 4 Distinct Statements Grid */}
        <div className="why-statements-grid">
          {WHY_STATEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              className="why-statement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: 'var(--accent-coral)' }}
            >
              <div className="why-num">{item.num}</div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
