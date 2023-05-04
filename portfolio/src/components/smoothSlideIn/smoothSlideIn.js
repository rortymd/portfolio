import gsap from 'gsap';

const sections = gsap.utils.toArray('.slide-in');

sections.forEach((section) => {
    gsap.from(section, {
        x: -300,
        opacity: 0,
        duration: 0.5,
        delay: 0.25,
        scrollTrigger: {
            trigger: section,
            start: 'top 95%',
        },
    });
});
