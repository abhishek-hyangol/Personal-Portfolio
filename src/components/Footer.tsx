import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Abhishek Hyangol</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A passionate software developer focused on creating efficient, 
              scalable, and user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-400">
              Available for freelance projects and full-time opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                San Francisco, California, USA
              </li>
              <li>
                <a 
                  href="mailto:abhishek.hyangol@example.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  abhishek.hyangol@example.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Abhishek Hyangol. All rights reserved.
          </p>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="text-red-500 mx-1" size={16} />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;