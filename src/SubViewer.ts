const API_KEY = 'cb91bf2e9f480fdb20114b3a09adb6db';

const viewportSub = document.querySelector('.viewport-sub');
const weatherDiv = viewportSub.querySelector('.weather_icon');
const docTemp = viewportSub.querySelector('span:nth-child(2)');
const docLocat = viewportSub.querySelector('span:nth-child(3)');

let weatherMain; // 날씨 저장공간

//* 위치 비동의 허용거부 발생 함수
const onGeoError = () => {
  alert('지역을 찾을 수 없습니다');
};

//* 위치 허용 시 발생함수
const onGeoOk = (getCurrentPosition) => {
  const lat = getCurrentPosition.coords.latitude;
  const lnt = getCurrentPosition.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lnt}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { name } = data;
      weatherMain = data
        .weather[0]
        .main;
      const temp = Math.floor(data.main.temp);
      let weatherIcon;
      if (weatherMain === 'Clouds') {
        weatherIcon = '<i class="fa-solid fa-cloud fa-3x"></i>';
      } else if (weatherMain === 'Clear') {
        weatherIcon = '<i class="fa-solid fa-sun fa-3x"></i>';
      } else if (weatherMain === 'Rain') {
        weatherIcon = '<i class="fa-solid fa-cloud-showers"></i>';
      } else {
        weatherIcon = '<i class="fa-solid fa-meteor fa-3x"></i>';
      }

      weatherDiv.innerHTML = weatherIcon;
      docLocat.innerText = name;
      docTemp.innerText = `${temp}'C`;
      console.log(name, temp, weatherMain);
      console.log('url', url);
    });
};

const weather = viewportSub.querySelector('.weather');

weather.addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  location.href = 'https://google.com/search?q=날씨';
});

navigator
  .geolocation
  .getCurrentPosition(onGeoOk, onGeoError);
