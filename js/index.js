window.addEventListener("load", Init);

function Init() {
    console.log("Init");
    var apiKey = "ac4c1819fc814b4da5f6a7d81ecc1596";

    var category = ["sport", "entertainment", "science", "business", "technology"];

    var callbackFunction = [
        { news: sportNews },
        { news: entertainmentNews },
        { news: scienceNews },
        { news: businessNews },
        { news: technologyNews }
    
    ];
      
    callbackFunction[0].news;
    
   /* var urlSport = "https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
    var urlEntertainment = "https://newsapi.org/v2/top-headlines?country=au&category=entertainment&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
    var urlScience = "https://newsapi.org/v2/top-headlines?country=au&category=science&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
    var urlBusiness = "https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
    var urlTechnology = "https://newsapi.org/v2/top-headlines?country=au&category=technology&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
   
    Request(urlSport, sportNews);
    Request(urlEntertainment, entertainmentNews);
    Request(urlScience, scienceNews);
    Request(urlBusiness, businessNews);
    Request(urlTechnology, technologyNews);
*/

for (var i = 0; i < category.length; i++)
//console.log(category[i]+"News");
Request(category[i], apiKey, callbackFunction[i].news);

}

function Request(category, apiKey, callback) {
    
var url = `https://newsapi.org/v2/top-headlines?country=au&category=${category}&apiKey=${apiKey}`;

var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            var errStatus = xhr.status;
            var errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        } else {
            var data = JSON.parse(xhr.responseText);
           // console.log(data);  
            callback(data);
        }
    };
}

function sportNews(news) {
    console.log("sportNews", news);
}

function entertainmentNews(news) {
    console.log("entertainmentNews", news);
}

function scienceNews(news) {
    console.log("scienceNews", news);
}

function businessNews(news) {
    console.log("businessNews", news);
}

function technologyNews(news) {
    console.log("technologyNews", news);
}

