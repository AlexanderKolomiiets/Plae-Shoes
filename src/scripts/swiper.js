import Swiper, { Pagination, Navigation } from 'swiper';

const swipersContent = document.querySelectorAll('.swiper-content');

swipersContent.forEach(swiperContent => {
  const swiper = swiperContent.querySelector('.swiper');

  new Swiper(swiper, {
    modules: [Pagination, Navigation],
    grabCursor: true,
    rewind: true,
    pagination: {
      el: swiper.querySelector('.swiper__pagination'),
      type: 'custom',
      renderCustom: function(_, current, total) {
        let title = '';

        if (current > 0) {
          title = _.slides[current - 1].getAttribute('data-shoe');
        }

        return `<h2 class="swiper__title">${title}</h2>
        <span>${current}</span>  /  <span>${total}</span>`;
      },
    },
    navigation: {
      nextEl: swiperContent.querySelector('.swiper-button-next'),
      prevEl: swiperContent.querySelector('.swiper-button-prev'),
    },
  });
});
