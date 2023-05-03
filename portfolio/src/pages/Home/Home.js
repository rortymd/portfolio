// styles
import 'modern-normalize/modern-normalize.css';
import 'Src/styles/styles.scss';
import './Home.scss';
// components
import 'Components/lazyLoadImages/lazyLoadImages.scss';
import { lazyLoadImages } from 'Components/lazyLoadImages/lazyLoadImages';
import { hideLoadingPlaceholder } from 'Components/loadingPlaceholder/hideLoadingPlaceholder';
import 'Components/gsapPlugins';
// sections
import 'Sections/Header/Header';
import './homeSections/Intro/Intro';
import './homeSections/Bio/Bio';
import './homeSections/Info/Info.scss';
import 'Sections/Footer/Footer.scss';
// gsap script (import it the last to avoid spacing conflicts)
import 'Components/smoothSlideIn/smoothSlideIn';

window.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    hideLoadingPlaceholder();
});
