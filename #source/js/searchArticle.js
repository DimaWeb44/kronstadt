

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
