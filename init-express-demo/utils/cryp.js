const crypto = require('crypto')

// 秘钥
const SECRET_KEY = 'WJjol_8876#'

// MD5 加密
function md5() {
    let md5 = crypto.createHast('md5')
    return md5.update(content).digest('hex')
}

// 加密函数
function genPassword(password) {
    const str = `password=${password}&key=${SECRET_KEY}`
    return md5(str)
}

module.exports = {
    genPassword
}