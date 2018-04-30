/*TODO:
- document ready event handler
- get data via getJSON
- use callback function to see data
*/

$(document).ready(function(){
    getNews();
});

function getNews () {
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%20from%20rss%20where%20url%20%3D%20'https%3A%2F%2Fwww.autosport.com%2Frss%2Ffeed%2Ff1'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?";

    $.getJSON(url, function(news){
        console.log(news);
    });
}