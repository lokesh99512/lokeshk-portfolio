import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProfileSummary from '@/components/ProfileSummary';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Responsibilities from '@/components/Responsibilities';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProfileSummary />
      <About />
      <Experience />
      <Responsibilities />
      <Skills />
      <Services />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
