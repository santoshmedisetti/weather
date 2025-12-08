export const getWeatherBycity = async (city) => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "City not found");
  }

  return res.json();
};

export const getForecastByCity = async (city) => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Forecast not found");
  }

  return res.json();
};
