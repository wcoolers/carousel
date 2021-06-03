const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
        dots.forEach((dot) => {
            dot.classList.remove("active")
        })
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    dots[slidePosition].classList.add("active")
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    dots[slidePosition].classList.add("active")
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        hideAllSlides()
        slides[index].classList.add("carousel-item-visible");
        dots[index].classList.add("active")
    })
})
setInterval(moveToNextSlide, 2000)