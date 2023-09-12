const inputValue = document.getElementById("inputBox");
const placeName = document.getElementById("PlaceName");
const locationTemp = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const weatherImg = document.getElementById("weatherImage");
const weatherDescription = document.querySelector(".weather-description");

let value = "";
weatherDescription.classList.add("hidden");
// let res = { success: true };
async function getData() {
    try {
        res = await fetch(`http://localhost:6200/${inputValue.value}`).then((res) => res.json());
    } catch (error) {
        res.success = false
        console.log(error);
    }
    finally {
        if (res.success === true) {
            weatherImg.classList.add("weather-img");
            weatherDescription.classList.remove("hidden");
            locationTemp.classList.remove("error-font-size");
            weatherImg.classList.remove("error-img");
            placeName.innerHTML = res.data.name;
            locationTemp.innerHTML = res.data.temp_c + "<sup>o</sup>";
            feelsLike.innerHTML = "Feels like  " + res.data.feelslike_c + "<sup>o</sup>";
            if (res.data.temp_c >= 20 && res.data.temp_c < 40) {
                weatherImg.src = "images/sunny.png";
            } else if (res.data.temp_c >= 10 && res.data.temp_c < 20) {
                weatherImg.src = "images/sun_behind.png";
            } else {
                weatherImg.src = "images/rain.png";
            }
            inputValue.value = "";
        }
        else {
            placeName.innerHTML = "";
            weatherImg.src = "images/cloud.png";
            locationTemp.innerHTML = "No Data Found";
            feelsLike.innerHTML = "";
            weatherDescription.classList.add("hidden");
            inputValue.value = "";
            locationTemp.classList.add("error-font-size");
            weatherImg.classList.add("error-img");
        }
    }
}
inputValue.addEventListener("keyup", (e) => {
    value = inputValue.value;
    if (e.key === "Enter" && inputValue.value !== "") {
        getData();
    }
});
