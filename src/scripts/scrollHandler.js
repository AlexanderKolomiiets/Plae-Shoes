const scrollHandler = () => {
  const nav = document.querySelector('.nav');
  const posNav = window.pageYOffset + nav.offsetTop;
  const sections = document.querySelectorAll('.page__section');
  const distArray = [];

  sections.forEach(section => {
    distArray.push(section.offsetTop + section.offsetHeight - posNav);
  });

  distArray.pop();

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
