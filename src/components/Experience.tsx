import { Calendar, Building2, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "NTT DATA (Mercedes-Benz)",
      position: "Software Development Senior Specialist",
      duration: "05/2025 – Present",
      location: "Bangalore, India",
      description: "Team Lead handling end-to-end project responsibilities including requirement analysis, architecture design, and implementation. Mentoring team members and ensuring delivery quality.",
      technologies: ["Core Java", "Spring Boot", "Spring Data JPA", "Kafka", "Spring Security", "Microservices", "MySQL", "PostgreSQL", "Oracle", "React", "Angular", "AWS", "CI/CD", "GitHub Actions"]
    },
    {
      company: "Reserve Bank Information Technology (ReBIT)",
      position: "Java Full Stack Developer",
      duration: "08/2024 – 05/2025",
      location: "Bangalore, India",
      description: "Designed high-scalability microservices architecture. Collaborated with 20+ developers in an agile environment to deliver banking applications.",
      technologies: ["Java", "Spring Boot", "JPA", "Kafka", "Spring Security", "Microservices", "MySQL", "PostgreSQL", "React", "Angular"]
    },
    {
      company: "BSOL Systems Pvt Ltd",
      position: "Java Developer",
      duration: "01/2022 – 05/2024",
      location: "Bangalore, India",
      description: "Built an internal Time Sheet application from scratch. End-to-end ownership from development to deployment, gaining hands-on experience in real-time application development.",
      technologies: ["Java", "Spring Boot", "JPA", "Spring Security", "Microservices", "MySQL", "PostgreSQL", "React", "Angular"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey building scalable applications across banking, financial, and automobile domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-12 last:pb-0 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 top-12 w-0.5 h-full bg-border"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-medium"></div>
              
              {/* Content */}
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-accent text-accent-foreground px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
