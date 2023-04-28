// libraries
import balanceText from 'balance-text';
// styles
import 'modern-normalize/modern-normalize.css';
import 'Src/styles/styles.scss';
import './Home.scss';
// components
import 'Components/lazyLoadImages/lazyLoadImages.scss';
import { lazyLoadImages } from 'Components/lazyLoadImages/lazyLoadImages';
import { hideLoadingPlaceholder } from 'Components/loadingPlaceholder/hideLoadingPlaceholder';
import 'Components/smoothSlideIn/smoothSlideIn';
// sections
import 'Sections/Header/Header';
import './homeSections/Intro/Intro';
import './homeSections/Bio/Bio';
import './homeSections/Info/Info.scss';
import 'Sections/Footer/Footer.scss';

window.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    hideLoadingPlaceholder();
});

setTimeout(() => {
    const textNodes = '.title, .subtitle, .paragraph, .list__item';

    balanceText(textNodes, { watch: true });

    document.querySelectorAll(textNodes).forEach((text) => {
        text.style.opacity = 1;
    });
}, 100);
