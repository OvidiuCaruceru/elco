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

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('.carousel__item--current');
    nextDot.classList.add('.carousel__item--current');
}

//move to the next slide when nextButton is pushed
nextButton.addEventListener('click', () => {
    const currentSlide = carouselTrack.querySelector('.carousel__item--current');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsContainer.querySelector('.carousel__item--current');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(carouselTrack, currentSlide, nextSlide);
    updateDots(currentDot, prevDot);
});

//move to the previous slide when prevButton is pushed
prevButton.addEventListener('click', () => {
    const currentSlide = carouselTrack.querySelector('.carousel__item--current');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsContainer.querySelector('.carousel__item--current');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(carouselTrack, currentSlide, prevSlide);
    updateDots(currentDot, nextDot);
});

//move directly to the slide corresponding to the dot clicked on
dotsContainer.addEventListener('click', e => {

    const targetDot = e.target.closest('button');

    //because there's a single event listener for the entire dotsContainer, not separate event listeneres for each dot, the full script in the event listener will run only when a specific dot was clicked
    if (!targetDot) return console.log(targetDot);

    const currentSlide = carouselTrack.querySelector('.carousel__item--current');
    const currentDot = dotsContainer.querySelector('.carousel__item--current');
    const targetIndex = dotsArray.findIndex(dot => dot === targetIndex);
    const targetSlide = carouselItems[targetIndex];

    moveToSlide(carouselTrack, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});