var express = require('express')
var http = require('http')
var static = require('serve-static')
var path = require('path')
var bodyParser = require('body-parser')
var expressErrorHandler = require('express-error-handler')

var app = express()
var router = express.Router()

app.set('port', process.env.PORT || 3000)
app.use(static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

router.route('/process/login/:name').post(function(req, res){
  console.log('/process/login 라우팅 함수에서 받음')

  var paramName = req.params.name
  
  var paramId = req.body.id || req.query.id
  var paramPw = req.body.pw || req.query.pw

  res.send(`
    <h>서버에서 로그인 응답</h>
    <div><p> ${paramName} </p></div>
    <div><p> ${paramId} </p></div>
    <div><p> ${paramPw} </p></div>
  `)
})

var errorHandler = expressErrorHandler({
  static: {
    '404':'./public/html/404.html'
  }
})

// app.all('*', function(req, res){
//   res.status(404).send(`<h1>요청 페이지는 없습니다.</h1>`)
// })

app.use(expressErrorHandler.httpError(404))
app.use(errorHandler)

app.use('/', router)

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('express web server : ' + app.get('port'))
})