// NAV: fondo solido al hacer scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// NAV MOBILE: menu hamburguesa
const toggle = document.querySelector('.nav__toggle');
const closeMenu = () => {
  nav.classList.remove('open');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
};
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
// Cerrar al elegir un link del menu
document.querySelectorAll('.nav__menu a').forEach((a) => {
  a.addEventListener('click', closeMenu);
});
// Cerrar con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
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
