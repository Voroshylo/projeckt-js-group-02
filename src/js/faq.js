import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import spriteSvg from '../img/sprite.svg';

const faqListEl = document.querySelector('.faq-list');

const accordion = new Accordion('.accordion-container', {
  openOnInit: [0],
});

const changeArrovSvg = event => {
  const itemWrapEL = event.target.closest('.ac-trigger');
  if (!itemWrapEL) {
    return;
  }

  const faqItemEl = itemWrapEL.closest('.ac');

  const isActive = faqItemEl.classList.contains('is-active');

  const itemArrowSvgEL = itemWrapEL.querySelector('.faq-scroll-button-icon');

  const svgID = isActive ? '#icon-Arrow-Up-Quetion' : '#icon-Arrow-Down-Quetions';

  itemArrowSvgEL.innerHTML = `<use href="${spriteSvg}${svgID}"></use>`;
};

faqListEl.addEventListener('click', changeArrovSvg);