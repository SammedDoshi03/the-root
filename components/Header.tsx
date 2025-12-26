import React, { useState, useEffect } from 'react';
import { Menu, X, Snowflake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  toggleSnow: () => void;
  isSnowing: boolean;
}

export const Header: React.FC<HeaderProps> = ({ toggleSnow, isSnowing }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: { 
        staggerChildren: 0.05, 
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20, scale: 0.95 },
    open: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}>
              SD<span className="text-primary-500">.</span>
            </a>

            <div className="flex items-center gap-6">
               {/* Desktop Nav */}
              <nav className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                      isScrolled ? 'text-slate-600' : 'text-slate-300'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Snow Toggle Button */}
              <button 
                onClick={toggleSnow}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isSnowing 
                    ? 'bg-blue-100 text-blue-500' 
                    : isScrolled ? 'bg-slate-100 text-slate-500 hover:bg-slate-200' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                title="Toggle Snow"
              >
                <Snowflake size={20} />
              </button>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 z-50 relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="text-slate-900" />
                ) : (
                  <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm md:hidden flex flex-col items-center justify-center"
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="flex flex-col space-y-8 text-center"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  className="text-3xl font-bold text-slate-900 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};