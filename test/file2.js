var fs = require('fs');

var curStr = `This is data`
console.clear()
fs.writeFile('./test/output.txt', curStr, function(err){
  if (err) {
    console.log('에러 발생')
    console.dir(err)
    return
  }
  console.log('Finished writing data to file')
})

fs.readFile('./test/output.txt','utf8', function(err, data){
  if (err) {
    console.log('에러 발생')
    console.dir(err)
    return
  }
  console.log(data)
})