import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import resumePdf from "../assets/lokesh__java__resume.pdf";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'profile' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-soft' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">
          Lokesh K
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <Button 
          asChild
          className="hidden md:flex bg-primary hover:bg-primary-hover text-primary-foreground px-6"
        >
          <a  href={resumePdf} download>
            Download CV
          </a>
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <Button 
              asChild
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              <a  href={resumePdf} download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
