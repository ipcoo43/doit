var express = require('express')
var http = require('http')

var app = express()

app.set('port', process.env.PORT || 3000)

app.use(function(req, res, next){
  console.log('첫번째 미들웨어 호출됨')
  res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
  res.end('<h1>서버에서 응답한 결과 입니다.</h1>')
})

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('express web server : ' + app.get('port'))
} ) 

// express 모듈에서 app 객체를 생성하고
// app 객체를 이용 해서 createServer(app) 실행한다.
// 클라이언트는 3000번 포트로 접근하여 요청 한다.
// 이 요청은 미들웨어에게 요청이 먼저 들어 온다.
// 미들웨어는 클라이언트에게 응답을 해 준다.