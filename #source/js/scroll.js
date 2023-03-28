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
