import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-ac-container', {
  openOnInit: [0],
  collapse: false,
  elementClass: 'faq-ac',
  triggerClass: 'faq-ac-trigger',
  panelClass: 'faq-ac-panel',
});
