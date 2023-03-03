const sections = document.querySelectorAll('.page__section');
const navLinks = document.querySelectorAll('.nav__link');
let sectionData = [];

function updateSectionData() {
  sectionData = [];

  sections.forEach((section) => {
    const { offsetTop, offsetHeight } = section;

    sectionData.push({
      offsetTop,
      offsetHeight,
    });
  });
}

updateSectionData();

window.addEventListener('resize', updateSectionData);

window.addEventListener('scroll', () => {
  const { scrollY } = window;

  sectionData.forEach((data, i) => {
    const { offsetTop, offsetHeight } = data;
    const sectionInView = scrollY >= offsetTop - window.innerHeight / 2;
    const sectionOutOfView = scrollY >= offsetTop + offsetHeight;

    if (sectionInView && !sectionOutOfView) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove('nav__link--is-active');
      });
      navLinks[i].classList.add('nav__link--is-active');
    }
  });
});
