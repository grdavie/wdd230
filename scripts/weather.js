import apiKeys from './apiKeys.js';

//select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = apiKeys.openWeatherMap;

const apiFetch = async () => {
    
    const latitude = 14.30;
    const longitude = 120.96;

    const apiUrl = `${url}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    
    try {
        const response = await fetch(apiUrl);

        if (response.ok) {
            const data = await response.json();
            //console.log(data); //testing
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F `;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `${desc} weather icon`);
    weatherIcon.setAttribute('height', 75);
    weatherIcon.setAttribute('width', 75)
    captionDesc.textContent = `- ${desc}`;
}

apiFetch();
