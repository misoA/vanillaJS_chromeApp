const jsWeather = document.querySelector('.js-weather');
const jsIcon = document.querySelector('#icon');

const COORDS = 'coords';
const API_KEY = 'e8c39c5bee66614caae34ca4d66ad016';
const ICON_URL = 'http://openweathermap.org/img/wn/';

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(response => {
      return response.json();
    })
    .then(json => {
      const temp = json.main.temp;
      const place = json.name;
      const country = json.sys.country;
      const weather = json.weather[0].main;
      const icon = json.weather[0].icon;

      jsIcon.src = `${ICON_URL}${icon}.png`;
      jsWeather.innerText = `${weather} ${temp}ºC @${place} ${country}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
