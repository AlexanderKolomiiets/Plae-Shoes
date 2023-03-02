window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.page__section');
  const navLinks = document.querySelectorAll('.nav__link');

  sections.forEach((section, i) => {
    const sectionInView
      = window.scrollY >= section.offsetTop - window.innerHeight / 2;
    const sectionOutOfView
      = window.scrollY >= section.offsetTop + section.offsetHeight;

    if (sectionInView && !sectionOutOfView) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove('nav__link--is-active');
      });
      navLinks[i].classList.add('nav__link--is-active');
    }
  });
});
