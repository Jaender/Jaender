/**
 * Main application script - Andrés Argumero Personal Brand
 */

// Theme Management (Dark / Light Mode)
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcons();
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcons();
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  const sunIcons = document.querySelectorAll('.theme-sun-icon');
  const moonIcons = document.querySelectorAll('.theme-moon-icon');
  
  sunIcons.forEach(icon => icon.classList.toggle('hidden', !isDark));
  moonIcons.forEach(icon => icon.classList.toggle('hidden', isDark));
}

// Mobile Menu Toggle
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    menu.classList.toggle('hidden', !isHidden);
  });
}

// Counter Animation for Metrics
function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const prefix = counter.getAttribute('data-prefix') || '';
        const suffix = counter.getAttribute('data-suffix') || '';
        let count = 0;
        const speed = target / 35;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            counter.innerText = `${prefix}${Math.ceil(count)}${suffix}`;
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = `${prefix}${target}${suffix}`;
          }
        };
        updateCount();
        obs.unobserve(counter);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
}

// Set active navigation link based on current path
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('text-[#1A1918]', 'dark:text-[#FAF9F6]', 'font-bold');
      link.classList.remove('text-stone-500', 'dark:text-stone-400');
    }
  });
}

// Toast notification helper
function showToast(message, type = 'success') {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl text-sm font-medium transition-all duration-300 transform translate-y-10 opacity-0 border';
    document.body.appendChild(toast);
  }

  toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl text-sm font-medium transition-all duration-300 bg-[#1A1918] text-[#FAF9F6] dark:bg-[#FAF9F6] dark:text-[#11100F] border border-[#C8C5BD] dark:border-[#3E3C38]';
  toast.innerHTML = `<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span>${message}</span>`;

  // Trigger animation
  setTimeout(() => {
    toast.classList.remove('translate-y-10', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 4000);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initCounters();
  initActiveNavLink();
  
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => btn.addEventListener('click', toggleTheme));
});
