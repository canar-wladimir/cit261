var weatherObjet = new XMLHttpRequest();
var myW;
var weatherPrevious = localStorage.getItem("myWheater");
var weatherPreviousObj =  JSON.parse(weatherPrevious);
if(weatherPrevious){
    if(weatherPreviousObj.name){
        document.getElementById('currentTemp2').innerHTML = weatherPreviousObj.main.temp;
        document.getElementById('currentTempC2').innerHTML = parseInt((parseFloat(weatherPreviousObj.main.temp)-32)*(5/9));
    }
}
weatherObjet.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=3531673&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);

weatherObjet.send();
weatherObjet.onload = function() {
    var weatherInfo = JSON.parse(weatherObjet.responseText);
    var test = weatherObjet.responseText;
    var cent = parseInt((parseFloat(weatherInfo.main.temp)-32)*(5/9));

    console.log(weatherInfo);
  

    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentTempC').innerHTML = cent;
    
    /*document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;*/

    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/"+iconcode+".png ";
    document.getElementById('weather_icon').src = icon_path;

    if(typeof(Storage) !== "undefined"){ 
        myW = JSON.stringify(weatherInfo);
        localStorage.setItem("myWheater", myW);
    }

    console.log(myW);

} // end of the funtion

