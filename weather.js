const https = require("https");
const url = "https://api.open-meteo.com/v1/forecast?latitude=8.498&longitude=-13.23&current_weather=true";

https.get(url, function(response) {
    let data = "";

    response.on("data", function(chunk){
        data += chunk;
    });

    response.on ("end", function(){
        let weather =JSON.parse(data);
        console.log("current temperature in Freetown:" + weather.current_weather.temperature + "°C");
        console.log("Wind speed: " + weather.current_weather.windspeed + "km/h");
    });
});