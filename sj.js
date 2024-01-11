var box1 = document.querySelector(".floatbx")
var box2 = document.querySelector("#floatbx2")
var box3 = document.querySelector("#floatbx3")
var box4 = document.querySelector("#floatbx4")
var box5 = document.querySelector("#floatbx5")
var box6 = document.querySelector("#floatbx6")


function bxappear(){
    box1.style.display = "block";
}

function bxhide(){
    box1.style.display = "none";
}

////////////////////////////////////////////////
function bxappear2(){
    box2.style.display = "block";
}

function bxhide2(){
    box2.style.display = "none";
}

////////////////////////////////////////////////
function bxappear3(){
    box3.style.display = "block";
}

function bxhide3(){
    box3.style.display = "none";
}

////////////////////////////////////////////////
function bxappear4(){
    box4.style.display = "block";
}

function bxhide4(){
    box4.style.display = "none";
}

////////////////////////////////////////////////
function bxappear5(){
    box5.style.display = "block";
}

function bxhide5(){
    box5.style.display = "none";
}

////////////////////////////////////////////////
function bxappear6(){
    box6.style.display = "block";
}

function bxhide6(){
    box6.style.display = "none";
}



document.addEventListener("mousemove", function (e){

  var offsetx = 70
  var offsety = 30

  var offset2x = -0
  var offset2y = 30

  var offset3x = 0
  var offset3y = 30

  var offset4x = 0
  var offset4y = 30

  var offset5x = 0
  var offset5y = 30

  var offset6x = -60
  var offset6y = 40

  box1.style.left = e.pageX + offsetx - box1.clientWidth / 2 + "px";
  box1.style.top = e.pageY + offsety - box1.clientHeight / 2 + "px";

  box2.style.left = e.pageX + offset2x - box2.clientWidth / 2 + "px";
  box2.style.top = e.pageY + offset2y - box2.clientHeight / 2 + "px";

  box3.style.left = e.pageX + offset3x - box3.clientWidth / 2 + "px";
  box3.style.top = e.pageY + offset3y - box3.clientHeight / 2 + "px";

  box4.style.left = e.pageX + offset4x - box4.clientWidth / 2 + "px";
  box4.style.top = e.pageY + offset4y - box4.clientHeight / 2 + "px";

  box5.style.left = e.pageX + offset5x - box5.clientWidth / 2 + "px";
  box5.style.top = e.pageY + offset5y - box5.clientHeight / 2 + "px";

  box6.style.left = e.pageX + offset6x - box6.clientWidth / 2 + "px";
  box6.style.top = e.pageY + offset6y - box6.clientHeight / 2 + "px";


})
