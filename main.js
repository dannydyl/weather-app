

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="; // url(api) save variable
const apiKey = "cdd0fb4b18935adf870883dceba6a43f"; // api key save variable

//async function을 이용해서 api에 fetch한다음에 await했다가 data를 추출해옴
async function checkWeather(cityName){
  const response = await fetch(apiUrl + `${cityName}&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".cityName").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = "Temp: " + Math.round(data.main.temp / 10) + "°C";
  document.querySelector(".tempFeelsLike").innerHTML = 'but it feels like '+ Math.round(data.main.feels_like / 10) + "°C";
  document.querySelector(".wind").innerHTML = data.wind.speed + "m/s";

  const weatherIcon = document.querySelector(".weatherIcon");
  const windIcon = document.querySelector(".windIcon")

  const showIcon = () => {
    weatherIcon.classList.add('show');
    windIcon.classList.add('show');
  };
  
  
  if(data.weather[0].main === 'Clouds'){
    weatherIcon.src = "images/clouds.png";
  }
  else if(data.weather[0].main === 'Clear'){
    weatherIcon.src = "images/clear.png";
  }
  else if(data.weather[0].main === 'Drizzle'){
    weatherIcon.src = "images/drizzle.png";
  }
  else if(data.weather[0].main === 'Mist'){
    weatherIcon.src = "images/mist.png";
  }
  else if(data.weather[0].main === 'Rain'){
    weatherIcon.src = "images/rain.png";  
  }
  else if(data.weather[0].main === 'Snow'){
    weatherIcon.src = "images/snow.png";
  }
  showIcon();
}

const searchButton = document.getElementById("searchButton");
const cityInput = document.getElementById("cityInput");

cityInput.addEventListener("keypress", (event) => {
  if(event.key === "Enter"){
    checkWeather(`${cityInput.value}`);
  }
});

searchButton.addEventListener("click", () => {
  checkWeather(`${cityInput.value}`);
});
