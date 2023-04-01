// _________________________________________________________________________________________ searchArticle.js
let searchBtn = $('.search-btn')
let contentText = $(".content-text")

/*
function declOfNum(number, words) {
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}


searchBtn && searchBtn.on('click', () => {
  $('.section').toggleClass('search')
  if ($('.section').attr('class').includes('search')) {
    searchBtn.html("<svg width=\"81\" height=\"112\" viewBox=\"0 0 81 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
      "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M79.3067 16.0474C80.2674 16.9795 80.2907 18.5139 79.3586 19.4746L5.68406 95.4148C4.75198 96.3755 3.21756 96.3988 2.25683 95.4667C1.29609 94.5346 1.27286 93.0002 2.20493 92.0395L75.8795 16.0993C76.8115 15.1386 78.3459 15.1153 79.3067 16.0474Z\" fill=\"white\"/>\n" +
      "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.25972 16.0474C1.29899 16.9795 1.27575 18.5139 2.20782 19.4746L75.8824 95.4148C76.8144 96.3755 78.3488 96.3988 79.3096 95.4667C80.2703 94.5346 80.2935 93.0002 79.3615 92.0395L5.68695 16.0993C4.75488 15.1386 3.22046 15.1153 2.25972 16.0474Z\" fill=\"white\"/>\n" +
      "</svg>\n")
  } else {
    searchBtn.html("<svg width=\"78\" height=\"77\" viewBox=\"0 0 78 77\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
      "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32.7973 5.04574C17.4706 5.04574 5.04574 17.4706 5.04574 32.7973C5.04574 48.1241 17.4706 60.5489 32.7973 60.5489C48.1241 60.5489 60.5489 48.1241 60.5489 32.7973C60.5489 17.4706 48.1241 5.04574 32.7973 5.04574ZM0 32.7973C0 14.6839 14.6839 0 32.7973 0C50.9108 0 65.5947 14.6839 65.5947 32.7973C65.5947 40.946 62.623 48.4005 57.7042 54.1363L76.7103 72.3273C77.6956 73.3126 77.6956 74.91 76.7103 75.8952C75.7251 76.8805 74.1277 76.8805 73.1424 75.8952L54.1363 57.7042C48.4005 62.623 40.946 65.5947 32.7973 65.5947C14.6839 65.5947 0 50.9108 0 32.7973Z\" fill=\"white\"/>\n" +
      "</svg>\n")
  }
  contentText.unmark();
  $("#term").val('')
  $("p.results").hide().empty();
});


contentText && $(function () {
  var mark = function () {
    var keyword = $("#term").val();
    $("p.results").hide().empty();
    var options = {};
    contentText.unmark({
      done: function () {
        contentText.mark(keyword, {
          done: function (count) {
            if (count == 0) {
              $("p.results").fadeIn().append("Ничего не найдено");
            } else {
              $("p.results").fadeIn().append('Hайдено: ' + count + ` ${declOfNum(count, ['совпадение', 'совпадения', 'совпадений'])}.`);
            }
          }
        });
      }
    });
  };
  $(".search-click").on("click", mark);
});


var $write = $('#term').length && $('#term')

$write && $('#keyboard .letter').click(function () {

  var $this = $(this),
    character = $this.html();


  if ($this.hasClass('delete')) {
    var html = $write.val();
    $("p.results").hide().empty();
    contentText.unmark();
    $write.val(html.substr(0, html.length - 1));
    return false;
  }

  $("p.results").hide().empty();
  contentText.unmark();

  if ($this.hasClass('spacing')) character = ' ';

  $write.val($write.val() + character);
});
*/
