//Print the total population of countries using reduce function

const { count } = require('console');
const XHRHtmlRequest = require('xhr2');

const xhr = new XHRHtmlRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);

    let sumPopulation = countries.reduce(function (accumulator, country) {
        if (country.population) {
            return accumulator + country.population;
        } else {
            return accumulator;
        }
    }, 0);
    let totalPopulation = sumPopulation.toLocaleString();

    console.log("Total Population: ", totalPopulation);
}