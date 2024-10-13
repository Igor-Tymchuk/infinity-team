import { list } from './reviews-main';

export function renderReviews(posts) {
    const markup = posts
        .map((post) => {
            const { review, avatar_url, author } = post;
            return `
            <li class="reviews-item swiper-slide">
              <p class="reviews-text">
                ${review}
              </p>
              <div class="reviews-container">
                <div class="reviews-wrap-img">
                  <img src="${avatar_url}" alt="avatar" class="reviews-img" />
                </div>
                <p class="reviews-name">${author}</p>
              </div>
            </li>`;
        })
        .join('');
    list.insertAdjacentHTML('beforeend', markup);
};

export function errorPost() {
    const markup = '<li class="reviews-item"><p class="reviews-name">Not found</p></li>';
    list.insertAdjacentHTML('beforeend', markup);
};