document
  .getElementById('projects-more-btn')
  .addEventListener('click', showMoreProjects);

let hiddenItems = document.querySelectorAll('.projects-visually-hidden');
let currentIndex = 0;
const itemsToShow = 3;

function showMoreProjects() {
  let itemsLeft = hiddenItems.length - currentIndex;

  let itemsToDisplay = itemsLeft < itemsToShow ? itemsLeft : itemsToShow;

  for (let i = currentIndex; i < currentIndex + itemsToDisplay; i++) {
    if (i < hiddenItems.length) {
      hiddenItems[i].classList.remove('projects-visually-hidden');
    }
  }

  currentIndex += itemsToDisplay;

  if (currentIndex >= hiddenItems.length) {
    document.getElementById('projects-more-btn').style.display = 'none';
  }
}
