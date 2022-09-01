const getWeatherApi = (input) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&lang=ru&appid=38f11c7a940e7ac38b4a4faac76f26d7`)
    .then(resp => resp.json())
}

export default getWeatherApi