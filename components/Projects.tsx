import React, { useState } from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { ExternalLink, Tag, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const allFiltered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  const displayedProjects = allFiltered.slice(0, visibleCount);
  const hasMore = visibleCount < allFiltered.length;

  return (
    <Section id="projects" title="Featured Projects" subtitle="A selection of my technical work and contributions" light>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => { setFilter(category); setVisibleCount(4); }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                ? 'bg-primary-600 text-white shadow-md transform scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-primary-200'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 uppercase tracking-wide shadow-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                        title="View Code on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-primary-500 transition-colors"
                        title="View Live/Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mb-6 space-y-2">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start text-sm text-slate-500">
                      <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-300"></span>
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                        <Tag size={10} className="mr-1 opacity-50" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount(prev => prev + 4)}
            className="px-8 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Load More Projects
          </button>
        </div>
      )}
    </Section>
  );
};