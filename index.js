let homeCounter = 0;
let guestCounter = 0;


function homeAdd(n) {
  homeCounter += n;
  document.getElementById("home").innerText = homeCounter;
}

function guestAdd(n) {
  guestCounter += n;
  document.getElementById("guest").innerText = guestCounter
}

function reset() {
  homeCounter = 0;
  guestCounter = 0;
  document.getElementById("home").innerText = homeCounter;
  document.getElementById("guest").innerText = guestCounter;
}

function save() {
  var table = document.getElementById("table").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow();
  var cell0 = newRow.insertCell(0);
  var cell1 = newRow.insertCell(1);

  cell0.innerHTML = homeCounter;
  cell1.innerHTML = guestCounter;
}