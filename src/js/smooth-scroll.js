const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', e => {
    e.preventDefault();

    const blockID = anchor.getAttribute('href');

    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
