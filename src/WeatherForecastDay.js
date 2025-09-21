export default function WeatherForecastDay({ data }) {
  console.log(data);
  const date = new Date(data.dt * 1000);
  const dayOfWeek = date.toDateString();
  return (
    <div className="WeatherForecastDay">
      <div className="forecastDayofWeek">{dayOfWeek}</div>
      <div className="forecastIcon">
        <img
          src={
            data.weather?.[0]?.icon
              ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
              : "/placeholder.png"
          }
          alt={data.weather?.[0]?.description || "Немає даних"}
        />
      </div>
      <div className="forecastTemp">
        <span className="forecastTempMax">
          {Math.round(data.main?.temp_max)}°
        </span>{" "}
        |{" "}
        <span className="forecastTempMin">
          {Math.round(data.main?.temp_min)}°
        </span>{" "}
      </div>
    </div>
  );
}
