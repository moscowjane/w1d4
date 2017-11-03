var countdownGenerator = function (x) {

  var privateCounter = a;
  function changeBy(val){
    privateCounter += val;
  }

return {
   decrement: function() {
    changeBy(-1);
   },
   value: function() {
    return privateCounter;
   }
});
var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!