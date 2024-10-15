let scrollPosY = 0;
const btnScrollToTop = document.querySelector('.scroll-to-top-btn');

btnScrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  const scrollPosY = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollPosY > 1.5 * windowHeight) {
    btnScrollToTop.classList.add('scroll-up-visible');
    btnScrollToTop.classList.remove('scroll-up-hidden');
  } else {
    btnScrollToTop.classList.add('scroll-up-hidden');
    btnScrollToTop.classList.remove('scroll-up-visible');
  }
});
