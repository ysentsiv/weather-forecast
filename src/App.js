import './stylesheet/App.css';
import WeatherContainer from './components/weatherContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather Forecast</h2>
      </header>
      <WeatherContainer />
    </div>
  );
}

export default App;