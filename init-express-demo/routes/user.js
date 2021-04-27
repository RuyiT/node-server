var express = require('express');
var router = express.Router();
const { login } = require('../controller/user')
const {
    SuccessModel,
    ErrorModel
  } = require('../model/resModel')

// post请求
router.post('/login', function(req, res, next) {
    const { username, password } = req.body
    const result = login(username, password)
    return result.then(data => {
        if (data.username) {
            // 设置 session
            req.session.username = data.username
            req.session.realname = data.realname
            res.json(new SuccessModel())
            return
        } 
        res.json(new ErrorModel('登陆失败'))
    })
    // const { username, password } = req.body
    // res.json({
    //     errno: 0,
    //     data: {
    //         username,
    //         password
    //     }
    // })
});

// 测试登陆
router.get('/login-test', function(req, res, next) {
    // 测试session中间件
    if (req.session.username) {
        res.json({
            errno: 0,
            msg: '已登陆'
        })
        return 
    }
    res.json({
        errno: -1,
        msg: '未登陆'
    })
 });

// 放开就可以测试session
// router.get('/session-test', function(req, res, next) {
//     // 测试session中间件
//     const session = req.session
//     if (session.viewNum == null) {
//         session.viewNum = 0
//     }
//     session.viewNum++
//     res.json({
//         errno: 0,
//         data: {
//             viewNum: session.viewNum
//         }
//     })
// });

module.exports = router;
