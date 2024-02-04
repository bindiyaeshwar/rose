var typed= new typed(".text", {
    Strings:["Student", "Creator", 'Editor'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let header= document.querySelector('header');
header.classList.toggle('sticky', window.scrollY>100);
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

