const locationUnitsKey = '?id=5334223&units=imperial&appid=57a90726feca2b322037cd9ee293fb56';
const currentRequestURL = `https://api.openweathermap.org/data/2.5/weather${locationUnitsKey}`;
const threeDayRequestURL = `https://api.openweathermap.org/data/2.5/forecast${locationUnitsKey}`;

fetch(currentRequestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    // the current weather conditions in Carlsbad
    let current = jsObject.weather[0].main;
    let _c = document.getElementById('d-current');
    _c.textContent = current;
    
    // current temperature(s) in Fahrenheit
    let temp = jsObject.main.temp;
    let _t = document.getElementById('d-temp');
    _t.textContent = parseInt(temp);
   
    // the humidity in Carlsbad
    let humidity = jsObject.main.humidity;
    let _h = document.getElementById('d-humid');
    _h.textContent = humidity;
    
    // the wind speed in Carlsbad
    let wind = jsObject.wind.speed;
    let _w = document.getElementById('d-wind-s');
    _w.textContent = wind;
});


// Carlsbad Three day forcest
fetch(threeDayRequestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let forcast = jsObject.list;
    // holds the icon & temp objects for the three day
    let threeDay = [];

    // loops through response
    for(let i = 0; i < forcast.length; i++) {
        // isolates the time
        let time = parseInt(forcast[i].dt_txt.slice(10,13));
        // if the time = 18:00 then add to the threeDay array
        if(time == 18) {
            // icon and temp obj
            let w = {
                wIcon: forcast[i].weather[0].icon,
                wDesc: forcast[i].weather[0].description,
                wTemp: parseInt(forcast[i].main.temp),
                wDate: forcast[i].dt_txt.slice(0,10)
            };
            // pushes icon and temp object to the threeDay array
            threeDay.push(w);
        }
    }
    console.log(threeDay);
    // loops through the threeDay array and outputs the data to the page
    for(let i = 0; i < threeDay.length; i++) {
        // set value for content output
        let o_icon = `https://openweathermap.org/img/w/${threeDay[i].wIcon}.png`;
        let o_desc = threeDay[i].wDesc;
        let o_temp = threeDay[i].wTemp;
        let o_date = threeDay[i].wDate;
        // get html elements
        let dayOutput = document.getElementById('day-output');
        let weatherOutput = document.getElementById('weather-output');

        // create elements
        let dayTh = document.createElement('th');

        // creates weather information content
        let weatherInfo = 
        `<td class="forecast-info">
            <img src="${o_icon}" alt="${o_desc}" class="w-icon">
            <span>${o_temp} &#176;F</span>
        </td>`;

        // add content to elements
        dayTh.textContent = calcDayOfWeek(o_date);

        // add elements to html
        dayOutput.appendChild(dayTh);
        weatherOutput.insertAdjacentHTML('beforeend', weatherInfo);
    }

    // returns a long string day of week based on date
    function calcDayOfWeek(date) {
        let dayOfWeek = new Date(date).toLocaleString('en-us', {weekday: 'long'});
        return dayOfWeek;
    }
});

