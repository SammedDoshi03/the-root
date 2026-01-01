import React from 'react';
import { Section } from './Section';
import { ABOUT_TEXT } from '../constants';
import { Zap, Server, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-600 uppercase bg-primary-50 rounded-full">
            {t('about_me_badge')}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            {t('about_title')}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {ABOUT_TEXT}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <Zap size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Performance</h4>
                <p className="text-sm text-slate-500">Optimizing render cycles & load times.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Globe size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Scalability</h4>
                <p className="text-sm text-slate-500">Enterprise-grade architecture.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 bg-purple-100 text-purple-600 rounded-lg">
                <Server size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Backend</h4>
                <p className="text-sm text-slate-500">Secure & robust server-side logic.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-xl blur-lg opacity-20"></div>
          <div className="relative bg-white p-8 rounded-xl shadow-xl border border-slate-100">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="font-semibold text-slate-700">Frontend Development</span>
                <span className="text-primary-600 font-bold">95%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="font-semibold text-slate-700">React Native / Expo</span>
                <span className="text-primary-600 font-bold">90%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="font-semibold text-slate-700">Backend Integration</span>
                <span className="text-primary-600 font-bold">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-700">GenAI & ML</span>
                <span className="text-primary-600 font-bold">80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};