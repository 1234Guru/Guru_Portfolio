import { motion } from 'framer-motion';

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="bg-slate-100 dark:bg-slate-800/50">
      <div className="container">
        <motion.h2 
          className="section-title mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <h3 className="text-2xl font-bold mb-4">
              Front End Web Developer
            </h3>
            <p className="mb-4">
              I'm a highly motivated Frontend Developer with more than three years of comprehensive experience
              across the entire frontend stack, including HTML, CSS, JavaScript, jQuery, and Tailwind CSS.
            </p>
            <p className="mb-4">
              Proficient in modern JavaScript frameworks such as React, Angular, Vue.js, and Next.js, with practical
              experience in Node.js, Express.js, and React Native. Further bridging skills on AJAX advancements.
            </p>
            <p className="mb-4">
              I'm passionate about creating interactive and dynamic user interfaces, and I stay updated with the latest JavaScript frameworks and libraries.
            </p>
            
            <ul className="grid grid-cols-2 gap-2 mb-6">
              <li className="flex items-center">
                <span className="text-teal-500 mr-2">▹</span> React
              </li>
              <li className="flex items-center">
                <span className="text-teal-500 mr-2">▹</span> Angular
              </li>
              <li className="flex items-center">
                <span className="text-teal-500 mr-2">▹</span> Vue.js
              </li>
              <li className="flex items-center">
                <span className="text-teal-500 mr-2">▹</span> Next.js
              </li>
              <li className="flex items-center">
                <span className="text-teal-500 mr-2">▹</span> Node.js
              </li>
              <li className="flex items-center">
                <span className="text-teal-500 mr-2">▹</span> Express.js
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="flex justify-center"
          >
            <div className="grid grid-cols-1 gap-4 w-full max-w-md">
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-slate-600 dark:text-slate-300">Hyderabad, India</p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-slate-600 dark:text-slate-300">b.gurumukesh123@gmail.com</p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-slate-600 dark:text-slate-300">+91 7337060045</p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-md text-sm">
                    English 
                  </span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-md text-sm">
                    Telugu - Native
                  </span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-md text-sm">
                    Hindi 
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;