// _________________________________________________________________________________________ slider.js
function numberSlide(e) {
  let indexSlide = $('.section__slider-2').length && $('.section__slider-2').slick('slickCurrentSlide');
  $('.gallery__slider-big').length && $('.gallery__slider-big').slick('slickGoTo', indexSlide);
}

$('.section__slider-2').length && $('.section__slider-2').on('beforeChange', () => numberSlide());
