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


    for (var i = 0; i < category.length; i++){

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
            
            callback(data);
        }
    }
}



function sportNews(news) {
    console.log("sportNews", news.articles);
    var sportElem = document.querySelector("#sport");
    console.log(sportElem);

    for (var i = 0; i < 5; i++) {

        var h3 = document.createElement('h3');
        h3.className = "news_title";
        h3.innerHTML = news.articles[i].title;
        sportElem.appendChild(h3);

        var img = document.createElement('img');
        img.setAttribute("src", news.articles[i].urlToImage);
        img.setAttribute("alt", news.articles[i].title);
        img.className = "news_img";
        sportElem.appendChild(img);

        var desc = document.createElement('p');
        desc.className = "news_description";
        desc.innerHTML = news.articles[i].description;
        sportElem.appendChild(desc);

        var author = document.createElement('span');
        author.className = "news_author";
        author.innerHTML = news.articles[i].author;
        sportElem.appendChild(author);

        var publishedAt = document.createElement('span');
        publishedAt.className = "news_publishedAt";
        publishedAt.innerHTML = news.articles[i].publishedAt;
        sportElem.appendChild(publishedAt);
    }
}

function entertainmentNews(news) {
    console.log("entertainmentNews", news.articles);
    var entertainmentElem = document.querySelector("#entertainment");
    console.log(entertainmentElem);

    for (var i = 0; i < 5; i++) {

        var h3 = document.createElement('h3');
        h3.className = "news_title";
        h3.innerHTML = news.articles[i].title;
        entertainmentElem.appendChild(h3);

        var img = document.createElement('img');
        img.setAttribute("src", news.articles[i].urlToImage);
        img.setAttribute("alt", news.articles[i].title);
        img.className = "news_img";
        entertainmentElem.appendChild(img);

        var desc = document.createElement('p');
        desc.className = "news_description";
        desc.innerHTML = news.articles[i].description;
        entertainmentElem.appendChild(desc);

        var author = document.createElement('span');
        author.className = "news_author";
        author.innerHTML = news.articles[i].author;
        entertainmentElem.appendChild(author);

        var publishedAt = document.createElement('span');
        publishedAt.className = "news_publishedAt";
        publishedAt.innerHTML = news.articles[i].publishedAt;
        entertainmentElem.appendChild(publishedAt);
    }
}

function scienceNews(news) {
    console.log("scienceNews", news.articles);

    var scienceElem = document.querySelector("#science");
    console.log(scienceElem);

    for (var i = 0; i < 5; i++) {

        var h3 = document.createElement('h3');
        h3.className = "news_title";
        h3.innerHTML = news.articles[i].title;
        scienceElem.appendChild(h3);

        var img = document.createElement('img');
        img.setAttribute("src", news.articles[i].urlToImage);
        img.setAttribute("alt", news.articles[i].title);
        img.className = "news_img";
        scienceElem.appendChild(img);

        var desc = document.createElement('p');
        desc.className = "news_description";
        desc.innerHTML = news.articles[i].description;
        scienceElem.appendChild(desc);

        var author = document.createElement('span');
        author.className = "news_author";
        author.innerHTML = news.articles[i].author;
        scienceElem.appendChild(author);

        var publishedAt = document.createElement('span');
        publishedAt.className = "news_publishedAt";
        publishedAt.innerHTML = news.articles[i].publishedAt;
        scienceElem.appendChild(publishedAt);
    }
}

function businessNews(news) {
    console.log("businessNews", news.articles);

    var businessElem = document.querySelector("#business");
    console.log(businessElem);

    for (var i = 0; i < 5; i++) {

        var h3 = document.createElement('h3');
        h3.className = "news_title";
        h3.innerHTML = news.articles[i].title;
        businessElem.appendChild(h3);

        var img = document.createElement('img');
        img.setAttribute("src", news.articles[i].urlToImage);
        img.setAttribute("alt", news.articles[i].title);
        img.className = "news_img";
        businessElem.appendChild(img);

        var desc = document.createElement('p');
        desc.className = "news_description";
        desc.innerHTML = news.articles[i].description;
        businessElem.appendChild(desc);

        var author = document.createElement('span');
        author.className = "news_author";
        author.innerHTML = news.articles[i].author;
        businessElem.appendChild(author);

        var publishedAt = document.createElement('span');
        publishedAt.className = "news_publishedAt";
        publishedAt.innerHTML = news.articles[i].publishedAt;
        businessElem.appendChild(publishedAt);
    }
}

function technologyNews(news) {
    console.log("technologyNews", news.articles);

    var technologyElem = document.querySelector("#technology");
    console.log(technologyElem);

    for (var i = 0; i < 5; i++) {

        var h3 = document.createElement('h3');
        h3.className = "news_title";
        h3.innerHTML = news.articles[i].title;
        technologyElem.appendChild(h3);

        var img = document.createElement('img');
        img.setAttribute("src", news.articles[i].urlToImage);
        img.setAttribute("alt", news.articles[i].title);
        img.className = "news_img";
        technologyElem.appendChild(img);

        var desc = document.createElement('p');
        desc.className = "news_description";
        desc.innerHTML = news.articles[i].description;
        technologyElem.appendChild(desc);

        var author = document.createElement('span');
        author.className = "news_author";
        author.innerHTML = news.articles[i].author;
        technologyElem.appendChild(author);

        var publishedAt = document.createElement('span');
        publishedAt.className = "news_publishedAt";
        publishedAt.innerHTML = news.articles[i].publishedAt;
        technologyElem.appendChild(publishedAt);
    }
}
}