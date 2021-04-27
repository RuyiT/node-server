var express = require('express');
var router = express.Router();


// 请求的api实际为 '/api/blog/list'
router.get('/list', function(req, res, next) {
  res.json({
      errno: 0,
      data: [1,2,3]
  })
});

router.get('/detail', function(req, res, next) {
    res.json({
        errno: 0,
        data: 'ok'
    })
  });

module.exports = router;
