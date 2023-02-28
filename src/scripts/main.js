import Swiper, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const titles = ['TY', 'MAX', 'EMME', 'CAMILLE', 'NOEL', 'ROAN', 'NAT'];

new Swiper('.swiper', {
  modules: [Pagination, Navigation],

  grabCursor: true,
  rewind: true,

  pagination: {
    el: '.swiper__pagination',
    type: 'custom',
    renderCustom: function(swiper, current, total) {
      return '<h2 class="swiper__title">' + titles[current - 1] + '</h2>'
      + `<span>${current}</span>`
      + ' / '
      + `<span>${total}</span>`;
    },
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

const tabs = document.querySelectorAll('.nav__link');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach(link => {
      link.classList.remove('nav__link--is-active');
    });

    tabs[i].classList.add('nav__link--is-active');
  });
});
