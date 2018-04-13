import Swiper from 'swiper';
var slider = new Swiper('.swiper-container', {
  slidesPerView: 3,
  speed: 1000,
  spaceBetween: 50,
  shortSwipes: true,
  initialSlide: 2,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-slide-next',
    prevEl: '.swiper-slide-prev'
  },
  breakpoints :{
    768:{
    }
  }
});
