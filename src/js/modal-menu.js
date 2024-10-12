const openMenuBtn = document.querySelector('.open-menu-btn');
const mobMenuContainer = document.querySelector('.mob-menu-container');
const openIcon = document.querySelector('.icon-open');
const closeIcon = document.querySelector('.icon-close');
const menuLinks = document.querySelectorAll('.mob-menu-item a');


openMenuBtn.addEventListener('click', () => {
  if (mobMenuContainer.classList.contains('active')) {
    mobMenuContainer.classList.remove('active');
    document.body.classList.remove('scroll-lock');
  } else {
    mobMenuContainer.classList.add('active');
    document.body.classList.add('scroll-lock');
  }
});


// window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.classList.remove('burger-active');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//     document.body.classList.remove('scroll-lock');
//   });
const navIcon = document.querySelector('#burger');

menuLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
    mobMenuContainer.classList.remove('active');
    document.body.classList.remove('scroll-lock');
    navIcon.classList.toggle('open');
  });
});

// css burger animation
document.addEventListener('DOMContentLoaded', function () {

  navIcon.addEventListener('click', function () {
    navIcon.classList.toggle('open');
  });
});