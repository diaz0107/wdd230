const APIKey = `?id=5334223&units=imperial&appid=57a90726feca2b322037cd9ee293fb56`;
const urlTodayWeather = `https://api.openweathermap.org/data/2.5/weather${APIKey}`;
const url3jsonForcast = `https://api.openweathermap.org/data/2.5/forecast${APIKey}`;

function init() {
    fetchCurrentReport();
    fetchThreeDayjsonForcastReport();
}

function fetchCurrentReport() {
    //Fetching today's weather report
    fetch(urlTodayWeather)
        .then((res) => res.json())
        .then((objectReturn) => {

            // the current weather conditions in Carlsbad
            let current = objectReturn.weather[0].main + " ( " + objectReturn.weather[0].description + " )";
            document.getElementById('d-current').textContent = current;

            // current temperature(s) in Fahrenheit
            let temp = objectReturn.main.temp;
            document.getElementById('d-temp').textContent = parseInt(temp);

            // current wind chill feels like temperature in Fahrenheit
            // let feelTemp = objectReturn.main.feels_like;
            // document.getElementById('d-wind-c').textContent = parseInt(feelTemp);

            // the humidity in Carlsbad
            let humidity = objectReturn.main.humidity;
            document.getElementById('d-humid').textContent = humidity;

            // the wind speed in Carlsbad
            // let wind = objectReturn.wind.speed;
            // document.getElementById('d-wind-s').textContent = wind;
        });
}


function fetchThreeDayjsonForcastReport() {
    // Carlsbad Three day forcest
    fetch(url3jsonForcast)
        .then((res) => res.json())
        .then((objectReturn) => {
            let jsonForcast = objectReturn.list;
            // frocast objects for the upcoming three days
            let threeDay = [];

            console.log("jsonForcast.length" + jsonForcast.length)
            // loops through res
            for (let i = 0; i < 22; i++) {
                // if the i is multiple of 7 then add to the threeDay array as json object has 8 entries each at 3 hours for one day jsonForcast
                if (i % 7 == 0) {
                    //prepare object
                    let f = {
                        fIcon: jsonForcast[i].weather[0].icon,
                        fDesc: jsonForcast[i].weather[0].description,
                        fTemp: parseInt(jsonForcast[i].main.temp),
                        fDate: jsonForcast[i].dt_txt.slice(0, 10)
                    };
                    // pushes icon and temp object to the threeDay array
                    console.log("f=" + f);
                    threeDay.push(f);
                }
            }
            console.log(threeDay.length);
            // loops through the threeDay array and outputs the data to the page
            for (let i = 0; i < 3; i++) {
                // set value for content output
                let o_icon = `https://openweathermap.org/img/w/${threeDay[i].fIcon}.png`;
                let o_desc = threeDay[i].fDesc;
                let o_temp = threeDay[i].fTemp;
                let o_date = threeDay[i].fDate;
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
                let dayOfWeek = new Date(date).toLocaleString('en-us', { weekday: 'long' });
                return dayOfWeek;
            }
        });

}




document.addEventListener('DOMContentLoaded', init);