// libraries
import gsap from 'gsap';
// styles
import './Bio.scss';

/* DOM nodes */
const section = document.querySelector('.bio');
const title = gsap.utils.toArray('.bio .title span');
const subtitle = gsap.utils.toArray('.bio .subtitle span');

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: section,
        start: 'top 50',
        end: '+=6000',
        scrub: 1,
        pin: true,
    },
    defaults: {
        ease: 'linear',
        x: 400,
        opacity: 0,
    },
});

tl.from(title, {
    duration: 8,
    stagger: 4,
});

tl.from(subtitle, {
    duration: 8,
    stagger: 10,
});
