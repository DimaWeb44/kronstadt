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
    video.pause();
    video.currentTime = 0;
    playButton.innerHTML = "<svg width=\"42\" height=\"86\" viewBox=\"0 0 42 86\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
      "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6209 41.8248C39.0571 42.248 39.0676 42.9447 38.6444 43.3808L5.19506 77.8589C4.77189 78.295 4.07524 78.3056 3.63905 77.8824C3.20286 77.4592 3.19231 76.7626 3.61549 76.3264L37.0649 41.8484C37.488 41.4122 38.1847 41.4017 38.6209 41.8248Z\" fill=\"white\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
      "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.6209 43.3431C39.0571 42.92 39.0676 42.2233 38.6444 41.7871L5.19506 7.3091C4.77189 6.87292 4.07524 6.86237 3.63905 7.28554C3.20286 7.70872 3.19231 8.40537 3.61549 8.84156L37.0649 43.3196C37.488 43.7558 38.1847 43.7663 38.6209 43.3431Z\" fill=\"white\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
      "</svg>\n";
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
