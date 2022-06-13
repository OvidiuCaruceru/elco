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
const slideshow = document.querySelector('.slideshow__images');
const slides = Array.from(slideshow.children);
const prevButton = slideshow.querySelector('.slideshow__button--prev');
const nextButton = slideshow.querySelector('.slideshow__button--next');
const dotsContainer = slideshow.querySelector('slideshow__dots');
const dotsArray = slideshow.getElementsByClassName('slideshow__dot');

//move each slide to the right of previous slide to form a row of images
const chainSlides = (slide, index) => {
    slide.style.left = slides[index].getBoundingClientRect().width * index + 'px';
};

slides.forEach(chainSlides);