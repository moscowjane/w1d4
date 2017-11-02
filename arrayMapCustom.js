var input = [
  { x: 52, y: 4 },
];
var result = input.map(function(currentValue, index, array)
//calculate the area of a field
{
  return currentValue.x * currentValue.y;

});

console.log(result)

