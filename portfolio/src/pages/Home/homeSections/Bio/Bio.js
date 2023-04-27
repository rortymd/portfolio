// libraries
import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
// styles
import './Bio.scss';

setTimeout(() => {
    gsap.registerPlugin(scrollTrigger);

    const heyLetters = gsap.utils.toArray('.bio__title-hey span');
    const paragraphs = gsap.utils.toArray('.bio__paragraph span');

    heyLetters.forEach((span) => {
        gsap.set(span, {
            x: 300,
            opacity: 0,
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
            end: '+=500 100%',
            scrub: 2,
        },
    })
        .to(heyLetters, {
            x: 0,
            opacity: 1,
            stagger: 1,
            delay: 0.5,
            ease: 'power4.out',
        })
        .to(paragraphs, {
            x: 0,
            opacity: 1,
            stagger: 1,
            delay: 0.5,
            ease: 'power4.out',
        });
}, 50);
