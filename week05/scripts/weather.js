//select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '4910081b5cc7a71e992363ff81226807';

const apiFetch = async () => {
    
    const latitude = 49.75;
    const longitude = 6.64;

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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `${desc} weather icon`);
    captionDesc.textContent = `${desc}`;
}

apiFetch();
