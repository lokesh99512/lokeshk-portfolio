import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Lokesh K</h3>
            <p className="text-blue-100 leading-relaxed">
              Java Full Stack Developer specializing in modern web applications 
              that help businesses grow and succeed online.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-blue-100 hover:text-white transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-blue-100">
              <a 
                href="mailto:lokeshreddy93817@gmail.com"
                className="block hover:text-white transition-colors"
              >
                lokeshreddy93817@gmail.com
              </a>
              <a 
                href="tel:+9381795963"
                className="block hover:text-white transition-colors"
              >
                +91 9381795963
              </a>
              <div>India</div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://linkedin.com/in/lokeshk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/lokesh99512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:lokeshreddy93817@gmail.com"
                className="text-blue-100 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-blue-400 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Lokesh K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;