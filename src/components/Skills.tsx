import React from 'react';
import { Code, Server, Database, Settings, Layout, Terminal } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Layout className="text-blue-600 dark:text-blue-400" size={24} />,
    skills: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Material UI"]
  },
  {
    title: "Backend Development",
    icon: <Server className="text-green-600 dark:text-green-400" size={24} />,
    skills: ["Node.js", "Express", "Java", "Spring Boot", "Python", "Django", "Flask", ".NET Core"]
  },
  {
    title: "Database Technologies",
    icon: <Database className="text-yellow-600 dark:text-yellow-400" size={24} />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "Firebase"]
  },
  {
    title: "DevOps & Tools",
    icon: <Settings className="text-red-600 dark:text-red-400" size={24} />,
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "GitHub Actions", "Jenkins", "Terraform"]
  },
  {
    title: "Programming Languages",
    icon: <Code className="text-purple-600 dark:text-purple-400" size={24} />,
    skills: ["JavaScript/TypeScript", "Python", "Java", "C#", "Go", "PHP", "Ruby"]
  },
  {
    title: "Other Tools",
    icon: <Terminal className="text-gray-600 dark:text-gray-400" size={24} />,
    skills: ["Git", "VS Code", "Postman", "Jira", "Figma", "Adobe XD", "Webpack", "NPM/Yarn"]
  }
];

const SkillLevel: React.FC<{ skill: string }> = ({ skill }) => {
  // This would normally be based on actual skill level data
  // For now, we'll generate a random level between 70-95 for demonstration
  const level = Math.floor(Math.random() * (95 - 70 + 1)) + 70;
  
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory: React.FC<{ category: SkillCategory }> = ({ category }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-all hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {category.icon}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-center max-w-2xl">
            A comprehensive overview of my technical skills and the technologies I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Core Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <SkillLevel skill="JavaScript/TypeScript" />
              <SkillLevel skill="React.js" />
              <SkillLevel skill="Node.js" />
              <SkillLevel skill="Express.js" />
              <SkillLevel skill="MongoDB" />
            </div>
            <div className="space-y-4">
              <SkillLevel skill="AWS" />
              <SkillLevel skill="Docker" />
              <SkillLevel skill="RESTful APIs" />
              <SkillLevel skill="Git & GitHub" />
              <SkillLevel skill="Agile Methodologies" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;