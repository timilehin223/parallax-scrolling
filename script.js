document.addEventListener('scroll', function() {
  const logos = document.getElementById('logos');
  const scrollPosition = window.scrollY;

  const parallaxSpeed = 0.5; // Adjust for desired effect (0 to 1)
  const offset = scrollPosition * parallaxSpeed;
  logos.style.transform = `translateY(${offset}px)`;
});

document.documentElement.style.scrollBehavior = 'smooth';
