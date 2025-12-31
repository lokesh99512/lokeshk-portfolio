import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-6">
              <div className="bg-primary text-primary-foreground p-4 rounded-xl">
                <GraduationCap size={32} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  Sri Venkateswara University
                </h3>
                <p className="text-lg text-primary font-semibold mb-4">
                  BSc – Computer Science
                </p>
                
                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>2018 – 2021</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold text-primary">GPA: 80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
