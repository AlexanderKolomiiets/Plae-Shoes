import { readFileSync } from 'fs';
import Swiper, { Pagination, Navigation } from 'swiper';

const titles = readFileSync('./src/scripts/shoes.txt', 'utf-8').split('\n');

new Swiper('#swiper-1', {
  modules: [Pagination, Navigation],

  grabCursor: true,
  rewind: true,

  pagination: {
    el: '.swiper__pagination',
    type: 'custom',
    renderCustom: function(_, current, total) {
      return `<h2 class="swiper__title">${titles[current - 1]}</h2>
      <span>${current}</span>  /  <span>${total}</span>`;
    },
  },

  navigation: {
    nextEl: '#swiper-button-next-1',
    prevEl: '#swiper-button-prev-1',
  },
});
