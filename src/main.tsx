import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { setupIntersectionObserver } from './utils/animateOnScroll';

// Custom wrapper to handle side effects
const AppWithEffects = () => {
  useEffect(() => {
    // Setup animation on scroll
    setupIntersectionObserver();
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithEffects />
  </StrictMode>
);