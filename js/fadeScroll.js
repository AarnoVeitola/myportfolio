document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.fade-scroll');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.add('hidden');
          entry.target.classList.remove('visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((element) => observer.observe(element));
});
