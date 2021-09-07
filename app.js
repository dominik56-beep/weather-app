window.addEventListener("DOMContentLoaded", function() {
     const btn = document.querySelector(".searchBtn")
     const formSearchLocation = document.querySelector(".searchContainer")
     const searchInput = document.querySelector(".searchInput")
          
     let weatherInf = document.querySelector(".weatherInf")
     let town

     formSearchLocation.addEventListener("submit", getLocation)

     function getLocation(e) {
          e.preventDefault()
          town = searchInput.value
          getWeatherData()
     }
     
     function getWeatherData() {          
          fetch("https://api.openweathermap.org/data/2.5/weather?q=" + town + "&units=metric&appid=e5b86d0a1e6b0c131ba021c0f9b2cae9")
          .then((response) => {
                if(response.ok) return response.json()
                else throw new Error("Not found location")
          }) 
         .then((data) =>  {
              weatherInf.innerHTML = `
                    <h3>Weather in ${data.name}</h3>
                    <br>
                    <h3>${data.main.temp.toFixed(0)}°C</h3>
                    <h3>Humidity ${data.main.humidity}%</h3>
                    <h3>${data.weather[0].description}</h3>
              `
          })
          .catch(error => {
               console.log(error)
               weatherInf.innerHTML = `
                    <h3>Not found location.</h3>
               `
          }) 
     }

})