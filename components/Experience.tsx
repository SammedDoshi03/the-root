import React from 'react';
import { Section } from './Section';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../constants';
import { Briefcase, Calendar, Award, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience" subtitle="My journey in the software industry">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Work History */}
        <div className="lg:col-span-2 space-y-12">
          <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12 pb-4">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full bg-primary-500 ring-4 ring-white"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                    <Briefcase size={18} />
                    {exp.company}
                  </h4>
                  <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                    <Calendar size={14} />
                    {exp.location}
                  </p>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Key Clients:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.clients.map((client, i) => (
                      <span key={i} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded border border-slate-200">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-slate-600 text-base leading-relaxed flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certs Sidebar */}
        <div className="space-y-10">
          {/* Education */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary-500" />
              Education
            </h3>
            <div>
              <h4 className="font-semibold text-slate-900">{EDUCATION.institution}</h4>
              <p className="text-slate-600 text-sm mt-1">{EDUCATION.degree}</p>
              <p className="text-slate-500 text-sm mt-1 italic">{EDUCATION.honors}</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500">
                <span>{EDUCATION.location}</span>
                <span>{EDUCATION.date}</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Award className="text-primary-500" />
              Certifications
            </h3>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-medium text-slate-800 text-sm">{cert.name}</span>
                  <span className="text-xs text-slate-500 mt-1">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};