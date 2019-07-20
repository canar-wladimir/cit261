var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://can18007.github.io/assignments/mhic2/ranch/js/varios.json';
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
        
        //console.log(tourh3);
        //mydiv
        var serviceh3 = services[i].service;
        for (var j = 0; j < serviceh3.length; j++) {
            var mydiv_h3 = document.createElement('h3');
            var mydiv_photo = document.createElement('div');
            var mydiv_notes = document.createElement('div');
            var mydiv_price = document.createElement('div');
            var path = 'images/';
            var images = document.createElement('img');

            images.setAttribute("src",path+serviceh3[j].mainpic);
            images.setAttribute("alt",serviceh3[j].mainpic);


            mydiv_h3.textContent = serviceh3[j].name;
            mydiv_photo.appendChild(images)

            mydiv_notes.textContent = "Important information:";
            var servicenotes = serviceh3[j].notes;
            for (var k = 0; k < servicenotes.length; k++) {
                var listItemp = document.createElement('p');
                listItemp.textContent = servicenotes[k];
                mydiv_note.appendChild(listItemp);
            }


            //mydiv_price
            var divp1 = document.createElement('div');
            divp1.className = "divp1";

            var divp2 = document.createElement('div');
            divp2.className = "divp2";

            var divp3 = document.createElement('div');
            divp3.className = "divp3";

            var divp4 = document.createElement('div');
            divp4.className = "price-note divp4";
            
            
           

            
            var padult = document.createElement('p');
            var pchild = document.createElement('p');
            var pradult = document.createElement('p');
            var prchild = document.createElement('p');
            var fpradult = document.createElement('p');
            var fprchild = document.createElement('p');
            
            var price = servicenotes[j].price;          
                                  
            padult.textContent = "USD";
            pradult.textContent = "$" + price + ".00";
          

            divp1.appendChild(padult);
            divp1.appendChild(pchild);
            divp2.appendChild(pradult);
            divp2.appendChild(prchild);
            divp3.appendChild(fpradult);
            divp3.appendChild(fprchild);

            mydiv_price.appendChild(divp1);
            mydiv_price.appendChild(divp2);
            mydiv_price.appendChild(divp3);
            mydiv_price.appendChild(divp4);
                
            //mydiv_price    





            mydiv.appendChild(mydiv_h3);
            mydiv.appendChild(mydiv_div);
            mydiv_div.appendChild(mydiv_photo);
            mydiv_div.appendChild(mydiv_contain);
            mydiv_div.appendChild(mydiv_price);
            mydiv.appendChild(mydiv_note);
            
            
        }

        section.appendChild(myh2tour);
        section.appendChild(myptour);
        section.appendChild(myaside);
        section.appendChild(mydiv);


        
        
    }

}