import { Linkedin, Github, Mail, Phone, MapPin, Youtube, Instagram, Twitter } from 'lucide-react';

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
            <h3 className="text-2xl font-bold mb-4">Lokesh Kondasani</h3>
            <p className="text-blue-100 leading-relaxed">
              Java Full Stack Developer specializing in building scalable, 
              high-performance web applications for banking, financial, and automobile domains.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('profile')}
                className="block text-blue-100 hover:text-white transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Projects
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
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a 
                  href="tel:+919381795963"
                  className="hover:text-white transition-colors"
                >
                  +91 9381795963
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a 
                  href="mailto:lokeshreddy93817@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  lokeshreddy93817@gmail.com
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a 
                href="https://www.linkedin.com/in/lokesh-kondasani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/lokesh99512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@UNWAVERINGLOKi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://www.instagram.com/unwaveringloki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://x.com/UNWAVERINGLOKi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:lokeshreddy93817@gmail.com"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-blue-400/30 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Lokesh Kondasani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
