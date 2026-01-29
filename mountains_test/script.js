document.addEventListener('DOMContentLoaded', () => {

  // ===== STICKY HEADER =====
  const header = document.getElementById('header');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ===== BURGER MENU =====
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--open');
    document.body.style.overflow = nav.classList.contains('nav--open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('burger--active');
      nav.classList.remove('nav--open');
      document.body.style.overflow = '';
    });
  });

  // ===== CUSTOM SELECT =====
  const selects = document.querySelectorAll('.custom-select');

  selects.forEach(select => {
    const trigger = select.querySelector('.custom-select__trigger');
    const options = select.querySelectorAll('.custom-select__option');
    const valueEl = select.querySelector('.custom-select__value');
    const placeholder = select.dataset.placeholder;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      // Close all other selects
      selects.forEach(s => {
        if (s !== select) s.classList.remove('custom-select--open');
      });
      select.classList.toggle('custom-select--open');
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
        // Remove previous selection
        options.forEach(o => o.classList.remove('custom-select__option--selected'));
        option.classList.add('custom-select__option--selected');

        valueEl.textContent = option.textContent;
        select.classList.add('custom-select--selected');
        select.classList.remove('custom-select--open');
        select.classList.remove('custom-select--error');
        select.dataset.value = option.dataset.value;
      });
    });
  });

  // Close selects on outside click
  document.addEventListener('click', () => {
    selects.forEach(s => s.classList.remove('custom-select--open'));
  });

  // ===== HERO FORM VALIDATION =====
  const heroForm = document.getElementById('heroForm');

  heroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    selects.forEach(select => {
      if (!select.dataset.value) {
        select.classList.add('custom-select--error');
        valid = false;
      }
    });

    if (valid) {
      const location = heroForm.querySelector('[data-placeholder="Локация для тура"]').dataset.value;
      const date = heroForm.querySelector('[data-placeholder="Дата похода"]').dataset.value;
      const participants = heroForm.querySelector('[data-placeholder="Участники"]').dataset.value;
      alert(`Поиск: ${location}, ${date}, ${participants} чел.`);
    }
  });

  // ===== SUBSCRIBE FORM =====
  const subscribeForm = document.getElementById('subscribeForm');

  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = subscribeForm.querySelector('.subscribe__input');
    const email = input.value.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      input.classList.add('error');
      return;
    }

    input.classList.remove('error');
    alert('Спасибо за подписку!');
    input.value = '';
  });

  const subscribeInput = subscribeForm.querySelector('.subscribe__input');
  subscribeInput.addEventListener('input', () => {
    subscribeInput.classList.remove('error');
  });

  // ===== LIGHTBOX =====
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const lightboxClose = lightbox.querySelector('.lightbox__close');
  const lightboxPrev = lightbox.querySelector('.lightbox__prev');
  const lightboxNext = lightbox.querySelector('.lightbox__next');
  const galleryItems = document.querySelectorAll('.gallery__img');
  let currentIndex = 0;

  const openLightbox = (index) => {
    currentIndex = index;
    // In production, set background-image from real image source
    lightboxImg.style.background = `hsl(${index * 40}, 20%, 60%)`;
    lightbox.classList.add('lightbox--active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('lightbox--active');
    document.body.style.overflow = '';
  };

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      openLightbox(parseInt(item.dataset.index));
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.style.background = `hsl(${currentIndex * 40}, 20%, 60%)`;
  });

  lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.style.background = `hsl(${currentIndex * 40}, 20%, 60%)`;
  });

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('lightbox--active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrev.click();
    if (e.key === 'ArrowRight') lightboxNext.click();
  });

  // ===== SCROLL ANIMATIONS =====
  const animatedElements = document.querySelectorAll(
    '.about__inner, .programs__content, .programs__grid, ' +
    '.destinations__card, .blog__card, .gallery__item, ' +
    '.section-header, .subscribe__inner'
  );

  animatedElements.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up--visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height-scrolled')) || 60;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
