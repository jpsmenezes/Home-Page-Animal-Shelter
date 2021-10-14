//Efeito de scroll no menu
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

//Efeito Parallax na imagem
const image = document.querySelector('#imageParallax');
window.addEventListener('scroll',function(){
    const value = window.scrollY;
    image.style.top = value * 0.5 + "px"; 
})

