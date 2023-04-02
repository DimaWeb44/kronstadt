

// _________________________________________________________________________________________ slider.js

function setNumberSlide(e) {
  let indexSlide = $('.section__slider-2').length && $('.section__slider-2').slick('slickCurrentSlide');
  $('.gallery__slider-big').length && $('.gallery__slider-big').slick('slickGoTo', indexSlide);
}

$('.gallery-slider-2').length && $('.gallery-slider-2').on('click', () => setNumberSlide());

function setNumberSlideGalleri(e) {
  let indexSlide = $('.gallery__slider-big').length && $('.gallery__slider-big').slick('slickCurrentSlide');
  $('.gallery__slider-full-photo').length && $('.gallery__slider-full-photo').slick('slickGoTo', indexSlide);
}

$('#open-full-photo').length && $('#open-full-photo').on('click', () => setNumberSlideGalleri());

function setNumberSlideFullPhoto(e) {
  let indexSlide = $('.gallery__slider-full-photo').length && $('.gallery__slider-full-photo').slick('slickCurrentSlide');
  $('.gallery__slider-big').length && $('.gallery__slider-big').slick('slickGoTo', indexSlide);
}

$('#close-full-photo').length && $('#close-full-photo').on('click', () => setNumberSlideFullPhoto());