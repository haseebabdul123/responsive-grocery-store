let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn'). onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    shopingCart.classList.remove('active');
    logIn.classList.remove('active');
}
let shopingCart = document.querySelector('.shoping-cart');
document.querySelector('#cart-btn'). onclick = () =>{
    shopingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    logIn.classList.remove('active');
}
let logIn = document.querySelector('.log-in');
document.querySelector('#user-btn'). onclick = () =>{
    logIn.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    shopingCart.classList.remove('active');
 
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn'). onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    logIn.classList.remove('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    shopingCart.classList.remove('active');
    logIn.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction:false,
    },
    centeredSlider:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction:false,
    },
    centeredSlider:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });