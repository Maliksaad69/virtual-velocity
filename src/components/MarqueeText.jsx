import './MarqueeText.css';

const PHRASES = [
  'DIGITAL MARKETING', 'AI CALLING AGENTS', 'CREATIVE PRODUCTION',
  'BRAND STRATEGY', 'WEB DESIGN & DEV', 'SEO & GROWTH', 'PERFORMANCE MARKETING',
  'CRM AUTOMATION', 'INFLUENCER CAMPAIGNS', 'SOCIAL MEDIA',
];

export default function MarqueeText() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-content">
          {PHRASES.map((phrase, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-text">{phrase}</span>
              <span className="marquee-dot">✦</span>
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {PHRASES.map((phrase, i) => (
            <span key={`dup-${i}`} className="marquee-item">
              <span className="marquee-text">{phrase}</span>
              <span className="marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
