const mysql = require('mysql')
const {
  MYSQL_CONF
} = require('../conf/db')

// 创建连接对象
console.log('MYSQL_CONF', MYSQL_CONF)
const con = mysql.createConnection(
  MYSQL_CONF
)

// 开始连接
// con.connect()

con.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + con.threadId);
});
// 统一执行 sql 的函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        console.log('000000')
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}

module.exports = {
  exec
}