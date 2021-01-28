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

var data = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>응답 페이지</title>
</head>
<body>
  <h1>NodeJs로부터의 응답 페이지 </h1>
</body>
</html>
`
server.on('request', function(req, res) {
  console.log('클라이언트 요청이 들어왔습니다.')
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
  // res.write(data)
  res.write(`./test.html`)
  res.end()
})