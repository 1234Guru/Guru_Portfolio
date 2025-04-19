import { useState } from 'react';
import { motion } from 'framer-motion';

interface Job {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

const Experience = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const jobs: Job[] = [
    {
      company: 'Caliber Technologies',
      position: 'Frontend Developer',
      period: 'May 2023 - Present',
      location: 'Hyderabad, India',
      description: [
        'Frontend/UI along with FE frameworks',
        'Managing Multiple Projects',
        'Wireframing Constantly for efficiency',
        'Working in Pharma IT sector',
      ],
    },
    {
      company: 'Qressy',
      position: 'Front End Developer',
      period: 'Feb 2022 - Sep 2022',
      location: 'Hyderabad, India',
      description: [
        'Working on SK Kanchan project',
        'Specializing in UI/UX',
        'A software company focused on providing solutions for e-commerce businesses, particularly Direct-to-Consumer (D2C) brands and more',
       
      ],
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
    <section id="experience" className="bg-slate-100 dark:bg-slate-800/50">
      <div className="container">
        <motion.h2 
          className="section-title mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          Work Experience
        </motion.h2>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4 mb-6 md:mb-0">
              <div className="flex md:flex-col overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                {jobs.map((job, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTabIndex(index)}
                    className={`whitespace-nowrap px-4 py-3 text-left border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300 ${
                      activeTabIndex === index
                        ? 'text-teal-500 border-teal-500 bg-teal-50 dark:bg-teal-900/10'
                        : 'border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700/20'
                    }`}
                  >
                    {job.company}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:w-3/4">
              <div className="card p-6">
                <h3 className="text-xl font-bold">
                  {jobs[activeTabIndex].position} <span className="text-teal-500">@ {jobs[activeTabIndex].company}</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {jobs[activeTabIndex].period}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {jobs[activeTabIndex].location}
                </p>
                <ul className="space-y-2">
                  {jobs[activeTabIndex].description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 mt-1 mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h4 className="text-lg font-bold">Little Flower Degree College</h4>
              <p className="text-teal-500 font-medium">Graduation - BSc(MPC's)</p>
              <p className="text-slate-600 dark:text-slate-400">07/2018 - 12/2021</p>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-bold">KMR Junior College</h4>
              <p className="text-teal-500 font-medium">Intermediate - MPC's</p>
              <p className="text-slate-600 dark:text-slate-400">06/2016 - 05/2018</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;