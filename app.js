const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=8d729619f8e1c9e16ef07a4c9fe7b5e4&units=metric";
    https.get(url,(response) => {
        console.log(response);
    });
    res.send("Server is up and running");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});