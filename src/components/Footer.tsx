import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              <span className="text-teal-500">&lt;</span>
              Guru Mukesh
              <span className="text-teal-500">/&gt;</span>
            </h3>
            <p className="mt-2 text-slate-400">
              Front End Web Developer
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/1234Guru"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-teal-500 p-3 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/guru-mukesh-21a521224/  "
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-teal-500 p-3 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:b.gurumukesh123@gmail.com"
              className="bg-slate-700 hover:bg-teal-500 p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p>&copy; {currentYear} Guru Mukesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;