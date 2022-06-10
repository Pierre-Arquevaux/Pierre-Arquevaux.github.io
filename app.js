let navbar = document.querySelector('.navbar');
let menubtn = document.querySelector('#menu-btn');
let cartItem = document.querySelector('.cart-items-container');
let cartbtn = document.querySelector('#cart-btn');
let selection = document.querySelector('.navbar a')
const buttons = document.querySelectorAll("[data-carousel-button]")

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



buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

