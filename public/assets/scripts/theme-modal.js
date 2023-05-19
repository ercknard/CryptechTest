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
const themeDelayleft = 1500;

var toRun = function() {
  modalleft.style.display = "block";
  setTimeout(toNoneLeft, themeDelayleft);
}

toRun();

function toNoneLeft() {
    modalleft.style.display = "none";
}