import axios from "axios";

const getUrl = (lat,long) => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m`
}

const getCountryWeather = ( { lat, long } ) => {
    const request = axios.get(getUrl(lat,long));
    return request.then(response => response.data);
}


export default {
    getCountryWeather
}