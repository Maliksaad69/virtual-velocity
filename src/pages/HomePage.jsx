import Hero from '../components/Hero';
import SelectedWork from '../components/SelectedWork';
import CreativeStatement from '../components/CreativeStatement';
import Services from '../components/Services';
import OrbitingResults from '../components/OrbitingResults';
import TestimonialsCapsules from '../components/TestimonialsCapsules';
import FinalCTA from '../components/FinalCTA';
import { PresentationSection } from '../components/PresentationSection';
import { PageTransition } from '../components/PageTransition';

export default function HomePage() {
  return (
    <PageTransition>
      <div className="home-page-view">
        <PresentationSection id="hero" sectionNumber="01" totalSections="07">
          <Hero />
        </PresentationSection>

        <PresentationSection id="statement" sectionNumber="02" totalSections="07">
          <CreativeStatement />
        </PresentationSection>

        <PresentationSection id="work-preview" sectionNumber="03" totalSections="07">
          <SelectedWork />
        </PresentationSection>

        <PresentationSection id="capabilities" sectionNumber="04" totalSections="07">
          <Services />
        </PresentationSection>

        <PresentationSection id="results" sectionNumber="05" totalSections="07">
          <OrbitingResults />
        </PresentationSection>

        <PresentationSection id="testimonials" sectionNumber="06" totalSections="07">
          <TestimonialsCapsules />
        </PresentationSection>

        <PresentationSection id="final-cta" sectionNumber="07" totalSections="07">
          <FinalCTA />
        </PresentationSection>
      </div>
    </PageTransition>
  );
}
