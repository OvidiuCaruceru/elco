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

/////////////////////////////////////////////////// .carousel functionality ///////////////////////////////////////////////////
const carouselTrack = document.querySelector('.carousel__track');
const carouselItems = Array.from(carouselTrack.children);
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
const dotsContainer = document.querySelector('.carousel__dots');
const dotsArray = Array.from(dotsContainer.children);

//move each slide to the right of previous slide to form a row of images
const chainSlides = (slide, index) => {
    slide.style.left = carouselItems[index].getBoundingClientRect().width * index + 'px';
};

carouselItems.forEach(chainSlides);

const moveToSlide = (carouselTrack, currentSlide, targetSlide) => {
    carouselTrack.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('carousel__item--current');
    targetSlide.classList.add('carousel__item--current');
}
//move to the next slide when nextButton is pushed
nextButton.addEventListener('click', () => {
    const currentSlide = carouselTrack.querySelector('.carousel__item--current');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(carouselTrack, currentSlide, nextSlide);
});

//move to the previous slide when prevButton is pushed
prevButton.addEventListener('click', () => {
    const currentSlide = carouselTrack.querySelector('.carousel__item--current');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(carouselTrack, currentSlide, prevSlide);
});