import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
              <img
                src={profilePlaceholder}
                alt="Lokesh Kondasani - Java Full Stack Developer"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-strong border-2 border-border/50"
              />
            </div>
          </div>

          <div className="animate-slide-up">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Get to Know Me</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm Lokesh Kondasani, a results-driven Java Full Stack Developer currently working at
                NTT Data (Mercedes-Benz) as a Software Development Senior Specialist. I have expertise
                in designing and implementing scalable web applications using Spring Boot, React, and
                Microservices architecture.
              </p>
              <p>
                With experience spanning banking, financial, and automobile domains, I specialize in
                building high-performance solutions that enhance user experience and system efficiency.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: '4+', label: 'Years Exp.' },
                { value: '25+', label: 'Projects' },
                { value: '3', label: 'Domains' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-card border border-border/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
