// libraries
import gsap from 'gsap';
// styles
import './Technologies.scss';

const cards = gsap.utils.toArray('.technologies__item');

cards.forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        duration: 0.5,
        stagger: 4,
        delay: 0.5,
        scrollTrigger: {
            trigger: section,
            start: '30% 95%',
            end: 'bottom 10%',
            toggleActions: 'play pause resume pause',
        },
    });
});
