import { Monitor, Server, Database, Cloud, TestTube, Brain, Network } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { icon: Monitor, title: 'Frontend', skills: ['HTML5', 'CSS3', 'TypeScript', 'Bootstrap', 'React', 'Redux', 'Redux-Saga', 'Angular'] },
    { icon: Server, title: 'Backend', skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'Microservices', 'Kafka', 'Spring Security', 'Python'] },
    { icon: Brain, title: 'AI / LLM', skills: ['LLMs', 'Generative AI', 'LangChain', 'Prompt Engineering', 'AI Chatbots', 'OpenAI API', 'RAG', 'Vector DBs'] },
    { icon: Database, title: 'Databases', skills: ['MySQL', 'PostgreSQL', 'Oracle'] },
    { icon: Cloud, title: 'AWS & Cloud', skills: ['AWS Lambda', 'EC2', 'ECS', 'ECR', 'S3', 'SQS', 'Kubernetes', 'Clusters', 'ArgoCD', 'Harbor', 'CI/CD', 'Jenkins', 'OpenShift', 'Docker'] },
    { icon: Network, title: 'Architecture', skills: ['System Design', 'High-Level Design (HLD)', 'Low-Level Design (LLD)', 'Microservices Architecture', 'Scalability', 'Distributed Systems'] },
    { icon: TestTube, title: 'Testing & Tools', skills: ['JUnit', 'Mockito', 'Postman', 'Git', 'GitHub Actions', 'JIRA'] },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-card border border-border/50 p-7 rounded-2xl hover:border-primary/30 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <category.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-foreground ml-4">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="bg-muted text-muted-foreground px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
