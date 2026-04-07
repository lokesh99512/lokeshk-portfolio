import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import resumePdf from "../assets/lokesh__java__resume.pdf";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg shadow-soft border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
          &lt;LK /&gt;
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground px-5">
            <a href={resumePdf} download>Download CV</a>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium py-3 px-4 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <Button asChild className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={resumePdf} download>Download CV</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
