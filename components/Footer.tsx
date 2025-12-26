import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="max-w-xl mx-auto mb-10 text-slate-400">
          I'm currently available for freelance projects and full-time opportunities. 
          If you're interested in working together, feel free to reach out.
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-white transition-colors">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="text-sm pt-8 border-t border-slate-800">
          <p>&copy; {new Date().getFullYear()} Sammed Doshi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};