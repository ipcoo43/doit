var express = require('express');
var http = require('http')

var app = express();

app.set('port', process.env.PORT || 3000)

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('express로 웹 서버를 실행함 : ' + app.get('port'))
})

// app 객체의 메소드
// set(name, value) : 서버 설정을 위한 속성 지정
// get(name) : 서버 설정을 위해 지정한 속성을 꺼내 옴
// use([path,]function[,function...]) : 미들웨어 함수를 사용하도록 한다.
// get([path,]function) : 특정 패스로 요청된 정로를 처리 한다.
// app 개채의 속성
// env : 서버 모드를 설정 한다.
// views : 뷰들이 들어 있는 폴더 또는 폴더 배열을 설정 한다.
// view engine : 디폴트로 사용할 뷰 엔진을 설정 한다.

// 미들웨어는 중간에 요청을 처리하고 라우터는 요청 패스에 따라 분기하여 처리 한다
// 클라이언트 요청 -> 미들웨어 -> 라우터 -> 클라이언트 응답
// 미들웨어 : 미들웨어 #0 next() -> 미들웨어 #1 next() -> 미들웨어 #2 next()
// app 객체 : 미들웨어 설정 : use(), 라우터 설정 : get()
// 라우터 : 요청패스(/), 요청패스(/users)