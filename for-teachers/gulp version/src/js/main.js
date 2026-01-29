// ПЛАВНЫЕ ЯКОРЯ

$('a[href*="#"]').on('click', function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 600);
  return false;
});


// BURGER

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

document.addEventListener("click", function (e) {
  let target = e.target;
  let burger = document.querySelector(".header__burger");
  if (!target.closest(".header__container")) {
    burger.classList.remove("active");
    document.querySelector(".header__menu").classList.remove("active")
  }
})

let lastScroll = 0;
const defaultOffset = 50;
const headerMenu = document.querySelector('.header__menu');
const headerBurger = document.querySelector('.header__burger');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => headerMenu.classList.contains('hide');

window.addEventListener('scroll', () => {


  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    // scroll down
    headerMenu.classList.add('hide');
    // console.log(scrollPosition)
  }
  else if (scrollPosition() < lastScroll && containHide()) {
    // scroll up
    headerMenu.classList.remove('hide');
    headerMenu.classList.remove('active');
    headerBurger.classList.remove('active');
  }

  lastScroll = scrollPosition();
});


// SWIPERs

const swiper = new Swiper('.hero__left-swiper', {
  // Optional parameters
  slidesPerView: 3,
  direction: 'vertical',
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


const heroSwiper = new Swiper('.hero__swiper', {
  // Optional parameters
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

});

const congratsSwiper = new Swiper('.congrats__swiper', {
  // Optional parameters
  slidesPerView: 5,
  loop: true,
  // spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.congrats__swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.congrats__swiper-button-next',
    prevEl: '.congrats__swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },

    550: {
      slidesPerView: 2,
    },

    750: {
      slidesPerView: 3,
    },

    999: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 5,
    }
  }
});


const presentSwiper = new Swiper('.present__swiper', {
  // Optional parameters
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.present__swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.present__swiper-button-next',
    prevEl: '.present__swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    550: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 40,
    },

    750: {
      slidesPerView: 3,
      loop: true,
      // spaceBetween: 20,
      centeredSlides: true,

    },

    999: {
      slidesPerView: 3,
      loop: true,
      // spaceBetween: 20,
      centeredSlides: true,
    },

    1200: {
      slidesPerView: 3,
      loop: true,
      // spaceBetween: 20,
      centeredSlides: true,
    }
  }

});