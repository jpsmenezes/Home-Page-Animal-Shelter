/*////////////////////////////// EFEITO DE SCROLL NO HEADER ////////////////////////////////////*/
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

/*/////////////////////////// EFEITO PARALLAX NA IMAGEM DO HERO /////////////////////////////////*/
const image = document.querySelector('#imageParallax');
window.addEventListener('scroll',function(){
    const value = window.scrollY;
    image.style.top = value * 0.5 + "px"; 
})

/*/////////////////////////////// ICON DE MENU / MENU TOGGLE /////////////////////////////////////*/
let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {    
    document.body.style.overflow = show ? "hidden" : "initial"; //evitando a rolagen da tela, usando condicional ternario
    
    menuSection.classList.toggle('on', show)
    show = !show;
})

/*//////////////////////////////////////// ANIMAÇÃO //////////////////////////////////////////////*/
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){        
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}
animeScroll()
window.addEventListener('scroll', function(){
    animeScroll()   
})