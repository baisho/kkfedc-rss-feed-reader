/*TODO:
- document ready event handler
- get data via getJSON
- use callback function to see data
*/

//Event listener to check if the DOM is loaded
$(document).ready(function () {
    getNews();

    $(document).on("click", ".news-container", function(myEvent){
        $(this).toggleClass("invisible");
    });

});

function getNews() {
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20title%2Cdescription%2Clink%2CpubDate%2Cenclosure%20from%20rss%20where%20url%20%3D%20'https%3A%2F%2Fwww.motorsport.com%2Frss%2Ff1%2Fnews%2F'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?";

    $.getJSON(url, function (news) {
        $.each(news.query.results.item, function (index, oneNews) {
            var picture;
            if (oneNews.enclosure.url){
                if (typeof oneNews.enclosure.url === "object") {
                    picture = ooneNews.enclosure.url[0];
                } else {
                    picture = oneNews.enclosure.url;
                }
            }
                

            var newsElement = $("<div>");
            var date = new Date(oneNews.pubDate).toLocaleString();

            $("<div>").text(date).addClass("news-timeStamp").appendTo(newsElement);

            var content = $("<div>").addClass("news-content").appendTo(newsElement);

            var s = oneNews.description;
            var t = s.substring(0, s.indexOf('.')+1);


            $("<h2>").text(oneNews.title).appendTo(content).css("font-family", "Helvetica, Arial, sans-serif");
            $("<p2>").text(t).appendTo(content).addClass("newsText");
            $("<img>").attr("src", picture).appendTo(content);
            $("<div>").html("<a href='" + oneNews.link + "' target='_blank'>Read whole article &gt;&gt;&gt;</a>").addClass("news-link").appendTo(content);
            $(newsElement).appendTo("body").addClass("news-container invisible");/*.css("display", "none");*/
            $("invisible newsText").slideDown(500);
        })
    });
}