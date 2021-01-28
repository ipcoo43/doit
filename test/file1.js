var fs = require('fs');

console.clear()
fs.readFile('./package.json', 'utf8', function(err, data){
  console.log(data)
})