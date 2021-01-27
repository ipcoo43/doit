var nconf = require('nconf')
nconf.env()
var value = nconf.get('os')
console.log('os 환경변수의 값 : ' + value)