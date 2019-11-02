## About the project

This project was made for educational purpose only in order to build an interactive web page using ECMAScript 5:

It is a web page that retrieves and display the temperature and weather description of the city entered as a parameter.

During the development of this project:

* I have used XmlHttpRequest object to get the weather data from the openWeather API ( consuming a Rest web service)
* Interact with the DOM and build event listener to update the web page (DOM & Event)
* Create a weather object using the constructor function (ES5 doesn't support classes)
* Splitting code into multiple files and import them manually in a specified order
 in the index.html page (ES5 doesn't support modules )


## Prerequisites

In order to use this application, you must specify your API_KEY in open-weather-api-key.js file once you have created an account to use the
 [openWeatherMap API](https://openweathermap.org/).

## Youtube video

Here is a descriptive video in which I demonstrate a full user story:

## PS The ECMAScript 6 version of this project
This project was completely rewritten in ES6 to take advantages of the new features supported by this version like:
* Splitting the project into multiple modules
* Using let and const for block scope and defining constant
* Using promises to handle asynchronous task(the openWeather API call)
* Using classes to modularize the weather data
* and much more
Here is the link for the ES6 version: [weather app ES6] (https://github.com/abenamor9/weather-app)
