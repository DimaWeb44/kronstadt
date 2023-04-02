

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
