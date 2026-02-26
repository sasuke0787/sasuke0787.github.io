// Navigation scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('nav__menu--open');
  });
  // Close menu when clicking a link
  menu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('nav__menu--open'));
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

