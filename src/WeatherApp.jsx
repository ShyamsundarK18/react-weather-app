import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    temp: 35.06,
    tempMin: 35.06,
    tempMax: 35.06,
    humidity: 53,
    feelsLike: 42.04,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
    // console.log(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App </h1>

      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
