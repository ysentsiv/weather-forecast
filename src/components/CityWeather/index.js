import React, { useState, useEffect } from "react";

const CityWeather = (weatherData) => {
    let weatherMain, weatherDescription;

    if (weatherData.weatherData.weather) {
        let weather = weatherData.weatherData.weather[0];
        weatherMain = weather.main;
        weatherDescription = weather.description;
    }

    return (
        <div>
           <h2>{weatherMain}</h2>
           <h3>{weatherDescription}</h3>
        </div>
    );
};

export default CityWeather;