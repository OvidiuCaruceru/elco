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
    currentDot.classList.remove('carousel__dot--active');
    targetDot.classList.add('carousel__dot--active');
}

const hideShowButtons = (targetIndex, prevButton, nextButton, dotsArray) => {
    if(targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if(targetIndex === dotsArray.length - 1) {
        nextButton.classList.add('is-hidden');
        prevButton.classList.remove('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//move to the next slide when nextButton is pushed
nextButton.addEventListener('click', () => {
    const currentSlide = carouselTrack.querySelector('.carousel__item--current');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsContainer.querySelector('.carousel__dot--active');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = carouselItems.findIndex(slide => slide === nextSlide);

    moveToSlide(carouselTrack, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowButtons(nextIndex, prevButton, nextButton, carouselItems)
});

//move to the previous slide when prevButton is pushed
prevButton.addEventListener('click', () => {
    const currentSlide = carouselTrack.querySelector('.carousel__item--current');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsContainer.querySelector('.carousel__dot--active');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = carouselItems.findIndex(slide => slide === prevSlide);

    moveToSlide(carouselTrack, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowButtons(prevIndex, prevButton, nextButton, carouselItems);
});

//move directly to the slide corresponding to the dot clicked on
dotsContainer.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    //because there's a single event listener for the entire dotsContainer, not separate event listeneres for each dot, the full script in the event listener will run only when a specific dot was clicked
    if(!targetDot) return;

    const currentSlide = carouselTrack.querySelector('.carousel__item--current');
    const currentDot = dotsContainer.querySelector('.carousel__dot--active');
    const targetIndex = dotsArray.findIndex(dot => dot === targetDot);
    const targetSlide = carouselItems[targetIndex];

    moveToSlide(carouselTrack, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowButtons(targetIndex, prevButton, nextButton, dotsArray);
});