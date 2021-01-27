const { add } = require("nconf")

console.clear()

function plus(a, b, callback){
  result = a + b
  callback(result)
}

plus(10, 10, function(result){
  console.log('콜백함수 안에서 더하기 결과 : ' + result)
})