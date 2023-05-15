import './Socials.scss';

// list of all the social links items
const items = document.querySelectorAll('.socials__item');

items.forEach((item) => {
    // single social link
    let link = item.querySelector('.socials__item-link');

    // link href
    let href = link.href;

    if (link.getAttribute('data-href')) {
        href = link.getAttribute('data-href');
    }

    // single copy button
    const copyBtn = item.querySelector('.socials__item-copy');

    // notification
    const copyNotification = item.querySelector('.socials__item-copy-notification');

    copyBtn.addEventListener('click', (event) => {
        // prevent following the link
        event.preventDefault();

        // copy text to the clipboard
        if (window.isSecureContext) {
            navigator.clipboard.writeText(href).then(() => {
                // show the notification
                copyNotification.classList.add('socials__item-copy-notification--active');

                // hide the notification
                setTimeout(() => {
                    copyNotification.classList.remove('socials__item-copy-notification--active');
                }, 1000);
            });
        }
    });
});
