var http = require('http')

var server = http.createServer()

var host = 'localhost'
var port = 3000
server.listen(port, host, 50000, function() {
  console.log('웹서버 실행됨 : ' + port)
})

server.on('connection', function(socket){
  console.log('클라이언트가 접속했습니다.')
})

server.on('request', function(req, res) {
  console.log('클라이언트 요청이 들어왔습니다.')
  //console.dir(req)
  res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
  res.write('<h1>웹서버로부터 받은 응답</h1>')
  res.end()
})

// 요청을 받으면 request 이벤트가 발생되고
// write() 메소드 등을 이용해 응답 전송
// writeHead(statusCode [, statusMessage][, headers]) : 응답으로 보낼 헤더를 만든다.
// write(chunk[, encoding][, clallback]) : 응답 본문(body) 데이터를 만든다. 여러번 호출 될 수 있다.
// end([data][, encoding][, callback]) : 클라이언트로 응답을 전송 한다.

// 응답 과정 
// 클라이언트가 3000번 포트로 요청 한다
// 이때, http 모듈을 사용 해서 요청이 된다.
// connection event : 클라이언트 연결
// request event : 클라이언트 요청
// 요청에 대해서 write()로 전달 할 수 있다.
// close event : 클라이언트 연결 종료