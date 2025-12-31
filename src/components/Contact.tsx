import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email address is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters')
    .required('Project details are required')
});

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    // Log form values to console as requested
    console.log('Form submitted with values:', values);

    // Simulate API call delay
    setTimeout(() => {
      // Show success alert
      alert('Message sent successfully! Thank you for reaching out. I\'ll get back to you within 24 hours.');

      // Show toast notification
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      // Reset form after successful submission
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your project to life? Get in touch and let's discuss
            how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form with Formik + Yup */}
          <div className="animate-slide-up">
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Send Me a Message
              </h3>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                        Full Name
                      </label>
                      <Field name="name">
                        {({ field }: any) => (
                          <Input
                            {...field}
                            id="name"
                            type="text"
                            placeholder="Your full name"
                            className={`w-full ${errors.name && touched.name ? 'border-destructive' : ''}`}
                          />
                        )}
                      </Field>
                      <ErrorMessage name="name" component="div" className="text-destructive text-sm mt-1" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Email Address
                      </label>
                      <Field name="email">
                        {({ field }: any) => (
                          <Input
                            {...field}
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            className={`w-full ${errors.email && touched.email ? 'border-destructive' : ''}`}
                          />
                        )}
                      </Field>
                      <ErrorMessage name="email" component="div" className="text-destructive text-sm mt-1" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                        Project Details
                      </label>
                      <Field name="message">
                        {({ field }: any) => (
                          <Textarea
                            {...field}
                            id="message"
                            placeholder="Tell me about your project, timeline, and requirements..."
                            className={`w-full min-h-[120px] resize-none ${errors.message && touched.message ? 'border-destructive' : ''}`}
                          />
                        )}
                      </Field>
                      <ErrorMessage name="message" component="div" className="text-destructive text-sm mt-1" />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 text-lg font-semibold disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm always excited to work on new projects and help businesses
                  grow through technology. Whether you need a simple website or a
                  complex web application, I'm here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a
                      href="mailto:lokeshreddy93817@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      lokeshreddy93817@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <a
                      href="tel:+919381795643"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9381795643
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground">Bangalore, India</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/lokesh-kondasani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground p-3 rounded-lg hover:bg-primary-hover transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/lokesh99512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground p-3 rounded-lg hover:bg-primary-hover transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~0115943860c13aa6f5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      fill="currentColor"
                      width="20"
                      height="20"
                    >
                      <path d="M493.9 295.6c-50.3 0-83.5-38.9-92.8-53.9 11.9-95.3 46.8-125.4 92.8-125.4 45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7l0-.1zm0-237.8c-81.9 0-127.8 53.4-141 108.4-14.9-28-25.9-65.5-34.5-100.3l-113.2 0 0 141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141-65.3 0 0 141c0 41.1 13.3 78.4 37.6 105.1 25 27.5 59.2 41.8 98.8 41.8 78.8 0 133.8-60.4 133.8-146.9l0-94.8c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4 66.4 0 23.1-141.3c7.6 6.3 15.7 12 24.2 17 22.2 14 47.7 21.9 73.9 22.8 0 0 4 .2 6.1 .2 81.2 0 145.9-62.9 145.9-147.8S575.3 57.9 494.1 57.9l-.2-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@UnwaveringLoki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fill="currentColor"
                      width="20"
                      height="20"
                    >
                      <path d="M549.7 124.1c-6.3-23.7-24.9-42.3-48.6-48.6C456.7 64 288 64 288 64S119.3 64 74.9 75.5c-23.7 6.3-42.3 24.9-48.6 48.6C15.9 168.5 16 256 16 256s-.1 87.5 10.3 131.9c6.3 23.7 24.9 42.3 48.6 48.6C119.3 448 288 448 288 448s168.7 0 213.1-11.5c23.7-6.3 42.3-24.9 48.6-48.6C560.1 343.5 560 256 560 256s.1-87.5-10.3-131.9zM232 334V178l142 78-142 78z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/lok.i937"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition-colors"
                  >

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20"
                      height="20" viewBox="0 0 24 24">
                      <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/LokeshR93817"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.29l-5.214-6.817-5.97 6.817H1.797l7.73-8.828L1.5 2.25h7.056l4.713 6.231 5.0-6.231z"></path>
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
