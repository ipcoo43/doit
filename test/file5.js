var fs = require('fs');

console.clear()
var infile = fs.createReadStream('./test/output.txt', 
{flags:'r'})

infile.on('data', function (data){
  console.log('읽어들인 데이터 : ' + data)
})

infile.on('data', function() {
  console.log('읽기 종료')
})