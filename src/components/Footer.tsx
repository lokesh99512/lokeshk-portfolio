import { Linkedin, Github, Mail, Youtube, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lokesh-kondasani/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/lokesh99512', label: 'GitHub' },
    { icon: Youtube, href: 'https://www.youtube.com/@UNWAVERINGLOKi', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/unwaveringloki/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/UNWAVERINGLOKi', label: 'X' },
    { icon: Mail, href: 'mailto:lokeshreddy93817@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <span className="text-xl font-bold text-primary">&lt;LK /&gt;</span>

          <div className="flex flex-wrap justify-center gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                aria-label={s.label}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Lokesh Kondasani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
