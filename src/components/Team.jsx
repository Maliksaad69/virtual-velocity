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
        <div className="section-header">
          <span className="label">Our Team</span>
          <h2 className="heading-lg">
            Meet the <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-lg">A passionate team of strategists, creatives, developers, and innovators.</p>
        </div>

        <div className="team-grid">
          {TEAM.map((member, i) => (
            <div key={i} className="team-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="team-photo-wrapper">
                <img src={member.photo} alt={member.name} className="team-photo" loading="lazy" />
                <div className="team-socials">
                  {member.socials.linkedin && <a href={member.socials.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></a>}
                  {member.socials.twitter && <a href={member.socials.twitter} aria-label="Twitter"><Twitter size={18} /></a>}
                  {member.socials.instagram && <a href={member.socials.instagram} aria-label="Instagram"><Instagram size={18} /></a>}
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
