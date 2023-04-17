let colorTheme;

colorTheme = 'dark-theme';

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
});
