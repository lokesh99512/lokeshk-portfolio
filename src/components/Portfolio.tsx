import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce solution with user authentication, payment processing, and admin dashboard.',
      image: project1,
      technologies: ['React', 'Spring Boot', 'MySQL', 'AWS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/lokesh99512',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Business intelligence dashboard with real-time data visualization and reporting capabilities.',
      image: project2,
      technologies: ['Angular', 'Java', 'PostgreSQL', 'Chart.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/lokesh99512',
    },
    {
      title: 'Restaurant Management',
      description: 'Complete restaurant management with online ordering, table reservations, and inventory tracking.',
      image: project3,
      technologies: ['React', 'Spring Boot', 'MySQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: 'https://github.com/lokesh99512',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent projects showcasing full-stack development expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-background text-foreground hover:bg-background/90" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-1.5" /> Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={14} className="mr-1.5" /> Code
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-primary/10 text-primary px-2.5 py-1 rounded-md text-xs font-medium">{tech}</span>
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

export default Portfolio;
