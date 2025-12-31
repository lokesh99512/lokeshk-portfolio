import { Clock, Settings, DollarSign, Headphones } from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality. Most projects delivered within agreed timelines.'
    },
    {
      icon: Settings,
      title: 'End-to-End Service',
      description: 'Complete solution from design and development to hosting and maintenance. One-stop shop for all your needs.'
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates designed for small businesses and startups. Quality development that fits your budget.'
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: '24/7 support and maintenance services. I\'m here to help even after your project goes live.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Me?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm committed to delivering exceptional results that help your business grow. 
            Here's what makes working with me different.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {reason.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl max-w-4xl mx-auto shadow-strong">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how I can help bring your vision to life with a modern, 
              professional website that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </button>
              <a 
                href="tel:+9381795963"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;