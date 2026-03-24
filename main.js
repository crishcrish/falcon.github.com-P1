/* main.js — FALCON Mensajería Femenina */

// ─── Navbar: scroll effect ─────────────────────────────────
const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav-scrolled', 'glass-effect');
    nav.classList.remove('py-4');
    nav.classList.add('py-2');
  } else {
    nav.classList.remove('nav-scrolled', 'glass-effect');
    nav.classList.remove('py-2');
    nav.classList.add('py-4');
  }
});

// ─── Mobile menu: open / close ─────────────────────────────
const mobileMenuBtn   = document.getElementById('mobile-menu-btn');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu      = document.getElementById('mobile-menu');

function openMobileMenu() {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
  document.body.style.overflow = '';
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);

// Cerrar el menú al tocar un enlace interno
['inicio', 'nosotros', 'servicios', 'contacto'].forEach(id => {
  const link = document.getElementById(`mobile-link-${id}`);
  if (link) link.addEventListener('click', closeMobileMenu);
});

// ─── Smooth scrolling para todos los anclas internos ───────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

function toggleFaq(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector(".faq-icon");

  content.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
}
