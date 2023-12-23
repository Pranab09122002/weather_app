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
const WaatherIcon = document.getElementById("weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl +city +`&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C" ;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main =="Clouds"){
        WaatherIcon.src = "/img/cloudy_clouds_cloud_weather_sky_icon_194252.png";
    }
    else if(data.weather[0].main =="Clear"){
        WaatherIcon.src = "/img/clear-removebg-preview.png";
    }
    else if(data.weather[0].main =="Rain"){
        WaatherIcon.src = "/img/rain-removebg-preview.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        WaatherIcon.src = "/img/drizll-removebg-preview.png";
    }
    else if(data.weather[0].main =="Smoke"){
        WaatherIcon.src = "/img/mist-removebg-preview.png";
    }
    else if(data.weather[0].main =="Haze"){
        WaatherIcon.src = "/img/snow-removebg-preview.png";
    }
    
    
}

btn.addEventListener("click", ()=>{
    checkWeather(search.value);
})
