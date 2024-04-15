async function getdata() {
  let city = document.getElementById("searchTxt").value;
  let lat = "";
  let long = "";

  if (city == "") {
    city = "Toronto,ca";
  }

  console.log(city);

  var myCord = [];

  var myUrl = [];
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      myCord.push(latitude);
      const longitude = position.coords.longitude;
      myCord.push(longitude);
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      const url = `https://open-weather13.p.rapidapi.com/city/latlon/${latitude}/${longitude}`;
      myUrl.push(url);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  console.log(this.myUrl);

  //const actualURL = myUrl.pop();
  //console.log("My Actual Url" + actualURL);

  //const url = `https://open-weather13.p.rapidapi.com/city/latlon/${myCord[0]}/${myCord[1]}`;
  //console.log(url);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bb096add9amshe5580c026d3c7d3p18f3b4jsncd401a6d4e77",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(myUrl, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  /*if (navigator.geolocation) {
    console.log(navigator.geolocation.getCurrentPosition().lo);
  } else {
    //    x.innerHTML = "Geolocation is not supported by this browser.";
    console.log("Geolocation is not supported by this browser.");
  }
*/
  /*
  const res = await fetch(
    "https://weatherapi-com.p.rapidapi.com/current.json?q=" + city,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "bb096add9amshe5580c026d3c7d3p18f3b4jsncd401a6d4e77",
      },
    }
  );

  const data = await res.json();
  console.log(data);
*/
}

/*

async function getdata() {
  let city = document.getElementById("searchTxt").value;

  if (city == "") {
    city = "Toronto,ca";
  }

  const res = await fetch(
    "https://weatherapi-com.p.rapidapi.com/current.json?q=" + city,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "bb096add9amshe5580c026d3c7d3p18f3b4jsncd401a6d4e77",
      },
    }
  );

  const data = await res.json();
  getWeekDay();

  console.log(data);
  document.getElementById("location").innerHTML = data.location.name;

  document.getElementById("locationParts").innerHTML =
    "<i class='bi bi-geo-alt'></i> " +
    data.location.region +
    " , " +
    data.location.country;
  document.getElementById("dateTime").innerHTML =
    "<i class='bi bi-calendar'></i> " + data.location.localtime.substr(0, 10);
  document.getElementById("txtWord").innerText = data.current.condition.text;
  document.getElementById("humidity").innerText =
    "Humidity: " + data.current.humidity + "%";
  document.getElementById("precipitation").innerText =
    "Precipitation: " + data.current.precip_mm + "%";
  document.getElementById("wind").innerText =
    "Wind: " + data.current.wind_kph + "km/h";
  document.getElementById("temperatureC").innerText =
    data.current.temp_c + " °C";
  document.getElementById("temperatureF").innerText =
    data.current.temp_f + " °F";
  document.getElementById("weatherIcon").src =
    "https:" + data.current.condition.icon;
}
*/
function getWeekDay() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  document.getElementById("weekDay").innerHTML = day;
}
