/* Плавный скролл по ссылкам меню */
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute('href');
		const targetElement = document.querySelector(id);

		if (targetElement) {
			const topOffset = 50;
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - topOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	});
}

/*  */
const headerMain = document.querySelector('.header');
let isActive = false;

window.addEventListener('scroll', () => {
	if (window.scrollY > 500 && !isActive) {
		headerMain.classList.add('fixed-scroll');
		isActive = true;
	} else if (window.scrollY <= 500 && isActive) {
		headerMain.classList.remove('fixed-scroll');
		isActive = false;
	}
});



/* burger */
const burger = document.querySelector('.header-burger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const close = document.querySelector('.header-burger-menu__close');
const overflow = document.querySelector('.header-burger-overflow');
const menuItems = document.querySelector('.header-burger-menu__items');

function closeMenu() {
	body.classList.remove('fixed');
	header.classList.remove('fixed');
	overflow.classList.remove('active');
}

if (burger && overflow && close && menuItems) {
	burger.addEventListener("click", function () {
		body.classList.add('fixed');
		header.classList.add('fixed');
		overflow.classList.add('active');
	});

	close.addEventListener("click", closeMenu);

	overflow.addEventListener("click", function (e) {
		if (e.target === overflow) {
			closeMenu();
		}
	});

	menuItems.addEventListener("click", function (e) {
		if (e.target.tagName === 'A') {
			closeMenu();
		}
	});
}


/* accordion */
const accordions = document.querySelectorAll('.accordion');

if (accordions.length) {
	class ItcAccordion {
		constructor(target, config) {
			this._el = typeof target === 'string' ? document.querySelector(target) : target;
			const defaultConfig = {
				alwaysOpen: true,
				duration: 350
			};
			this._config = Object.assign(defaultConfig, config);
			this.addEventListener();
		}

		addEventListener() {
			this._el.addEventListener('click', (e) => {
				const elHeader = e.target.closest('.accordion__header');
				if (!elHeader) {
					return;
				}
				if (!this._config.alwaysOpen) {
					const elOpenItem = this._el.querySelector('.accordion__item_show');
					if (elOpenItem) {
						elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
					}
				}
				this.toggle(elHeader.parentElement);
			});
		}

		show(el) {
			const elBody = el.querySelector('.accordion__body');
			if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
				return;
			}
			elBody.style['display'] = 'block';
			const height = elBody.offsetHeight;
			elBody.style['height'] = 0;
			elBody.style['overflow'] = 'hidden';
			elBody.style['transition'] = `height ${this._config.duration}ms ease`;
			elBody.classList.add('collapsing');
			el.classList.add('accordion__item_slidedown');
			elBody.offsetHeight;
			elBody.style['height'] = `${height}px`;

			window.setTimeout(() => {
				elBody.classList.remove('collapsing');
				el.classList.remove('accordion__item_slidedown');
				elBody.classList.add('collapse-body');
				el.classList.add('accordion__item_show');
				elBody.style['display'] = '';
				elBody.style['height'] = '';
				elBody.style['transition'] = '';
				elBody.style['overflow'] = '';
			}, this._config.duration);
		}

		hide(el) {
			const elBody = el.querySelector('.accordion__body');
			if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
				return;
			}
			elBody.style['height'] = `${elBody.offsetHeight}px`;
			elBody.offsetHeight;
			elBody.style['display'] = 'block';
			elBody.style['height'] = 0;
			elBody.style['overflow'] = 'hidden';
			elBody.style['transition'] = `height ${this._config.duration}ms ease`;
			elBody.classList.remove('collapse-body');
			el.classList.remove('accordion__item_show');
			elBody.classList.add('collapsing');

			window.setTimeout(() => {
				elBody.classList.remove('collapsing');
				elBody.classList.add('collapse-body');
				elBody.style['display'] = '';
				elBody.style['height'] = '';
				elBody.style['transition'] = '';
				elBody.style['overflow'] = '';
			}, this._config.duration);
		}

		toggle(el) {
			el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
		}
	}

	accordions.forEach(accordion => {
		new ItcAccordion(accordion, {
			alwaysOpen: false
		});
	});
}


