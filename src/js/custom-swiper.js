import Swiper from 'swiper';
var slider = new Swiper('.swiper-container', {
  slidesPerView: 3,
  speed: 1000,
  spaceBetween: 50,
  shortSwipes: true,
  initialSlide: 2,
  centeredSlides: true,
  grabCursor: true,
  //loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
/*
var next = document.querySelector('.swiper-slide-next');
var prev = document.querySelector('.swiper-slide-prev');

next.addEventListener('click', function(){
  slider.slideNext(1000);
  next = document.querySelector('.swiper-slide-next');
  prev = document.querySelector('.swiper-slide-prev');
})

prev.addEventListener('click', function(){
  slider.slidePrev(1000);
  next = document.querySelector('.swiper-slide-next');
  prev = document.querySelector('.swiper-slide-prev');
})

slider.on('slideChange', function () {
  next = document.querySelector('.swiper-slide-next');
  prev = document.querySelector('.swiper-slide-prev');
});
*/
