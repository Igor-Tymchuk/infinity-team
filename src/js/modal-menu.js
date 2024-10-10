// Відкриття меню
const openMenu = () => {
  const menu = document.querySelector('.mobile-list-nav');
  menu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
};

// Закриття меню
const closeMenu = () => {
  const menu = document.querySelector('.mobile-list-nav');
  menu.classList.remove('is-open');
  document.body.style.overflow = 'auto';
};

// Додавання обробників подій для кнопок відкриття/закриття меню
const initMenuListeners = () => {
  const openBtn = document.querySelector('.open-menu-btn');
  const closeBtn = document.querySelector('.close-menu-btn');
  
  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
};

// Прокрутка до секції та закриття меню
const scrollToSection = event => {
  event.preventDefault();
  
  const targetId = event.currentTarget.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  closeMenu();

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth',
  });
};

// Додавання обробників подій для посилань у меню
const initScrollListeners = () => {
  const links = document.querySelectorAll('.mobile-list-nav a');
  
  links.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
};

// Ініціалізація обробників подій при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  initMenuListeners();
  initScrollListeners();
});