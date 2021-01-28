var fs = require('fs');

console.clear()
var data = fs.readFileSync('./package.json', 'utf8')
console.log(data)