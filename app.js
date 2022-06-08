let navbar = document.querySelector('.navbar');
let menubtn = document.querySelector('#menu-btn');
let cartItem = document.querySelector('.cart-items-container');
let cartbtn = document.querySelector('#cart-btn');
let selection = document.querySelector('.navbar a')

menubtn.addEventListener('click', () =>{
    navbar.classList.toggle('active');
    // cartItem.classList.remove('active');
    
});

selection.addEventListener('click', () => {
    navbar.classList.remove('active')
})
// cartbtn.addEventListener('click', () =>{
//     cartItem.classList.add('active');
//     navbar.classList.remove('active');
// });

window.onscroll= () =>{
    navbar.classList.remove('active');
   
};



