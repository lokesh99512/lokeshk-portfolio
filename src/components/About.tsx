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
                alt="Lokesh K - Java Full Stack Developer"
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
                NTT Data with expertise in designing and implementing scalable web applications 
                using Spring Boot, React, and Microservices architecture. I specialize in both 
                backend and frontend technologies, ensuring seamless integration and high-performance solutions.
              </p>
              
              <p>
                My experience includes strong problem-solving skills with a track record of delivering 
                robust applications that enhance user experience and system efficiency. I excel at 
                collaborating with cross-functional teams and driving projects to successful completion, 
                staying updated with the latest industry trends.
              </p>
              
              <p>
                I'm passionate about optimizing system performance and creating solutions that not only 
                meet technical requirements but also drive business growth. Whether it's building 
                microservices architecture or developing full-stack applications, I'm committed to 
                delivering excellence in every project.
              </p>
            </div>
            
            {/* Skills Grid */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Java', 'Spring Boot', 'React', 'TypeScript', 
                'MySQL', 'PostgreSQL', 'Microservices', 'REST/JSON', 'Oracle'
              ].map((skill) => (
                <div 
                  key={skill}
                  className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-center font-medium shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  {skill}
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