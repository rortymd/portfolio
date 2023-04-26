const hideLoadingPlaceholder = () => {
    const body = document.body;
    body.style.overflow = 'visible';

    const loader = document.querySelector('.loadingPlaceholder');
    loader.classList.add('loadingPlaceholder-hidden');

    setTimeout(() => {
        loader.remove();
        // remove <style> tag
        document.querySelector('#loadingPlaceholderStyles').remove();
    }, 350);
};

export { hideLoadingPlaceholder };
