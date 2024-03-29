document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault();
    let city = document.querySelector('input[name="city"]').value;
});

function fetchWeather(city) {

    let weatherResults = document.querySelector('.weatherResults')

    weatherResults.innerHTML = '';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=973de3d7528bfa46b68ee634ae3bd45b`)
    .then(response => response.json())
    .then(weather => {

        let location = document.querySelector('.location');
        location.innerHTML = `Results of <strong>${weather.name}, ${weather.sys.country}</strong>`

        let weatherIconCol = document.createElement('div');
        weatherIconCol.classList.add('col','d-flex','align-items-center','justify-content-center');
        let weatherIcon = document.createElement('img');
        weatherIcon.src = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`

        weatherIconCol.appendChild(weatherIcon);
        

        let temp = document.createElement('h1');
        temp.classList.add('d-inline')
        temp.textContent = `${Math.floor(weather.main.temp - 273.15)}°c`;
        weatherIconCol.appendChild(temp);
        weatherResults.appendChild(weatherIconCol);


        let desCol = document.createElement('div');
        desCol.classList.add('col');
        let desc = document.createElement('p');
        desc.innerHTML = `Pressure: ${weather.main.pressure} hpa <br> Humidity: ${weather.main.humidity}% <br> Wind: ${weather.wind.speed} m/s`;

        desCol.appendChild(desc);
        weatherResults.appendChild(desCol);

        let timestamp = new Date().toLocaleDateString(
            'en-US',{
                weekday: 'long',
                hour: 'numeric',
                minute: '2-digit'

            });
        
        const capitalizeWords = sentence => sentence.replace(/\b\w/g, char => char.toUpperCase());
        const sentence = weather.weather[0].description;
        const capitalizedSentence = capitalizeWords(sentence);
        
        let timeCol = document.createElement('div');
        timeCol.classList.add('col');
        let time = document.createElement('p');
        time.innerHTML = `<h3>Weather</h3>${timestamp}<br>${capitalizedSentence}`;

        timeCol.appendChild(time);
        weatherResults.appendChild(timeCol);
    });
}

function getWeather(e) {
    e.preventDefault();
    let city = e.target.elements.city.value;
    fetchWeather(city)
}

