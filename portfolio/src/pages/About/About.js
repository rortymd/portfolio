// styles
import 'modern-normalize/modern-normalize.css';
import 'Src/styles/styles.scss';
// components
import 'Components/lazyLoadImages/lazyLoadImages.scss';
import { lazyLoadImages } from 'Components/lazyLoadImages/lazyLoadImages';
import { hideLoadingPlaceholder } from 'Components/loadingPlaceholder/hideLoadingPlaceholder';
import 'Components/gsapPlugins';
// sections
import 'Sections/Header/Header.js';
import './aboutSections/Title/Title.scss';
import './aboutSections/Technologies/Technologies.js';
import './aboutSections/Experience/Experience.scss';
import './aboutSections/Performance/Performance.scss';
import 'Sections/Footer/Footer.scss';
// gsap script (import it the last to avoid spacing conflicts)
import 'Components/smoothSlideIn/smoothSlideIn';

window.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    hideLoadingPlaceholder();
});
