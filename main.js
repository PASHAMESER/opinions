//start box

var link = document.getElementById("link");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var box = document.querySelector(".box");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");

link.onclick = function clickPa() {
  box.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "none";
  box4.style.display = "none";
  box1.style.display = "block";
};

link1.onclick = function () {
  box.style.display = "none";
  box1.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "none";
  box4.style.display = "none";
  box2.style.display = "block";
};

link2.onclick = function () {
  box.style.display = "none";
  box1.style.display = "none";
  box2.style.display = "none";
  box4.style.display = "none";
  box3.style.display = "block";
};

link3.onclick = function () {
  box.style.display = "none";
  box1.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "none";
  box4.style.display = "block";
};

//end box
