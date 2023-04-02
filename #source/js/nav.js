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