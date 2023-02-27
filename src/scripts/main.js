import Swiper, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

new Swiper('.swiper', {
  modules: [Pagination, Navigation],

  grabCursor: true,
  rewind: true,

  pagination: {
    el: '.swiper__pagination',
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

const tabs = document.querySelectorAll('.nav__link');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach(link => {
      link.classList.remove('nav__link--is-active');
    });

    tabs[i].classList.add('nav__link--is-active');
  });
});
