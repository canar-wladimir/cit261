var weatherObjet = new XMLHttpRequest();
weatherObjet.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=77500,mx&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);

weatherObjet.send();
weatherObjet.onload = function() {
    var weatherInfo = JSON.parse(weatherObjet.responseText);
    var test = weatherObjet.responseText;
    var cent = parseInt((parseFloat(weatherInfo.main.temp)-32)*(5/9));
    console.log(weatherInfo);
    console.log(test);

    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentTempC').innerHTML = cent;
    
    /*document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;*/

    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/"+iconcode+".png ";
    document.getElementById('weather_icon').src = icon_path;

    console.log(icon_path);

} // end of the funtion
