import Contact from '../components/Contact';
import { AnimatedSectionBackground, PresentationSection } from '../components/PresentationSection';
import { PageTransition } from '../components/PageTransition';

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="contact-page-view">
        {/* Header Hero */}
        <section className="section contact-hero-header" style={{ position: 'relative', paddingTop: '150px', paddingBottom: '40px' }}>
          <AnimatedSectionBackground
            imageSrc="/images/hero_cinematic_nature.png"
            overlayGradient="linear-gradient(180deg, rgba(7, 8, 11, 0.4) 0%, var(--bg-black) 100%)"
            alt="Contact global agency hubs background"
          />
          <div className="container relative-z">
            <div className="label-tag">
              <span className="dot" />
              <span>START A PROJECT / LET&apos;S CONNECT</span>
            </div>
            <h1 className="heading-hero" style={{ maxWidth: '960px' }}>
              READY TO MOVE <br />
              <span className="accent-text">IMPOSSIBLY FAST?</span>
            </h1>
            <p className="text-sub">
              Tell us about your brand, budget, and timeline. Our strategists will reply within 24 hours with a custom project proposal.
            </p>
          </div>
        </section>

        {/* Contact Form & Global Offices */}
        <PresentationSection id="contact-form-section" sectionNumber="01" totalSections="01">
          <Contact />
        </PresentationSection>
      </div>
    </PageTransition>
  );
}
