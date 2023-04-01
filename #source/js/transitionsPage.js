//_________________________________________________________________________________________________transitionsPage
/*
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
*/




let animeFunc = (targets, step, direction) => {
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
      custom: ({ trigger }) => trigger.dataset && trigger.dataset.direction === 'next',
      leave: ({ current }) => animeFunc(current.container, 'leave', 'next'),
      enter: ({ next }) => animeFunc(next.container, 'enter', 'next'),
    },
    {
      sync: true,
      custom: ({ trigger }) => trigger.dataset && trigger.dataset.direction === 'prev',
      leave: ({ current }) => animeFunc(current.container, 'leave', 'prev'),
      enter: ({ next }) => animeFunc(next.container, 'enter', 'prev'),
    },
  ],
});

/*
barba.hooks.beforeEnter((data) => {
  console.log('kkk')
});
*/
