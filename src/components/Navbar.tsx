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
    <header className="bg-gradient-to-b from-dark to-transparent absolute top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className="container mx-auto py-6 px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Netflix-style Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-heading font-black text-netflix-red hover:opacity-80 transition-opacity">
            AG
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
                  className="text-white hover:text-gray-text transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-gray-text transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
                >
                  {item.name}
                </Link>
              )
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 hover:text-netflix-red transition-colors"
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
          <div className="md:hidden mt-6 pb-4">
            <div className="flex flex-col space-y-4 bg-dark-card p-4 rounded-lg">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-white hover:text-netflix-red hover:bg-dark-lighter rounded transition-colors text-sm font-medium tracking-wide uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-4 py-3 text-white hover:text-netflix-red hover:bg-dark-lighter rounded transition-colors text-sm font-medium tracking-wide uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                className="px-4 py-3 text-white hover:text-netflix-red hover:bg-dark-lighter rounded transition-colors text-sm font-medium tracking-wide uppercase text-left"
              >
                <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} mr-2`}></i>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
