// libraries
// styles
import 'modern-normalize/modern-normalize.css';
import 'Src/styles/styles.scss';
// components
import { lazyLoadImages } from 'Components/lazyLoadImages/lazyLoadImages';
import 'Components/lazyLoadImages/lazyLoadImages.scss';
import { hideLoadingPlaceholder } from 'Components/loadingPlaceholder/hideLoadingPlaceholder';
// sections
import './homeSections/Intro/Intro';
import 'Sections/Header/Header';
import 'Sections/Footer/Footer.scss';

window.addEventListener('DOMContentLoaded', () => {
    hideLoadingPlaceholder();
    lazyLoadImages();
});
