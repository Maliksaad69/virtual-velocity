import './Clients.css';

const CLIENT_LOGOS = [
  'Apex Dynamics', 'Nova Studios', 'Quantum Labs', 'Stellar Corp',
  'Vertex Media', 'Zenith Tech', 'Prism Digital', 'Atlas Group',
  'Meridian Co', 'Orbit Systems', 'Catalyst Inc', 'Fusion Works',
];

export default function Clients() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="section clients" id="clients">
      <div className="container">
        <div className="section-header">
          <span className="label">Trusted By</span>
          <h2 className="heading-lg">
            Brands That <span className="text-gradient">Trust Us</span>
          </h2>
        </div>
      </div>

      <div className="clients-marquee">
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div key={i} className="client-logo-item">
              <span className="client-name">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="clients-marquee marquee-reverse">
        <div className="marquee-track reverse">
          {[...doubled].reverse().map((name, i) => (
            <div key={i} className="client-logo-item">
              <span className="client-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
