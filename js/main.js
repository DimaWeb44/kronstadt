
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
// _________________________________________________________________________________________ search.js
let searchBtn = $('.search-btn')

searchBtn && searchBtn.on('click', () => {
  $('.section').toggleClass('search')
  if ($('.section').attr('class').includes('search')) {
    searchBtn.html("<svg width=\"81\" height=\"112\" viewBox=\"0 0 81 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
      "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M79.3067 16.0474C80.2674 16.9795 80.2907 18.5139 79.3586 19.4746L5.68406 95.4148C4.75198 96.3755 3.21756 96.3988 2.25683 95.4667C1.29609 94.5346 1.27286 93.0002 2.20493 92.0395L75.8795 16.0993C76.8115 15.1386 78.3459 15.1153 79.3067 16.0474Z\" fill=\"white\"/>\n" +
      "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.25972 16.0474C1.29899 16.9795 1.27575 18.5139 2.20782 19.4746L75.8824 95.4148C76.8144 96.3755 78.3488 96.3988 79.3096 95.4667C80.2703 94.5346 80.2935 93.0002 79.3615 92.0395L5.68695 16.0993C4.75488 15.1386 3.22046 15.1153 2.25972 16.0474Z\" fill=\"white\"/>\n" +
      "</svg>\n")
  } else {
    searchBtn.html("<svg width=\"78\" height=\"77\" viewBox=\"0 0 78 77\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
      "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32.7973 5.04574C17.4706 5.04574 5.04574 17.4706 5.04574 32.7973C5.04574 48.1241 17.4706 60.5489 32.7973 60.5489C48.1241 60.5489 60.5489 48.1241 60.5489 32.7973C60.5489 17.4706 48.1241 5.04574 32.7973 5.04574ZM0 32.7973C0 14.6839 14.6839 0 32.7973 0C50.9108 0 65.5947 14.6839 65.5947 32.7973C65.5947 40.946 62.623 48.4005 57.7042 54.1363L76.7103 72.3273C77.6956 73.3126 77.6956 74.91 76.7103 75.8952C75.7251 76.8805 74.1277 76.8805 73.1424 75.8952L54.1363 57.7042C48.4005 62.623 40.946 65.5947 32.7973 65.5947C14.6839 65.5947 0 50.9108 0 32.7973Z\" fill=\"white\"/>\n" +
      "</svg>\n")
  }
  $(".content-text").unmark();
  $("#term").val('')
  $("p.results").hide().empty();
});


$(".content-text").length && $(function () {
  var mark = function () {
    var keyword = $("#term").val();
    $("p.results").hide().empty();
    var options = {};
    $(".content-text").unmark({
      done: function () {
        $(".content-text").mark(keyword, {
          done: function (count) {
            if (count == 0) {
              $("p.results").fadeIn().append("Ничего не найдено");
            } else {
              $("p.results").fadeIn().append('Hайдено: ' + count + ' совпадений.');
            }
          }
        });
      }
    });
  };
  $(".search-click").on("click", mark);
});


var $write = $('#term').length && $('#term')

$write && $('#keyboard .letter').click(function () {

  var $this = $(this),
    character = $this.html();


  if ($this.hasClass('delete')) {
    var html = $write.val();


    $write.val(html.substr(0, html.length - 1));
    return false;
  }

  if ($this.hasClass('spacing')) character = ' ';

  $write.val($write.val() + character);
});
