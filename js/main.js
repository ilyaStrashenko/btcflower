const burger = document.getElementById('burger');
const burgerBlok = document.getElementById('burger-blok');

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    burgerBlok.classList.toggle('active')
})

const menu = document.getElementById('menu');
const menuBlok = document.getElementById('menu-blok');
const menuClose = document.getElementById('menu-close');

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBlok.classList.toggle('active')
})
menuClose.addEventListener('click', () => {
    menu.classList.remove('active')
    menuBlok.classList.remove('active')
})




const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}


const activedotSlide = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}



const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activedotSlide(ind);
}


const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


setInterval(nextSlide, 2500);