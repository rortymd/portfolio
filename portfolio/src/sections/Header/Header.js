// styles
import './Header.scss';
// components
import './theme-toggler/theme-toggler';
import './theme-toggler/theme-toggler.scss';

/* dom elements */
const navButton = document.querySelector('.header__nav-btn');
const navList = document.querySelector('.header__links-list');

/* show/hide the navigation menu */
// navigation status
let navActive = false;

function showNav() {
    // toggle navigation status
    navActive = true;

    // add the "active" classes
    navButton.classList.add('header__nav-btn--active');
    navList.classList.add('header__links-list--active');

    // prevent scrolling
    document.body.style.overflow = 'hidden';

    // handle the aria attributes
    navButton.setAttribute('aria-expanded', true);
}

function hideNav() {
    // toggle navigation status
    navActive = false;

    // remove the "active" classes
    navButton.classList.remove('header__nav-btn--active');
    navList.classList.remove('header__links-list--active');

    // allow scrolling
    document.body.style.overflow = 'visible';

    // handle the aria attributes
    navButton.setAttribute('aria-expanded', false);
}

// handle click on the burger menu button
navButton.addEventListener('click', () => {
    navActive ? hideNav() : showNav();
});
