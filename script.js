async function getCountries() {
  let response = await fetch('https://restcountries.com/v3.1/all')
  let countries = await response.json();
  return countries;
}

async function loadCountries() {
  let countries = await getCountries();

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('container-fluid')
  const row = document.createElement('div');
  row.classList.add('row');
  row.setAttribute('id','countries');


  mainContainer.appendChild(row);
  document.body.appendChild(mainContainer);
  
  //get the countries container
  let countriesContainer = document.getElementById('countries');

  countries.forEach(country => {
      // create a div element
      const card = document.createElement('div');
      // classes col-lg-4 col-ms-6 col-sm-12
      card.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');

      // populate the content of the card
      const cardInner = document.createElement('div');
      cardInner.classList.add('card','mb-3','mt-3');

      const cardHeader = document.createElement('div');
      cardHeader.classList.add('card-header','bg-dark');

      let countryName = country.name.common;
      let capital = country.capital;
      let region = country.region;
      let countryCode = country.cca2;
      let flag = country.flags.png;

      cardHeader.textContent = countryName;

      
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      cardBody.classList.add('d-flex','flex-column','align-items-center');

      // append an image
      const img = document.createElement('img');
      img.src = flag;
      img.alt = countryName;
      img.classList.add('m-3', 'text-center');

      // append a para
      const p = document.createElement('p');
      p.innerHTML = `Capital: ${capital}<br>
      Region: ${region}<br>
      Country Code: ${countryCode}`;
      p.classList.add('text-center');

      // append a button
      const btn = document.createElement('button');
      btn.textContent = 'Click for Weather';
      btn.classList.add('btn','btn-primary');



      const weatherInfo = document.createElement('p');
      weatherInfo.classList.add('text-center','mt-3','d-none', 'weather-info');

      btn.addEventListener('click', async (e) => {
        toggleWeather(country,e, weatherInfo);
    });

      cardBody.append(img,p,btn,weatherInfo);

      // append the card to the container
      cardInner.append(cardHeader,cardBody);
      card.append(cardInner);

      countriesContainer.append(card);

  })
}

loadCountries();

async function toggleWeather(country, e, weatherInfo) {
  let [lat,lon] = country.latlng;

  weatherInfo.classList.remove('d-none');
  e.target.classList.add('d-none');

  let weather = await getWeather(lat, lon);

  weatherInfo.textContent = `Weather: ${weather.weather[0].description}`;
}

async function getWeather(lat, lon) {
  let apiKey = '973de3d7528bfa46b68ee634ae3bd45b';
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  let response = await fetch(url);
  let weather = await response.json();

  return weather;
}