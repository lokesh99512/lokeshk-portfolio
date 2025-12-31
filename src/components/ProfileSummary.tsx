import { Target, Users, TrendingUp, Code2 } from 'lucide-react';

const ProfileSummary = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Expertise',
      description: 'Spring Boot, React, Microservices architecture'
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Strong analytical and debugging skills'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Agile methodologies, cross-functional teams'
    },
    {
      icon: TrendingUp,
      title: 'Performance Focus',
      description: 'System optimization and scalability'
    }
  ];

  return (
    <section id="profile" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Profile Summary
            </h2>
          </div>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft mb-12 animate-slide-up">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              Results-driven <span className="text-primary font-semibold">Java Full Stack Developer</span> with expertise in designing and implementing scalable web applications using <span className="text-primary font-semibold">Spring Boot, React, and Microservices architecture</span>. Proficient in backend and frontend technologies with strong problem-solving skills. Experienced in <span className="text-primary font-semibold">banking, financial, and automobile domains</span>. Passionate about performance optimization and modern system design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary text-primary-foreground w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSummary;
