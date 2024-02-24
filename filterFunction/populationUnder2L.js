// Get all the countries with a population of less than 2 lakhs using Filter function

const { count } = require('console');
const XHRHtmlRequest = require('xhr2');

const xhr = new XHRHtmlRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);

    let filteredCountries = countries.filter(country => country.population < 200000 );
    
    console.log(`The below list of countries are population under 2 lakhs:`);

    filteredCountries.forEach(country => {
        console.log(country.name.common);

    })  
}
