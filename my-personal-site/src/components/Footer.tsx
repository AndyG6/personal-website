import { motion } from 'framer-motion';
import { Github, Linkedin, X, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AndyG6',
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/andy-guo-3ba794283/',
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: 'X',
      url: 'https://x.com/andyxguo',
      icon: <X className="h-5 w-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:zeyuguo2006@gmail.com',
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="bg-dark border-t border-gray-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <p className="text-gray-text text-sm">
              © {currentYear} Andy Guo. Built with React & Tailwind CSS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-text hover:text-primary transition-colors duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
