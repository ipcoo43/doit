var url = require('url')
var curUrl = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=popcon')
var curStr = url.format(curUrl)

console.clear()
console.log('주소 문자열 : ' + curStr)
console.dir(curUrl)