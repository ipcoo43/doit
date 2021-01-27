console.log('숫자 입니다. %d', 10)
console.log('문자열 입니다. %s', '안녕하세요')

var person = {
  name:'소년시대',
  age:20
}
console.log('자바스크립트 객체입니다. %j', person)

console.dir(person) // 객체가 가지고 있는 속성을 알고 싶을 때 

console.time('duration_time')
var result = 0;
for (var i = 0; i < 10000; i++) {
  result += i;
}
console.timeEnd('duration_time')

console.log('파일 이름 : %s', __filename)
console.log('패스 : %s', __dirname)