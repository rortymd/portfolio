const hideLoadingPlaceholder = () => {
    const body = document.body;
    body.style.overflow = 'auto';

    const loader = document.querySelector('.loadingPlaceholder');
    loader.classList.add('loadingPlaceholder-hidden');

    setTimeout(() => {
        loader.remove();
    }, 350);
};

export { hideLoadingPlaceholder };
