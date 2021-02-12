import React, { useState, useEffect } from "react";
import { CityID } from "../../enums";
import CityWeather from "../CityWeather"
import CityForecast from "../CityForecast"

const WeatherContainer = () => {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [cityID, setCityID] = useState();

	const getWeather = (cityID) => {
		const URL = `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=538882fc8387290c6cee83f313a6acf5 `
		fetch(URL)
      .then(res => res.json())
			.then(response => {
        setWeather(response);
        setCityID(cityID);
      })
			.catch(error => console.log(error));
	}

	const getForecast = (cityID) => {
		const URL = `http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=538882fc8387290c6cee83f313a6acf5`
		fetch(URL)
      .then(res => res.json())
			.then(response => {
        setForecast(response);
      })
			.catch(error => console.log(error));
	}

  const handleCitySelection = async (e) => {
			const cityID = e.target.value;
			getWeather(cityID);
  }

  const handleCityForecast = async () => {
			getForecast(cityID);
  }

    return (
        <div>
            <select name="citySelector" id="citySelector">
                <option value="DEFAULT" disabled selected>City</option>
                <option value={CityID.Toronto} onClick={handleCitySelection}>Toronto</option>
                <option value={CityID.Ottawa} onClick={handleCitySelection}>Ottawa</option>
                <option value={CityID.Tokyo} onClick={handleCitySelection}>Tokyo</option>
            </select>

						<CityWeather weatherData={weather} />
						{cityID ? <button onClick={handleCityForecast}>See Forecast</button> : ''}
						<CityForecast forecastData={forecast} />
        </div>
    );
};

export default WeatherContainer;