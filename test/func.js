function add(a, b) { 
 return a + b 
}

var result = add(10, 10)
console.log('10 + 10 = ' + result)

var add2 = function(a, b){
  return a + b
}
console.log('10 + 10 = ' + add2(10, 10))