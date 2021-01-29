var express = require('express')
var http = require('http')

var app = express()

app.set('port', process.env.PORT || 3000)

app.use(function(req, res, next){
  console.log('첫번째 미들웨어 호출됨')
  
  var userAgent = req.header('User-Agent')
  var paramName = req.query.name

    res.send(`
      <h3>서버에서 응답 User-Agent : ${userAgent} </h3> 
      <h3> Param Name : ${paramName} </h3>
    `) 

})

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('express web server : ' + app.get('port'))
})

// query : client GET 방식으로 전송한 요청 파라미터 확인 req.query.name
// body : client POST 방식으로 전송한 요청 파라미터 확인 단 body-parser 외장 모듈 사용 req.body.name
// header(name) : 헤더 확인
// 파라미터를 전달하고 그 파라미터를 다시 응답으로 받을 수 있음