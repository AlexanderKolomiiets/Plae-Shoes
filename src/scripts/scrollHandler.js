const sections = document.querySelectorAll('.page__section');
const navLinks = document.querySelectorAll('.nav__link');

// const sectionOffsets = [];

// sections.forEach((section) => {
//   sectionOffsets.push(section.offsetTop);
// });

window.addEventListener('scroll', () => {
  const { scrollY } = window;

  sections.forEach((section, i) => {
    const sectionInView
      = scrollY >= section.offsetTop - window.innerHeight / 2;
    const sectionOutOfView
      = scrollY >= section.offsetTop + section.offsetHeight;

    if (sectionInView && !sectionOutOfView) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove('nav__link--is-active');
      });
      navLinks[i].classList.add('nav__link--is-active');
    }
  });
});
