const menu = document.querySelector('.mob-menu-container');
const openBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const links = document.querySelectorAll('.mob-menu-list a');

// Відкриття меню
openBtn.onclick = () => {
  menu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
};

// Закриття меню
closeBtn.onclick = () => {
  menu.classList.remove('is-open');
  document.body.style.overflow = 'auto';
};

// Прокрутка до секції та закриття меню
links.forEach(link => {
  link.onclick = (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    menu.classList.remove('is-open');
    document.body.style.overflow = 'auto';

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth',
    });
  };
});