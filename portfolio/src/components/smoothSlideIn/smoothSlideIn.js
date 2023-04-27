import './smoothSlideIn.scss';

setTimeout(() => {
    // .slide-in-trigger is the element which will be used for the IntersectionObserver to work (could be a parent node)
    const elems = document.querySelectorAll('.slide-in-trigger');

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // .slide-in is an actual element which needs to be shown
                const elem = entry.target.querySelector('.slide-in');

                elem.style.opacity = 1;
                elem.style.transform = 'translate3d(0, 0, 0)';

                observer.unobserve(elem);
            }
        });
    };

    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(callback, options);

    elems.forEach((elem) => observer.observe(elem));
}, 500);
