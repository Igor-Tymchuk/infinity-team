import { list } from './reviews-main';

export function renderReviews(posts) {
  const markup = posts
    .map(post => {
      const { review, avatar_url, author } = post;
      return `
            <li class="reviews-item swiper-slide">
              <div class="slide-box">
                <p class="review-text">
                  ${review}
                </p>
                <div class="review-author-box">
                  <div class="review-author-img-box">
                    <img src="${avatar_url}" alt="author-avatar" class="review-author-img" width="40" height="40"/>
                  </div>
                  <p class="review-author-name">${author}</p>
                </div>
              </div>
            </li>`;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}

export function errorPost() {
  const markup =
    '<li class="reviews-item swiper-slide"><div class="slide-box"><div class="review-author-box"><p class="review-author-name">Not found</p></div></div></li>';
  list.insertAdjacentHTML('beforeend', markup);
}
