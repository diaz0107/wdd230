/*The city ID variable at OpenWeatherMap for Ottawa, Ontario is 6094817.*/
const url = "https://api.openweathermap.org/data/2.5/weather?id=6094817&units=imperial&appid=57a90726feca2b322037cd9ee293fb56";

const windchill = (temperature, wind) => {
const windDegree = document.querySelector("#windDegree");

  if (temp <= 50 && wind >= 3) {
    let chill = Math.round(
      35.74 +
        0.6215 * temp -
        35.75 * Math.pow(wind, 0.16) +
        0.4275 * temp * Math.pow(wind, 0.16)
    );
    windDegree.innerHTML = "&#8457;";
    return chill.toFixed(0);
  } else {
    return "N/A";
  }
};

const currentTemp = parseFloat(document.querySelector("#current-temp").textContent);
const windSpeed = parseFloat(document.querySelector("#wind").textContent);
windchill(temperature, windSpeed);



async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  // Select elements
  const currentTemp = document.querySelector("#current-temp");
  const weatherIcon = document.querySelector("#weather-icon");
  const figcaption = document.querySelector("#figcaption");
  const windChill = document.querySelector("#windchill");
  const wind = document.querySelector("#wind");

  const temperature = data.main.temp;
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  const windSpeed = data.wind.speed;

  // Set values
  temp.textContent = temperature;
  wind.textContent = windSpeed;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  figcaption.textContent = desc;
  windChill.textContent = windchill(temperature, windSpeed);
}
