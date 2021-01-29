var express = require('express')
var http = require('http')
var static = require('serve-static')
var path = require('path')

var app = express()

app.set('port', process.env.PORT || 3000)
app.use(static(path.join(__dirname, 'public')))
// app.use('/public', static(path.join(__dirname, 'public')))

app.use(function(req, res, next){
  console.log('첫번째 미들웨어 호출됨')
  
    res.send(`
      <h1>홈페이지 입니다.</h1>
      <img src="/images/house.png" width="50">
    `) 

})

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('express web server : ' + app.get('port'))
})