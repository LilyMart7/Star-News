window.addEventListener("load", Init);

function Init() {
    console.log("Init");
    var urlSport = "https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
    var urlEntertainment = "https://newsapi.org/v2/top-headlines?country=au&category=entertainment&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
    var urlScience = "https://newsapi.org/v2/top-headlines?country=au&category=science&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
    var urlBusiness = "https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
    var urlTechnology = "https://newsapi.org/v2/top-headlines?country=au&category=technology&apiKey=ac4c1819fc814b4da5f6a7d81ecc1596";
    Request(urlSport, sportNews);
    Request(urlEntertainment, entertainmentNews);
    Request(urlScience, scienceNews);
    Request(urlBusiness, businessNews);
    Request(urlTechnology, technologyNews);



}

function Request(url, callback) {
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
    };
}

function sportNews(news) {
    console.log(news);
}


function entertainmentNews(news) {
    console.log(news);
}

function scienceNews(news) {
    console.log(news);
}

function businessNews(news) {
    console.log(news);
}

function technologyNews(news) {
    console.log(news);
}

