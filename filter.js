//define a HO function that can filter an array by some criteria
//passed in the criteria by some function
//passed in an array and returns a subset of an array

function filter(collection, shouldSelect) {

  var finalCollection = [];

  //filteration
  for (var i =0; i < collection.length; i++) {
    var item = collection[i];
    if (shouldSelect(item)) {
    finalCollection.push(item);
  }
}
 return finalCollection;

}

var results = filter([1,2,3], function(number) {
  // number MOD aka Modulus 2
  // if (number % 2 != 0) {
  //   //odd which we want
  //   return true;
  // } else {
  //   return false;
  // }
return(number % 2 !== 0)


});

console.log(results);