import AboutCosmic from '../components/AboutCosmic';
import WhyChooseUs from '../components/WhyChooseUs';
import OrbitingResults from '../components/OrbitingResults';
import FinalCTA from '../components/FinalCTA';
import { AnimatedSectionBackground, PresentationSection } from '../components/PresentationSection';
import { PageTransition } from '../components/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="about-page-view">
        {/* Header Hero */}
        <section className="section about-hero-header" style={{ position: 'relative', paddingTop: '150px', paddingBottom: '60px' }}>
          <AnimatedSectionBackground
            imageSrc="/images/bg_about.png"
            overlayGradient="linear-gradient(180deg, rgba(7, 8, 11, 0.4) 0%, var(--bg-black) 100%)"
            alt="About agency studio background"
          />
          <div className="container relative-z">
            <div className="label-tag">
              <span className="dot" />
              <span>THE CREATIVES BEHIND THE MAGIC</span>
            </div>
            <h1 className="heading-hero" style={{ maxWidth: '960px' }}>
              DON&apos;T JUST BREAK THE MOLD. <br />
              <span className="accent-text">FRKN SHATTER IT.</span>
            </h1>
            <p className="text-sub">
              We&apos;re not just another digital agency; we&apos;re the crew you call when you want your brand to stand out without shouting. From Lahore to Kuala Lumpur and Virginia, we turn bold ideas into high-converting realities.
            </p>
          </div>
        </section>

        {/* Agency Story */}
        <PresentationSection id="about-agency" sectionNumber="01" totalSections="04">
          <AboutCosmic />
        </PresentationSection>

        {/* Why Choose Us Difference */}
        <PresentationSection id="why-us" sectionNumber="02" totalSections="04">
          <WhyChooseUs />
        </PresentationSection>

        {/* Orbiting Math & Results */}
        <PresentationSection id="agency-results" sectionNumber="03" totalSections="04">
          <OrbitingResults />
        </PresentationSection>

        {/* CTA */}
        <PresentationSection id="about-cta" sectionNumber="04" totalSections="04">
          <FinalCTA />
        </PresentationSection>
      </div>
    </PageTransition>
  );
}
