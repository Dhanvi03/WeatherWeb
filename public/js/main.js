const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const city_output = document.getElementById("city_name");
const middle_layer = document.querySelector(".middle_layer");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
  event.preventDefault();
  let city_value = cityName.value;
  if (city_value === "") {
    city_output.innerText = `Plz write name before search`;
    middle_layer.classList.add("data_hidden");
  } else {
    try {
      // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_value}&appid=7d736aa8028f4307916e341e6cc7bc06`;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_value}&units=metric&appid=7d736aa8028f4307916e341e6cc7bc06`;

      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_output.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;
      let tempMood = arrData[0].weather[0].main;

      if (tempMood === "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68'></i>";
      } else if (tempMood === "Clouds") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' style='color: #f1f2f6'></i>";
      } else if (tempMood === "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68'></i>";
      }

      middle_layer.classList.remove("data_hidden");
    } catch {
      city_output.innerText = `Plz write name properly`;
      middle_layer.classList.add("data_hidden");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
