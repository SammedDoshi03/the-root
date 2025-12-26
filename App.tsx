import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SnowEffect } from './components/SnowEffect';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  const [isSnowing, setIsSnowing] = useState(false);

  const toggleSnow = () => setIsSnowing(!isSnowing);

  return (
    <div className="min-h-screen bg-white">
      {isSnowing && <SnowEffect />}
      <Header toggleSnow={toggleSnow} isSnowing={isSnowing} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Blog />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;