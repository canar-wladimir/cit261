var header = document.querySelector('header');
var section = document.querySelector('section');
//var requestURL = 'https://can18007.github.io/assignments/mhic2/ranch/js/varios.json';
//var requestURL = 'https://github.com/can18007/mhic/blob/master/varios.json';
//var requestURL = 'js/varios.json';
var requestURL = 'https://api.myjson.com/bins/w986x';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var tours = request.response;
    //console.log(tours);
 	showTours(tours);
}

function showTours(jsonObj) {
    var tours = jsonObj['tours'];
    //section 
    for (var i = 0; i < tours.length; i++) {
        var myh2tour = document.createElement('h2');
        var myptour = document.createElement('p');
        var myaside = document.createElement('aside');
        myaside.className = "aside";
        var mydiv = document.createElement('div')
        mydiv.className = "mydiv";
        
        myh2tour.textContent = tours[i].toursDigram + tours[i].toursType;
        myptour.textContent =tours[i].description;

        var toursfotos = tours[i].fotos;

        //myaside
        for (var j = 0; j < toursfotos.length; j++) {
            var path = 'images/';
            var images = document.createElement('img');
            images.setAttribute("class","fade");
            images.setAttribute("src",path+toursfotos[j]);
            images.setAttribute("alt",toursfotos[j]);;
            myaside.appendChild(images);   
        }

        
        //console.log(tourh3);
        //mydiv
        var tourh3 = tours[i].tours;
        for (var j = 0; j < tourh3.length; j++) {
            var mydiv_h3 = document.createElement('h3');
            var mydiv_div = document.createElement('div');
            mydiv_div.className = "div";
            var mydiv_photo = document.createElement('div');
            var mydiv_contain = document.createElement('div');
            mydiv_contain.className = "grow";
            var mydiv_price = document.createElement('div');
            mydiv_price.className = "price grow";
            
            var mydiv_note = document.createElement('div');
            mydiv_note.className = "note";
            mydiv_note.className = "grow";

            var mydiv_form = document.createElement('div');
            var path = 'images/';
            var images = document.createElement('img');
            images.setAttribute("src",path+tourh3[j].mainpic);
            images.setAttribute("alt",tourh3[j].mainpic);

            //console.log(tourh3[j].name);
            mydiv_h3.textContent = tourh3[j].name;
            mydiv_photo.appendChild(images)

            //mydiv_contain
            var myList = document.createElement('ul');
            myList.className = "note";
            myList.textContent = "Your tour includes:";
            var tourcontain = tourh3[j].contains;
            for (var k = 0; k < tourcontain.length; k++) {
                var listItem = document.createElement('li');
                listItem.textContent = tourcontain[k];
                myList.appendChild(listItem);
            }

            mydiv_contain.appendChild(myList);



            //mynotes_contain
            //mydiv_note.textContent = "Note:" + tourh3[j].notes;
            
            mydiv_note.textContent = "Important information:";
            var tournotes = tourh3[j].notes;
            for (var k = 0; k < tournotes.length; k++) {
                var listItemp = document.createElement('p');
                listItemp.textContent = tournotes[k];
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
            
            var pricea = tourh3[j].pricea;          
            var pricec = tourh3[j].pricec;
            var finalpa = tourh3[j].pricesa;
            var finalpc = tourh3[j].pricesc;
            var descuento = Math.abs(100-((finalpa*100)/pricea));
                       
            padult.textContent = "Adult(usd):";
            pchild.textContent = "Child(usd):";
            pradult.textContent = "$" + pricea + ".00";
            prchild.textContent = "$" + pricec + ".00";
            fpradult.textContent = "$" + finalpa + ".00";
            fprchild.textContent = "$" + finalpc + ".00";
            divp4.textContent = descuento.toFixed(0) + "% Off to our special price"
       

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