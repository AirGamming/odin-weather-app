// api key from https://openweathermap.org/api
import { config } from './config.js';
import { PopupConfig } from './popup/config.js';
import styles from './style.css';



let cfg = JSON.parse(config());

console.log(cfg);
let key = cfg.key;
let city = cfg.city;
let mesureSystem = cfg.mesureSystem;

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${mesureSystem}&appid=${key}`;

fetch(url)
.then(response => response.json())
.then(data  => renderWeather(data))
.catch(err => {
    console.log(`Error: ${err.message}`);
    let btn = document.createElement(`button`);
    btn.classList.add(`btn`);
    btn.innerHTML = `Config`;
    btn.style.padding = `10px`;
    btn.addEventListener(`click`, () => PopupConfig());
    document.body.appendChild(btn);
});

let main = document.createElement(`main`);
main.classList.add(`weather`);
document.body.appendChild(main);
let ring = document.createElement(`div`);
ring.classList.add(`ring`);
main.appendChild(ring);


function renderWeather (data) {
    main.innerHTML = ``;
    let container = document.createElement(`div`);
    container.classList.add(`container`);
    

        let city = document.createElement(`div`);
        city.classList.add(`city`);
        city.innerHTML = `${data.name}, ${data.sys.country}`;
       
        let temp = document.createElement(`div`);
        temp.classList.add(`temp`);
        if (mesureSystem === `metric`) {
            temp.innerHTML = `${Math.round(data.main.temp)}°C`;
        }else if (mesureSystem === `imperial`) {
            temp.innerHTML = `${Math.round(data.main.temp)}°F`;
        }
            
        let feelsLike = document.createElement(`div`);
        feelsLike.classList.add(`feels-like`);
        feelsLike.innerHTML = `Feels like ${Math.round(data.main.feels_like)}°C`;
        
        let humidity = document.createElement(`div`);
        humidity.classList.add(`humidity`);
        humidity.innerHTML = `Humidity ${data.main.humidity}%`;
       
        let wind = document.createElement(`div`);
        wind.classList.add(`wind`);
        wind.innerHTML = `Wind ${data.wind.speed} m/s`;
        
        let weather = document.createElement(`div`);
        weather.classList.add(`weather`);
        weather.innerHTML = `${data.weather[0].description}`;
        
        let icon = document.createElement(`img`);
        icon.classList.add(`weather-icon`);
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        
        let date = new Date(data.dt*1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let time = document.createElement(`div`);
        time.classList.add(`time`);
        time.innerHTML = `${hours}:${minutes}`;
        
        let btn = document.createElement(`button`);
        btn.classList.add(`btn`);
        btn.innerHTML = `Config`;
        btn.addEventListener(`click`, () => PopupConfig());
        [time, icon, weather, wind, humidity, feelsLike, temp, city, btn].forEach(el =>{
            el.classList.add(`info`)
        })
        main.appendChild(container);
        container.append(time, icon, weather, wind, humidity, feelsLike, temp, city,btn);
}



