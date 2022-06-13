/////////////////////////////////////////////////// .header .nav menu open and close ///////////////////////////////////////////////////
const menu = document.getElementById('menu');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
    nav.classList.add('nav--open');
});

close.addEventListener('click', () => {
    nav.classList.remove('nav--open');
});

/////////////////////////////////////////////////// .slideshow functionality ///////////////////////////////////////////////////
const slideshowTrack = document.querySelector('.slideshow__track');
const slideshowItems = Array.from(slideshowTrack.children);
const prevButton = document.querySelector('.slideshow__button--prev');
const nextButton = document.querySelector('.slideshow__button--next');
const dotsContainer = document.querySelector('slideshow__dots');
const dotsArray = Array.from('slideshow__dot');

//move each slide to the right of previous slide to form a row of images
const chainSlides = (slide, index) => {
    slide.style.left = slideshowItems[index].getBoundingClientRect().width * index + 'px';
};

slideshowItems.forEach(chainSlides);

//move to the next slide when nextButton is pushed
nextButton.addEventListener('click', () => {
    const currentSlide = slideshowTrack.querySelector('.slideshow__item--current');
    const nextSlide = currentSlide.nextElementSibling;
    const slideWidth = nextSlide.style.left;

    slideshowTrack.style.transform = 'translateX(-' + slideWidth + ')';
    currentSlide.classList.remove('slideshow__item--current');
    nextSlide.classList.add('slideshow__item--current');
});