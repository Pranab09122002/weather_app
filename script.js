document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('background-video');
// Convert seconds to milliseconds
    function changeSpeed(speed){
        video.playbackRate = speed;
    }
    changeSpeed(5);
});

const apiKey ="bcdad9308a4aaa548dfddb83f93d2819";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.getElementById("search");
const btn = document.getElementById("btn");


async function checkWeather(city){
    const response = await fetch(apiUrl +city +`&appid=${apiKey}`);
    let data = await response.json();
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) ;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "Km/h";
    
}

btn.addEventListener("click", ()=>{
    checkWeather(search.value);
})
