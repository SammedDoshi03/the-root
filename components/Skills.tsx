import React from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';
import { Code, Database, Layout, PenTool, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const IconMap = {
  code: Terminal,
  database: Database,
  layout: Layout,
  tool: PenTool
};

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Proficiency" subtitle="Tools and technologies I work with">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((category, idx) => {
          const Icon = IconMap[category.icon] || Code;
          return (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-primary-200 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 text-primary-500 border border-slate-100">
                <Icon size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="relative flex flex-col items-center group">
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none shadow-lg z-20 whitespace-nowrap">
                      {skill.name}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                    </div>

                    <div className="h-10 w-10 mb-2 transition-transform duration-300 group-hover:scale-110">
                      <img 
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.iconKey}.svg`} 
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs text-slate-600 text-center font-medium opacity-80 group-hover:opacity-100">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};