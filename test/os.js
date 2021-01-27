var os = require('os');

console.log('hostname : ' + os.hostname());
console.log('memory : ' + os.freemem())
console.log('tmpdir : ' + os.tmpdir())
console.log('endianness : ' + os.endianness())
console.log('type : ' + os.type());
console.log('platform : ' + os.platform())
console.log('arch : ' + os.arch())
console.log('release : ' + os.release())
console.log('uptime : ' + os.uptime())
console.log('loadavg : ' + os.loadavg())
console.log('totalmem : ' + os.totalmem())
console.log('cpus : ' + os.cpus())
console.log('networInterfaces : ' + os.networkInterfaces())
console.log('EOL : ' + os.EOL)