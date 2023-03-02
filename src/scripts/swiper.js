import Swiper, { Pagination, Navigation } from 'swiper';

const swipers = document.querySelectorAll('.swiper');
const swiperPagination = document.querySelectorAll('.swiper__pagination');
const swipeNext = document.querySelectorAll('.swiper-button-next');
const swipePrev = document.querySelectorAll('.swiper-button-prev');
const slides = document.querySelectorAll('.swiper-slide[data-shoe]');
const titles = [];

slides.forEach(slide => {
  titles.push(slide.dataset.shoe);
});

swipers.forEach((swiper, i) => {
  new Swiper(swiper, {
    modules: [Pagination, Navigation],

    grabCursor: true,
    rewind: true,
    pagination: {
      el: swiperPagination[i],
      type: 'custom',
      renderCustom: function(_, current, total) {
        return `<h2 class="swiper__title">${titles[current - 1]}</h2>
        <span>${current}</span>  /  <span>${total}</span>`;
      },
    },

    navigation: {
      nextEl: swipeNext[i],
      prevEl: swipePrev[i],
    },
  });
});
