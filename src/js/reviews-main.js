import { fetchPosts, listenHeight } from './reviews-api';
import { renderReviews, errorPost } from './reviews-render-functions';

import Swiper from 'swiper';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const list = document.querySelector('.reviews-list');
const prevBtn = document.querySelector('.reviews-btn.left');
const nextBtn = document.querySelector('.reviews-btn.right');
const reviewsSwiper = document.querySelector('.swiper-container');
let swiper;

async function reviews() {
  try {
    const posts = await fetchPosts();
    renderReviews(posts);

    if (!swiper) {
      initSwiper();
    } else {
      swiper.update();
    }
    updateNavigationButtons();
  } catch (error) {
    document.addEventListener('scroll', listenHeight);
  }
}

reviews();

function initSwiper() {
  swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    spaceBetween: '32',
    loop: false,
    effect: 'slide',

    longSwipesMs: 300,
    grabCursor: true,
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous review',
      nextSlideMessage: 'Next review',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1280: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    on: {
      init: function () {
        setEqualHeight();
      },

      slideChange: function () {
        setEqualHeight();
        updateNavigationButtons();
      },
    },
  });

  window.addEventListener('resize', setEqualHeight);
}

prevBtn.addEventListener('click', () => {
  swiper.slidePrev();
});

nextBtn.addEventListener('click', () => {
  swiper.slideNext();
});

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function swiperKeyboardNav(e) {
  if (isInViewport(reviewsSwiper)) {
    if (e.key === 'ArrowLeft') {
      swiper.slidePrev();
    } else if (e.key === 'ArrowRight') {
      swiper.slideNext();
    }
  }
}

document.addEventListener('keydown', swiperKeyboardNav);

function setEqualHeight() {
  const slides = document.querySelectorAll('.reviews-item');

  slides.forEach(slide => {
    slide.style.height = 'auto';
  });

  let maxHeight = 0;

  slides.forEach(slide => {
    const slideHeight = slide.offsetHeight;
    if (slideHeight > maxHeight) {
      maxHeight = slideHeight;
    }
  });

  slides.forEach(slide => {
    slide.style.height = `${maxHeight}px`;
  });
}

function updateNavigationButtons() {
  if (!swiper) return;
  if (swiper.isBeginning) {
    prevBtn.classList.add('disabled');
    prevBtn.setAttribute('disabled', true);
  } else {
    prevBtn.classList.remove('disabled');
    prevBtn.removeAttribute('disabled');
  }

  if (swiper.isEnd) {
    nextBtn.classList.add('disabled');
    nextBtn.setAttribute('disabled', true);
  } else {
    nextBtn.classList.remove('disabled');
    nextBtn.removeAttribute('disabled');
  }
}

updateNavigationButtons();
