import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import './styles.scss';
import { groupBy } from 'lodash';

const CityForecast = (forecastData) => {
    // helper to get day
    const forecastDay = item => new Date(item.dt*1000).getDate();
    const dataList = forecastData.forecastData.list;
    const dayGroupedDataList = groupBy(dataList, forecastDay);
    const [currentDayForecast, setCurrentDayForecast] = useState(dayGroupedDataList[Object.keys(dayGroupedDataList)[0]]);

    const paginationSize = 6;

    const handleDayForecast = (day) => {
        setCurrentDayForecast(dayGroupedDataList[day])
    }

    let items = [];
    for (let number = 0; number < paginationSize; number++) {
        const forecastDay = Object.keys(dayGroupedDataList)[number];
        items.push(
            <Pagination.Item key={number} onClick={() => handleDayForecast(forecastDay)}>
                {forecastDay}
            </Pagination.Item>,
        );
    }

    return (
        <div className='forecastTable'>
            <Table striped="true" bordered="true" hover="true" >
                <thead>
                    <tr>
                        <th colSpan="2">Date</th>
                        <th>Temp</th>
                        <th>Min Temp</th>
                        <th>Max Temp</th>
                        <th>Wind</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {currentDayForecast.map((forecastField, index) => (
                        <tr key={index}>
                            <td colSpan="2">{forecastField.dt_txt}</td>
                            <td>{`${forecastField.main.temp} \xB0C`}</td>
                            <td>{`${forecastField.main.temp_min} \xB0C`}</td>
                            <td>{`${forecastField.main.temp_max} \xB0C`}</td>
                            <td>{`${forecastField.wind.speed}  m/sec`}</td>
                            <td>{forecastField.weather[0].description}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination size="lg">{items}</Pagination>
        </div>
    );
};

export default CityForecast;