import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Youtube, Instagram, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').min(2, 'Min 2 characters'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      message: Yup.string().required('Message is required').min(10, 'Min 10 characters'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form submitted:', values);
      setSubmitted(true);
      resetForm();
      setTimeout(() => setSubmitted(false), 5000);
    },
  });

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
    { icon: Phone, label: 'Phone', value: '+91 9381795963', href: 'tel:+919381795963' },
    { icon: Mail, label: 'Email', value: 'lokeshreddy93817@gmail.com', href: 'mailto:lokeshreddy93817@gmail.com' },
  ];

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lokesh-kondasani/', color: 'hover:text-blue-600' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/lokesh99512', color: 'hover:text-foreground' },
    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@UNWAVERINGLOKi', color: 'hover:text-red-600' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/unwaveringloki/', color: 'hover:text-pink-600' },
    { icon: Twitter, label: 'X', href: 'https://x.com/UNWAVERINGLOKi', color: 'hover:text-foreground' },
    { icon: ExternalLink, label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0115943860c13aa6f5', color: 'hover:text-green-600' },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 animate-slide-up">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-200 hover:border-primary/30 hover:-translate-y-0.5`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              {submitted && (
                <div className="mb-6 bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 rounded-xl p-4 text-sm font-medium">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              <form onSubmit={formik.handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl bg-muted/50 border ${formik.touched.name && formik.errors.name ? 'border-destructive' : 'border-border/50'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                    {...formik.getFieldProps('name')}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-destructive text-xs mt-1.5">{formik.errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl bg-muted/50 border ${formik.touched.email && formik.errors.email ? 'border-destructive' : 'border-border/50'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-destructive text-xs mt-1.5">{formik.errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className={`w-full px-4 py-3 rounded-xl bg-muted/50 border ${formik.touched.message && formik.errors.message ? 'border-destructive' : 'border-border/50'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none`}
                    {...formik.getFieldProps('message')}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-destructive text-xs mt-1.5">{formik.errors.message}</p>
                  )}
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
