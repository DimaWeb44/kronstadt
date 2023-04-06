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

