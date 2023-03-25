
// ____________________________________________________________________________________________ nav.js
eyeBtn = document.querySelector('.eye-btn')
eyeBtn && eyeBtn.addEventListener('click', () => {
  document.body.classList.toggle('visually-impaired')
})