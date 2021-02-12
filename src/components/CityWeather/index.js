import React from "react";

const CityWeather = (weatherData) => {
    let weatherMain, weatherDescription, weatherTemp, weatherWind;

    if (weatherData.weatherData.weather) {
        const weather = weatherData.weatherData
        weatherMain = weather.weather[0].main;
        weatherDescription = weather.weather[0].description;
        weatherTemp = weather.main.temp;
        weatherWind = weather.wind.speed;
    }

    return (
        <div>
           <h2>{weatherMain}</h2>
           <h3>{weatherDescription}</h3>
           <br/>
           <h2>{`${weatherTemp} \xB0C`}</h2>
           <h3>{`Wind ${weatherWind} m/sec`}</h3>
        </div>
    );
};

export default CityWeather;