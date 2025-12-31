import { CheckCircle2 } from 'lucide-react';

const Responsibilities = () => {
  const responsibilities = [
    "Developed scalable and high-performance web applications using Java, Spring Boot, and React",
    "Designed and optimized RESTful APIs for seamless frontend-backend integration",
    "Worked with MySQL, PostgreSQL, and Oracle databases for data management and optimization",
    "Followed Agile/Scrum methodologies for iterative development and continuous improvement",
    "Led requirement gathering, testing, and deployment processes",
    "Managed code versioning using Git and implemented CI/CD pipelines with GitHub Actions and Jenkins"
  ];

  return (
    <section id="responsibilities" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Roles & Responsibilities
            </h2>
            <p className="text-xl text-muted-foreground">
              Key contributions and expertise areas across projects
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft animate-slide-up">
            <ul className="space-y-4">
              {responsibilities.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 text-lg text-muted-foreground animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;
