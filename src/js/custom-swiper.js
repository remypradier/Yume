import Swiper from 'swiper';
var slider = new Swiper('.swiper-container', {
  slidesPerView: 3,
  speed: 1000,
  spaceBetween: 50,
  shortSwipes: true,
  initialSlide: 2,
  centeredSlides: true,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
