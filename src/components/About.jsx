import { useScrollReveal } from '../hooks/useScrollReveal';
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
  const [ref, visible] = useScrollReveal();

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid" ref={ref}>
          <div className={`about-left reveal-left ${visible ? 'visible' : ''}`}>
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
              {['Digital Marketing', 'Creative Production', 'AI Solutions', 'Web Development', 'Brand Strategy'].map((t) => (
                <span key={t} className="about-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className={`about-right reveal-right ${visible ? 'visible' : ''}`}>
            <ScrollClipReveal>
              <div className="about-image-grid">
                <div className="about-img-wrapper about-img-1">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80" alt="Team collaboration" loading="lazy" />
                </div>
                <div className="about-img-wrapper about-img-2">
                  <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80" alt="Creative process" loading="lazy" />
                </div>
                <div className="about-experience-badge">
                  <span className="badge-number">10+</span>
                  <span className="badge-text">Years of<br />Excellence</span>
                </div>
              </div>
            </ScrollClipReveal>
          </div>
        </div>

        <div className="about-pillars">
          {PILLARS.map((p, i) => (
            <div key={i} className="about-pillar glass-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="pillar-icon">{p.icon}</div>
              <h3 className="heading-sm">{p.title}</h3>
              <p className="text-md">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
