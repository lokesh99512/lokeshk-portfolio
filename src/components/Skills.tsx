import { Monitor, Server, Database, Cloud, TestTube } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Monitor,
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'TypeScript', 'Bootstrap', 'React', 'Redux', 'Redux-Saga', 'Angular']
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'Microservices', 'Kafka', 'Spring Security']
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'Oracle']
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: ['AWS (EC2, S3)', 'CI/CD', 'Jenkins', 'OpenShift', 'Docker']
    },
    {
      icon: TestTube,
      title: 'Testing & Tools',
      skills: ['JUnit', 'Mockito', 'Postman', 'Git', 'GitHub Actions', 'JIRA']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground ml-4">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
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
