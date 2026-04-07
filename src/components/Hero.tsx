import { Button } from '@/components/ui/button';
import { Download, FolderOpen, ArrowDown } from 'lucide-react';
import resumePdf from "../assets/lokesh__java__resume.pdf";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-[1.1] animate-fade-in">
            Hi, I'm{' '}
            <span className="text-primary">Lokesh</span>
            <br />
            <span className="text-muted-foreground">Kondasani</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Java Full Stack Developer
          </p>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building scalable, secure, and high-performance web applications using Java, Spring Boot, and modern frontend frameworks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-0.5">
              <a href={resumePdf} download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              onClick={() => scrollToSection('portfolio')}
              variant="outline"
              size="lg"
              className="border-2 border-border hover:border-primary hover:text-primary px-8 py-6 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              <FolderOpen className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">4+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Exp.</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-3xl md:text-4xl font-bold text-foreground">25+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">3</div>
              <div className="text-sm text-muted-foreground mt-1">Domains</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('profile')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
