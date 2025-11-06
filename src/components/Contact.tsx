import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, X } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:zeyuguo2006@gmail.com',
      label: 'zeyuguo2006@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/andy-guo-3ba794283/',
      label: 'linkedin.com/in/andyguo',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/AndyG6',
      label: 'github.com/AndyG6',
    },
    {
      name: 'X',
      icon: <X className="w-6 h-6" />,
      href: 'https://x.com/andyxguo',
      label: '@andyxguo',
    },
  ];

  return (
    <section id="contact" className="py-32 bg-dark-lighter">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">
            GET IN TOUCH
          </h2>

          <div className="max-w-3xl">
            <p className="text-xl text-gray-text mb-12">
              I'm always open to new opportunities and interesting projects. 
              Feel free to reach out if you'd like to connect!
            </p>

            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card flex items-center justify-between group hover:border-primary/70"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-primary">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">
                        {link.name}
                      </h3>
                      <p className="text-gray-text group-hover:text-white transition-colors">
                        {link.label}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-text group-hover:text-primary transition-colors">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
