import { CheckCircle2 } from 'lucide-react';

const Responsibilities = () => {
  const responsibilities = [
    "Developed scalable and high-performance web applications using Java, Spring Boot, and React",
    "Designed and optimized RESTful APIs for seamless frontend-backend integration",
    "Worked with MySQL, PostgreSQL, and Oracle databases for data management and optimization",
    "Followed Agile/Scrum methodologies for iterative development and continuous improvement",
    "Led requirement gathering, testing, and deployment processes",
    "Managed code versioning using Git and implemented CI/CD pipelines with GitHub Actions and Jenkins",
  ];

  return (
    <section id="responsibilities" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">What I Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Roles & Responsibilities</h2>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 animate-slide-up">
            <ul className="space-y-4">
              {responsibilities.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-muted-foreground animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
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
