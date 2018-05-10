import axios from 'axios';

const API_KEY = 'b5d301f898941bc17b9b130772a6defa';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}