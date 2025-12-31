import { Code, ShoppingCart, Cloud, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Website Development',
      description: 'Full-stack web applications built with React, Angular, and Java Spring Boot for optimal performance and scalability.',
      features: ['Responsive Design', 'Modern UI/UX', 'SEO Optimized', 'Fast Loading']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Website Setup',
      description: 'Complete e-commerce solutions with secure payment integration, inventory management, and user-friendly shopping experiences.',
      features: ['Payment Gateway', 'Admin Dashboard', 'Inventory System', 'Mobile Friendly']
    },
    {
      icon: Cloud,
      title: 'AWS Hosting & Deployment',
      description: 'Reliable cloud hosting solutions with automated deployment, SSL certificates, and 99.9% uptime guarantee.',
      features: ['Auto Scaling', 'SSL Security', 'CDN Integration', '24/7 Monitoring']
    },
    {
      icon: Wrench,
      title: 'Website Redesign & Optimization',
      description: 'Transform your existing website with modern design, improved performance, and enhanced user experience.',
      features: ['Performance Boost', 'Modern Design', 'Mobile Optimization', 'SEO Enhancement']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive web development services to help your business 
            establish a strong online presence and achieve digital success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground ml-4">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-center text-sm text-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;