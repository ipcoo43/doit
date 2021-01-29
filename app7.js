var express = require('express')
var http = require('http')
var static = require('serve-static')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

app.set('port', process.env.PORT || 3000)
app.use(static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(function(req, res, next){
  console.log('첫번째 미들웨어 호출됨')
  
  var paramId = req.body.id || req.query.id
  var paramPw = req.body.pw || req.query.pw
  
  res.send(`
    <h1>홈페이지 입니다.</h1>
    <img src="/images/house.png" width="50">
    <h3> ${paramId} </h3>
    <h3> ${paramPw} </h3>
  `) 

})

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('express web server : ' + app.get('port'))
})