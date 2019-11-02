'use strict';

searchButton.addEventListener('click', searchWeather);

var KELVIN_TO_CELCIUS = 273.15;
function searchWeather() {
    loadingElement.style.display = 'block';
    weatherBox.style.display = 'none';
    if( searchCity.value.trim().length === 0) {
        weatherBox.style.display = 'none';
        loadingElement.style.display = 'none';
        return alert('The city name is required!');
    }
    // create the xhr request to consume the getWeatherByCity web service
    var http = new XMLHttpRequest();
    var HTTP_VERB = 'GET';
    var apiKey = OPEN_WEATHER_API_KEY;
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + searchCity.value + '&appid=' + apiKey;
    http.open(HTTP_VERB, url);
    http.onreadystatechange = function(){
        if (http.readyState == XMLHttpRequest.DONE && http.status == '200') {
            console.log('success call for getWeatherByCityName web service');
            var data = JSON.parse(http.responseText);
            var cityName = searchCity.value;
            var weatherObj = new Weather(cityName, data.weather[0].description);
            weatherObj.temperature = (data.main.temp - KELVIN_TO_CELCIUS) + ' °C';
            updateWeather(weatherObj);
        } else if (http.readyState === XMLHttpRequest.DONE) {
            console.log('Failed to call the getWeatherByCityName web service');
            var httpErrorResponse = JSON.parse(http.responseText);
            console.log(httpErrorResponse);
            loadingElement.style.display = 'none';
            alert('Error! : '+ httpErrorResponse.cod + ' ' + httpErrorResponse.message);
        }
    };

    http.send();
}

function updateWeather(weatherData){
    weatherCityElement.textContent = weatherData.cityName;
    weatherDescriptionElement.textContent = weatherData.description;
    weatherTemperatureElement.textContent = weatherData.temperature;
    weatherBox.style.display = 'block';
    loadingElement.style.display='none';
}
