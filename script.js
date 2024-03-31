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
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section");

function scrollActive() {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      current.classList.add("active-link");
    } else {
      current.classList.remove("active-link");
    }
  });
}
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  // reset:true,
})
sr.reveal(`.home--title ,.popular--container ,.features--img ,.featured--filters`)
sr.reveal(`.home--subtitle`,{
  delay:500,
})
sr.reveal(`.home--elec`,{
  delay:600,
})
sr.reveal(`.home--img`,{
  delay:800,
})
sr.reveal(`.home--car-data`,{
  delay:900,
  interval:100,
  origin:'bottom'
})
sr.reveal(`.home--button`,{
  delay:1000,
  origin:'bottom'
})
sr.reveal(`.about--group ,.offer--data`,{
  origin:'left'
})
sr.reveal(`.about--data ,.offer--img  `,{
  origin:'right'
})
sr.reveal(`.about--data`,{
  origin:'right'
})
sr.reveal(`.features--map`,{
  delay:600,
  origin:'bottom'
})
sr.reveal(`.features--card`,{
 interval:300
})
sr.reveal(`.featured--card`,{
 interval:100
})
sr.reveal(`.featured--card ,.logos--content ,.footer--content`,{
 interval:100
})