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

    // set the css "visibility" property
    navList.style.visibility = 'visible';
}

function hideNav() {
    // toggle navigation status
    navActive = false;

    // remove the "active" classes
    navButton.classList.remove('header__nav-btn--active');
    navList.classList.remove('header__links-list--active');

    // set the css "visibility" property
    setTimeout(() => {
        navList.style.visibility = 'hidden';
    }, 350);
}

// handle click on the burger menu button
navButton.addEventListener('click', () => {
    if (!navActive) {
        showNav();
    } else {
        hideNav();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        // hide the navigation menu
        hideNav();

        // show the links
        setTimeout(() => {
            navList.style.visibility = 'visible';
        }, 350);
    } else {
        // hide the links
        setTimeout(() => {
            navList.style.visibility = 'hidden';
        }, 355);
    }
});
