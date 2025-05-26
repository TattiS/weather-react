import axios from "axios";

export const getWeatherInfo = async (city) => {
  const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=94956a6t30408d368ba43fo402f5e07a`;
  const info = {};
  try {
    const response = await axios.get(url);
    if (response.data.message) {
      info.city = response.data.message;
      return info;
    }
    info.city = city;
    info.temperature = Math.round(response.data.temperature.current);
    info.description = response.data.condition.description;
    info.humidity = response.data.temperature.humidity;
    info.wind = response.data.wind.speed;
    info.icon = response.data.condition.icon_url;
  } catch (error) {
    console.error(error);
  }

  return info;
};
