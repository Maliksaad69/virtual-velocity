import Hero from '../components/Hero';
import CreativeStatement from '../components/CreativeStatement';
import SelectedWork from '../components/SelectedWork';
import Services from '../components/Services';
import OrbitingResults from '../components/OrbitingResults';
import FinalCTA from '../components/FinalCTA';
import { PresentationSection } from '../components/PresentationSection';
import { PageTransition } from '../components/PageTransition';

export default function HomePage() {
  return (
    <PageTransition>
      <div className="home-page-view">
        <PresentationSection id="hero">
          <Hero />
        </PresentationSection>

        <PresentationSection id="statement">
          <CreativeStatement />
        </PresentationSection>

        <PresentationSection id="work">
          <SelectedWork />
        </PresentationSection>

        <PresentationSection id="capabilities">
          <Services />
        </PresentationSection>

        <PresentationSection id="results">
          <OrbitingResults />
        </PresentationSection>

        <PresentationSection id="final-cta">
          <FinalCTA />
        </PresentationSection>
      </div>
    </PageTransition>
  );
}
