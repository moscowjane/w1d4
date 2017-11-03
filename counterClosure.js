var countdownGenerator = function (x) {

return function(){

if (x < 0) {
  console.log("Rockets already gone, bub!")
}

if (x === 0) {
  console.log("Blast Off!")
}

if (x === 1) {
  console.log("T-minus 1...")
}

if (x === 2) {
  console.log("T-minus 2...")
}

if (x === 3) {
  console.log("T-minus 3...")
}
return x--;

}

}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


