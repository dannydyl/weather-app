

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=seoul"; // url(api) save variable
const apiKey = "cdd0fb4b18935adf870883dceba6a43f"; // api key save variable

//async function을 이용해서 api에 fetch한다음에 await했다가 data를 추출해옴
async function checkWeather(){
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
}

checkWeather(); // console에서 정삭 추출 가능 확인