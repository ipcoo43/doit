var nconf = require('nconf')
var value = nconf.get('os')
console.log('os 환경변수의 값 : ' + value)