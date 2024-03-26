function navBar() {
  /////////--SHOW-MENU--////////
  const navMenu = document.getElementById("nav-menu");
  const navClose = document.getElementById("nav-close");
  const navToggle = document.getElementById("nav-toggle");
  const navLink = document.querySelectorAll(".nav-link");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  /////////--CLOSE-MENU--////////

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
  function linkAction() {
    navMenu.classList.remove("show-menu");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
}
navBar();
function headerScroll() {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}
window.addEventListener("scroll", headerScroll);
let swiperPopular = new Swiper(".popular--container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});
