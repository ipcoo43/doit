var express = require('express')
var http = require('http')
var static = require('serve-static')
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var app = express()
var router = express.Router()

app.set('port', process.env.PORT || 3000)
app.use(static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cookieParser())

router.route('/process/setUserCookie').get(function(req, res){
  console.log('/process/setUserCookie 라우팅 함수 호출됨')

  res.cookie('user', {
    id:'mike',
    name:'소녀시대', 
    authorization:true
  })

  res.redirect('/process/showCookie')
})

router.route('/process/showCookie').get(function(req, res){
  console.log('/process/showCookie 라우팅 함수 호출됨')

  res.send(req.cookies)
})

app.use('/', router)

app.all('*', function(req, res){
  res.status(404).send(`<h1>요청 페이지는 없습니다.</h1>`)
})

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('express web server : ' + app.get('port'))
})

// 쿠키는 클라이언트 웹 브라우저에 저장되는 정보
// 세션은 웹 서버에 저장되는 정보