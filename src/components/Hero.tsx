import React from 'react';
import { ArrowDown, Mail, Linkedin, Github, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const handleArrowClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-2/3 space-y-6 text-center md:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Abhishek Hyangol
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-medium">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
              Experienced software developer with a passion for building scalable, efficient applications.
              Specialized in front-end and back-end development with a focus on modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <a
                href="mailto:erhyangol2024@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com/in/abhishek-hyangol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/abhishek-hyangol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              {/* <a
                href="tel:+1234567890"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <Phone size={18} />
                <span>Call</span>
              </a> */}
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-blue-600 dark:bg-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 overflow-hidden">
                <img
                  src=""
                  alt="Abhishek Hyangol"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleArrowClick}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce p-2"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-gray-600 dark:text-gray-400" size={32} />
      </button>
    </section>
  );
};

export default Hero;