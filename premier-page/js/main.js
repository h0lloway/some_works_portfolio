// стрелка якорь
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


// модальное окно
const btns = document.querySelectorAll('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const body = document.body;
const fixBlocks = document.querySelectorAll('.fix-block');


let disableScroll = function () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  let pagePosition = window.scrollY;
  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });
  body.style.paddingRight = paddingOffset;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  fixBlocks.forEach((el) => {
    el.style.paddingRight = '0px';
  });
  body.style.paddingRight = '0px';
  window.scroll({ top: pagePosition, left: 0 });
  body.removeAttribute('data-position');
}

function closeAllModals() {
  modalOverlay.classList.remove('modal-overlay--visible');
  modals.forEach((el) => {
    el.classList.remove('modal--visible');
  });
  enableScroll();
}

// закрытие по кнопкам (крестик и "Хорошо")
document.querySelectorAll('.close-modal-btn, .close-btn').forEach(btn => {
  btn.addEventListener('click', closeAllModals);
});

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    disableScroll();

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible')
    modalOverlay.classList.add('modal-overlay--visible');
  });
});


modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    closeAllModals();
  }
});

// отправка формы с валидацией email
const emailForm = document.querySelector('.modal-one__form');
const emailInput = document.getElementById('email');
const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', function () {
  if (!emailInput.value || !emailInput.validity.valid) {
    emailInput.reportValidity();
    return;
  }

  document.getElementById('modal-two').classList.add('modal--visible');
  document.getElementById('modal-one').classList.remove('modal--visible');
  emailForm.reset();
});

// swiper img

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      spaceBetween: 15,
      slidesPerGroup: 1,
      slidesPerView: 2,
      centeredSlides: true,
    },
    700: {
      slidesPerGroup: 1,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1100: {
      spaceBetween: 30,
      slidesPerView: 4,
    },

  },
});

const textBottomSwiper = new Swiper('.text-bottom-swiper', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,
  centeredSlides: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

});
