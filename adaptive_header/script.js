document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    // Burger toggle
    burger.addEventListener('click', () => {
        const isOpen = nav.classList.contains('nav--open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu on overlay click
    overlay.addEventListener('click', closeMenu);

    function openMenu() {
        nav.classList.add('nav--open');
        burger.classList.add('burger--active');
        overlay.classList.add('overlay--active');
        body.classList.add('body--locked');
    }

    function closeMenu() {
        nav.classList.remove('nav--open');
        burger.classList.remove('burger--active');
        overlay.classList.remove('overlay--active');
        body.classList.remove('body--locked');
        closeAllDropdowns();
    }

    // Close all open dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll('.nav__item--active').forEach(el => {
            el.classList.remove('nav__item--active');
        });
        document.querySelectorAll('.submenu__item--active').forEach(el => {
            el.classList.remove('submenu__item--active');
        });
    }

    // Dropdown toggle — works on click on all screen sizes
    const dropdownParents = document.querySelectorAll(
        '.nav__item--has-children > .nav__link, .submenu__item--has-children > .submenu__link'
    );

    dropdownParents.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const parentItem = link.parentElement;

            // Close sibling dropdowns
            const siblings = parentItem.parentElement.children;
            for (const sibling of siblings) {
                if (sibling !== parentItem) {
                    sibling.classList.remove('nav__item--active', 'submenu__item--active');
                }
            }

            // Toggle current
            if (parentItem.classList.contains('nav__item--has-children')) {
                parentItem.classList.toggle('nav__item--active');
            } else if (parentItem.classList.contains('submenu__item--has-children')) {
                parentItem.classList.toggle('submenu__item--active');
            }
        });
    });

    // Close dropdowns when clicking outside (desktop)
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav__item--has-children') && !e.target.closest('.submenu__item--has-children')) {
            closeAllDropdowns();
        }
    });

    // Close dropdown when clicking on a regular link inside mobile menu
    const regularLinks = document.querySelectorAll(
        '.nav__link:not(.nav__item--has-children > .nav__link), .submenu__link:not(.submenu__item--has-children > .submenu__link)'
    );
    regularLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
});
