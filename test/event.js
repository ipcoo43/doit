process.on('exit', function(){ // on 으로 받음
  console.log('3) - exit 이벤트 발생함.')
})

setTimeout(function() {
  console.log('2) - 2초 후에 실행되었음')
  process.exit() // emit 과정이 내부에서 전달 한다.
}, 2000)

console.clear()
console.log('1) - 2초 후에 실행될 것임.')