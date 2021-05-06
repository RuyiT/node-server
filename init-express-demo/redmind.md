# express 项目初始化
- 参考： http://shouce.jb51.net/yiqixue-nodejs/book/3.4.html

## 操作
1. 安装Express生成器: npm install -g express-generator
2. 初始化一个项目： express “项目名myblog”
3. cd myblog  -> npm install 安装项目依赖包
4. node bin/www 或者npm start 启动http服务
   应用默认监听的端口是3000，然后访问localhost:3000
5. app.js注册路由 
6. 隐藏掉 app.js里面没用到的代码
7. npm install -g nodemon    --- nodemon是一个自动重启node应用的工具，当监听的文件或监听目录下的文件发生修改时，自动重启应用
   #see https://juejin.cn/post/6844904191316459527

### 初始化
1. npm install --save mysql 
2. npm install --save xss    --- npm install mysql xss --save 两个一起安装

3. 创建db文件夹 -> 创建mysql.js
4. 创建conf文件夹 -> 创建db.js
5. 创建db文件夹 -> 创建mysql.js
6. 创建model文件夹  -> 创建resModel.js   ---数据处理
7. 创建controller文件夹  ->  创建blog.js&user.js   ---逻辑处理
8. 创建utils文件夹 ->  创建cryp.js       ---cryp为md5加密方法

### 登陆功能
1. 使用express-sesion 和 connect-redis
   npm install express-session --save

2. 用req.session保存登陆信息

### redis
#See  https://segmentfault.com/a/1190000015882650
#See      https://cloud.tencent.com/developer/article/1685410
1. https://github.com/MicrosoftArchive/redis/releases  ---下载地址
2. 解压，解压到D:redis目录下
3. 打开一个 cmd 窗口，运行 redis-server.exe redis.windows.conf

4. redis-cli -h 127.0.0.1 -p 6379 -a 123456
       解释  -h IP地址 -p 端口号 -a 密码

-node
4. npm install redis --save
   npm install connect-redis --save
   npm install redis connect-redis --save
5. 然后在db里面创建一个redis.js配置文件

### mysql
#See https://zhuanlan.zhihu.com/p/37152572

### nginx
#See https://www.cnblogs.com/taiyonghai/p/9402734.html

```
location / {
   root html;
   try_files  $uri $uri/ /index.html;
   # proxy_pass http://localhost:8080;
}

location /home/api/ {
   proxy_pass http://localhost:3000/;
   proxy_set_header Host $host;
}
        
```