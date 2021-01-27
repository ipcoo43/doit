var path = require('path')

var directory = ['Users', 'Mars', 'docs']
var dirStr = directory.join()
console.log('dir : ' + dirStr)

var dirStr2 = directory.join(path.sep)
console.log('dir2 : ' + dirStr2)

var filepath = path.join('/Users/mars', 'notepad.exe')
console.log('dir3 : ' + filepath)

var dirname = path.dirname(filepath)
console.log('dirname :' + dirname)
var basename = path.basename(filepath)
console.log('basename : ' + basename)
var extname = path.extname(filepath)
console.log('extname : ' + extname)