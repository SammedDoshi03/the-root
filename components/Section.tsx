import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", light = false }) => {
  return (
    <section 
      id={id} 
      className={`py-24 lg:py-32 px-4 sm:px-6 lg:px-8 scroll-mt-24 transition-colors duration-300 ${light ? 'bg-slate-50' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-20 text-center"
          >
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-primary-500 rounded-full"></span>
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-slate-600 mt-4 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};