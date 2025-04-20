import { Github as GitHub, Linkedin, Mail, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import GuruImg from "../../public/image3.png";
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-teal-500 font-medium mb-2">Hi, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Guru Mukesh
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-600 dark:text-slate-400 mb-6">
              I build things for the web.
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              I'm a highly motivated Front End Web Developer with more than three years of comprehensive experience across the entire frontend stack, specializing in React, Angular, and modern JavaScript frameworks.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:b.gurumukesh123@gmail.com"
                className="btn btn-primary"
              >
                <Mail size={18} className="mr-2" />
                Contact Me
              </a>
              <a
                href="/guru-mukesh-resume.pdf"
                className="btn btn-outline"
                download
              >
                <Download size={18} className="mr-2" />
                Download CV
              </a>
            </div>
            
            <div className="flex gap-5">
              <a
                href="https://github.com/1234Guru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/guru-mukesh-21a521224/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:b.gurumukesh123@gmail.com"
                className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 rounded-lg transform translate-x-3 translate-y-3"></div>
              <img
                src={GuruImg+ "?auto=compress&cs=tinysrgb&w=600"}
                alt="Guru Mukesh"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg relative z-10"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="animate-bounce cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;