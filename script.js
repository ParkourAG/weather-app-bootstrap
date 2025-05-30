async function getWeather(city) {
    // function getWeather_emoji(val) {
    //     if (val>=99) {
    //         return "Thunderstorm with hail";
    //     } else if(val>=90){
    //         return "Thunderstorm: Light";
    //     }
    // }

    //   0: "Clear sky",
    //   1: "Mainly clear",
    //   2: "Partly cloudy",
    //   3: "Overcast",
    //   45: "Fog",
    //   48: "Fog (depositing)",
    //   51: "Drizzle: Light",
    //   61: "Rain: Light",
    //   71: "Snow fall: Light",
    //   80: "Rain showers: Light",
    //   95: "Thunderstorm: Light",
    //   99: "Thunderstorm with hail"

    try {
        document.getElementById("heading-top").innerHTML = "Weather of : " + city.charAt(0).toUpperCase() + city.slice(1);

        // Location of a city
        const location_url = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`);
        const location = await location_url.json();

        if (!location.results || location.results.length === 0) {
            console.log("❌ City not found.");
            return;
        }
        const latitude = location.results[0].latitude;
        const longitude = location.results[0].longitude;
        const timezone = location.results[0].timezone;

        // weather of city
        // const weather_url= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,windspeed_10m_max&timezone=${timezone}`);
        const weather_url = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,windspeed_10m_max,relative_humidity_2m_max,relative_humidity_2m_min&timezone=${timezone}`);
        const weather = await weather_url.json();
        console.log(weather);

        //setting weathercode
        document.querySelectorAll(".weathercode").forEach((div, index) => {
            div.innerHTML = weather.daily.weathercode[index + 1];
        })

        //setting days
        document.querySelectorAll(".day").forEach((div, index) => {
            div.innerHTML = weather.daily.time[index + 1];
        })

        //setting max-min temperature
        document.querySelectorAll(".max_temperature").forEach((div, index) => {
            div.innerHTML = weather.daily.temperature_2m_max[index + 1] + weather.daily_units.temperature_2m_max;
        })
        document.querySelectorAll(".min_temperature").forEach((div, index) => {
            div.innerHTML = weather.daily.temperature_2m_min[index + 1] + weather.daily_units.temperature_2m_min;
        })

        //setting precipitation_sum
        document.querySelectorAll(".precipitation_sum").forEach((div, index) => {
            div.innerHTML = weather.daily.precipitation_sum[index + 1] + weather.daily_units.precipitation_sum;
        })

        //setting windspeed_10m_max
        document.querySelectorAll(".windspeed_10m_max").forEach((div, index) => {
            div.innerHTML = weather.daily.windspeed_10m_max[index + 1] + weather.daily_units.windspeed_10m_max;
        })

        //setting relative_humidity_2m_max
        document.querySelectorAll(".relative_humidity_2m_max").forEach((div, index) => {
            div.innerHTML = weather.daily.relative_humidity_2m_max[index + 1] + weather.daily_units.relative_humidity_2m_max;
        })
        

    } catch (error) {
        console.error("ERROR Getting Weather!!", error);
    }
}

let city_name = "";

// Accept value after pressing enter
document.getElementById("city_name").addEventListener("keypress", function (div) {
    if (div.key === "Enter") {
        div.preventDefault();
        city_name = div.target.value;
        // console.log(`you entered: ${city_name}`);
        getWeather(city_name);
    }
})

// Accept value after pressing Search
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    city_name = document.getElementById("city_name").value;
    //   console.log(`Submitted: ${city_name}`);
    getWeather(city_name);
});

//Accepting values from dropdown list
document.querySelectorAll(".dropdown-item").forEach(element => {
    element.addEventListener("click", function (e) {
        let popular_city= this.innerHTML;
            console.log(this.innerHTML);
            getWeather(popular_city);
        })
});