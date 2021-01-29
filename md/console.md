- console Object
  - console은 어디서든 사용할 수 있는 전역 객체로 로그를 출력할 수 있도록 한다.
- console : 콘솔 창에 결과를 보여주는 객체
- process : 프로세스의 실행에 대한 정보를 다루는 객체
- exports : 모듈을 다루는 객체

- console.log('숫자 보여주기 : %d', 10)
- console.log('문자열 보여주기 : %s', '문자열')
- console.log('Json 객체 보여주기 : %j', {name:'console'})

- console Object의 주요 Method
  - dir(object) : 자바스크립트 객체의 속성들을 출력 한다.
  - time(id) : 실행 시간을 측정하기 위한 시작 시간을 기록 한다.
  - timeEnd(id) : 실행 시간을 측정하기 위한 끝 시간을 기록 한다.

- 코드 실행한 시간 측정하기
  - var result = 0
  - console.time('duration_sum')
  - for(var i=1; i<=100; i++){
  -   result += i
  - }
  - console.timeEnd('duration_sum')
  - console.log('1부터 1000까지 더한 결과물 : %d', result)