const cotaniner = document.querySelector('.container');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');


let activeSlide = 0;

setBgToContainer()


rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }

    setBgToContainer();
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length;
    }

    setBgToContainer();
    setActiveSlide()
})


function setBgToContainer() {


    cotaniner.style.backgroundImage = slides[activeSlide].style.backgroundImage;


    console.log(cotaniner.style.backgroundImage)
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');

        slides[activeSlide].classList.add('active');
    })



}