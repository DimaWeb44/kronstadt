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
scroll(sectionText, sectionTextTop, sectionTextBottom, 260)

let leftMenu = $('.left-menu ul')
let leftPanelTop = $('.left-panel-top')
let leftPanelBottom = $('.left-panel-bottom')
scroll(leftMenu, leftPanelTop, leftPanelBottom, 333)



