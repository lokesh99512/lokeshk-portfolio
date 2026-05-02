import { Calendar, Building2, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "NTT DATA (Mercedes-Benz)",
      position: "Software Development Senior Specialist",
      duration: "05/2025 – Present",
      location: "Bangalore, India",
      description: "Working on end-to-end design and development of scalable distributed systems on AWS (Lambda, ECS, ECR, EC2, SQS) using Java, Spring Boot, and Microservices. Building AI-powered chatbot applications leveraging LLMs, LangChain, and Prompt Engineering. Contributing to system design, architecture decisions, and delivery of high-quality, production-grade features.",
      technologies: ["Core Java", "Spring Boot", "Spring Data JPA", "Kafka", "Spring Security", "Microservices", "System Design", "Python", "LLMs", "Generative AI", "LangChain", "Prompt Engineering", "AI Chatbot", "OpenAI API", "MySQL", "PostgreSQL", "Oracle", "React", "Angular", "AWS Lambda", "ECS", "ECR", "EC2", "SQS", "Kubernetes", "ArgoCD", "Harbor", "Clusters", "CI/CD", "GitHub Actions"],
      current: true,
    },
    {
      company: "Reserve Bank Information Technology (ReBIT)",
      position: "Java Full Stack Developer",
      duration: "08/2024 – 05/2025",
      location: "Bangalore, India",
      description: "Designed high-scalability microservices architecture. Collaborated with 20+ developers in an agile environment to deliver banking applications.",
      technologies: ["Java", "Spring Boot", "JPA", "Kafka", "Spring Security", "Microservices", "MySQL", "PostgreSQL", "React", "Angular"],
      current: false,
    },
    {
      company: "BSOL Systems Pvt Ltd",
      position: "Java Developer",
      duration: "01/2022 – 05/2024",
      location: "Bangalore, India",
      description: "Built an internal Time Sheet application from scratch. End-to-end ownership from development to deployment.",
      technologies: ["Java", "Spring Boot", "JPA", "Spring Security", "Microservices", "MySQL", "PostgreSQL", "React", "Angular"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable applications across banking, financial, and automobile domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-12 md:pl-20 pb-14 last:pb-0 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-2.5 md:left-6.5 top-8 w-3 h-3 rounded-full ring-4 ring-background ${exp.current ? 'bg-green-500' : 'bg-primary'}`} />

              <div className="bg-card border border-border/50 rounded-2xl p-7 hover:border-primary/20 hover:shadow-medium transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full mb-3">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Current
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-left md:text-right flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5 md:justify-end">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1.5 md:justify-end">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-5">{exp.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="bg-primary/10 text-primary px-2.5 py-1 rounded-md text-xs font-medium">
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
