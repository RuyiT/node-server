# koa2 项目初始化
- 参考：  #See https://blog.csdn.net/weixin_30069221/article/details/80562892

## 操作 
1. 安装生成器npm install koa-generator -g
2. 初始化一个项目名： koa2 "项目名 init-koa2-demo"
3. dir ---查看当前文件下的目录
4. cd init-koa2-demo    ---切换到新建的项目里
5. npm install      ---安装依赖
6. package.json  的初始化里面没有cross-env
   需要另外安装 npm install cross-env --save-dev
   然后在script的dev加上 “cross-env NODE_ENV=dev”
7. nodemon dev || npm run dev
8. 浏览器访问 http://localhost:8000/  进入koa2欢迎页

### 登陆功能
1. npm install koa-generic-session koa-redis redis --save      ---安装session,koa-redis,redis插件

### 路由
1. 复用之前代码，如mysql、登陆中间件、 controller、 model
2. npm install mysql xss --save     ---安装mysql、 xss
3. 
