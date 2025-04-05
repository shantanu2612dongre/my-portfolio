
export const setupScrollAnimation = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        
        // For staggered animations inside a container
        const staggerItems = entry.target.querySelectorAll('.stagger-item');
        if (staggerItems.length > 0) {
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).classList.add('show');
            }, 100 * index);
          });
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  elements.forEach((el) => {
    observer.observe(el);
  });

  return () => {
    elements.forEach((el) => {
      observer.unobserve(el);
    });
  };
};