/* tabs */
class ItcTabs {
	constructor(target, config) {
		const defaultConfig = {};
		this._config = Object.assign(defaultConfig, config);
		this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
		this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
		this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
		this._eventShow = new Event('tab.itc.change');
		this._init();
		this._events();
	}
	_init() {
		this._elTabs.setAttribute('role', 'tablist');
		this._elButtons.forEach((el, index) => {
			el.dataset.index = index;
			el.setAttribute('role', 'tab');
			this._elPanes[index].setAttribute('role', 'tabpanel');
		});
	}
	show(elLinkTarget) {
		const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
		const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
		const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
		if (elLinkTarget === elLinkActive) {
			return;
		}
		elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
		elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
		elLinkTarget.classList.add('tabs__btn_active');
		elPaneTarget.classList.add('tabs__pane_show');
		this._elTabs.dispatchEvent(this._eventShow);
		elLinkTarget.focus();
	}
	showByIndex(index) {
		const elLinkTarget = this._elButtons[index];
		elLinkTarget ? this.show(elLinkTarget) : null;
	};
	_events() {
		this._elTabs.addEventListener('click', (e) => {
			const target = e.target.closest('.tabs__btn');
			if (target) {
				e.preventDefault();
				this.show(target);
			}
		});
	}
}
const tabs = document.querySelectorAll('.tabs');
for (let i = 0, length = tabs.length; i < length; i++) {
	new ItcTabs(tabs[i]);
}


/* бегущая строка с одеждой */
const track = document.querySelector('.running-clothes__track');
const phoneContents = document.querySelectorAll('.running-clothes-phone__content');

const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);

function getGapRem() {
	const width = window.innerWidth;
	if (width < 576) return 3.75;
	if (width < 992) return 4.8125;
	return 5.8125;
}

let gapRem = getGapRem();
let gapPx = gapRem * remInPx;

const firstItems = track.querySelector('.running-clothes__items');
const items = firstItems.querySelectorAll('.running-clothes__item');
const itemWidth = items[0].offsetWidth;
const itemFullWidth = itemWidth + gapPx;
const totalWidth = itemFullWidth * items.length;

function setupAnimation() {
	gsap.killTweensOf(track);
	gsap.set(track, { x: 0 });
	gsap.to(track, {
		x: -totalWidth,
		duration: 30,
		ease: "none",
		repeat: -1,
		modifiers: {
			x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth)
		}
	});
}

setupAnimation();

window.addEventListener('resize', () => {
	gapRem = getGapRem();
	gapPx = gapRem * remInPx;

	const itemFullWidthNew = itemWidth + gapPx;
	const totalWidthNew = itemFullWidthNew * items.length;

	itemFullWidth = itemFullWidthNew;
	totalWidth = totalWidthNew;

	setupAnimation();
});


function getCenteredItem() {
	const containerCenter = window.innerWidth / 2;

	let closestItem = null;
	let minDistance = Infinity;

	document.querySelectorAll('.running-clothes__item').forEach(item => {
		const rect = item.getBoundingClientRect();
		const itemCenter = rect.left + rect.width / 2;
		const distance = Math.abs(containerCenter - itemCenter);

		if (distance < minDistance) {
			minDistance = distance;
			closestItem = item;
		}
	});

	return closestItem;
}

let lastType = null;

function updateContentVisibility() {
	const centeredItem = getCenteredItem();
	if (!centeredItem) return;

	const typeClass = Array.from(centeredItem.classList).find(cls =>
		cls.startsWith('running-clothes__item--')
	);

	if (!typeClass) return;

	const type = typeClass.replace('running-clothes__item--', '');

	if (type === lastType) return;
	lastType = type;

	phoneContents.forEach(content => {
		content.classList.remove('active');
	});

	const target = document.querySelector(`.running-clothes-phone__content--${type}`);
	if (target) target.classList.add('active');
}

setInterval(updateContentVisibility, 100);


/* анимация выстраивания карточек в линию */
gsap.registerPlugin(ScrollTrigger);

