import React, { useState } from 'react';
import { Section } from './Section';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');
    
    try {
      // NOTE: Replace this URL with your actual backend endpoint (e.g., Formspree, Getform, or your own API)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        const data = await response.json().catch(() => ({}));
        // Handle common error formats or fallback
        const msg = data.error || (data.errors ? data.errors.map((e: any) => e.message).join(', ') : 'Failed to send message');
        throw new Error(msg || 'Failed to send message');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      // Reset error state after 5 seconds to allow retry
      setTimeout(() => {
        if (formState !== 'success') {
          setFormState('idle');
          setErrorMessage('');
        }
      }, 5000);
    }
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a project in mind or just want to say hi?" light>
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Contact Info Sidebar with new Theme */}
        <div className="relative bg-gradient-to-br from-primary-800 to-slate-900 p-8 md:p-12 text-white md:w-5/12 flex flex-col justify-between overflow-hidden">
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-40 h-40 rounded-full bg-indigo-500/20 blur-2xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Let's build something amazing</h3>
            <p className="text-primary-100 mb-8 leading-relaxed font-light">
              I'm always interested in discussing new projects, opportunities, or creative ideas.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:sammeddoshi03.sd@gmail.com" 
                className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="bg-white/10 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="text-primary-300" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Me</h4>
                  <span className="text-primary-200 text-sm group-hover:text-white transition-colors">
                    sammeddoshi03.sd@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="relative z-10 mt-12 md:mt-0">
             <div className="flex gap-3 items-center text-primary-200/60 text-sm">
                <div className="h-[1px] w-12 bg-primary-200/30"></div>
                <span>Available for new projects</span>
             </div>
          </div>
        </div>

        {/* Form with modernized inputs */}
        <div className="p-8 md:p-12 md:w-7/12 bg-white relative">
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={formState === 'submitting' || formState === 'success'}
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-300 disabled:opacity-60 placeholder:text-slate-400"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={formState === 'submitting' || formState === 'success'}
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-300 disabled:opacity-60 placeholder:text-slate-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Message</label>
              <textarea 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={formState === 'submitting' || formState === 'success'}
                className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-300 resize-none disabled:opacity-60 placeholder:text-slate-400"
                placeholder="Tell me about your project details..."
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={formState === 'submitting' || formState === 'success'}
                className={`w-full py-4 px-8 rounded-xl font-bold text-white shadow-lg shadow-primary-500/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 ${
                  formState === 'success' 
                    ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20' 
                    : formState === 'error'
                    ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20'
                    : 'bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700'
                }`}
              >
                {formState === 'idle' && (
                  <>
                    Send Message
                    <Send size={20} className="ml-1" />
                  </>
                )}
                {formState === 'submitting' && (
                  <>
                    <Loader2 className="animate-spin" size={22} />
                    <span>Sending...</span>
                  </>
                )}
                {formState === 'success' && (
                  <>
                    <CheckCircle size={22} />
                    <span>Message Sent!</span>
                  </>
                )}
                {formState === 'error' && (
                  <>
                    <AlertCircle size={22} />
                    <span>Failed to Send</span>
                  </>
                )}
              </button>
              
              {formState === 'error' && errorMessage && (
                <p className="mt-4 text-sm text-rose-500 text-center font-medium bg-rose-50 py-2 rounded-lg">
                  {errorMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};