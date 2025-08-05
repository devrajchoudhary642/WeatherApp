const apikey = "0894898e09f7fd7a186f536897d28f12";
      const apiurl =
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");

      async function checkWeather(city) {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);

        if (!response.ok) {
          alert("City not found!");
          return;
        }

        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector("#humidpercent").innerHTML =
          data.main.humidity + "%";
        document.querySelector(".windspeed").innerHTML =
          data.wind.speed + " km/hr";
      }

      searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
      });

      searchBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          checkWeather(searchBox.value);
        }
      });

      checkWeather(city);