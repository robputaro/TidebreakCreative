const nav = document.querySelector('.nav');
const progress = document.querySelector('.progress');
const toggle = document.querySelector('.menu-toggle');
const panel = document.querySelector('.mobile-panel');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

/* ---------- ONE-TIME REVEALS (fade-up, slide-left, slide-right, scale-in) ---------- */
const revealSelector = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(revealSelector).forEach((el) => observer.observe(el));

/* ---------- CONTINUOUS PARALLAX (depth, not one-time) ---------- */
const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));
const driftEls = Array.from(document.querySelectorAll('[data-drift]'));

function updateParallax() {
  const viewportH = window.innerHeight;
  parallaxEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const centerOffset = (rect.top + rect.height / 2) - viewportH / 2;
    const speed = parseFloat(el.dataset.parallax) || 0.15;
    el.style.transform = `translate3d(0, ${(-centerOffset * speed).toFixed(1)}px, 0)`;
  });
  driftEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.bottom < -200 || rect.top > viewportH + 200) return;
    const progressInView = 1 - Math.min(1, Math.max(0, (rect.top) / viewportH));
    const scale = 0.86 + Math.min(1, progressInView) * 0.14;
    const op = Math.min(1, Math.max(0.25, progressInView * 1.4));
    el.style.transform = `scale(${scale.toFixed(3)})`;
    el.style.opacity = op.toFixed(2);
  });
}

let parallaxTicking = false;
function onScrollParallax() {
  if (!parallaxTicking) {
    requestAnimationFrame(() => { updateParallax(); parallaxTicking = false; });
    parallaxTicking = true;
  }
}

if (!prefersReducedMotion && (parallaxEls.length || driftEls.length)) {
  window.addEventListener('scroll', onScrollParallax, { passive: true });
  window.addEventListener('resize', onScrollParallax);
  window.addEventListener('load', updateParallax);
  updateParallax();
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
