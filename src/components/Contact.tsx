import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Youtube, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Location */}
            <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up text-center">
              <div className="bg-primary text-primary-foreground w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Bangalore, India</p>
            </div>

            {/* Phone */}
            <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up text-center" style={{ animationDelay: '100ms' }}>
              <div className="bg-primary text-primary-foreground w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <a 
                href="tel:+919381795963"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 9381795963
              </a>
            </div>

            {/* Email */}
            <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up text-center" style={{ animationDelay: '200ms' }}>
              <div className="bg-primary text-primary-foreground w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a 
                href="mailto:lokeshreddy93817@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                lokeshreddy93817@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gradient-card rounded-2xl p-8 shadow-soft animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/lokesh-kondasani/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>
              
              <a
                href="https://github.com/lokesh99512"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Github size={20} />
                <span className="font-medium">GitHub</span>
              </a>
              
              <a
                href="https://www.upwork.com/freelancers/~0115943860c13aa6f5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={20} />
                <span className="font-medium">Upwork</span>
              </a>
              
              <a
                href="https://www.youtube.com/@UNWAVERINGLOKi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Youtube size={20} />
                <span className="font-medium">YouTube</span>
              </a>
              
              <a
                href="https://www.instagram.com/unwaveringloki/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram size={20} />
                <span className="font-medium">Instagram</span>
              </a>
              
              <a
                href="https://x.com/UNWAVERINGLOKi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Twitter size={20} />
                <span className="font-medium">X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
