//problem-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-1").innerHTML =
// document.addEventListener("DOMContentLoaded", function(e){
$('document').ready(function(init){
  showName();
  updateBreedLinks();
  makeButton();
  bindEvents();

});

//problem-2

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
//document.getElementById("problem-2").innerHTML =
function showName(){
 $("#user").text("Egor");
}

//problem-3

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
//document.getElementById("problem-3").innerHTML =
function updateBreedLinks(){

  $('a[href^="http://www.freewebsitetemplates.com"]').each(function(){

    $(this).attr("href", "https://www.google.com/search?q="+$(this).text()); // Set herf value

  });


}
//problem-4

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
//document.getElementById("problem-4").innerHTML =

function makeButton(){
$("#myFixPageButton").append("<button >Fix The Page</button>").attr("#fixPage");

}

//problem-5.1

function bindEvents (){

  $("#dogBreedForm").submit(function(event) {
    event.addBreed();
  });

}

//problem-5.2
function addBreed(){


}






//challenge-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
// document.getElementById("challenge-1").innerHTML =


//challenge-2

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
// document.getElementById("challenge-2").innerHTML =
