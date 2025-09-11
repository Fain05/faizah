// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Language toggle
const langBtn = document.getElementById('langBtn');
let currentLang = 'en';
const elements = document.querySelectorAll('[data-lang-en]');

// initialize text
elements.forEach(el => el.textContent = el.dataset.langEn);

langBtn.addEventListener('click', () => {
  if(currentLang === 'en'){
    currentLang = 'ms';
    langBtn.textContent = 'MS';
    elements.forEach(el => el.textContent = el.dataset.langMs);
  } else {
    currentLang = 'en';
    langBtn.textContent = 'EN';
    elements.forEach(el => el.textContent = el.dataset.langEn);
  }
});
