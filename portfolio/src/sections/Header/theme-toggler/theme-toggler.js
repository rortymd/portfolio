let colorTheme;

if (!localStorage.getItem('color-theme')) {
    localStorage.setItem('color-theme', 'dark-theme');
    colorTheme = 'dark-theme';
} else {
    colorTheme = localStorage.getItem('color-theme');
}

const body = document.body;
const themeToggler = document.querySelector('.theme-toggle');

function handleTheme() {
    if (colorTheme === 'dark-theme') {
        themeToggler.classList.add('theme-toggle--toggled');
    } else {
        themeToggler.classList.remove('theme-toggle--toggled');
    }
    body.classList.add(colorTheme);
}

handleTheme();

themeToggler.addEventListener('click', () => {
    body.classList.remove(colorTheme);

    colorTheme === 'dark-theme' ? (colorTheme = 'light-theme') : (colorTheme = 'dark-theme');

    handleTheme();

    if (localStorage.getItem('color-theme') !== colorTheme) {
        localStorage.setItem('color-theme', colorTheme);
    }
});
