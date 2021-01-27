const { add } = require("nconf")

console.clear()

function plus(a, b, callback){
  var result = a + b
  callback(result)

  var count = 0
  var history = function() {
    count += 1
    return count + ' : ' + a + ' + ' + b + ' = ' + result
  }
  
  return history
}

var a = Math.floor(Math.random()*10 + 1)
var b = Math.floor(Math.random()*10 + 1)

var plus_history = plus(a, b, function(result){
  console.log('plus result : ' + result)
})

console.log('add_history of type : ' + typeof(plus_history))
console.log('결과값으로 받은 함수 실행 : ' + plus_history())
console.log('결과값으로 받은 함수 실행 : ' + plus_history())
console.log('결과값으로 받은 함수 실행 : ' + plus_history())