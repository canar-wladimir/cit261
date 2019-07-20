var rateObjet = new XMLHttpRequest();
rateObjet.open('GET', 'http://www.apilayer.net/api/live?access_key=0646001359a75868e3cb9ac15a4686a3&source=USD&currencies=MXN',true);

rateObjet.send();
rateObjet.onload = function() {
    var rateInfo = JSON.parse(rateObjet.responseText);
    console.log(rateInfo);


} // end of the funtion
