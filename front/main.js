const loc_name = document.querySelector(".input-location");
const temp = document.querySelector(".temp");
const expected = document.querySelector(".expected");
const icon = document.querySelector(".img-container img");


function addWeatherData(response) {
  loc_name.value = "";
  temp.innerHTML = "";
  expected.innerHTML = "";
  
  try{
  loc_name.value = response.data.name;
  temp.innerHTML = `${response.data.temp_c}<sup>0</sup>`;
  expected.innerHTML = `Feels like ${response.data.feelslike_c}<sup>0</sup>`;

  if (response.data.temp_c < 5)
    icon.src = "./images/icons/static/snowy-6.svg";
  else if (response.data.temp_c >= 5 && response.data.temp_c < 10)
    icon.src = "./images/icons/static/snowy-3.svg";
  else if (response.data.temp_c >= 10 && response.data.temp_c < 20)
    icon.src = "./images/icons/animated/rainy-4.svg";
  else if (response.data.temp_c >= 20 && response.data.temp_c < 30)
    icon.src = "./images/icons/animated/cloudy-day-3.svg";
  else if (response.data.temp_c >= 30 && response.data.temp_c < 50)
    icon.src = "./images/icons/animated/rainy-1.svg";
  }
  catch(error){
    // alert("No data found");
    expected.innerHTML = "No Data Found";
    icon.src = "./images/cloud.png";



    console.log(error)
  }
}

async function getWeatherData() {
  response = await fetch(
    `http://localhost:6200/${loc_name.value}`
  )
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(response);
  addWeatherData(response);
}

      

loc_name.addEventListener("keyup", (e) => {
  if (e.key === "Enter") 
    getWeatherData();
});


