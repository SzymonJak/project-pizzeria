// class Carousel{
//   constructor(carouselContainer){
//     const thisCarousel = this;

//     thisCarousel.dom = {};
//     thisCarousel.dom.wrapper = carouselContainer;
//     thisCarousel.dom.slide = document.getElementsByName('slide');


//     thisCarousel.index = 0;
//     thisCarousel.images = [];
//     thisCarousel.time = 3000;

//     //Images
//     thisCarousel.images[0] = '../images/main-page/pizza-3.jpg';
//     thisCarousel.images[1] = '../images/main-page/pizza-4.jpg';
//     thisCarousel.images[2] = '../images/main-page/pizza-5.jpg';

//     thisCarousel.changeImg();
//   }

//   changeImg(){
//     const thisCarousel = this;

//     thisCarousel.dom.slide.src = thisCarousel.images[thisCarousel.index];

//     if(thisCarousel.index < thisCarousel.images.length - 1){
//       thisCarousel.index++;
//     } else {
//       thisCarousel.index = 0;
//     }

//     setTimeout('changeImg()', thisCarousel.time);
//   }
// }

// export default Carousel;