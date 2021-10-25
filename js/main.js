//Efeito de scroll no menu
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

//Efeito Parallax na imagem do banner
const image = document.querySelector('#imageParallax');
window.addEventListener('scroll',function(){
    const value = window.scrollY;
    image.style.top = value * 0.5 + "px"; 
})

// Menu toggle
let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {    
    document.body.style.overflow = show ? "hidden" : "initial"; //evitando a rolagen da tela, usando condicional ternario
    
    menuSection.classList.toggle('on', show)
    show = !show;
})

