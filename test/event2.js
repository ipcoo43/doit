var Calc = require('./calculator')

console.clear();
var calc1 = new Calc();
calc1.emit('stop');

console.log('Calc에 stop 이벤트 전달함.')