// burger 

// BURGER

const hamb = document.querySelector("#hamb");
const menuWrap = document.querySelector("#menuwrap");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  menuWrap.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("lock");
  renderMenuWrap();
}

function renderMenuWrap() {
  menuWrap.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  menuWrap.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("lock");
}

// HEADER // HEADER // HEADER // HEADER // HEADER // HEADER 

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {


  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    // scroll down
    header.classList.add('hide');
  }
  else if (scrollPosition() < lastScroll && containHide()) {
    // scroll up
    header.classList.remove('hide');
  }


  lastScroll = scrollPosition();
});

// swiper

const swiper = new Swiper('.swiper', {
  initialSlide: 1,
  slidesPerGroup: 1,
  slidesPerView: 2,
  centeredSlides: true,

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    650: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    }

  },

  pagination: {
    el: '.swiper-pagination',
  },

});