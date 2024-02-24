// Get all the countries from Asia continent /region using Filter function

const { count } = require('console');
const XHRHtmlRequest = require('xhr2');

const xhr = new XHRHtmlRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);

    let filteredCountries = countries.filter(country => country.region === 'Asia');
    
    console.log(`The below countries are in Asia Region:`);

    filteredCountries.forEach(country => {
        console.log(country.name.common);
    })  
}
