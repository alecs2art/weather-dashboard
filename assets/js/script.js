var apiKey = "e196ee372d18ba4e4a4e491fffa2b30c"
var submitButton = document.querySelector(".button");
var searchCity = document.querySelector(".searchCity");
var temp = document.querySelector(".todaysTemp");
var wind = document.querySelector(".todaysWind");
var humidity = document.querySelector(".todaysHumidity");

console.log(searchCity.value);

submitButton.addEventListener('click', function() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchCity.value+'&appid=e196ee372d18ba4e4a4e491fffa2b30c')
        .then(res => res.json())
        .then(data => {
            var cityData = data['name'];
            var tempData = data['main']['temp'];
            var windData = data['wind'];
            var humidityData = data['main']['humidity'];

            searchCity.innerHTML = cityData;
            temp.innerHTML = 'Tempature:' + tempData;
            wind.innerHTML = 'Wind:' + windData;
            humidity.innerHTML = 'Humidity:' + humidityData;
        });
        
});
    




    

