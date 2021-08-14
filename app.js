window.addEventListener("DOMContentLoaded", function() {
     const btn = document.querySelector(".searchBtn")
     const formSearchLocation = document.querySelector(".searchContainer")
     const searchInput = document.querySelector(".searchInput")
     
     //btn.innerHTML = `<i class="fas fa-search"></i>`
     
     let weatherInf = document.querySelector(".weatherInf")
     let town
     let a = 3

     formSearchLocation.addEventListener("submit", getLocation)

     function getLocation(e) {
          e.preventDefault()
          town = searchInput.value
          console.log(town)
          getWeatherData()
     }
     
     function getWeatherData() {
          let degreesCelsius
          
          fetch("https://api.openweathermap.org/data/2.5/weather?q=" + town + "&units=metric&appid=e5b86d0a1e6b0c131ba021c0f9b2cae9")
         .then((response) => response.json())
         .then((data) =>  {
              console.log(data)
              degreesCelsius = data.main.temp
              weatherInf.innerHTML = `
              <h3>Weather in ${data.name}</h3>
              <br>
              <h3>${degreesCelsius.toFixed(0)}° C</h3>
              <h3>Humidity ${data.main.humidity}%</h3>
              <h3>${data.weather[0].description}</h3>
              `
              /* weatherInf.innerHTML = `
               <h3>${data.name} ${degreesCelsius.toFixed(0)}° C</h3> ` */
          })
     }
   
     //temp data.main.temp
     //town data.name

    /*  weatherInf.innerHTML = `
     <h3>${data.name}</h3> 
     <h3${data.main.temp}</h3>
    ` */
})