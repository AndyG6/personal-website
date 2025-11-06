import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: 'linkedin', href: 'https://www.linkedin.com/in/andy-guo-3ba794283/', external: true },
    { name: 'github', href: 'https://github.com/AndyG6', external: true },
    { name: 'resume', href: '/images/resume.pdf', external: true },
    { name: 'about', href: '/about', external: false },
    { name: 'projects', href: '/projects', external: false },
  ];

  return (
    <header className="bg-dark/95 backdrop-blur-sm border-b border-gray-border sticky top-0 z-50">
      <nav className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-heading font-semibold hover:text-primary transition-colors">
            andyguoz.com
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-text hover:text-white transition-colors duration-200 text-sm tracking-wider"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-text hover:text-white transition-colors duration-200 text-sm tracking-wider"
                >
                  {item.name}
                </Link>
              )
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-gray-border pt-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-gray-text hover:text-white hover:bg-dark-lighter rounded-md transition-colors text-sm tracking-wider"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-3 py-2 text-gray-text hover:text-white hover:bg-dark-lighter rounded-md transition-colors text-sm tracking-wider"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
