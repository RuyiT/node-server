const env = process.env.NODE_ENV // 环境参数  在package.json的 scrpit里

 // 配置
let MYSQL_CONF
let REDIS_CONF

// console.log('env---:',process.env)
if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost', // 域，线上用的话 写线上用的地址
    user: 'root',
    password: 'a123456',
    port: '3306',
    database: 'mysql'
  },
  // redis
  REDIS_CONF = {
      port: 6379,
      host: '127.0.0.1' // 本机地址
  }
}

if (env === 'production') {
    MYSQL_CONF = {
        host: 'localhost', // 域，线上用的话 写线上用的地址
        user: 'root',
        password: 'a123456',
        port: '3306',
        database: 'mysql'
    },
    // redis
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1' // 本机地址
    }
}
MYSQL_CONF = {
  host: 'localhost', // 域，线上用的话 写线上用的地址
  user: 'root',
  password: 'a123456',
  port: '3306',
  database: 'mysql'
},
// redis
REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1' // 本机地址
}
module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}