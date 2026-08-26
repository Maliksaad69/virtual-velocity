import { useState, useCallback } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import ScrollEngine from './components/ScrollEngine';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeText from './components/MarqueeText';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import WhyChooseUs from './components/WhyChooseUs';
import AISolutions from './components/AISolutions';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleFinish = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <ErrorBoundary>
      <div className="app">
        {loading && <Loader onFinish={handleFinish} />}
        <ScrollEngine />
        <Navbar />
        <main>
          <Hero />
          <MarqueeText />
          <About />
          <Services />
          <Portfolio />
          <MarqueeText />
          <Clients />
          <WhyChooseUs />
          <AISolutions />
          <Process />
          <Testimonials />
          <Stats />
          <Team />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
