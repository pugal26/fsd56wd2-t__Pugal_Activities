// Print the following details name, capital, flag, using forEach function

const { count } = require('console');
const XHRHtmlRequest = require('xhr2');

const xhr = new XHRHtmlRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    
    countries.forEach(function (country) {
        console.log("Name: ", country.name.common);
        console.log("Capital: ", country.capital);
        console.log("Flag: ", country.flag);
        console.log("--------------------");
    });
}
