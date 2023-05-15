import gsap from 'gsap';

const sections = gsap.utils.toArray('.slide-in');

sections.forEach((section) => {
    const directionAttr = section.getAttribute('data-slide-direction');
    let direction = {};

    switch (directionAttr) {
        case 'top':
            direction = {
                axis: 'y',
                value: 100,
            };
            break;

        default:
            direction = {
                axis: 'x',
                value: -300,
            };
            break;
    }

    gsap.from(section, {
        [direction.axis]: direction.value,
        opacity: 0,
        duration: 0.5,
        delay: 0.25,
        scrollTrigger: {
            trigger: section,
            start: 'top 95%',
            end: 'bottom 10%',
            toggleActions: 'play pause resume pause',
        },
    });
});
