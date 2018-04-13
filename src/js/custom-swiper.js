import Swiper from 'swiper';

console.log(Swiper)

console.log('custom')
console.log(document.querySelector('.swiper-container'))


var slider = new Swiper('.swiper-container', {

  //loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  speed: 1000,
  //spaceBetween: 50,
  //grabCursor: true,
  shortSwipes: true,
  initialSlide: 2,
  navigation: {
    nextEl: '.swiper-slide-next',
    prevEl: '.swiper-slide-prev',
  },
  breakpoints :{
    768:{
      slidesPerView: 2,
      initialSlide: 0,
    }
  }
});

slider.navigation.update();
