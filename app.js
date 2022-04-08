let btnmenu = document.querySelector('#btnmenu');
let btnclose = document.getElementById('close');
let menu = document.querySelector('.menu');

btnmenu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    btnmenu.classList.toggle('active');
    btnclose.classList.toggle('active');
});

btnclose.addEventListener('click',()=>{
    menu.classList.toggle('active');
    btnmenu.classList.toggle('active');
    btnclose.classList.toggle('active');
});