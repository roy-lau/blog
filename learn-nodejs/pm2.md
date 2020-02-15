# 	pm2 命令用法及配置

### pm2命令用法及介绍:

```bash
  npm install pm2 -g            # 命令行安装 pm2
  pm2 start app.js -i 4         # 后台运行pm2，启动4核
  pm2 start app.js -i 0         # 后台运行pm2，启动全核
```

也可以把 `max` 参数传递给 `start`
正确的进程数目依赖于Cpu的核心数目

```bash
  pm2 start app.js --name my-api      # 命名进程
  pm2 list            # 显示所有进程状态
  pm2 monit           # 监视所有进程
  pm2 logs            # 显示所有进程日志
  pm2 stop all        # 停止所有进程
  pm2 restart all     # 重启所有进程
  pm2 reload all      # 0秒停机重载进程 (用于 NETWORKED 进程)
  pm2 stop 0          # 停止指定的进程
  pm2 restart 0       # 重启指定的进程
  pm2 startup         # 产生 init 脚本 保持进程活着
  pm2 web             # 运行健壮的 computer API endpoint (http://localhost:9615)
  pm2 delete 0        # 杀死指定的进程
  pm2 delete all      # 杀死全部进程
```

运行进程的不同方式：
```bash
  pm2 start app.js -i max                          # 根据有效CPU数目启动最大进程数目
  pm2 start app.js -i 3                            # 启动3个进程
  pm2 start app.js -x                              # 用fork模式启动 app.js 而不是使用 cluster
  pm2 start app.js -x -- -a 23                     # 用fork模式启动 app.js 并且传递参数 (-a 23)
  pm2 start app.js --name serverone                # 启动一个进程并把它命名为 serverone
  pm2 stop serverone                               # 停止 serverone 进程
  pm2 start app.json                               # 启动进程, 在 app.json里设置选项
  pm2 start app.js -i max -- -a 23                 # 在--之后给 app.js 传递参数
  pm2 start app.js -i max -e err.log -o out.log    # 启动 并 生成一个配置文件
```

PM2在服务器重启后自动运行之前的应用
```bash
  pm2 save # 相当于开机自动启动
```

也可以执行用其他语言编写的app ( fork 模式):
```bash
  pm2 start my-bash-script.sh -x --interpreter bash
  pm2 start my-python-script.py -x --interpreter python
```

0秒停机重载: 这项功能允许你重新载入代码而不用失去请求连接。
注意：仅能用于web应用,运行于Node 0.11.x版本,运行于 cluster 模式（默认模式）
```bash
  pm2 reload all # 全部重启
```
CoffeeScript:
```bash
  pm2 start my_app.coffee
```
列出由 `pm2` 管理的所有进程信息，还会显示一个进程会被启动多少次，因为没处理的异常。
```bash
  pm2 list
```
监视每个node进程的CPU和内存的使用情况。
```bash
  pm2 monit
```

### pm2 [配置](http://pm2.keymetrics.io/docs/usage/application-declaration/)

* [几个vue项目实战部署的例子](https://github.com/roy-lau/vue/tree/deploy)

配置文件例子：

```js
// pm2.config.js
module.exports = {
  "apps" : [{
    "name"        : "vue2-example",
    "cwd"         : "/home/dev/vue2-example/",
    "script"      : "build/dev-server.js",      // 相当于运行了 `node build/dev-server.js`
    "node_args"   : "--harmony",
    "watch"       : true,
    "ignoreWatch" : ["node_modules"],
    "log_date_format"  : "YYYY-MM-DD HH:mm:ss",
    "log_file"   : "./log/vue2.log",
    "error_file" : "./log/vue2-err.log",
    "out_file"   : "./log/vue2-out.log",
    "pid_file"   : "./log/vue2.pid"
  },{
    "name"       : "koa-example",
    "script"     : "./koa-example/app.js",
    "instances"  : "4",
    "log_date_format"  : "YYYY-MM-DD HH:mm:ss",
    "log_file"   : "./log/koa.log",
    "error_file" : "./log/koa-err.log",
    "out_file"   : "./log/koa-out.log",
    "pid_file"   : "./log/koa.pid",
    "exec_mode"  : "cluster_mode",
    "port"       : 3000
  },{
    "name"       : "auto-kill",
    "script"     : "./examples/killfast.js",
    "min_uptime" : "100",
    "exec_mode"  : "fork_mode"
  }]
}
```

参数说明：

* apps： json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用
* name： 应用程序的名称
* cwd： 应用程序所在的目录
* script： 应用程序的脚本路径
* exec_interpreter： 应用程序的脚本类型，可使用的shell、python，默认是nodejs
* min_uptime： 最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启`max_restarts`设置数量
* max_restarts： 设置应用程序异常退出重启的次数，默认15次（从0开始计数）
* autorestart： 默认为true, 发生异常的情况下自动重启
* cron_restart： crontab时间格式重启应用，目前只支持cluster模式;
* restart_delay： 异常重启情况下，延时重启时间
* exec_mode： 应用程序启动模式，可以设置为 `cluster_mode`（集群），默认是fork
* instances：  应用启动实例个数(0和max都是最大实例数)，仅在cluster模式有效 默认为fork；或者 max
* error_file： 自定义应用程序的错误日志文件
* out_file： 自定义应用程序日志文件
* pid_file： 自定义应用程序的pid文件
* watch： 是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
* env 脚本执行前设置的环境变量

运行实例：已上面的 `pm2.config.js` 为例

```bash
pm2 start pm2.config.js
```

tips：

exec_mode： `cluster_mode`集群模式下，**pm2的集群不能执行npm脚本命令(npmr run dev)，只能执行js脚本文件(./app.js)**[参考](https://github.com/Unitech/pm2/issues/4082)
