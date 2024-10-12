const newProjects = [
  {
    imgSrcMobile: '/images/power-mob.webp 1x, /images/power-mob-x2.webp 2x',
    imgSrcTablet: '/images/power-tab.webp 1x, /images/power-tab-x2.webp 2x',
    imgSrcDesktop: '/images/power.webp 1x, /images/power-x2.webp 2x',
    imgAlt: 'power pulse webservice',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'power pulse webservice',
    githubLink: 'https://github.com/Igor-Tymchuk/',
  },
  {
    imgSrcMobile: '/images/fresh-mob.webp 1x, /images/fresh-mob-x2.webp 2x',
    imgSrcTablet: '/images/fresh-tab.webp 1x, /images/fresh-tab-x2.webp 2x',
    imgSrcDesktop: '/images/fresh.webp 1x, /images/fresh-x2.webp 2x',
    imgAlt: 'fruitbox online store',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'fruitbox online store',
    githubLink: 'https://github.com/Igor-Tymchuk/',
  },
  {
    imgSrcMobile: '/images/ukr-mob.webp 1x, /images/ukr-mob-x2.webp 2x',
    imgSrcTablet: '/images/ukr-tab.webp 1x, /images/ukr-tab-x2.webp 2x',
    imgSrcDesktop: '/images/ukr.webp 1x, /images/ukr-x2.webp 2x',
    imgAlt: 'vyshyvanka vibes Landing Page',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'vyshyvanka vibes Landing Page',
    githubLink: 'https://github.com/Igor-Tymchuk/',
  },
  {
    imgSrcMobile: '/images/star-mob.webp 1x, /images/star-mob-x2.webp 2x',
    imgSrcTablet: '/images/star-tab.webp 1x, /images/star-tab-x2.webp 2x',
    imgSrcDesktop: '/images/star.webp 1x, /images/star-x2.webp 2x,',
    imgAlt: 'starlight studio landing page',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'starlight studio landing page',
    githubLink: 'https://github.com/Igor-Tymchuk/',
  },
  {
    imgSrcMobile: '/images/nature-mob.webp 1x, /images/nature-mob-x2.webp 2x',
    imgSrcTablet: '/images/nature-tab.webp 1x, /images/nature-tab-x2.webp 2x',
    imgSrcDesktop: '/images/nature.webp 1x, /images/nature-x2.webp 2x',
    imgAlt: 'chego jewelry website',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'chego jewelry website',
    githubLink: 'https://github.com/Igor-Tymchuk/',
  },
  {
    imgSrcMobile: '/images/mimino-mob.webp 1x, /images/mimino-mob-x2.webp 2x',
    imgSrcTablet: '/images/mimino-tab.webp 1x, /images/mimino-tab-x2.webp 2x',
    imgSrcDesktop: '/images/mimino.webp 1x, /images/mimino-x2.webp 2x',
    imgAlt: 'mimino website',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'mimino website',
    githubLink: 'https://github.com/Igor-Tymchuk/',
  },
  {
    imgSrcMobile: '/images/body-mob.webp 1x, /images/body-mob-x2.webp 2x',
    imgSrcTablet: '/images/body-tab.webp 1x, /images/body-tab-x2.webp 2x',
    imgSrcDesktop: '/images/body.webp 1x, /images/body-x2.webp 2x',
    imgAlt: 'energy flow webservice',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'energy flow webservice ',
    githubLink: 'https://github.com/Igor-Tymchuk/',
  },
];

let currentIndex = 0;

document
  .getElementById('projects-more-btn')
  .addEventListener('click', addProjects);

function addProjects() {
  const projectsList = document.getElementById('projects-list');
  const projectsToAdd = 3;

  for (let i = 0; i < projectsToAdd; i++) {
    if (currentIndex >= newProjects.length) {
      document.getElementById('projects-more-btn').style.display = 'none';
      break;
    }

    const project = newProjects[currentIndex];
    const li = document.createElement('li');

    li.innerHTML = `
      <picture>
        <source media="(min-width: 1280px)" srcset="${project.imgSrcDesktop}" type="image/webp" />
        <source media="(min-width: 768px)" srcset="${project.imgSrcTablet}" type="image/webp" />
        <source media="(max-width: 767px)" srcset="${project.imgSrcMobile}" type="image/webp" />
        <img class="projects-img-list" src="${project.imgSrcDesktop}" alt="${project.imgAlt}" loading="lazy" />
      </picture>
      <p class="projects-subtitle">${project.subtitle}</p>
      <div class="projects-wallet-container">
        <h3 class="section-subtitle projects-name">${project.title}</h3>
        <div class="projects-btn-container">
          <a class="btn projects-visiting-btn" href="${project.githubLink}" target="_blank">
            VISIT
            <svg class="projects-arrow-svg" width="24px" height="24px" aria-label="projects-site">
              <use href="/images/icons.svg#icon-arrow-r-u"></use>
            </svg>
          </a>
        </div>
      </div>
    `;

    projectsList.appendChild(li);
    currentIndex++;
  }
}
