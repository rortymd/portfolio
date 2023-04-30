// libraries
import gsap from 'gsap';
// styles
import './Bio.scss';

/* DOM nodes */
const title = document.querySelector('.bio .title');
const subtitle = document.querySelectorAll('.bio .subtitle');

// const tl = gsap.timeline({
//     defaults: {
//         ease: 'elastic',
//     },
// });

// tl.from(title, {
//     x: -300,
//     duration: 2,
// });

// tl.to(title, {
//     scale: 1.5,
//     transformOrigin: 'left',
//     duration: 1,
// });

// tl.from(
//     subtitle,
//     {
//         y: 'random(-50, 50)',
//         opacity: 0,
//         rotateX: 360,
//         stagger: 0.5,
//     },
//     '<'
// );
