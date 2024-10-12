import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container'); /* {
  openOnInit: [0],
  collapse: false,
});

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.ac');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.ac-trigger');
    const panel = item.querySelector('.ac-panel');

    trigger.addEventListener('click', function () {
      const isOpen = item.classList.contains('active');
      accordionItems.forEach(accItem => {
        if (accItem !== item) {
          accItem.classList.remove('active');
          accItem.querySelector('.ac-panel').style.maxHeight = null;
          accItem.querySelector('.ac-trigger').style.transform = 'rotate(0deg)';
        }
      });
      if (isOpen) {
        item.classList.remove('active');
        panel.style.maxHeight = null;
        trigger.style.transform = 'rotate(0deg)';
      } else {
        item.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        trigger.style.transform = 'rotate(180deg)';
      }
    });
  });
});*/
