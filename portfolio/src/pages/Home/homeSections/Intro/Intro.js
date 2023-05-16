// libraries
import { gsap } from 'gsap';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
// styles
import './Intro.scss';

/* carousel */
const splide = new Splide('.intro.splide', {
    type: 'loop',
    pagination: false,
});

const progressBar = splide.root.querySelector('.my-carousel-progress-bar');

splide.on('mounted move', () => {
    const end = splide.Components.Controller.getEnd() + 1;
    const rate = Math.min((splide.index + 1) / end, 1);
    progressBar.style.width = String(100 * rate) + '%';
});

splide.mount();

/* smooth appearance */
// observer
const introItems = document.querySelectorAll('.intro-item');

const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const introItem = entry.target;

            introItem.timeline.play();

            observer.unobserve(introItem);
        }
    });
};

const observerOptions = {
    threshold: 0.5,
};

// animations
introItems.forEach((item) => {
    const infoWrapper = item.querySelector('.intro-item__descr');
    const linksWrapper = item.querySelector('.intro-item__links');

    const action = gsap
        .timeline({
            paused: true,
            defaults: {
                y: 100,
                opacity: 0,
            },
        })
        .from(infoWrapper, {
            duration: 0.75,
        })
        .from(linksWrapper, {
            duration: 0.5,
        });

    item.timeline = action;

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observer.observe(item);
});
