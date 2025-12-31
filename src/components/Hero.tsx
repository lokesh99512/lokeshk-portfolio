import { Button } from '@/components/ui/button';
import { Download, FolderOpen } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Lokesh Kondasani
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-200">
            Java Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-blue-100 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Building scalable, secure, and high-performance web applications using Java, Spring Boot, and modern frontend frameworks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-medium transition-all duration-300 hover:scale-105"
            >
              <a href="/Lokesh_Kondasani_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              onClick={() => scrollToSection('portfolio')}
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <FolderOpen className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-scale-in">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">4+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">25+</div>
              <div className="text-blue-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">3</div>
              <div className="text-blue-200">Industry Domains</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
