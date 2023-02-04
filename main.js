var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.opacity = 1;
    setTimeout(showSlides, 5000);
}

// Carrusel experiencia
const boxes = document.querySelectorAll('.box');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

leftArrow.addEventListener('click', () => {
    moveLeft();
});

rightArrow.addEventListener('click', () => {
    moveRight();
});

function moveLeft() {
    const activeBox = document.querySelector('.active');
    const nextBox = activeBox.previousElementSibling || boxes[boxes.length - 1];

    activeBox.classList.remove('active');
    nextBox.classList.add('active');
}

function moveRight() {
    const activeBox = document.querySelector('.active');
    const nextBox = activeBox.nextElementSibling || boxes[0];
    activeBox.classList.remove('active');
    nextBox.classList.add('active');
}
