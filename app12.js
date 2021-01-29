var express = require('express')
var http = require('http')
var static = require('serve-static')
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var expressSession = require('express-session')

var app = express()
var router = express.Router()

app.set('port', process.env.PORT || 3000)
app.use(static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cookieParser())
app.use(expressSession({
  secret:'my key',
  resave:true,
  saveUninitialized:true
}))

router.route('/process/product').get(function( req, res){
  console.log('/process/product 라우팅 함수 호출됨')

  if (req.session.user){
    res.redirect('/html/product.html')
  } else {
    res.redirect('/html/login2.html')
  }
})

router.route('/process/login').post(function( req, res){
  console.log('/process/login 라우팅 함수 호출됨')

  var paramId = req.body.id || req.query.id
  var paramPw = req.body.pw || req.query.pw
  console.log('요청 파라미터 : ' + paramId + ', ' + paramPw)

  if (req.session.user) {
    console.log('이미 로그인되어 있습니다.')
    res.redirect('/html/product.html')
  } else {
    req.session.user = {
      id:paramId,
      name:'소녀시대',
      authorized:true
    }
    res.send(`
      <h1>로그인 성공</h1>
      <p>${paramId}</p><br><br>
      <a href="/process/product">상품 페이지로 이동하기</a>
    `)
  }
})

router.route('/process/logout').get(function( req, res){
  console.log('/process/logout 라우팅 함수 호출됨')

  if (req.session.user){
    console.log('로그 아웃 합니다.')
    req.session.destroy(function(err){
      if (err) {
        console.log('세션 삭제 시 에러 발생')
        return
      }
      console.log('세션 삭제 성공')
      res.redirect('/html/login2.html')
    })
  } else {
    console.log('로그인되어 있지 않습니다.')
    res.redirect('/html/login2.html')
  }
})


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

// 세션이 처리되는 방식
// /process/product 요청 - 상품 사이트 처리 요청
// /process/produect - 저장 확인 - seession 저장소
// session 정보가 있으면 - redirect() - /public/product.htm
// session 정보가 없으면 - redirect() - /public/login2.htm
// 로그인이 성공하면 - /process/login - 로그인 성공 페이지
// 로그아웃 처리 요청 - /process/logout - redirect() - /public/login2.htm