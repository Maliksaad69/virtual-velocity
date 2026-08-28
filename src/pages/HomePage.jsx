import Hero from '../components/Hero';
import SelectedWork from '../components/SelectedWork';
import CreativeStatement from '../components/CreativeStatement';
import Services from '../components/Services';
import CreativeVsPerformance from '../components/CreativeVsPerformance';
import OrbitingResults from '../components/OrbitingResults';
import ProcessSolar from '../components/ProcessSolar';
import AboutCosmic from '../components/AboutCosmic';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsCapsules from '../components/TestimonialsCapsules';
import FinalCTA from '../components/FinalCTA';
import Contact from '../components/Contact';
import { PresentationSection } from '../components/PresentationSection';
import { PageTransition } from '../components/PageTransition';

export default function HomePage() {
  return (
    <PageTransition>
      <div className="home-page-view">
        <PresentationSection id="hero" sectionNumber="01" totalSections="12">
          <Hero />
        </PresentationSection>

        <PresentationSection id="work" sectionNumber="02" totalSections="12">
          <SelectedWork />
        </PresentationSection>

        <PresentationSection id="statement" sectionNumber="03" totalSections="12">
          <CreativeStatement />
        </PresentationSection>

        <PresentationSection id="capabilities" sectionNumber="04" totalSections="12">
          <Services />
        </PresentationSection>

        <PresentationSection id="split-domains" sectionNumber="05" totalSections="12">
          <CreativeVsPerformance />
        </PresentationSection>

        <PresentationSection id="results" sectionNumber="06" totalSections="12">
          <OrbitingResults />
        </PresentationSection>

        <PresentationSection id="process" sectionNumber="07" totalSections="12">
          <ProcessSolar />
        </PresentationSection>

        <PresentationSection id="agency" sectionNumber="08" totalSections="12">
          <AboutCosmic />
        </PresentationSection>

        <PresentationSection id="difference" sectionNumber="09" totalSections="12">
          <WhyChooseUs />
        </PresentationSection>

        <PresentationSection id="testimonials" sectionNumber="10" totalSections="12">
          <TestimonialsCapsules />
        </PresentationSection>

        <PresentationSection id="final-cta" sectionNumber="11" totalSections="12">
          <FinalCTA />
        </PresentationSection>

        <PresentationSection id="contact" sectionNumber="12" totalSections="12">
          <Contact />
        </PresentationSection>
      </div>
    </PageTransition>
  );
}
