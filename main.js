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

let skills;

fetch('skills.json')
    .then(response => response.json())
    .then(data => {
    skills = data.skills;
    
    const skillsContainer = document.getElementById('skills-container');

    for (const skill of skills) {
        const skillContainer = document.createElement('div');
        skillContainer.classList.add('skill');

        const skillText = document.createElement('div');
        skillText.classList.add('d-flex')

        const skillName = document.createElement('p');
        skillName.innerHTML = skill.name;

        const skillPorcentaje = document.createElement('p');
        skillPorcentaje.innerHTML = skill.level + "%";
        
        const skillLevel = document.createElement('div');
        skillLevel.classList.add('skill-level');
        skillLevel.style.width = `${skill.level}%`;

        skillText.appendChild(skillName);
        skillText.appendChild(skillPorcentaje);
        skillContainer.appendChild(skillText);
        skillContainer.appendChild(skillLevel);
        skillsContainer.appendChild(skillContainer);
}
});
