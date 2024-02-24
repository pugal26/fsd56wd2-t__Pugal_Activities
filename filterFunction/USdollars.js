// Print the country that uses US dollars as currency.

const { count } = require('console');
const XHRHtmlRequest = require('xhr2');

const xhr = new XHRHtmlRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);

    console.log(`The below countries that uses USD dollar as currencies:`)

    console.log(countries.filter(country => {
        let currencies;
        if (country.currencies) {
            currencies = Object.keys(country.currencies);
            return currencies.includes('USD');
        }        
    }).map(country => country.name.common).join('\n'));
}