if (screen.width > 992) {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".clients",
			start: "top center",
			end: "bottom center",
			scrub: false,
			ease: "power2.inOut"
		}
	});

	tl.fromTo(".clients__item--1", {
		rotation: -5
	}, {
		rotation: 0,
		duration: 1
	}).fromTo(".clients__item--1", {
		left: "50%",
		xPercent: -50
	}, {
		left: "0%",
		xPercent: 0,
		duration: 1
	});

	const tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".clients",
			start: "top center",
			end: "bottom center",
			scrub: false,
			ease: "power2.inOut"
		}
	});

	tl2.fromTo(".clients__item--3", {
		rotation: 5
	}, {
		rotation: 0,
		duration: 1
	}).fromTo(".clients__item--3", {
		right: "50%",
		xPercent: 50
	}, {
		right: "0%",
		xPercent: 0,
		duration: 1
	});
}


/* анимация скролла и смены фото */
/* const frame = document.querySelector('.how-work__frame');
const images = document.querySelectorAll('.how-work__image');
const triggers = document.querySelectorAll('.how-work__item-trigger');

window.addEventListener('load', () => {
	updateImagesHeight();
	setActiveImage(0);
});

triggers.forEach((trigger, index) => {
	ScrollTrigger.create({
		trigger: trigger,
		start: "top top+=100",
		end: "top bottom",
		markers: true,
		onEnter: () => setActiveImage(index),
		onEnterBack: () => setActiveImage(index),
	});
});

function setActiveImage(index) {
	images.forEach((img, i) => {
		img.classList.toggle('active', i === index);
	});
} */

const frame = document.querySelector('.how-work__frame');
const images = document.querySelectorAll('.how-work__image');
const triggers = document.querySelectorAll('.how-work__item-trigger');

window.addEventListener('load', () => {
	updateImagesHeight();
	setActiveImage(0);
	createCustomScrollTriggers();
});

function setActiveImage(index) {
	images.forEach((img, i) => {
		img.classList.toggle('active', i === index);
	});
}

function createCustomScrollTriggers() {
	ScrollTrigger.create({
		trigger: ".how-work__content",
		start: "top top",
		end: "bottom bottom",
		onUpdate: self => {
			const frameRect = frame.getBoundingClientRect();

			triggers.forEach((trigger, index) => {
				const triggerRect = trigger.getBoundingClientRect();

				if (frameRect.bottom >= triggerRect.top - 10) {
					setActiveImage(index);
				}
			});
		}
	});
}

function updateImagesHeight() {
	const maxHeight = Math.max(...Array.from(images).map(img => img.offsetHeight));
	frame.style.height = `${maxHeight}px`;
}



/* function updateImagesHeight() {
	const imageWrap = document.querySelector('.how-work__images');
	const items = document.querySelectorAll('.how-work__item');

	let itemsTotalHeight = 0;
	items.forEach(item => {
		itemsTotalHeight += item.offsetHeight;
	});

	const frameTop = parseFloat(getComputedStyle(frame).top);
	const frameHeight = frame.offsetHeight;

	imageWrap.style.height = (itemsTotalHeight + frameHeight / 2) + 'px';
}

window.addEventListener('resize', updateImagesHeight); */




/*  */
document.querySelectorAll('.lottie-icon').forEach((el) => {
	lottie.loadAnimation({
		container: el,
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'js/Animation-swipe_animation.json'
	});
});


/* modal */
document.addEventListener('DOMContentLoaded', () => {
	const body = document.body;

	const openModal = (modalId) => {
		const modal = document.getElementById(modalId);
		if (!modal) return;

		body.classList.add('fixed');
		modal.classList.add('show');
	};

	const closeModal = () => {
		const modal = document.querySelector('.modal.show');
		if (!modal) return;

		modal.classList.remove('show');
		body.classList.remove('fixed');
	};

	document.querySelectorAll('[data-modal]').forEach(button => {
		button.addEventListener('click', () => {
			const modalId = button.getAttribute('data-modal');
			openModal(modalId);
		});
	});

	document.addEventListener('click', (e) => {
		const modal = document.querySelector('.modal.show');
		if (!modal) return;

		if (e.target === modal) {
			closeModal();
		}
	});

	document.addEventListener('click', (e) => {
		if (e.target.closest('.modal__close') || e.target.closest('.modal__cancel')) {
			closeModal();
		}
	});
});