
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
