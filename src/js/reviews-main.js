import { fetchPosts } from './reviews-api';
import { renderReviews, errorPost } from './reviews-render-functions';

import Swiper from 'swiper';
import 'swiper/css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export const list = document.querySelector('.reviews-list');
const prevBtn = document.querySelector('.reviews-btn.left');
const nextBtn = document.querySelector('.reviews-btn.right');
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
        iziToast.show({
            message: "Not found",
            color: "red",
            position: "topRight",
        });
        errorPost();
    }
};

reviews();

function initSwiper() {
    swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        effect: 'slide',
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        longSwipesMs: 300,
        navigation: {
            nextEl: '.reviews-btn.right',
            prevEl: '.reviews-btn.left',
        },
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
            slideChange: function () {
                updateNavigationButtons();
            },
        },
    });
};

function updateNavigationButtons() {
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