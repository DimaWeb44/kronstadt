
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


closeSearchArticle = document.querySelector('.close-search-article')
closeSearchArticle && closeSearchArticle.addEventListener('click', () => {
  history.back();
  return false;
})
//_________________________________________________________________________________________________transitionsPage

let animeTransitions = (targets, step, direction) => {
  const duration = 1000;
  const from = step === 'leave' ? 0 : 100;
  const to = step === 'leave' ? 100 : 0;

  targets.style.transform = direction === 'next'
    ? `translateX(${from}%)`
    : `translateX(-${from}%)`;

  const translateX = direction === 'next' ? `-${to}%` : `${to}%`;
  const staggerX = window.innerWidth * 0.1;
  const anim = anime.timeline({
    easing: 'easeInOutQuart',
    duration,
  });

  anim.add({
    targets,
    translateX,
  });


  if (step === 'enter') {
    anim.add({
      targets: targets.querySelectorAll('main > *'),
      translateX: direction === 'next' ? [staggerX, 0] : [-staggerX, 0],
      duration: duration * 0.6,
      easing: 'easeOutQuart',
      delay: anime.stagger(100),
    }, '-=500');
  }

  return anim.finished;
}

let opacityTransitions = (targets, step) => {
  const duration = 1000;
  const anim = anime.timeline({
    easing: 'easeInOutQuart',
  });

  if (step === 'leave') {
    anim.add({
      targets: targets,
      opacity: [1, 0],
      duration: duration,
      easing: 'easeInOutQuart',
    });
  } else {
    anim.add({
      targets: targets,
      opacity: [0, 1],
      duration: duration,
      easing: 'easeInOutQuart',
      delay: 100,
    });
  }


  return anim.finished;
}

barba.hooks.before(() => {
  barba.wrapper.classList.add('is-animating');
});
barba.hooks.after(() => {
  barba.wrapper.classList.remove('is-animating');
});

barba.init({
  debug: true,
  transitions: [
    {
      sync: true,
      custom: ({trigger}) => trigger.dataset && trigger.dataset.direction === 'next',
      leave: ({current}) => animeTransitions(current.container.querySelector('.page__box__content'), 'leave', 'next'),
      enter: ({next}) => animeTransitions(next.container.querySelector('.page__box__content'), 'enter', 'next'),
    },
    {
      sync: true,
      custom: ({trigger}) => trigger.dataset && trigger.dataset.direction === 'prev',
      leave: ({current}) => animeTransitions(current.container.querySelector('.page__box__content'), 'leave', 'prev'),
      enter: ({next}) => animeTransitions(next.container.querySelector('.page__box__content'), 'enter', 'prev'),
    },
    {
      sync: true,
      custom: ({trigger}) => trigger.dataset && trigger.dataset.direction === 'opacity',
      leave: ({current}) => opacityTransitions(current.container, 'leave'),
      enter: ({next}) => opacityTransitions(next.container, 'enter'),
    },

  ],
});

/*
barba.hooks.beforeEnter((data) => {
  console.log('kkk')
});
*/




// ____________________________________________________________________________________________ scroll.js

function scroll(content, top, bottom, scrollPx) {
  bottom && bottom.click(function () {
    event.preventDefault();
    content.animate({
      scrollTop: `+=${scrollPx}px`
    }, "slow");
  });

  top && top.click(function () {
    event.preventDefault();
    content.animate({
      scrollTop: `-=${scrollPx}px`
    }, "slow");
  });

}

let sectionText = $('.section__text')
let sectionTextTop = $('.section__text__btn__top')
let sectionTextBottom = $('.section__text__btn__bottom')
sectionText && scroll(sectionText, sectionTextTop, sectionTextBottom, 260)

let leftMenu = $('.left-menu ul')
let leftPanelTop = $('.left-panel-top')
let leftPanelBottom = $('.left-panel-bottom')
leftMenu && scroll(leftMenu, leftPanelTop, leftPanelBottom, 333)

let leftMenuArticle = $('.search-article__left__list')
leftMenuArticle && scroll(leftMenuArticle, leftPanelTop, leftPanelBottom, 432)



//____________________________________________________________________________________________ video.js

let video = document.querySelectorAll(".video-box");

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
let redirectTime = 100000
let redirectPage
const runTimer = () => {
  redirectPage = setTimeout(() => {
    window.location.replace("./index.html");
  }, redirectTime)
}

window.addEventListener('touchstart', () => {
  sectionSlider1.length && sectionSlider1.slick('slickPause');
  sectionSlider2.length && sectionSlider2.slick('slickPause');
  clearTimeout(redirectPage)
  runTimer()
})


// _________________________________________________________________________________________ search.js

let searchBtn = $('#toggle-search')
let contentText = $(".content-text")

function declOfNum(number, words) {
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

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
  contentText.unmark();
  $("#term").val('')
  $("p.results").hide().empty();
});

let $write = $('#term').length && $('#term')

let mark = function () {
  let keyword = $write.val();
  $("p.results").hide().empty();
  let options = {};
  contentText.unmark({
    done: function () {
      contentText.mark(keyword, {
        done: function (count) {
          if (count == 0) {
            if (keyword.trim()) {
              $("p.results").fadeIn().append("Ничего не найдено");
            } else {
              $("p.results").hide().empty();
            }
          } else {
            $("p.results").fadeIn().append('Hайдено: ' + count + ` ${declOfNum(count, ['совпадение', 'совпадения', 'совпадений'])}.`);
          }
        }
      });
    }
  });
};

contentText && $('#keyboard .letter').click(function () {
  let $this = $(this),
    character = $this.html();

  if ($this.hasClass('delete')) {
    let html = $write.val();
    $write.val(html.substr(0, html.length - 1));
    mark()
    return false;
  }

  if ($this.hasClass('spacing')) character = ' ';

  $write.val($write.val() + character);
  mark()
});



// _________________________________________________________________________________________ searchArticle.js

let $writeArticle = $('#term-article').length && $('#term-article')
let noFound = $('.no-found')
let searchArticleList = $('.search-article__left__list')

let fetchServer = (count) => {
  if (count === 0) {
    $("p.results").fadeIn().append("Ничего не найдено");
    noFound.css('display', 'flex')
  } else {
    $("p.results").fadeIn().append('Hайдено: ' + count + ` ${declOfNum(count, ['статья', 'статьи', 'статей'])}.`);
    searchArticleList.css('display', 'flex')
    noFound.css('display', 'none')
  }
}

$('#keyboard-search-article .letter').click(function () {
  let $this = $(this),
    character = $this.html();
  $("p.results").hide().empty();

  if ($this.hasClass('delete')) {
    let html = $writeArticle.val();
    $("p.results").hide().empty();
    $writeArticle.val(html.substr(0, html.length - 1));
    return false;
  }
  if ($this.hasClass('spacing')) character = ' ';
  $writeArticle.val($writeArticle.val() + character);

  if ($writeArticle.val().length >= 3) {
    //запрос на сервер, приходят статьи и count
    /* fetchServer(count)*/
  }
})

$("#search-articles").on("click", () => {
  //запрос на сервер, приходят статьи и count
  /*  fetchServer(3)*/
});
