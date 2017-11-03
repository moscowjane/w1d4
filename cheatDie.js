
function makeLoadedDie() {

  var i = +process.argv[2];
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

  return function() {

    return list[i++ % 10]

  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
