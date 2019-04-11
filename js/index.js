window.addEventListener("load", Init);

function Init() {
    console.log("Init");
    var apiKey = "ac4c1819fc814b4da5f6a7d81ecc1596";

    var category = ["sport", "entertainment", "science", "business", "technology"];

    var callbackFunction = [
        { news: sportNews },
        /*  { news: entertainmentNews },
          { news: scienceNews },
          { news: businessNews },
          { news: technologyNews }*/

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

/*function sportNews(news) {
    console.log("sportNews", news);
    var sport = document.querySelector("#sport");
    var a = document.createElement("a");
    a.innerText = news.articles[0].title;
    a.className = "sport_news";
    a.setAttribute("target", "_blank");
    a.setAttribute("href", news.articles[0].url);
    sport.appendChild(a);

    for (var i = 0; i < 4; i++) {
        a.innerText = news.articles[i].title;
        a.setAttribute("href", news.articles[i].url);
        a.setAttribute("target", "_blank");
        a.className = "sport_news";
        var p = document.createElement("p");
        var a = document.createElement("a");
        sport.appendChild(p);
        p.appendChild(a);
    }
}

function entertainmentNews(news) {
    console.log("entertainmentNews", news.articles);
    var entertainment = document.querySelector("#entertainment");
    var a = document.createElement("a");
    a.innerText = news.articles[1].title;
    a.className = "entertainment_news";
    a.setAttribute("target", "_blank");
    a.setAttribute("href", news.articles[1].url);
    entertainment.appendChild(a);

    for (var i = 0; i < 4; i++) {
        a.innerText = news.articles[i].title;
        a.setAttribute("href", news.articles[i].url);
        a.setAttribute("target", "_blank");
        a.className = "entertainment_news";
        var p = document.createElement("p");
        var a = document.createElement("a");
        entertainment.appendChild(p);
        p.appendChild(a);
    }
}

function scienceNews(news) {
    console.log("scienceNews", news.articles);
    var science = document.querySelector("#science");
    var a = document.createElement("a");
    a.innerText = news.articles[2].title;
    a.className = "science_news";
    a.setAttribute("target", "_blank");
    a.setAttribute("href", news.articles[2].url);
    science.appendChild(a);

    for (var i = 0; i < 4; i++) {
        a.innerText = news.articles[i].title;
        a.setAttribute("href", news.articles[i].url);
        a.setAttribute("target", "_blank");
        a.className = "science_news";
        var p = document.createElement("p");
        var a = document.createElement("a");
        science.appendChild(p);
        p.appendChild(a);
    }
}

function businessNews(news) {
    console.log("businessNews", news.articles);
    var business = document.querySelector("#business");
    var a = document.createElement("a");
    a.innerText = news.articles[3].title;
    a.className = "business_news";
    a.setAttribute("target", "_blank");
    a.setAttribute("href", news.articles[3].url);
    business.appendChild(a);

    for (var i = 0; i < 4; i++) {
        a.innerText = news.articles[i].title;
        a.setAttribute("href", news.articles[i].url);
        a.setAttribute("target", "_blank");
        a.className = "business_news";
        var p = document.createElement("p");
        var a = document.createElement("a");
        business.appendChild(p);
        p.appendChild(a);
    }
}*/

/*function technologyNews(news) {
    console.log("technologyNews", news.articles);
    var technology = document.querySelector("#technology");
    var a = document.createElement("a");
    a.innerText = news.articles[4].title;
    a.className = "technology_news";
    a.setAttribute("target", "_blank");
    a.setAttribute("href", news.articles[4].url);
    technology.appendChild(a);

    for (var i = 0; i < 4; i++) {
        a.innerText = news.articles[i].title;
        a.setAttribute("href", news.articles[i].url);
        a.setAttribute("target", "_blank");
        a.className = "technology_news";
        var p = document.createElement("p");
        var a = document.createElement("a");
        technology.appendChild(p);
        p.appendChild(a);
    }
}*/


function sportNews(news) {
    console.log("sportNews", news);
    var sportElem = document.querySelector("#sport");
    console.log(sportElem);

    for (var i = 0; i < 5; i++){
        
    }

        var h3 = document.createElement('h3');

    h3.className = "news_title";
    h3.innerHTML = news.articles[0].title;
    sportElem.appendChild(h3);

    var img = document.createElement('img');
    img.setAttribute("src", news.articles[0].urlToImage);
    img.setAttribute("alt", news.articles[0].title);
    h3.className = "news_img";
    sportElem.appendChild(img);

    var desc = document.createElement('p');
    desc.className = "news_description";
    desc.innerHTML = news.articles[0].description;
    sportElem.appendChild(desc);

    var author = document.createElement('span');
    author.className = "news_author";
    author.innerHTML = news.articles[0].author;
    sportElem.appendChild(author);

    var publishedAt = document.createElement('span');
    publishedAt.className = "news_publishedAt";
    publishedAt.innerHTML = news.articles[0].publishedAt;
    sportElem.appendChild(publishedAt);
}