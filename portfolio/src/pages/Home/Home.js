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
import 'Components/overlayScrollbar/overlayScrollbar';
// sections
import './homeSections/Intro/Intro';
import 'Sections/Header/Header';
import './homeSections/Bio/Bio';
import 'Sections/Footer/Footer.scss';

balanceText();

window.addEventListener('DOMContentLoaded', () => {
    hideLoadingPlaceholder();
    lazyLoadImages();
});
