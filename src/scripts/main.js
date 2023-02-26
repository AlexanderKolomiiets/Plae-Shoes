import Swiper, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

// eslint-disable-next-line no-new
new Swiper('.swiper', {
  modules: [Pagination, Navigation],

  grabCursor: true,
  rewind: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const forms = document.querySelectorAll('.sign-up');

forms.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
  });
});

const list = document.querySelector('.stockists__list');
let items = '';

for (let i = 0; i < 15; i++) {
  items += `
  <li class="stockists__item">
    <p class="stockists__name">
      Best Foot Forward
    </p>
    <p class="stockists__address">
      76 Liverpool Road<br>
      Preston<br>
      PR1 0QD
      <a href="tel:+02089697565" class="stockists__phone">
        0208 969 7565
      </a>
      <a
        href="/"
        class="stockists__link"
        target="_blank"
      >
        bestfootforward.co.uk
      </a>
    </p>
  </li>
  `;
}

list.insertAdjacentHTML('afterbegin', items);
