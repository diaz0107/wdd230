/*The city ID variable at OpenWeatherMap for Ottawa, Ontario is 6094817.*/

const api_key = "57a90726feca2b322037cd9ee293fb56"
const imgURL = "https://openweathermap.org/img/w/"
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const k2f = (K) => {
    return (K - 273.15)* 1.8000 + 32.00
}
const rnd = (n,d) => {
    return (Math.round(n*10**d)/10**d)
}

fetch('https://api.openweathermap.org/data/2.5/weather?id=6094817&appid='+api_key)
    .then(res => {
        return res.json()
    })
    .then(jsonData => {
        console.log(jsonData)
        document.querySelector('#current-temp').textContent = rnd(k2f(jsonData.main.temp),1)

        let imageURL = imgURL+jsonData.weather[0].icon+'.png'
        let imageDesc = jsonData.weather[0].description
        document.querySelector('#imagesrc').textContent = imageURL
        document.querySelector('#icon').setAttribute('alt',imageDesc)
        document.querySelector('#icon').setAttribute('src',imageURL)

    })
    
    /* async function apiFetch(https://api.openweathermap.org/data/2.5/weather?id=6094817&appid='+api_key) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            // displayResults(data);
          } else {
              throw Error(await response.text());
          }
        } catch (error) {
            console.log(error);
        }
      }
      
      apiFetch(); */