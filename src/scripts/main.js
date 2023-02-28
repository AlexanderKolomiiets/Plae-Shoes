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
      return `<h2 class="swiper__title">${titles[current - 1]}</h2>
      <span>${current}</span>  /  <span>${total}</span>`;
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

const scrollHandler = () => {
  const nav = document.querySelector('.nav');

  const header = document.querySelector('#header');
  const about = document.querySelector('#about');
  const customers = document.querySelector('#customers');
  const customers2 = document.querySelector('#customers-2');
  const range = document.querySelector('#range');
  const features = document.querySelector('#features');
  const stockists = document.querySelector('#stockists');

  const posNav = window.pageYOffset + nav.offsetHeight;

  const posHeader = header.offsetTop + header.offsetHeight;
  const posAbout = about.offsetTop + about.offsetHeight;
  const posCustomers = customers.offsetTop + customers.offsetHeight;
  const posCustomers2 = customers2.offsetTop + customers2.offsetHeight;
  const posRange = range.offsetTop + range.offsetHeight;
  const posFeatures = features.offsetTop + features.offsetHeight;
  const posStockists = stockists.offsetTop + stockists.offsetHeight;

  const distHeader = posHeader - posNav;
  const distAbout = posAbout - posNav;
  const distCustomers = posCustomers - posNav;
  const distCustomers2 = posCustomers2 - posNav;
  const distsRange = posRange - posNav;
  const distFeatures = posFeatures - posNav;
  const distStockists = posStockists - posNav;

  const distArray = [
    distHeader,
    distAbout,
    distCustomers,
    distCustomers2,
    distsRange,
    distFeatures,
    distStockists,
  ];

  const min = Math.min(...distArray.filter(num => num > 0));

  document.querySelectorAll('.nav__link')
    .forEach(link => link.classList.remove('nav__link--is-active'));

  distArray.forEach((item, i) => {
    if (min === item) {
      document.querySelectorAll('.nav__link')[i]
        .classList.add('nav__link--is-active');
    }
  });
};

window.addEventListener('scroll', scrollHandler);
