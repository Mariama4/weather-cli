import chalk from "chalk";
import dedent from "dedent-js";
import {getIcon} from './api.service.js'


const printError = (error) => {
  console.log(`${chalk.bgRed(" ERROR ")} ${error}`);
};

const printSuccess = (message) => {
  console.log(`${chalk.bgGreen(" SUCCESS ")} ${message}`);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HELP: ")}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена`
  );
};

const printWeather = ({name, weather, main, wind}) => {
  const cityWeather = weather[0];
  const icon = cityWeather.icon.match(/(\d)\w/g);
  console.log(
    dedent`${chalk.bgMagenta(" WEATHER ")} ~ ${name} ~ 
    Погода: ${cityWeather.description} ${getIcon(icon)}
    Температура: ${main.temp} °C ~ по ощущениям: ${main.feels_like} °C 🌡️ 
    Влажность: ${main.humidity} % 💦 
    Ветер: ${wind.speed} м/с 💨 `
  );
};

export { printSuccess, printError, printHelp, printWeather };
