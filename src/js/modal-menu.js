const openMenuBtn = document.querySelector('.open-menu-btn');
const mobMenuContainer = document.querySelector('.mob-menu-container');
const openIcon = document.querySelector('.icon-open');
const closeIcon = document.querySelector('.icon-close');
const menuLinks = document.querySelectorAll('.mob-menu-item a');


openMenuBtn.addEventListener('click', () => {
  if (mobMenuContainer.classList.contains('active')) { 
    mobMenuContainer.classList.remove('active');
    openIcon.classList.toggle('header-none');
    closeIcon.classList.toggle('header-none');
  }
  else
    mobMenuContainer.classList.add('active');
    openIcon.classList.toggle('header-none');
    closeIcon.classList.toggle('header-none');
});


// window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.classList.remove('burger-active');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//     document.body.classList.remove('scroll-lock');
//   });



  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
      mobMenuContainer.classList.remove('active');
    });
});