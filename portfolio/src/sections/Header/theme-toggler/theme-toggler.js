let colorTheme;

/* get the current color theme from the local storage | create one if it doesn't exist */
if (!localStorage.getItem('color-theme')) {
    localStorage.setItem('color-theme', 'dark-theme');
    colorTheme = 'dark-theme';
} else {
    colorTheme = localStorage.getItem('color-theme');
}

/* dom elements */
const body = document.body;
// toggle theme button
const themeToggler = document.querySelector('.theme-toggle');
// button component background
const btnBg = document.querySelectorAll('.btn', '::before');

/* assign the color theme to the page */
body.classList.add(colorTheme);

/* animate the toggle button */
function animToggler() {
    if (colorTheme === 'dark-theme') {
        themeToggler.classList.add('theme-toggle--toggled');
    } else {
        themeToggler.classList.remove('theme-toggle--toggled');
    }
}

animToggler();

/* handle click on the toggle theme button */
themeToggler.addEventListener('click', () => {
    // remove the previous color theme from the page
    body.classList.remove(colorTheme);

    // toggle the color theme name */
    colorTheme === 'dark-theme' ? (colorTheme = 'light-theme') : (colorTheme = 'dark-theme');

    // animate the toggle button
    animToggler();

    // assign the color theme to the page
    body.classList.add(colorTheme);

    // save the color theme value to the local storage
    localStorage.setItem('color-theme', colorTheme);
});
