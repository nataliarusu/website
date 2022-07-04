const navIconMobile = document.querySelector('.nav-icon-mobile');
const navItemsUlEl = document.querySelector('.nav-items');
const navLinkEls = Array.from(navItemsUlEl.querySelectorAll('.nav-link'));
const asideActiveEl = document.getElementById('aside-active');
const sections = document.querySelectorAll('section');

const showHideMenuHandler = (ev) => {
  navItemsUlEl.classList.toggle('hidden');
  if (navItemsUlEl.classList.contains('hidden')) {
    navIconMobile
      .querySelectorAll(':nth-child(odd)')
      .forEach((el) => (el.style.width = '100%'));
  } else {
    navIconMobile
      .querySelectorAll(':nth-child(odd)')
      .forEach((el) => (el.style.width = '30%'));
  }
};

const displayAsideActive = (id) => {
  asideActiveEl.innerHTML = id.toUpperCase();
};


const scrollHandler = () => {
  const currentScrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; /*-100=> to start display earlier*/
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const nav_a = navLinkEls.find((el) => el.hash == '#' + sectionId); //hash has a string value => #value
    const hasActiveClass = nav_a.classList.contains('active');
    if (
      currentScrollPosition >= sectionTop &&
      currentScrollPosition <= sectionTop + sectionHeight
    ) {
      //if section IS into view
      if (!hasActiveClass) {
        nav_a.classList.add('active');
        displayAsideActive(sectionId);
      }
    } else if (hasActiveClass) {
      //if section is NOT into view
      nav_a.classList.remove('active');
    }
  });
};

for (const item of navLinkEls) {
  item.addEventListener('click', showHideMenuHandler);
}
navIconMobile.addEventListener('click', showHideMenuHandler);
window.addEventListener('scroll', scrollHandler, { passive: true });
