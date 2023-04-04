import './lazyLoadImages.scss';

const lazyLoadImages = () => {
    const images = document.querySelectorAll('.lazy-image');

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const image = entry.target;
                const dataSrc = image.getAttribute('data-src');

                import(/* webpackMode: "eager" */ `Src/images/lazyload/${dataSrc}`).then((src) => {
                    image.setAttribute('src', src.default);
                    image.addEventListener('load', () => {
                        image.parentNode.classList.add('image-loaded');
                    });
                });

                observer.unobserve(image);
            }
        });
    };

    const options = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);

    images.forEach((img) => observer.observe(img));
};

export { lazyLoadImages };
