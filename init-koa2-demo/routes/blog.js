const router = require('koa-router')()

router.prefix('/api/blog')

router.get('/list', async function (ctx, next) {
  const query = ctx.query // 请求路径上带的参数
  ctx.body = {
    errno: 0,
    query,
    data: ['获取博客列表']
  }
})


module.exports = router
