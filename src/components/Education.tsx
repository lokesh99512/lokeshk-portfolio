import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Academic</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Education</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 hover:border-primary/20 hover:shadow-medium transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">Sri Venkateswara University</h3>
                <p className="text-primary font-semibold mb-4">BSc – Computer Science</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>2018 – 2021</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
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
