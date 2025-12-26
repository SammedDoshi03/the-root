import React, { useState, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
// import './index.css'; // Removed as it is imported in index.tsx

const Experience = React.lazy(() => import('./components/Experience').then(module => ({ default: module.Experience })));
const Projects = React.lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Blog = React.lazy(() => import('./components/Blog').then(module => ({ default: module.Blog })));
const Skills = React.lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })));
const Contact = React.lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = React.lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
const SnowEffect = React.lazy(() => import('./components/SnowEffect').then(module => ({ default: module.SnowEffect })));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop').then(module => ({ default: module.ScrollToTop })));

function App() {
  const [isSnowing, setIsSnowing] = useState(false);

  const toggleSnow = () => setIsSnowing(!isSnowing);

  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={null}>
        {isSnowing && <SnowEffect />}
      </Suspense>
      <Header toggleSnow={toggleSnow} isSnowing={isSnowing} />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
          <Experience />
          <Projects />
          <Blog />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}

export default App;