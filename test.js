async function hello(params) {
  
const latitude = 28.61;
const longitude = 77.20;
const timezone = 'auto';
const weather_url = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,windspeed_10m_max,relative_humidity_2m_max,relative_humidity_2m_min&current_weather=true&timezone=${timezone}`);

const weather = await weather_url.json();
console.log(weather);}

// hello()

// {
//   latitude: 28.625,
//   longitude: 77.25,
//   generationtime_ms: 0.06830692291259766,
//   utc_offset_seconds: 19800,
//   timezone: 'Asia/Kolkata',
//   timezone_abbreviation: 'GMT+5:30',
//   elevation: 221,
//   current_weather_units: {
//     time: 'iso8601',
//     interval: 'seconds',
//     temperature: '°C',
//     windspeed: 'km/h',
//     winddirection: '°',
//     is_day: '',
//     weathercode: 'wmo code'
//   },
//   current_weather: {
//     time: '2025-05-30T20:30',
//     interval: 900,
//     temperature: 31.4,
//     windspeed: 3.3,
//     winddirection: 283,
//     is_day: 0,
//     weathercode: 0
//   },
//   daily_units: {
//     time: 'iso8601',
//     temperature_2m_max: '°C',
//     temperature_2m_min: '°C',
//     precipitation_sum: 'mm',
//     weathercode: 'wmo code',
//     windspeed_10m_max: 'km/h',
//     relative_humidity_2m_max: '%',
//     relative_humidity_2m_min: '%'
//   },
//   daily: {
//     time: [
//       '2025-05-30',
//       '2025-05-31',
//       '2025-06-01',
//       '2025-06-02',
//       '2025-06-03',
//       '2025-06-04',
//       '2025-06-05'
//     ],
//     temperature_2m_max: [
//       35.9, 37.7,
//       36.6, 35.3,
//       32.3, 32.9,
//       34.9
//     ],
//     temperature_2m_min: [
//       28.7, 27.9,
//       26.9, 27.3,
//       25.4, 24.6,
//       26.5
//     ],
//     precipitation_sum: [
//       0.1, 0.1,    0,
//       0.1, 3.6, 11.7,
//       0.6
//     ],
//     weathercode: [
//        3,  3,  3, 3,
//       95, 81, 80
//     ],
//     windspeed_10m_max: [
//        7.5, 12.8, 15.8,
//       10.6,  5.9,  7.2,
//        6.6
//     ],
//     relative_humidity_2m_max: [
//       85, 87, 79, 74,
//       83, 87, 78
//     ],
//     relative_humidity_2m_min: [
//       45, 42, 31, 42,
//       52, 48, 39
//     ]
//   }
// }

function getWeather_emoji(val) {
        if (val>=99) {
            return "Thunderstorm with hail";
        } else if(val>=94){
            return "Thunderstorm: Light";
        } else if(val>=79){
            return "Rain showers: Light";
        } else if(val>=70){
            return "Snow fall: Light";
        } else if(val>=60){
            return "Rain: Light";
        } else if(val>=60){
            return "Rain: Light";
        } else if(val>=50){
            return "Drizzle: Light";
        } else if(val>=40){
            return "Fog";
        } else if(val>=3){
            return "Overcast";
        } else if(val==2){
            return "Partly cloudy";
        } else if(val==1){
            return "Mainly clear";
        } else if(val==0){
            return "Clear Sky";
        }
    }

console.log(getWeather_emoji(88));