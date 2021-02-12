import React, { Fragment, useState } from "react";
import { CityID, Units, DataType } from "../../enums";
import CityWeather from "../CityWeather";
import CityForecast from "../CityForecast";
import './styles.scss';

const WeatherContainer = () => {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [cityID, setCityID] = useState();
  const [displayForecast, setDisplayForecast] = useState(false);

	const getWeather = (cityID, units, dataType) => {
		const URL = `http://api.openweathermap.org/data/2.5/${dataType}?id=${cityID}&appid=538882fc8387290c6cee83f313a6acf5&units=${units}`
		return fetch(URL)
      .then(res => res.json())
			.then(response => {
        return response;
      })
			.catch(error => console.log(error));
	}

  const handleCitySelection = (e) => {
    const cityID = e.target.value;
    getWeather(cityID, Units.C, DataType.Weather)
      .then(response => {
        setWeather(response);
        setCityID(cityID);
        setDisplayForecast(false)
      });
  }

  const handleCityForecast = () => {
    getWeather(cityID, Units.C, DataType.Forecast)
      .then(response => {
        setForecast(response);
        setDisplayForecast(displayForecast => !displayForecast)
    });
  }

    return (
        <div className='weatherContainer'>
            <select name="citySelector" id="citySelector">
                <option value="DEFAULT" disabled selected>City</option>
                <option value={CityID.Toronto} onClick={handleCitySelection}>Toronto</option>
                <option value={CityID.Ottawa} onClick={handleCitySelection}>Ottawa</option>
                <option value={CityID.Tokyo} onClick={handleCitySelection}>Tokyo</option>
            </select>

            {cityID ? (
              <Fragment>
                <CityWeather weatherData={weather} />
                <button onClick={handleCityForecast}>See Forecast</button>
              </Fragment>
            ) : ''}

            {displayForecast ? (
              <Fragment>
                <CityForecast forecastData={forecast} />
              </Fragment>
            ) : ''}

        </div>
    );
};

export default WeatherContainer;