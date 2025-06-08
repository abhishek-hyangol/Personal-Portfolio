import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Senior Software Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    description: [
      "Lead a team of 5 developers in building and maintaining enterprise-level web applications",
      "Implemented microservices architecture using Node.js and Express, resulting in 40% improvement in system performance",
      "Developed and maintained CI/CD pipelines using GitHub Actions",
      "Collaborated with product managers to refine requirements and create technical specifications"
    ]
  },
  {
    title: "Software Developer",
    company: "Digital Solutions LLC",
    location: "Boston, MA",
    period: "Mar 2019 - Dec 2021",
    description: [
      "Worked on a team developing a customer-facing web application using React and Redux",
      "Implemented RESTful APIs using Node.js and Express",
      "Contributed to the migration from monolithic architecture to microservices",
      "Participated in code reviews and mentored junior developers"
    ]
  },
  {
    title: "Junior Web Developer",
    company: "WebTech Systems",
    location: "Chicago, IL",
    period: "Jun 2017 - Feb 2019",
    description: [
      "Developed and maintained front-end components for various web applications",
      "Created responsive designs using HTML, CSS, and JavaScript",
      "Collaborated with designers to implement UI/UX improvements",
      "Assisted in database design and optimization using MongoDB"
    ]
  }
];

const ExperienceCard: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-all hover:shadow-lg"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="p-6">
        <div className="flex flex-wrap justify-between items-start mb-4">
          <div className="mb-2 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{item.company}</p>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <Calendar size={16} className="mr-1" />
            <span>{item.period}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.location}</p>
        
        <ul className="space-y-2">
          {item.description.map((point, idx) => (
            <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-blue-600 dark:text-blue-400" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Work Experience
            </h2>
          </div>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-center max-w-2xl">
            My professional journey in the software development industry, showcasing my roles and responsibilities.
          </p>
        </div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 dark:bg-blue-900 h-full"></div>
          
          {/* Experience items with alternating layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experienceData.map((item, index) => (
              <div 
                key={index} 
                className={`md:${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} md:w-[95%]`}
              >
                <ExperienceCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;