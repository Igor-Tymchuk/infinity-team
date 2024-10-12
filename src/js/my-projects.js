const newProjects = [
  {
    imgSrc: '/images/power-mob.webp',
    imgAlt: 'power pulse webservice',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'power pulse webservice',
    githubLink: 'https://github.com/Igor-Tymchuk/project4',
  },
  {
    imgSrc: '/images/fresh-mob.webp',
    imgAlt: 'fruitbox online store',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'fruitbox online store',
    githubLink: 'https://github.com/Igor-Tymchuk/project5',
  },
  {
    imgSrc: '/images/ukr-mob.webp',
    imgAlt: 'vyshyvanka vibes Landing Page',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'vyshyvanka vibes Landing Page',
    githubLink: 'https://github.com/Igor-Tymchuk/project5',
  },
  {
    imgSrc: '/images/star-mob.webp',
    imgAlt: 'starlight studio landing page',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'starlight studio landing page',
    githubLink: 'https://github.com/Igor-Tymchuk/project5',
  },
  {
    imgSrc: '/images/nature-mob.webp',
    imgAlt: 'chego jewelry website',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'chego jewelry website',
    githubLink: 'https://github.com/Igor-Tymchuk/project5',
  },
  {
    imgSrc: '/images/mimino-mob.webp',
    imgAlt: 'mimino website',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'mimino website',
    githubLink: 'https://github.com/Igor-Tymchuk/project5',
  },
  {
    imgSrc: '/images/body-mob.webp',
    imgAlt: 'energy flow webservice',
    subtitle: 'React, JavaScript, Node JS, Git',
    title: 'energy flow webservice ',
    githubLink: 'https://github.com/Igor-Tymchuk/project5',
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
        <source media="(min-width: 1280px)" srcset="${project.imgSrc} 1x, ${project.imgSrc} 2x" type="image/webp" />
        <img class="projects-img-list" src="${project.imgSrc}" alt="${project.imgAlt}" loading="lazy" />
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
