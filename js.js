let op = document.getElementById("line-open");
let clo = document.getElementById("line-close");
let menu = document.getElementById("width");

function opennavigation() {
  op.style.display = "none";
  clo.style.display = "block";
  menu.style.width = "60vw";
}
function closenavigation() {
  op.style.display = "block";
  clo.style.display = "none";
  menu.style.width = "0px";
}
