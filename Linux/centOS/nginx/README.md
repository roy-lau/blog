#  nginx 用法 http://www.nginx.org/

* [nginx安装](./install.md)
* [nginx配置说明](./config.md)

运行nginx
```bash
ln /usr/local/nginx/sbin/nginx /usr/sbin  # 软连接
nginx # 运行成功后可以通过浏览器访问了
```

查看nginx运行的端口
```bash
netstat -anptu |grep nginx
```
检查配置文件nginx.conf的正确性命令
```bash
nginx -t
nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful
```

常用的几个命令
```bash
nginx -s reload            # 重新载入配置文件
nginx -s reopen            # 重启 Nginx
nginx -s stop              # 停止 Nginx
/usr/local/nginx/conf/nginx.conf # Nginx配置文件所在位置
```
