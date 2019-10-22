const mysitenav = document.querySelector('header .site-nav');
const mymenubutton = document.querySelector('.menu-button');

console.log('clicked!')

mymenubutton.onclick = function() {
    mysitenav.classList.toggle('active');
}
