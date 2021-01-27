console.clear();

var add = function(a, b) { 
  return a + b
}

var mul = function(a, b) {
  return a * b
}

var min = function(a, b) {
  return a - b
}

var div = function(a, b) {
  return a / b
}

var a = 5;
var b = 10;
if (a<b){ 
  temp = a;
  a = b;
  b = temp;
 }
console.log(a, '+', b, '=', add(a, b))
console.log(a, '*', b, '=', mul(a, b))
console.log(a, '-', b, '=', min(a, b))
console.log(a, '/', b, '=', div(a, b))