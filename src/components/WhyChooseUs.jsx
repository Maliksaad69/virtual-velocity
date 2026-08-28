import { motion } from 'framer-motion';
import { AnimatedSectionBackground } from './PresentationSection';
import './WhyChooseUs.css';

const WHY_STATEMENTS = [
  {
    num: '01',
    title: 'CREATIVE-LED PERFORMANCE',
    desc: 'We do not run ugly ads for quick clicks. We build high-converting assets that elevate your brand aesthetic while driving measurable revenue.'
  },
  {
    num: '02',
    title: 'SPEED & EXECUTION',
    desc: 'Traditional agencies take months to deliver. We move at digital velocity—launching full campaign systems and custom web apps in weeks.'
  },
  {
    num: '03',
    title: 'COMPLETE TRANSPARENCY',
    desc: 'No confusing jargon or vanity reports. You get direct access to real-time dashboards showing actual revenue, CAC, ROAS, and lead conversion rates.'
  },
  {
    num: '04',
    title: 'FULL-STACK CAPABILITIES',
    desc: 'From brand design to video production, web applications, paid ad management, and AI workflow automation—everything under one roof.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section why-agency-section" id="difference">
      <AnimatedSectionBackground
        imageSrc="/images/bg_why_choose_us.png"
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
            <span>WHY VIRTUAL VELOCITY</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            THE AGENCY <br />
            <span className="accent-text">DIFFERENCE.</span>
          </h2>
          <p className="text-sub">
            Built for ambitious brands that want to bypass slow agency bureaucracy and scale faster.
          </p>
        </motion.div>

        <div className="why-statements-grid">
          {WHY_STATEMENTS.map((item, index) => (
            <motion.div
              key={index}
              className="why-statement-card"
              initial={{ opacity: 0, y: 45, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
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
