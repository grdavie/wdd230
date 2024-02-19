import apiKeys from './apiKeys.js';

//select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const forecastLine = document.querySelector('#forecast-line');

const url = 'https://api.openweathermap.org/data/2.5/';
const apiKey = apiKeys.openWeatherMap;

//For today's weather
const apiFetch = async () => {
    
    //Ipswich QLD
    const latitude = -27.62;
    const longitude = 152.76;
   

    const apiUrl = `${url}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    const fApiUrl = `${url}forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    
    try {
        const response = await fetch(apiUrl);
        const fResponse = await fetch(fApiUrl);

        if (response.ok) {
            const data = await response.json();
            const fData = await fResponse.json();
            console.log(fData);
            console.log(data); //testing
            displayResults(data);
            displayForecast(fData.list);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;F `;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `${desc} weather icon`);
    weatherIcon.setAttribute('height', 44);
    weatherIcon.setAttribute('width', 44)
    captionDesc.textContent = ` ${desc} `;
}

function displayForecast(list) {

    const indices = [7,12,19]; //next 3-days at 00:00:00 timestamp
    indices.forEach((index) => {

        const i = list[index];

        //create elements inside forecastline
        let lineItem = document.createElement('span');
        let day = document.createElement('span');
        day.classList.add('fDay');
        let icon = document.createElement('img');
        let temp = document.createElement('span');
        let fDesc = document.createElement('span');

        //day element
        let date = i.dt_txt;
        let dateTime = new Date(date);
        let dayOfWeek = dateTime.toLocaleDateString('en-US', { weekday: 'short' });
        day.textContent = `${dayOfWeek} `;

        //fDesc
        let fDescMsg = i.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        fDesc.textContent = `- ${fDescMsg}`;
   
        //icon
        const iSrc = `https://openweathermap.org/img/w/${i.weather[0].icon}.png`;
        icon.setAttribute('src', iSrc);
        icon.setAttribute('alt', `${fDescMsg} weather icon`);
        icon.setAttribute('height', 44);
        icon.setAttribute('width', 44);

        //temp
        let tempMsg = i.main.temp;
        temp.innerHTML = ` ${tempMsg} &deg;F `;

        //append to lineItem
        lineItem.appendChild(day);
        lineItem.appendChild(icon);
        lineItem.appendChild(temp);
        if (index !== 19) {
            lineItem.appendChild(fDesc);
            let bar = document.createElement('span');
            bar.textContent = " | ";
            bar.classList.add('bar');
            lineItem.appendChild(bar);
        } else {
            lineItem.appendChild(fDesc);
        }
        
        //apend to line
        forecastLine.appendChild(lineItem);

    });
   

}

apiFetch();
