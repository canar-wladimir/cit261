var weatherObjet = new XMLHttpRequest();
var myW;
var weatherPrevious = localStorage.getItem("myWheater");
var weatherPreviousObj =  JSON.parse(weatherPrevious);
if(weatherPreviousObj) {
if (weatherPreviousObj.name){
    document.getElementById('place2').innerHTML = weatherPreviousObj.name;
    document.getElementById('currentTemp2').innerHTML = weatherPreviousObj.main.temp;
    var cent2 = parseInt((parseFloat(weatherPreviousObj.main.temp)-32)*(5/9));
    document.getElementById('currentTempC2').innerHTML = cent2;
}
}


weatherObjet.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=77500,mx&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);

weatherObjet.send();
weatherObjet.onload = function() {
    var weatherInfo = JSON.parse(weatherObjet.responseText);
    var cent = parseInt((parseFloat(weatherInfo.main.temp)-32)*(5/9));
    
    console.log(weatherPreviousObj);
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
        
    console.log(icon_path);

} // end of the funtion
