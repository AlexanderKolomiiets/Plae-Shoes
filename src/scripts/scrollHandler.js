const sections = document.querySelectorAll('.page__section');
const navLinks = document.querySelectorAll('.nav__link');
let sectionData = [];
let windowInnerHeight;
let timeoutTimer;
let activeSectionIndex = -1;

function updateSectionData() {
  sectionData = [];
  windowInnerHeight = window.innerHeight;

  sections.forEach((section) => {
    const { offsetTop, offsetHeight } = section;

    sectionData.push({
      offsetTop,
      offsetHeight,
    });
  });
}

updateSectionData();

window.addEventListener('resize', () => {
  clearTimeout(timeoutTimer);
  timeoutTimer = setTimeout(updateSectionData, 250);
});

function updateScroll() {
  const { scrollY } = window;
  let newActiveSectionIndex = -1;

  sectionData.forEach((data, i) => {
    const { offsetTop, offsetHeight } = data;
    const sectionInView = scrollY >= offsetTop - windowInnerHeight / 2;
    const sectionOutOfView = scrollY >= offsetTop + offsetHeight;

    if (sectionInView && !sectionOutOfView) {
      newActiveSectionIndex = i;
    }
  });

  if (newActiveSectionIndex !== activeSectionIndex) {
    if (activeSectionIndex !== -1) {
      navLinks[activeSectionIndex].classList.remove('nav__link--is-active');
    }

    if (newActiveSectionIndex !== -1) {
      navLinks[newActiveSectionIndex].classList.add('nav__link--is-active');
    }
    activeSectionIndex = newActiveSectionIndex;
  }
}

updateScroll();

window.addEventListener('scroll', updateScroll);
