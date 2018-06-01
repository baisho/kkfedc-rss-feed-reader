$(document).ready(function () {
  getNews();
});

function getNews() {
  var url = "https://query.yahooapis.com/v1/public/yql?q=select%20title%2Cdescription%2Clink%2CpubDate%2Cenclosure%20from%20rss%20where%20url%20%3D%20'https%3A%2F%2Fwww.motorsport.com%2Frss%2Ff1%2Fnews%2F'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?";

  $.getJSON(url, function (news) {

    $.each(news.query.results.item, function (index, oneNews) {
      var picture;
      if (oneNews.enclosure.url) {
        if (typeof oneNews.enclosure.url === "object") {
          picture = ooneNews.enclosure.url[0];
        } else {
          picture = oneNews.enclosure.url;
        }
      }

      var card = $("<div>").addClass("card");
      var date = new Date(oneNews.pubDate).toLocaleString();
      $("<img>").attr("src", picture).addClass("card-img-top").appendTo(card);
      $("<div>").text(date).addClass("news-timeStamp").appendTo(card);
      var card_crop = $("<div>").addClass("card-body").appendTo(card);
      var myString = oneNews.description;
      var myText = myString.substring(0, myString.indexOf(" ", 245)) + "...";
      $("<div>").text(oneNews.title).appendTo(card_crop).addClass("card-title");
      $("<p>").text(myText).appendTo(card_crop).addClass("card-text");
      $("<a target='_blank'>").text("Read whole article").addClass("btn btn-primary").attr("href", oneNews.link).appendTo(card_crop);
      $(card).appendTo(".card-deck");
    })
  });
}