import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";

const getIcon = (icon) => {
  const iconList = {
    "01": "☀️",
    "02": "🌤️",
    "03": "☁️",
    "04": "☁️",
    "09": "🌦️",
    "10": "🌧️",
    "11": "⛈️",
    "13": "❄️",
    "50": "🌫️",
  };
  return iconList[icon]
}
const getWeather = async (city) => {
  const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error(
      "Не задан ключ API, задайте его через команду -t [API_KEY]"
    );
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );
  return data;
};

export { getWeather, getIcon };
