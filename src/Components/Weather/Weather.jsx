import React, { useState } from 'react'
import './Weather.css'

import search_icon from '../Assets/search.png'
import cloud_icon from '../Assets/cloud.png'
import humidity_icon from '../Assets/humidity.png'
import wind_icon from '../Assets/wind.png'
import clear_icon from '../Assets/clear.png'
import drizzle_icon from '../Assets/drizzle.png'
import snow_icon from '../Assets/snow.png'
import rain_icon from '../Assets/rain.png'

export const Weather = () => {

    let api_key = "e5b6d300cfd262e23410e8dbc494dbdc";
    const [weather_icon, setWeatherIcon] = useState(cloud_icon);

    const search = async () => {
        const element = document.getElementsByClassName('cityInput');
        if(element[0].value === "") return 0;

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
         let respone = await fetch(url);
         let data = await respone.json();

         const humidity = document.getElementsByClassName('humidity-percent');
         const windspeed = document.getElementsByClassName('wind-speed');
         const temperature = document.getElementsByClassName('weather-temp');
         const location = document.getElementsByClassName('weather-location');

         humidity[0].innerHTML = data.main.humidity + "%";
         windspeed[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
         temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
         location[0].innerHTML = data.name;

         if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n" )
         {
            setWeatherIcon(clear_icon);
         }
         else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n" )
         {
            setWeatherIcon(cloud_icon);
         }
         else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n" )
         {
            setWeatherIcon(drizzle_icon);
         }
         else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n" )
         {
            setWeatherIcon(drizzle_icon);
         }
         else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n" )
         {
            setWeatherIcon(rain_icon);
         }
         else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n" )
         {
            setWeatherIcon(rain_icon);
         }
         else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n" )
         {
            setWeatherIcon(snow_icon);
         }
         else
         {
            setWeatherIcon(clear_icon);
         }
    }

    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="search-icon">
                    <img src={search_icon} alt="" onClick={() => { search() }} />
                </div>
            </div>
            <div className="weather-image">
                <img src={weather_icon} alt="" />
            </div>
            <div className="weather-temp">24°C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img className='icon' src={humidity_icon} alt="" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img className='icon' src={wind_icon} alt="" />
                    <div className="data">
                        <div className="wind-speed">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}