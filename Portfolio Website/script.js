const navbar = document.querySelector('.navbar');

window.onscroll = function() {scrollFunction()};

window.addEventListener('scroll', () =>{
    if(window.scrollY > 30){
        navbar.classList.add('active_nav');
    }else{
        navbar.classList.remove('active_nav');
    }
})
