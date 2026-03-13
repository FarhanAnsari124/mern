const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const apiKey = "fc70f4159f7e6c8059a49b580d4d197b";

const searchBox = document.querySelector(".input");
const searchBtn = document.querySelector("button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);
  var data = await response.json();
  console.log("Data", data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + `°C`;
  document.querySelector(".humidityValue").innerHTML = data.main.humidity + `%`;
  document.querySelector(".speedValue").innerHTML = data.wind.speed + `km/h`;
  document.querySelector(".w-img").src =
    `assets/${data.weather[0].main.toLowerCase()}.png`;
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
