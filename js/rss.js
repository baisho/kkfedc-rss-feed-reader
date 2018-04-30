/*TODO:
- document ready event handler
- get data via getJSON
- use callback function to see data
*/

$(document).ready(function(){
    getNews();
});

function getNews () {
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20title%2Cdescription%2Clink%20from%20rss%20where%20url%20%3D%20%27https%3A%2F%2Fwww.autosport.com%2Frss%2Ffeed%2Ff1%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?";

    $.getJSON(url, function(news){
        console.log(news);
        $.each(news.query.results.item, function(index, oneNews){
            var newsElement = $("<div>");
            $("<h2>").text(oneNews.title).appendTo(newsElement);
            $("<p2>").text(oneNews.description).appendTo(newsElement);
            $(newsElement).appendTo("body");
            //console.log(newsElement);
        })
    });
}