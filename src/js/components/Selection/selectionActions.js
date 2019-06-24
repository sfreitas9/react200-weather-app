import axios from 'axios';

export function getWeather(searches, city) {
  const i = searches.findIndex(search => (search.weather && search.weather.name === city));
  // TODO:  If found a city, make sure date is within past hour
  // if older data, remove from searches and get fresh data

  if (i !== -1) {
    return {
      type: 'GET_WEATHER_ALREADY_HAVE',
      payload: i
    };
  }
  return {
    type: 'GET_WEATHER',
    payload: axios.get(`/weather/${city}`)
  };
}

export function setCity(city) {
  return {
    type: 'SET_CITY',
    payload: { city }
  };
}
