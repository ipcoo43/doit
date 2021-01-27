const { add } = require("nconf")

console.clear()

function plus(a, b, callback){
  var result = a + b
  callback(result)

  var history = function() {
    return a + ' + ' + b + ' = ' + result
  }
  
  return history
}

var plus_history = plus(10, 10, function(result){
  console.log('plus result : ' + result)
})

console.log('add_history of type : ' + typeof(plus_history))
console.log('결과값으로 받은 함수 실행 : ' + plus_history())