# 				nginx安装


安装依赖包
```bash
yum -y install gcc gcc-c++ openssl-devel pcre-devel httpd-tools
```

### 首先要安装 PCRE

下载
```bash
wget http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz
```

解压安装包
```bash
tar zxvf pcre-8.35.tar.gz
```

进入安装包目录
```bash
cd pcre-8.35
```

编译安装
```bash
./configure
make && make install
```

查看pcre版本
```bash
pcre-config --version
```

### 安装 Nginx

下载
```bash
wget https://nginx.org/download/nginx-1.15.3.tar.gz
```

解压
```bash
tar zxvf nginx-1.15.3.tar.gz
```

编译安装
```bash
cd nginx-1.15.3
./configure --prefix=/usr/local/nginx --user=nginx --with-http_stub_status_module --group=nginx --with-http_ssl_module --with-http_mp4_module --with-http_flv_module --with-pcre=/usr/local/src/pcre-8.35
make&make install
```

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
