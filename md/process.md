- process Object : 프로세스의 정보를 다루는 객체
  - argv : 프로세스를 실행할 때 전달되는 파라미터(매개변수) 정보
  - env : 환경 변수 정보
  - exit() : 프로세스를 끝내는 메소드
<pre><code>
console.log('argv 속성의 파라미터' + process.argv.length)
console.dir(process.argv)

process.argv.forEach(function(item, index){
  console.log(index + ':' + item)
})
</code></pre>