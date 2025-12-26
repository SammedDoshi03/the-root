import React from 'react';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { ThreeBackground } from './ThreeBackground';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden pt-24 pb-12">
      
      <ThreeBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm"
        >
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-200">Open to new opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
        >
          Sammed Doshi
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-10 leading-relaxed"
        >
          Senior Software Engineer specializing in scalable <span className="text-primary-400 font-semibold">React Native</span>, <span className="text-primary-400 font-semibold">TypeScript</span>, and <span className="text-primary-400 font-semibold">GenAI</span> solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-5 mb-14"
        >
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noreferrer"
            className="p-3.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 text-white"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="p-3.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="p-3.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 text-white"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <a 
            href="#projects"
            className="px-8 py-4 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-primary-500/25 text-lg"
          >
            View Projects
          </a>
          <button 
            className="px-8 py-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all hover:scale-105 border border-slate-700 flex items-center justify-center gap-2 text-lg"
            onClick={() => window.print()}
          >
            <Download size={20} />
            Save Resume
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex items-center text-slate-400 text-sm"
        >
          <MapPin size={16} className="mr-2" />
          <span>Based in India • Available Worldwide</span>
        </motion.div>
      </div>
    </div>
  );
};