import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveLink?: string;
  githubLink?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'SK Kanchan',
      description: 'A comprehensive e-commerce website for consumer brands with modern UI/UX design principles.',
      image: 'https://images.pexels.com/photos/6169/woman-hand-desk-office.jpg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Wordpress'],
      category: 'web',
      githubLink: 'https://github.com/1234Guru',
    },
    {
      id: 2,
      title: 'Ticketing Tool',
      description: 'An Angular-based ticketing system for internal issue tracking and resolution.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      category: 'web',
      githubLink: 'https://github.com/1234Guru',
    },
    {
      id: 3,
      title: 'Ecommerce Website',
      description: 'A full-stack MERN application for online shopping with payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Express', 'MongoDB', 'Node.js'],
      category: 'web',
    },
    {
      id: 4,
      title: 'Eliton',
      description: 'Project focusing on modern UI design patterns and interactive elements.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Wordpress'],
      category: 'design',
      githubLink: 'https://github.com/1234Guru',
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

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((project) => project.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <motion.h2 
          className="section-title mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          My Personal Projects
        </motion.h2>
        
        <motion.div 
          className="flex justify-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-teal-500 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 hover:bg-teal-100 dark:hover:bg-teal-900/30'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'web'
                  ? 'bg-teal-500 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 hover:bg-teal-100 dark:hover:bg-teal-900/30'
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter('design')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'design'
                  ? 'bg-teal-500 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 hover:bg-teal-100 dark:hover:bg-teal-900/30'
              }`}
            >
              Design
            </button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card group overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <h3 className="text-white text-lg font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-teal-500/80 hover:bg-teal-500 p-2 rounded-full transition-colors"
                        aria-label="Visit site"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-slate-700/80 hover:bg-slate-700 p-2 rounded-full transition-colors"
                        aria-label="View code on GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;