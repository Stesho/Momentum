const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const error = document.querySelector('.weather-error');
const city = document.querySelector('.city');

window.addEventListener('load', () => {
  city.value = 'Minsk';
  getCity();
  getWeather();
});

city.addEventListener('change', inputCity);

function setCity() {
  localStorage.setItem('city', city.value);
}

function getCity() {
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}

function inputCity() {
  setCity();
  if(city.value === '') {
    reset();
    error.textContent = "Error! Nothing to geocode for ''!";
  }
  else {
    getWeather();
  }
}

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=8d410c4d25751a2ffc588b6019d83a8b&units=metric`;
  const res = await fetch(url); 
  if(res.ok) {
    const data = await res.json();
    error.textContent = '';
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.trunc(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.trunc(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
  }
  else {
    reset();
    error.textContent = `Error! city not found for '${city.value}'!`;  
  }
}

function reset() {
  weatherIcon.className = 'weather-icon owf';
  temperature.textContent = '';
  weatherDescription.textContent = '';
  wind.textContent = '';
  humidity.textContent = '';
}




