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


barba.init({
  transitions: [{
    name: 'opacity-transition',
    async leave(data) {
      await anime({
        targets: data.current.container,
        opacity: [1, 0],
        easing: 'easeInOutQuad',
      });
    },
    async enter(data) {
      await anime({
        targets: data.next.container,
        opacity: [0, 1],
        easing: 'easeInOutQuad',
      });
    },
  }]
});

/*
barba.hooks.beforeEnter((data) => {
  console.log('kkk')
});
*/
