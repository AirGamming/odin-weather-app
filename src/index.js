// api key from https://openweathermap.org/api
import { APIKey } from './config.js';
import styles from './style.css';


let key = APIKey();

let city = `London`;
let mesureSystem = `metric`;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${mesureSystem}&appid=${key}`;

fetch(url)
.then(response => response.json())
.then(data  => renderWeather(data))
.catch(err => {
    console.error(err, "check api key or city name");
    alert(`Error: ${err.message}`);
});

let weatherDiv = document.createElement(`div`);
weatherDiv.classList.add(`weather`);
document.body.appendChild(weatherDiv);
let spinner = document.createElement(`div`);
spinner.classList.add(`ring`);
weatherDiv.appendChild(spinner);
// let span = document.createElement(`span`);
// spinner.appendChild(span);

function renderWeather (data) {
    weatherDiv.innerHTML = ``;
        let city = document.createElement(`div`);
        city.classList.add(`city`);
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        weatherDiv.appendChild(city);
        let temp = document.createElement(`div`);
        temp.classList.add(`temp`);
        temp.innerHTML = `${Math.round(data.main.temp)}°C`;
        weatherDiv.appendChild(temp);
        let feelsLike = document.createElement(`div`);
        feelsLike.classList.add(`feels-like`);
        feelsLike.innerHTML = `Feels like ${Math.round(data.main.feels_like)}°C`;
        weatherDiv.appendChild(feelsLike);
        let humidity = document.createElement(`div`);
        humidity.classList.add(`humidity`);
        humidity.innerHTML = `Humidity ${data.main.humidity}%`;
        weatherDiv.appendChild(humidity);
        let wind = document.createElement(`div`);
        wind.classList.add(`wind`);
        wind.innerHTML = `Wind ${data.wind.speed} m/s`;
        weatherDiv.appendChild(wind);
        let weather = document.createElement(`div`);
        weather.classList.add(`weather`);
        weather.innerHTML = `${data.weather[0].description}`;
        weatherDiv.appendChild(weather);
        let icon = document.createElement(`img`);
        icon.classList.add(`weather-icon`);
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherDiv.appendChild(icon);
        let date = new Date(data.dt*1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let time = document.createElement(`div`);
        time.classList.add(`time`);
        time.innerHTML = `${hours}:${minutes}`;
        weatherDiv.appendChild(time);
}



