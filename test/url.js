var url = require('url')
var querystring = require('querystring')

var urlStr = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=popcon'

var curUrl = url.parse(urlStr)

console.clear()
console.dir(curUrl)

console.log('query : ' + curUrl.query)

var curStr = url.format(curUrl)
console.log('url : ' + curStr)

var params = querystring.parse(curUrl.query)
console.log('검색어 : ' + params.query)