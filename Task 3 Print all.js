let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText);

    for (let data of countries){
        console.log("Country Name:", data.name['common']);
        console.log("Region:", data.region);
        console.log("Subregion:", data.subregion);
        console.log("Population:", data.population);

    }
}