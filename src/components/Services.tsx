import { Code2, Globe, Server, Smartphone, Database, Cloud } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using Java, Spring Boot, React, and Angular with scalable architecture.',
    },
    {
      icon: Server,
      title: 'API Development',
      description: 'Design and build secure, high-performance RESTful APIs and microservices for seamless system integration.',
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Modern, responsive web applications with intuitive UI/UX, optimized for speed and accessibility.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first, cross-browser compatible interfaces that deliver a premium experience on every device.',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Efficient database architecture with MySQL, PostgreSQL, and Oracle — optimized queries and data modeling.',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS deployment, CI/CD pipelines, Docker containerization, and infrastructure automation.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-medium transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
