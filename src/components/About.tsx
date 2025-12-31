import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="text-center md:text-left animate-fade-in">
            <div className="relative inline-block">
              <img 
                src={profilePlaceholder}
                alt="Lokesh Kondasani - Java Full Stack Developer"
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Lokesh Kondasani, a results-driven Java Full Stack Developer currently working at 
                NTT Data (Mercedes-Benz) as a Software Development Senior Specialist. I have expertise 
                in designing and implementing scalable web applications using Spring Boot, React, and 
                Microservices architecture.
              </p>
              
              <p>
                With experience spanning banking, financial, and automobile domains, I specialize in 
                building high-performance solutions that enhance user experience and system efficiency. 
                I excel at collaborating with cross-functional teams and driving projects to successful 
                completion.
              </p>
              
              <p>
                I'm passionate about optimizing system performance and creating solutions that not only 
                meet technical requirements but also drive business growth.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-accent rounded-xl">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-xl">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-xl">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Domains</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
