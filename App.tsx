import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Education from './components/Education.tsx';
import Contact from './components/Contact.tsx';
import AIChat from './components/AIChat.tsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <AIChat />
    </div>
  );
}

export default App;