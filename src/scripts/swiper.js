import Swiper, { Pagination, Navigation } from 'swiper';

const swipersContent = document.querySelectorAll('.swiper-content');

swipersContent.forEach(swiperContent => {
  const swiper = swiperContent.querySelector('.swiper');
  const slides = swiper.querySelectorAll('.swiper-slide[data-shoe]');
  const titles = [];

  slides.forEach(slide => {
    titles.push(slide.dataset.shoe);
  });

  new Swiper(swiper, {
    modules: [Pagination, Navigation],
    grabCursor: true,
    rewind: true,
    pagination: {
      el: swiper.querySelector('.swiper__pagination'),
      type: 'custom',
      renderCustom: function(_, current, total) {
        return `<h2 class="swiper__title">${titles[current - 1]}</h2>
        <span>${current}</span>  /  <span>${total}</span>`;
      },
    },

    navigation: {
      nextEl: swiperContent.querySelector('.swiper-button-next'),
      prevEl: swiperContent.querySelector('.swiper-button-prev'),
    },
  });
});
