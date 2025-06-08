import React from 'react';
import { Award, User, Briefcase, FileText } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a passionate software developer with a strong background in full-stack development. 
              With expertise in modern web technologies, I specialize in building scalable and 
              efficient applications that deliver excellent user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Throughout my career, I've worked on diverse projects, from small business websites 
              to large-scale enterprise applications. I'm constantly learning and adapting to new 
              technologies to stay at the forefront of this rapidly evolving industry.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My approach combines technical excellence with a keen eye for design and user experience. 
              I believe in creating solutions that not only work flawlessly but are also intuitive 
              and enjoyable to use.
            </p>
            
            <div className="pt-4">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              >
                <FileText size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm transform transition-transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <User className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Professional Background</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Over 5 years of experience in software development with expertise in both frontend and backend technologies.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm transform transition-transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Current Focus</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Currently focused on modern JavaScript frameworks, cloud technologies, and DevOps practices.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm transform transition-transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Award className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Achievements</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Led multiple successful projects, recognized for technical excellence and problem-solving abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;