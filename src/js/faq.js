import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
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

      // Close all items
      accordionItems.forEach(accItem => {
        accItem.classList.remove('active');
        accItem.querySelector('.ac-panel').style.maxHeight = null;
        accItem.querySelector('.ac-trigger').style.transform = 'rotate(0deg)';
      });

      // Open clicked item if it was closed
      if (!isOpen) {
        item.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        trigger.style.transform = 'rotate(180deg)';
      }
    });
  });
});
