// libraries
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// styles
import './Bio.scss';

gsap.registerPlugin(ScrollTrigger);

/* DOM nodes */
const section = document.querySelector('.bio');
const title = document.querySelector('.bio .title');
const titleLetters = gsap.utils.toArray('.bio .title span');

const subtitle = gsap.utils.toArray('.bio .subtitle span');
const span = gsap.utils.toArray('.bio span');

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: section,
        markers: true,
        start: 'top 100',
        end: '+=6000',
        scrub: 1,
        pin: true,
    },
    defaults: {
        ease: 'linear',
    },
});

tl.from(titleLetters, {
    duration: 8,
    stagger: 4,
    x: 400,
    opacity: 0,
});

tl.from(subtitle, {
    duration: 8,
    stagger: 10,
    x: 400,
    opacity: 0,
})

console.log([title, subtitle]);
