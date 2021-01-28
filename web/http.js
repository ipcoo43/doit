var http = require('http')

var server = http.createServer() // 웹 서버 객체 생성

var port = 3000
server.listen(port, function(){ // port로 실행 대기
  console.log('웹서버가 실행되었습니다.' + port)
})

// listen(port [, hostname][, backlog][,callback]) : 실행 대기
// close([callback]) : 종료