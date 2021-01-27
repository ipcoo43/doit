
var data = `[ 파일을 읽을 때 필요한 코드를 기능별로 각각의 파일에 나누어 넣을 수 있다. ]
- 파일 있는지 확인 => 파일로 분리 => 파일 있는지 확인.파일 (모듈)
- 파일 읽기 => 파일로 분리 => 파일 읽기.파일 (모듈)
- 화면에 내용 보여주기 => 파일로 분리 => 화면에 내용 보여주기.파일 (모듈)
- 별도의 파일로 분리된 독립 기능을 모듈이라고 한다.파일 (모듈)
- 모듈을 만들어 놓으면 다른 파일에서 모듈을 불러와 사용 할 수 있다.
- CommonJs 표준 스펙을 따르며 export 전역 객체를 사용 한다
- 자바스크립트는 함수를 변수로 할당 할 수 있다.
- module1.js
- exports.함수이름 = 함수정의
- var module1 = require('module1');
- module1.함수이름()
- module1.js
  exports.add = function(a,b){return a+b}
  exports.multiply = function(a,b){return a*b}
- module2.js
  var calc = {}
  calc.add = function(a,b){return a+b}
  calc.multiply = function(a,b){return a*b}
  module.exports = calc
`
console.log(data)


