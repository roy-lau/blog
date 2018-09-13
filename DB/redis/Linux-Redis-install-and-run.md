# 							 redis 安装 配置&& 运行

下载
```bash
 wget https://github.com//antirez/redis/archive/4.0.10.tar.gz
```

解压
```bash
tar zxf 4.0.10.tar.gz
```

安装
```bash
cd ./redis-4.0.10
make && make install
./utils/install_server.sh # 6下回车
```

### 服务器端

重启redis
```bash
redis-cli shutdown
```
启动服务器
```bash
redis-server ./redis.conf
```

**如何后台运行Redis服务器（守护进程）？**

1、 配置
```bash
vim sentinel.conf

# 加入或修改这三行
protected-mode yes  # 使外网可以访问
daemonize yes 		# 后台运行
logfile "/var/log/sentinel_log.log"  # 设置日志文件的位置
```

2、 启动服务器
```bash
redis-server sentinel.conf --sentinel # 后台启动
ps -ef|grep sentinel 			# 查看是否运行成功
cat /var/log/sentinel_log.log 	# 查看日志
```


### 客户端


<details>
  <summary>配置</summary>
<img src="./imgs/reids-config-dir.png" alt="redis 配置" />
</details>



访问Redis

```bash
# 直接输入redis-cli， 默认是127.0.0.1：6379，无密码
# 注： 守护进程的默认端口是26379，无密码
redis-cli -h 服务器的ip -p 端口 -a 密码
ping
```