// libraries
import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
// styles
import './Bio.scss';

gsap.registerPlugin(scrollTrigger);

const heyLetters = gsap.utils.toArray('.bio__title-hey span');
const paragraphs = gsap.utils.toArray('.bio__paragraph span');

const screenWidth = document.querySelector('.bio__title').offsetWidth;

heyLetters.forEach((span) => {
    gsap.set(span, {
        x: () => screenWidth / 2 - span.offsetLeft,
        opacity: 0,
        scale: 3,
    });
});

paragraphs.forEach((span) => {
    gsap.set(span, {
        x: 300,
        opacity: 0,
    });
});

gsap.timeline({
    scrollTrigger: {
        trigger: '.bio__title',
        start: '50px 70%',
        end: '+=300 100%',
        scrub: 10,
        markers: true,
    },
})
    .to(heyLetters, {
        scale: 1,
        opacity: 1,
        stagger: 0.15,
        delay: 0.15,
        ease: 'power4.out',
    })
    .to(
        heyLetters,
        {
            x: 0,
            stagger: 0.15,
            delay: 0.15,
        },
        '<'
    )
    .to(paragraphs, {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        delay: 0.15,
        ease: 'power4.out',
    });
