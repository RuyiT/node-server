var express = require('express');
var router = express.Router();
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require('../controller/blog')

const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel')

// 请求的api实际为 '/api/blog/list'
router.get('/list', function(req, res, next) {
  let author = req.query.author || ''
  const keyword = req.query.keyword || ''
  const result = getList(author, keyword)
  return result.then(listData => {
    res.json(
      new SuccessModel(listData)
    ) 
  }).catch(err => {
    console.log(err)
  }) 
});

router.get('/detail', function(req, res, next) {
    res.json({
        errno: 0,
        data: 'ok'
    })
  });

module.exports = router;
