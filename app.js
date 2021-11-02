const express = require("express");
const https = require("https");

const app = express();


app.get("/", (req, res) => {
    const city = "Sao Paulo"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d729619f8e1c9e16ef07a4c9fe7b5e4&units=metric`;
    https.get(url,(response) => {
       response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            res.write(`<p>The weather is currently ${description}.</p>`);
            res.write(`<h1>The temperature in ${city} is ${temp} degrees Celsius.</h1>`);
            res.write(`<img src="${imageUrl}" alt="weather-image">`);
            res.send();
       });
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});