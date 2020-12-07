function changeSlides(n) {
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    else if (n < 1) {
        slideIndex = slides.length;
    }
    for (var slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
var slideIndex = 1;
changeSlides(slideIndex);

function nextSlide() {
    changeSlides(slideIndex += 1);
};
function previousSlide () {
    changeSlides(slideIndex -= 1);
};
function currentSlide () {
    changeSlides(slideIndex = n);
}