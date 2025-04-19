import { motion } from 'framer-motion';

interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern web technologies.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive Design', 'Web Accessibility'],
    },
    {
      name: 'Frontend Frameworks',
      description: 'Experience with popular JavaScript frameworks and libraries.',
      skills: ['React', 'Angular', 'Vue.js', 'Next.js', 'Redux', 'React Router'],
    },
    {
      name: 'Backend Technologies',
      description: 'Server-side development and API integration experience.',
      skills: ['Node.js', 'Express.js'],
    },
    {
      name: 'Database & Storage',
      description: 'Working with various database systems and data storage solutions.',
      skills: ['MongoDB', 'Firebase', 'Local Storage'],
    },
    {
      name: 'UI/UX & Styling',
      description: 'Creating beautiful and user-friendly interfaces with modern CSS frameworks.',
      skills: ['Tailwind CSS', 'Bootstrap', 'SASS/SCSS', 'Material UI', 'Styled Components','Wireframing', 'Designing'],
    },
    {
      name: 'Tools & Workflow',
      description: 'Development tools and practices for efficient workflow.',
      skills: ['Git', 'Webpack', 'Vite', 'npm/yarn', 'Postman', 'VS Code'],
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills">
      <div className="container">
        <motion.h2 
          className="section-title mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.name}
              className="card p-6 hover:shadow-lg transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2 text-teal-500">
                {category.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;