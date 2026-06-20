const nav = document.querySelector('.nav');
const progress = document.querySelector('.progress');
const toggle = document.querySelector('.menu-toggle');
const panel = document.querySelector('.mobile-panel');

function updateChrome() {
  const top = window.scrollY || document.documentElement.scrollTop;
  if (nav) nav.classList.toggle('scrolled', top > 18);
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const pct = height > 0 ? (top / height) * 100 : 0;
  if (progress) progress.style.width = `${pct}%`;
}

window.addEventListener('scroll', updateChrome, { passive: true });
window.addEventListener('load', updateChrome);

if (toggle && panel) {
  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    toggle.textContent = open ? 'Close' : 'Menu';
    toggle.setAttribute('aria-expanded', String(open));
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.textContent = 'Menu';
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
