import Services from '../components/Services';
import CreativeVsPerformance from '../components/CreativeVsPerformance';
import ProcessSolar from '../components/ProcessSolar';
import FinalCTA from '../components/FinalCTA';
import { AnimatedSectionBackground, PresentationSection } from '../components/PresentationSection';
import { PageTransition } from '../components/PageTransition';

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="services-page-view">
        {/* Header Hero */}
        <section className="section services-hero-header" style={{ position: 'relative', paddingTop: '150px', paddingBottom: '60px' }}>
          <AnimatedSectionBackground
            imageSrc="/images/bg_services.png"
            overlayGradient="linear-gradient(180deg, rgba(7, 8, 11, 0.4) 0%, var(--bg-black) 100%)"
            alt="Services capabilities background"
          />
          <div className="container relative-z">
            <div className="label-tag">
              <span className="dot" />
              <span>CAPABILITIES & DOMAINS</span>
            </div>
            <h1 className="heading-hero" style={{ maxWidth: '960px' }}>
              BIG IDEAS. LOUD DESIGN. <br />
              <span className="accent-text">REAL REVENUE RESULTS.</span>
            </h1>
            <p className="text-sub">
              Zero cookie-cutter templates. We combine high-end creative direction, custom web & app development, and multi-channel performance marketing into a single unified engine.
            </p>
          </div>
        </section>

        {/* Services Accordion List */}
        <PresentationSection id="services-breakdown" sectionNumber="01" totalSections="04">
          <Services />
        </PresentationSection>

        {/* Dual Engine breakdown */}
        <PresentationSection id="dual-engine" sectionNumber="02" totalSections="04">
          <CreativeVsPerformance />
        </PresentationSection>

        {/* Solar Workflow */}
        <PresentationSection id="solar-workflow" sectionNumber="03" totalSections="04">
          <ProcessSolar />
        </PresentationSection>

        {/* CTA */}
        <PresentationSection id="services-cta" sectionNumber="04" totalSections="04">
          <FinalCTA />
        </PresentationSection>
      </div>
    </PageTransition>
  );
}
