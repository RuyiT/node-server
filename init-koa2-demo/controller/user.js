const { exec, wscape } = require('../db/mysql')

const login = (username, password) => {
    return new Promise((resolve, reject) => {
      if (username === 'zhangsan' && password === '123') {
        resolve(true)
      }
      reject(false)
    })
    // 先使用假数据
  }

module.exports = {
    login
}
