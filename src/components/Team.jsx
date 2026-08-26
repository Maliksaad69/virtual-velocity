import { motion } from 'framer-motion';
import { IconLinkedin as Linkedin, IconTwitter as Twitter, IconInstagram as Instagram } from './SocialIcons';
import './Team.css';

const TEAM = [
  { name: 'Alexander Reed', role: 'CEO & Founder', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', socials: { linkedin: '#', twitter: '#' } },
  { name: 'Sophia Martinez', role: 'Creative Director', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', socials: { linkedin: '#', instagram: '#' } },
  { name: 'Daniel Kim', role: 'Head of Marketing', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', socials: { linkedin: '#', twitter: '#' } },
  { name: 'Isabella Torres', role: 'AI & Tech Lead', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', socials: { linkedin: '#', instagram: '#' } },
];

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="label">Our Team</span>
          <h2 className="heading-lg">
            Meet the <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-lg">A passionate team of strategists, creatives, developers, and innovators.</p>
        </motion.div>

        <motion.div
          className="team-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {TEAM.map((member, i) => (
            <motion.div
              key={i}
              className="team-card"
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
              <div className="team-photo-wrapper">
                <motion.img
                  src={member.photo}
                  alt={member.name}
                  className="team-photo"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="team-socials">
                  {member.socials.linkedin && (
                    <motion.a href={member.socials.linkedin} aria-label="LinkedIn" whileHover={{ scale: 1.2 }}>
                      <Linkedin size={18} />
                    </motion.a>
                  )}
                  {member.socials.twitter && (
                    <motion.a href={member.socials.twitter} aria-label="Twitter" whileHover={{ scale: 1.2 }}>
                      <Twitter size={18} />
                    </motion.a>
                  )}
                  {member.socials.instagram && (
                    <motion.a href={member.socials.instagram} aria-label="Instagram" whileHover={{ scale: 1.2 }}>
                      <Instagram size={18} />
                    </motion.a>
                  )}
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
