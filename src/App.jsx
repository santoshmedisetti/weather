import { useState } from "react";
import { getWeatherBycity, getForecastByCity } from "./services/weather";
import "./App.css";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const w = await getWeatherBycity(city);
      const f = await getForecastByCity(city);

      setWeather(w);
      setForecast(f);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast(null);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && <CurrentWeather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
