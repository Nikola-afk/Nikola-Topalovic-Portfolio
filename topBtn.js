//JS za povratak na vrh
//Uzimam btn
mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topBtnFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}