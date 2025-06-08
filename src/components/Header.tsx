import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            Abhishek Hyangol
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Software Developer</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </button>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={handleMenuToggle}
            className="p-2 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="py-2 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="py-2 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="py-2 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="py-2 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="py-2 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;