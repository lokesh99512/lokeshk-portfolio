import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Youtube, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
    { icon: Phone, label: 'Phone', value: '+91 9381795963', href: 'tel:+919381795963' },
    { icon: Mail, label: 'Email', value: 'lokeshreddy93817@gmail.com', href: 'mailto:lokeshreddy93817@gmail.com' },
  ];

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lokesh-kondasani/', color: 'hover:text-blue-600' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/lokesh99512', color: 'hover:text-foreground' },
    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@UNWAVERINGLOKi', color: 'hover:text-red-600' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/unwaveringloki/', color: 'hover:text-pink-600' },
    { icon: Twitter, label: 'X', href: 'https://x.com/UNWAVERINGLOKi', color: 'hover:text-foreground' },
    { icon: ExternalLink, label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0115943860c13aa6f5', color: 'hover:text-green-600' },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 animate-slide-up">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-200 hover:border-primary/30 hover:-translate-y-0.5`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
