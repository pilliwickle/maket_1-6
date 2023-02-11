import '../scss/style.scss';

const swiperBrands = new Swiper('.swiper1', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
       breakpoints: {
        300: {
            slidesPerView: 'auto',
            spaceBetween: 16,
        },
        767: {
            enabled: false,
            onAny() {
                swiperBrands.destroy(true, true);
            }
        },
    },
    observer: true,
});

const swiperTech = new Swiper('.swiper2', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
       breakpoints: {
        300: {
            slidesPerView: 'auto',
            spaceBetween: 16,
        },
        767: {
            enabled: false,
            onAny() {
                swiperTech.destroy(true, true);
            }
        },
    },
    observer: true,
});

const swiperPrice = new Swiper('.swiper3', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
       breakpoints: {
        300: {
            slidesPerView: 'auto',
            spaceBetween: 16,
        },
        767: {
            enabled: false,
            onAny() {
                swiperPrice.destroy(true, true);
            }
        },
    },
    observer: true,
});


const closeSideMenu = document.querySelector('.side-menu__exit-menu');
const sideMenu = document.querySelector('.side-menu');

if (window.innerWidth >= 1366) {
    sideMenu.classList.remove('left-modal');
}

const overlayLeft = document.querySelector('.left-overlay');
const openSideMenu = document.querySelector('.header__open-menu');

openSideMenu.addEventListener('click', function() {
    sideMenu.classList.add('left-modal--active');
    overlayLeft.classList.add('left-overlay--active');
});

overlayLeft.addEventListener('click', function() {
    sideMenu.classList.remove('left-modal--active');
    overlayLeft.classList.remove('left-overlay--active');
});

closeSideMenu.addEventListener ('click', function() {
    sideMenu.classList.remove('left-modal--active');
    overlayLeft.classList.remove('left-overlay--active');
});


const aboutShowMoreButton = document.querySelector ('.about__more-button');
const aboutShowLessButton = document.querySelector ('.about__less-button');
const aboutTextBox = document.querySelector ('.about__text');
const hiddenText = document.querySelector('.content--full');

aboutShowMoreButton.addEventListener ('click', function() {
    aboutTextBox.style.height = 'auto'; 
    hiddenText.classList.remove('content--hidden');
    aboutShowMoreButton.classList.add('more-less--hidden');
    aboutShowLessButton.classList.remove('more-less--hidden');
});

aboutShowLessButton.addEventListener ('click', function() {
    if (window.innerWidth < 768) {
        aboutTextBox.style.height = '90px';
    }

    if (window.innerWidth >= 768){
        aboutTextBox.style.height = '160px';
    }

    hiddenText.classList.add('content--hidden');
    aboutShowMoreButton.classList.remove('more-less--hidden');
    aboutShowLessButton.classList.add('more-less--hidden');
});

const openFeedbackFormSide = document.querySelector ('.feedback-button');
const openFeedbackFormHead = document.querySelector('.feedback-button2');
const closeFeedbackButton = document.querySelector ('.feedback__exit-modal');
const overlay = document.querySelector('.overlay');
const feedbackForm = document.querySelector('.feedback');

openFeedbackFormSide.addEventListener('click', function() {
    feedbackForm.classList.add('feedback--active');
    sideMenu.classList.remove('left-modal--active');
});

openFeedbackFormHead.addEventListener('click', function() {
    feedbackForm.classList.add('feedback--active');
});


overlay.addEventListener('click', function() {
    feedbackForm.classList.remove('feedback--active');
});

closeFeedbackButton.addEventListener ('click', function() {
    feedbackForm.classList.remove('feedback--active');
});


const openCallRequestSide = document.querySelector ('.call-button');
const openCallRequestHead = document.querySelector ('.call-button2');
const closeCallRequest = document.querySelector ('.сallrequest__exit-modal');
const overlayCallRequest = document.querySelector('.callrequest__overlay');
const callRequest = document.querySelector ('.callrequest');

openCallRequestSide.addEventListener('click', function() {
    callRequest.classList.add('callrequest--active');
    sideMenu.classList.remove('left-modal--active');
});

openCallRequestHead.addEventListener('click', function() {
    callRequest.classList.add('callrequest--active');
});


overlayCallRequest.addEventListener('click', function() {
    callRequest.classList.remove('callrequest--active');
});

closeCallRequest.addEventListener ('click', function() {
    callRequest.classList.remove('callrequest--active');
});


const brandsShowMoreButton = document.querySelector('.brands__more-button');
const brandsShowLessButton = document.querySelector('.brands__less-button');
const brandsList = document.querySelector('.swiper1');

brandsShowMoreButton.addEventListener ('click', function () {
    brandsShowMoreButton.classList.add('button--hidden');
    brandsList.classList.add ('brands__swiper--full');
    brandsShowLessButton.classList.remove('button--hidden');
});

brandsShowLessButton.addEventListener ('click', function () {
    brandsShowLessButton.classList.add('button--hidden');
    brandsList.classList.remove ('brands__swiper--full');
    brandsShowMoreButton.classList.remove('button--hidden');
});

const techShowMoreButton = document.querySelector('.tech__more-button');
const techShowLessButton = document.querySelector('.tech__less-button');
const techList = document.querySelector('.tech__wrapper');

techShowMoreButton.addEventListener ('click', function () {
    techShowMoreButton.classList.add('button--hidden');
    techList.classList.add ('tech__swiper--full');
    techShowLessButton.classList.remove('button--hidden');
});

techShowLessButton.addEventListener ('click', function () {
    techShowLessButton.classList.add('button--hidden');
    techList.classList.remove ('tech__swiper--full');
    techShowMoreButton.classList.remove('button--hidden');
});
