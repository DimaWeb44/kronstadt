// _________________________________________________________________________________________ slider.js
sectionSlider1 = $('.section__slider-1')
sectionSlider2 = $('.section__slider-2')

function setNumberSlide(e) {
  let indexSlide = sectionSlider2.length && sectionSlider2.slick('slickCurrentSlide');
  $('.gallery__slider-big').length && $('.gallery__slider-big').slick('slickGoTo', indexSlide, false);
}

$('.gallery-slider-2').length && $('.gallery-slider-2').on('click', () => setNumberSlide());

function setNumberSlideGalleri(e) {
  let indexSlide = $('.gallery__slider-big').length && $('.gallery__slider-big').slick('slickCurrentSlide');
  $('.gallery__slider-full-photo').length && $('.gallery__slider-full-photo').slick('slickGoTo', indexSlide, false);
}

$('#open-full-photo').length && $('#open-full-photo').on('click', () => setNumberSlideGalleri());

function setNumberSlideFullPhoto(e) {
  let indexSlide = $('.gallery__slider-full-photo').length && $('.gallery__slider-full-photo').slick('slickCurrentSlide');
  $('.gallery__slider-big').length && $('.gallery__slider-big').slick('slickGoTo', indexSlide, false);
}

$('#close-full-photo').length && $('#close-full-photo').on('click', () => setNumberSlideFullPhoto());


// _________________________________________________________________________________________________redirectPage.js
let redirectTime = 3000000
let redirectArticleTime = 5000
let redirectPage
let redirectArticleListPage

const runTimer = () => {
  redirectPage = setTimeout(() => {
    window.location.replace("./index.html");
  }, redirectTime)
}

const runTimerArticle = () => {
    redirectArticleListPage = setInterval(() => {
      document.querySelector('.panel-next-anim').click()
    }, redirectArticleTime)
}

window.addEventListener('touchstart', () => {
  sectionSlider1.length && sectionSlider1.slick('slickPause');
  sectionSlider2.length && sectionSlider2.slick('slickPause');
  clearTimeout(redirectPage)
  clearTimeout(redirectArticleListPage)
  runTimer()
  if (document.querySelector('.main')) {
    runTimerArticle()
  }
})

