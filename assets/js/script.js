var apiKey = "e196ee372d18ba4e4a4e491fffa2b30c"
var submitBtn = document.getElementById("btn");
var searchCity = document.getElementById("sForm");

submitBtn.addEventListener("click", function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=e196ee372d18ba4e4a4e491fffa2b30c")
    
    .then((response) => response.json())
    .then((data) => console.log(data));
    
});

