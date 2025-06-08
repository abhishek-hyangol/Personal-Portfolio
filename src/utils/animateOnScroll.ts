export const setupIntersectionObserver = () => {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-viewport');
        // Once the animation has played, we can unobserve the element
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1,
  });
  
  sections.forEach((section) => {
    observer.observe(section);
  });
};