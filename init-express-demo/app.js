var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const RedisStore =  require('connect-redis')(sesion)

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog')
const userRouter = require('./routes/user')

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


// 中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// redis使用
const redisClient = require('./db/redis')
const sessionStore = new RedisStore({
  client: redisClient
})


// 解析session 必须在注册路由前面
app.use(session({ // 配置参数
  secret: 'WJjol_88768787555#',  //秘钥
  cookie: {
    path: '/', // 设置为根目录，所有路由就都可以用
    httpOnly: true, // 只能后端操作
    // 以上两个为默认配置，可注释
    maxAge: 24 * 60 * 60 * 1000, // 生效时间 
  },
  store: sessionStore // 可以把session直接存在redis中，不这样的话session就存在内存中
}))


// 注册路由
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
