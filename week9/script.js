// STATIC WEATHER DATA

const weatherData = [
{
city: "Mumbai",
country: "India",
temperature: 31,
condition: "Sunny",
humidity: "65%",
wind: "10 km/h",
icon: "☀️"
},

{
city: "Delhi",
country: "India",
temperature: 28,
condition: "Cloudy",
humidity: "55%",
wind: "8 km/h",
icon: "☁️"
},

{
city: "Bangalore",
country: "India",
temperature: 25,
condition: "Rainy",
humidity: "72%",
wind: "12 km/h",
icon: "🌧"
}

];

let isCelsius = true;

const container = document.getElementById("weatherContainer");


// RENDER WEATHER CARDS

function renderWeather(){

container.innerHTML = "";

weatherData.forEach(data => {

let temp = data.temperature;

if(!isCelsius){
temp = (temp * 9/5) + 32;
temp = temp.toFixed(1);
}

const card = document.createElement("div");
card.classList.add("weather-card");

card.innerHTML = `

<div class="weather-icon">${data.icon}</div>

<div class="city">${data.city}</div>
<div class="country">${data.country}</div>

<div class="temp">${temp}°${isCelsius ? "C" : "F"}</div>

<div class="condition">${data.condition}</div>

<div class="details">
Humidity: ${data.humidity} <br>
Wind: ${data.wind}
</div>

`;

container.appendChild(card);

});

}

renderWeather();


// TEMPERATURE TOGGLE

document.getElementById("unitToggle").addEventListener("click", ()=>{

isCelsius = !isCelsius;

document.getElementById("unitToggle").innerText = isCelsius ? "°F" : "°C";

renderWeather();

});



// DARK MODE TOGGLE

document.getElementById("themeToggle").addEventListener("click", ()=>{

document.body.classList.toggle("dark");

});



// CURRENT TIME DISPLAY

function updateTime(){

const now = new Date();

document.getElementById("time").innerText =
now.toLocaleString();

}

setInterval(updateTime,1000);

updateTime();