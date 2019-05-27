var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://api.myjson.com/bins/18lu6r';
var requestCurrency = 'http://www.apilayer.net/api/live?access_key=0646001359a75868e3cb9ac15a4686a3&source=USD&currencies=MXN';

var request = new XMLHttpRequest();

//tipo de cambio
var rateObjet = new XMLHttpRequest();
rateObjet.open('GET', requestCurrency ,true);
rateObjet.send();
rateObjet.onload = function() {
    var rateInfo = JSON.parse(rateObjet.responseText);
    console.log(rateInfo);


} // end of the funtion

//services
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var services = request.response;
    //console.log(services);
 	showServices(services);
}

function showServices(jsonObj) {
    var services = jsonObj['services'];
    //section 
    for (var i = 0; i < services.length; i++) {
        var myh2services = document.createElement('h2');
        var mypservices = document.createElement('p');
        var mydiv = document.createElement('div')
        mydiv.className = "mydiv";
        
        myh2services.textContent = services[i].serviceDigram + services[i].serviceType;
        mypservices.textContent =services[i].description;    
        
        //mydiv
        var serviceh3 = services[i].service;
        for (var j = 0; j < serviceh3.length; j++) {
            console.log(j);
            var mydiv_h3 = document.createElement('h3');
            var mydiv_photo = document.createElement('div');
            var mydiv_notes = document.createElement('div');
            var mydiv_price = document.createElement('div');
            var path = 'images/';
            var images = document.createElement('img');

            images.setAttribute("src",path+serviceh3[j].mainpic);
            images.setAttribute("alt",serviceh3[j].mainpic);


            mydiv_h3.textContent = serviceh3[j].name;
            console.log(serviceh3[j].name);
            mydiv_photo.appendChild(images)

            mydiv_notes.textContent = "Important information:";
            var servicenotes = serviceh3[j].notes;
            for (var k = 0; k < servicenotes.length; k++) {
                var listItemp = document.createElement('p');
                listItemp.textContent = servicenotes[k];
                mydiv_notes.appendChild(listItemp);
            }

            mydiv.appendChild(mydiv_h3);
            mydiv.appendChild(mydiv_photo);
            mydiv.appendChild(mydiv_notes);
            mydiv.appendChild(mydiv_price);
        }

     
        


    }

    section.appendChild(myh2services);
    section.appendChild(mypservices);
    section.appendChild(mydiv);

}