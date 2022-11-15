/*The city ID variable at OpenWeatherMap for Ottawa, Ontario is 6094817.*/

const url = "https://api.openweathermap.org/data/2.5/weather?id=6094817&units=imperial&appid=57a90726feca2b322037cd9ee293fb56";

/* Use fetch() to request the given url.
 It is OK to not use a lot of error checking in this activity with fetch().
  Convert the string response to a JavaScript object (.json) and print the results to the console
   in order test and evaluate what is available to use. Use arrow functions. See below:*/



fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject); /*see my notes below at the bottom of the page*/
        document.getElementById('current-temp').textContent = jsObject.main.temp;

        /*Use a variable to store the image address which needs to be concatenated together given the API icon code value result.
Use a variable to store the weather description.
Assign the <span> tag  with the id of 'imagesrc' the concatenated image variable to to display the full address for testing purposes.
Set the src attribute for the <img> with the id of 'icon'.
Set the alt attribute for the <img> for accessibility. See below:*/

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    });



/*As I checked the console this is what it showed for console.log(jsObject) on :

{coord: {…}, weather: Array(1), base: "stations",
 main: {…}, visibility: 10000, …}base: "stations"
 clouds: {all: 1}cod: 200
 coord: {lon: -111.8766, lat: 42.0963}dt: 1615271471id: 5604473
 main: {temp: 38.89, feels_like: 24.91, temp_min: 37.4, temp_max: 39.99, pressure: 1013, …}name: "Preston"
 sys: {type: 1, id: 4701, country: "US", sunrise: 1615211448, sunset: 1615253150}timezone: -25200visibility: 10000
 weather: [{…}]wind: {speed: 18.41, deg: 350}
 __proto__: Object*/

 function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }