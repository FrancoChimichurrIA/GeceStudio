// NAV: fondo solido al hacer scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// REVEAL: animacion al entrar en viewport
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach((el) => io.observe(el));
