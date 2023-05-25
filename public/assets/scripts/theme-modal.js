
// function toNoneModal() {
//   document.getElementById("modalforbid").style.display = "none";
//   document.getElementById("modalforbid").style.visibility = "hidden";
//   document.getElementById("modalforbid").style.opacity = "0";
// }

var modal = document.getElementById("myModal");
const themeDelay = 2000;

function toGate() {
  modal.style.display = "block";
  setTimeout(toNone, themeDelay);
}

function toNone() {
    modal.style.display = "none";
}

var modalleft = document.getElementById("modal-main");
const themeDelayleft = 1250;

var toRun = function() {
  modalleft.style.display = "block";
  setTimeout(toNoneLeft, themeDelayleft);
}

toRun();

function toNoneLeft() {
    modalleft.style.display = "none";
}