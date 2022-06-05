
function check() {
  let x = document.getElementById("getInput").value
  let number = document.getElementById("no");
  //number.textContent = x;

  let metersf = document.getElementById("length");
  meterstofeet = x*3.28084;
  meterstofeet = meterstofeet.toFixed(2)
  metersf.textContent = x + " meters = " + meterstofeet + " feet | " + meterstofeet + " feet = " + x + " meters";

  let volume = document.getElementById("vol");
  literstogall = x*0.2199692;
  literstogall = literstogall.toFixed(2)
  volume.textContent = x + " liters = " + literstogall + " gallons | " + literstogall + " gallons = " + x + " liters";

  let mass = document.getElementById("ma");
  kiltopound = x*2.204623;
  kiltopound = kiltopound.toFixed(2)
  mass.textContent = x + " kilos = " + kiltopound + " pounds | " + kiltopound + " pounds = " + x + " kilos";
}
