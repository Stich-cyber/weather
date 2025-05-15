const APIKey = "5f1077f561d87b1be334b15838fc01b4";

document.querySelector(".bx-search").addEventListener("click", () => {
  const input = document.querySelector(".search-box input");
  const cityName = input.value.trim();
  if (!cityName) {
    alert("togri shahar kirit");
    return;
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const weatherCondition = data.weather[0].main;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      document.querySelector(".temperature").innerHTML = `${Math.round(
        temperature
      )}<span>°C</span>`;
      document.querySelector(".description").textContent =
        data.weather[0].description;
      document.querySelector(".main-info").textContent = `${humidity}%`;
      document.querySelector(".info-wind span").textContent = `${Math.round(
        windSpeed
      )}Km/h`;
      const weatherImage = document.querySelector(".weather img");
      switch (weatherCondition) {
        case "Clouds":
          weatherImage.src = "./cloud.png";
          break;
        case "Rain":
          weatherImage.src = "./rain.png";
          break;
        case "Snow":
          weatherImage.src = "./snow.png";
          break;
        case "Clear":
          weatherImage.src = "./sun.png";
          break;
        case "Mist":
          weatherImage.src = "./mist.png";
          break;
        default:
          weatherImage.src = "./default.png";
      }
      document.querySelector(".weather-box").classList.add("active");
      document.querySelector(".weather-details").classList.add("active");
      document.querySelector(".not-found").classList.remove("active");
    })
    .catch(() => {
      document.querySelector(".not-found").classList.add("active");
      document.querySelector(".weather-box").classList.remove("active");
      document.querySelector(".weather-details").classList.remove("active");
    });
});
