import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2015 - 2017",
    description: "Specialized in Software Engineering and Artificial Intelligence",
    achievements: [
      "Graduated with distinction",
      "Published research paper on 'Efficient Algorithms for Data Processing'",
      "Teaching Assistant for Introduction to Computer Science"
    ]
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    period: "2011 - 2015",
    description: "Focused on Web Development and Database Management",
    achievements: [
      "Dean's List for 6 consecutive semesters",
      "President of the Computer Science Club",
      "Developed an alumni tracking system as capstone project"
    ]
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
          </div>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-center max-w-2xl">
            My academic background and qualifications that have contributed to my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{item.institution}</p>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    <span>{item.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.location}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
                
                {item.achievements && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Achievements</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 max-w-2xl text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Continuing Education</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I believe in lifelong learning and regularly take online courses to stay updated with the latest technologies and trends in the industry.
              Some recent certifications include AWS Certified Developer, Google Cloud Professional Developer, and MongoDB Developer Certification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;