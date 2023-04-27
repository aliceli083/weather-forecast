var apiKey = "2094bbd487480c136f9574e38b34a323";
var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");
var cityName = document.getElementById("city-name");
var currentDate = document.getElementById("current-date");
var weatherIcon = document.getElementById("weather-icon");
var temperature = document.getElementById("temperature");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var forecast = document.getElementById("forecast");
var historyList = document.getElementById("history-list");


function fetchWeather(city) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2094bbd487480c136f9574e38b34a323&units=metric`
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            cityName.innerHTML=data.name + dayjs.unix(data.dt).format(' MMM D, YYYY') + `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
            temperature.innerHTML= "Temp: "+ data.main.temp + " Degrees Celcius";
            humidity.innerHTML="Humidity: "+ data.main.humidity + "%";
            wind.innerHTML ="Wind: " + data.wind.speed + " MPH";

        })
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2094bbd487480c136f9574e38b34a323&units=metric`
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function(data){
            console.log(data)
            for(var i=2;i<data.list.length; i=i+8){
                console.log(data.list[i])
            }
        })
}


searchForm.addEventListener("submit", function(event){
    event.preventDefault()
fetchWeather(searchInput.value)
})

