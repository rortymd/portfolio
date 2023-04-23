/* dom elements */
const body = document.body;
// toggle theme button
const themeTogglerBtn = document.querySelector('.theme-toggle');
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
const metaThemeColor = document.querySelector('meta[name="theme-color"]');

// color theme name
let colorTheme;

/* get the current color theme from the local storage || create one if it doesn't exist */
if (!localStorage.getItem('color-theme')) {
    localStorage.setItem('color-theme', 'dark-theme');
    colorTheme = 'dark-theme';
} else {
    colorTheme = localStorage.getItem('color-theme');
}

/* assign the color theme to the page */
body.classList.add(colorTheme);
themeDependencies();

/* styles which should be implemented on the initial page load and after the user clicks on the theme toggle button */
function themeDependencies() {
    if (colorTheme === 'dark-theme') {
        // animate the toggle button
        themeTogglerBtn.classList.add('theme-toggle--toggled');
        // change the meta theme-color html tag
        metaThemeColor.setAttribute('content', '#141414');
    } else {
        // animate the toggle button
        themeTogglerBtn.classList.remove('theme-toggle--toggled');
        // change the meta theme-color html tag
        metaThemeColor.setAttribute('content', '#d9d9d9');
    }
}

/* handle click on the toggle theme button */
themeTogglerBtn.addEventListener('click', () => {
    // remove the previous color theme from the page
    body.classList.remove(colorTheme);

    // toggle the color theme name
    colorTheme === 'dark-theme' ? (colorTheme = 'light-theme') : (colorTheme = 'dark-theme');

    // assign the color theme to the page
    body.classList.add(colorTheme);
    themeDependencies();

    // save the color theme value to the local storage
    localStorage.setItem('color-theme', colorTheme);
});
