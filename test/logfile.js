var winston = require('winston')
var winstonDaily = require('winston-daily-rotate-file')
var moment = require('moment')

function timeStampFormat(){
  return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ')
}

var logger = winston.createLogger({ 
  transports: [
    new (winstonDaily)({  // 파일 출력
      name:'info-file',
      filename:'./test/log/server',
      datePattern:'_yyyy-MM-dd.log',
      colorize:false,
      maxSize:5000000,
      maxFiles:1000,
      level:'info',
      showLevel:true,
      json:false,
      timestamp:timeStampFormat
    }),
    new (winston.transports.Console)({ // console창에 출력
      name:'debug-console',
      colorize:true,
      level:'debug',
      showLevel:true,
      json:false,
      timestamp:timeStampFormat
    })
  ]
 })

 logger.debug('디버깅 메시지입니다.')
 logger.error('에러 메시지입니다.') 