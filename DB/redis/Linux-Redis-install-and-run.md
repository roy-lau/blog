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
```


<details>
  <summary>配置</summary>
<img src="./imgs/reids-config-dir.png" alt="redis 配置" />
</details>

```bash
./utils/install_server.sh
# 打开配置文件
vim /etc/redis/6379.conf
# 修改ip
bind 127.0.0.1 改为 当前服务器的ip
```

运行

```bash
redis-cli -h 服务器的ip
ping
# 如果是在本机上运行，直接`redis-cli`就可以了
```