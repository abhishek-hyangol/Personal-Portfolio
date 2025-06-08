import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check for user preference
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;