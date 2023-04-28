// libraries
import { gsap } from 'gsap';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
// styles
import './Intro.scss';

/* carousel */
// setTimeout(() => {
    const splide = new Splide('.intro.splide', {
        type: 'loop',
        pagination: false,
        autoplay: true,
    });

    const progressBar = splide.root.querySelector('.my-carousel-progress-bar');

    splide.on('mounted move', () => {
        const end = splide.Components.Controller.getEnd() + 1;
        const rate = Math.min((splide.index + 1) / end, 1);
        progressBar.style.width = String(100 * rate) + '%';
    });

    splide.mount();
// }, 100);

/* smooth appearance */
// setTimeout(() => {
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
            .timeline({ paused: true })
            .to(infoWrapper, {
                y: 0,
                opacity: 1,
                duration: 0.75,
            })
            .to(linksWrapper, {
                y: 0,
                opacity: 1,
                duration: 0.5,
            });

        item.timeline = action;

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        observer.observe(item);
    });
// }, 750);
