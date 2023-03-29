
// ____________________________________________________________________________________________ nav.js
eyeBtn = document.querySelector('.eye-btn')
eyeBtn && eyeBtn.addEventListener('click', () => {
  document.body.classList.toggle('visually-impaired')
})

languageBtn = document.querySelectorAll('.language-btn')
languagePanel = document.querySelectorAll('.language-panel')
languageBtn.length && languageBtn.forEach(el => {
  el.addEventListener('click', () => {
    languagePanel.forEach(el => {
      el.classList.toggle('language-panel-active')
    })
  })
})
//_________________________________________________________________________________________________transitionsPage

$('.page').length && $('.page').click(function (event) {
  var x = event.pageX;
  var y = event.pageY;

  $('.page-next').css('z-index', parseInt($('.page').css('z-index')) + 1);
  $('.page-next').css('clip-path', 'circle(0% at ' + x + 'px ' + y + 'px)');

  anime({
    targets: $('.page-next'),
    update: function (anim) {
      $('.page-next').css('clip-path', 'circle(' + (anim.progress * 2) + '% at ' + x + 'px ' + y + 'px)');
    }
  });
});


$(document).ready(function () {
  $('.panel-next').length && $('.panel-next').click(function () {
    $('.page').css("display", "none");
    $('.article-page-1').fadeOut(700,);
    $('.article-page-2').fadeIn(1400);
  });
});

/*
$(document).ready(function() {
  $("body").css("display", "none");

  $("body").fadeIn(2000);

  $("a.transition").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }
});
*/

// ____________________________________________________________________________________________ scroll.js
$('.section__text__btn__bottom').length && $('.section__text__btn__bottom').click(function() {
  event.preventDefault();
  $('.section__text').animate({
    scrollTop: '+=250px'
  }, "slow");
});

$('.section__text__btn__top').length &&  $('.section__text__btn__top').click(function() {
  event.preventDefault();
  $('.section__text').animate({
    scrollTop: '-=250px'
  }, "slow");
});

//____________________________________________________________________________________________ video.js
let video = document.querySelectorAll(".video-box");
// Buttons

video && video.forEach((el) => {
  let video = el.querySelector('video')
  let playButton = el.querySelector('.play-pause')
  let closeBtn = el.querySelector('.close-btn')

  video.onended = function (e) {
    playButton.innerHTML = "<svg width=\"42\" height=\"86\" viewBox=\"0 0 42 86\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
      "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6209 41.8248C39.0571 42.248 39.0676 42.9447 38.6444 43.3808L5.19506 77.8589C4.77189 78.295 4.07524 78.3056 3.63905 77.8824C3.20286 77.4592 3.19231 76.7626 3.61549 76.3264L37.0649 41.8484C37.488 41.4122 38.1847 41.4017 38.6209 41.8248Z\" fill=\"white\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
      "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6209 43.3431C39.0571 42.92 39.0676 42.2233 38.6444 41.7871L5.19506 7.3091C4.77189 6.87292 4.07524 6.86237 3.63905 7.28554C3.20286 7.70872 3.19231 8.40537 3.61549 8.84156L37.0649 43.3196C37.488 43.7558 38.1847 43.7663 38.6209 43.3431Z\" fill=\"white\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
      "</svg>\n";
  };

  closeBtn.addEventListener("click", function () {
    setTimeout(() => {
      video.pause();
      video.currentTime = 0;
      playButton.innerHTML = "<svg width=\"42\" height=\"86\" viewBox=\"0 0 42 86\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6209 41.8248C39.0571 42.248 39.0676 42.9447 38.6444 43.3808L5.19506 77.8589C4.77189 78.295 4.07524 78.3056 3.63905 77.8824C3.20286 77.4592 3.19231 76.7626 3.61549 76.3264L37.0649 41.8484C37.488 41.4122 38.1847 41.4017 38.6209 41.8248Z\" fill=\"white\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6209 43.3431C39.0571 42.92 39.0676 42.2233 38.6444 41.7871L5.19506 7.3091C4.77189 6.87292 4.07524 6.86237 3.63905 7.28554C3.20286 7.70872 3.19231 8.40537 3.61549 8.84156L37.0649 43.3196C37.488 43.7558 38.1847 43.7663 38.6209 43.3431Z\" fill=\"white\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "</svg>\n";
    }, 200)
  })

  playButton.addEventListener("click", function () {
    if (video.paused === true) {
      video.play();

      playButton.innerHTML = "<svg width=\"30\" height=\"84\" viewBox=\"0 0 30 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path d=\"M4 4L4 79\" stroke=\"white\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n" +
        "<path d=\"M26 5L26 80\" stroke=\"white\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n" +
        "</svg>\n";
    } else {
      video.pause();

      playButton.innerHTML = "<svg width=\"42\" height=\"86\" viewBox=\"0 0 42 86\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6209 41.8248C39.0571 42.248 39.0676 42.9447 38.6444 43.3808L5.19506 77.8589C4.77189 78.295 4.07524 78.3056 3.63905 77.8824C3.20286 77.4592 3.19231 76.7626 3.61549 76.3264L37.0649 41.8484C37.488 41.4122 38.1847 41.4017 38.6209 41.8248Z\" fill=\"white\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6209 43.3431C39.0571 42.92 39.0676 42.2233 38.6444 41.7871L5.19506 7.3091C4.77189 6.87292 4.07524 6.86237 3.63905 7.28554C3.20286 7.70872 3.19231 8.40537 3.61549 8.84156L37.0649 43.3196C37.488 43.7558 38.1847 43.7663 38.6209 43.3431Z\" fill=\"white\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "</svg>\n";
    }
  });
})

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