var http = require('http')
var fs = require('fs')

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

  // var filename = './web/test.html'
  var filename = './img/3.png'
  var infile = fs.createReadStream(filename, {flags: 'r'})

  infile.pipe(res)
 
})