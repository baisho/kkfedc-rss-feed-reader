/*TODO:
- document ready event handler
- get data via getJSON
- use callback function to see data
*/

//Event listener to check if the DOM is loaded
$(document).ready(function () {
    getNews();

    $(document).on("click", ".news-container", function (myEvent) {
    });

});

function getNews() {
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20title%2Cdescription%2Clink%2CpubDate%2Cenclosure%20from%20rss%20where%20url%20%3D%20'https%3A%2F%2Fwww.motorsport.com%2Frss%2Ff1%2Fnews%2F'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?";

    $.getJSON(url, function (news) {
        var news_counter = 0;
        var number_of_columns = 3;
        //var rakke = $("<div>").addClass("row").appendTo("#content");
        //var carddeck = $("<div>").addClass("card-deck");

        $.each(news.query.results.item, function (index, oneNews) {
            var picture;
            if (oneNews.enclosure.url) {
                if (typeof oneNews.enclosure.url === "object") {
                    picture = ooneNews.enclosure.url[0];
                } else {
                    picture = oneNews.enclosure.url;
                }
            }

            if (index % number_of_columns === 0) {
               // rakke = $("<div>").addClass("row").appendTo("#content")

            }

            
            var card = $("<div>").addClass("card");

            var date = new Date(oneNews.pubDate).toLocaleString();

            $("<img>").attr("src", picture).addClass("card-img-top").appendTo(card);

            $("<div>").text(date).addClass("news-timeStamp").appendTo(card);

            var card_crop = $("<div>").addClass("card-body").appendTo(card);

            var s = oneNews.description;
            var t = s.substring(0, s.indexOf('...') + 3);

            $("<h5>").text(oneNews.title).appendTo(card_crop).addClass("card-title");
            $("<p>").text(t).appendTo(card_crop).addClass("card-text");
            $("<a target='_blank'>").text("Read whole article").addClass("btn btn-primary").attr("href", oneNews.link).appendTo(card_crop);
            $(card).appendTo(".card-deck");/*.css("display", "none");*/
            //$(card).appendTo("body").addClass("news-container");/*.css("display", "none");*/

        })
    });
}
/*<div class="card" style="width: 18rem;">
  <img class="card-img-top" src=".../100px180/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>*/
/*
<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src=".../100px200/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src=".../100px200/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src=".../100px200/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
*/