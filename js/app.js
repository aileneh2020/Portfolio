$(document).ready(function(){
  $('.header').height($(window).height() * 0.8);
})

function displayMenu() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

