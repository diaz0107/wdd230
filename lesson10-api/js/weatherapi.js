/*The city ID variable at OpenWeatherMap for Ottawa, Ontario is 6094817.*/

const url = "https://api.openweathermap.org/data/2.5/weather?id=6094817&units=imperial&appid=57a90726feca2b322037cd9ee293fb56";

   async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
    apiFetch();
    function  displayResults(weatherData) {
        const currentTemp = document.querySelector('#current-temp');
        const weatherIcon = document.querySelector('#weather-icon');
        const minTemp = document.querySelector("#min");
        const maxTemp = document.querySelector("#max");
        const windDesc = document.querySelector("#wind-desc");
  
        const captionDesc = document.querySelector('figcaption');
        currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
        minTemp.innerHTML = weatherData.main.temp_min.toFixed(1);
        maxTemp.innerHTML = weatherData.main.temp_max.toFixed(1);

        
        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        const desc = weatherData.weather[0].description;
      
        const descwind = weatherData.wind.speed.toFixed(1);
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc;
        windDesc.innerHTML = descwind;
      }

/*As I checked the console this is what it showed for console.log(jsObject) on :

{coord: {…}, weather: Array(1), base: "stations",
 main: {…}, visibility: 10000, …}base: "stations"
 clouds: {all: 100}cod: 200
 coord: {lon: -75.6981, lat: 45.4112}dt: 1668551516: id: 6094817
 main: {temp: 30.83, feels_like: 30.83, temp_min: 29.52, temp_max: 32.11, pressure: 1032, …}name: "Ottawa"
 sys: {type: 2, id: 2005537, country: 'CA', sunrise: 1668513702, sunset: 1668548000}
 weather: [{…}]wind: {speed: 1.99, deg: 54, gust: 5.99}
 __proto__: Object
 */
