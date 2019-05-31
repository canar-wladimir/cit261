function toggleMenu() {
   //console.log("it worked");
   
   //document.getElementById("pNav").classList.toggle("hide");

    //console.log(document.getElementById("pNav").classList);
    document.getElementById("pNav").classList.toggle("hide"); 
    var myElement =  document.querySelector("#selector");
    myElement.style.color = "red";
}

function toggleAdd() {
    //console.log("it worked");
    
    //document.getElementById("pNav").classList.toggle("hide");
 
    //console.log(document.getElementById("pNav").classList);
    document.getElementById("pNav1").classList.add("add"); 
    var myElement =  document.querySelectorAll("#selector");
    myElement.style.color = "red";
 }

 function toggleRemove() {
    //console.log("it worked");
    
    //document.getElementById("pNav").classList.toggle("hide");
 
     //console.log(document.getElementById("pNav").classList);
     document.getElementById("pNav2").classList.remove("remove");
     
     var myElements =  document.querySelectorAll(".all");
     for (var i=0; i < myElements.length; i++) {
         myElements[i].style.opacity = 0.4;
     }
     myElement.style.color = "red";
 }