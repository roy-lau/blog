# docker


### run 命令说明：

- `--name 容器名称`
- `-p 主机端口:容器端口`
- `-d`: 后台运行容器，并返回容器ID
- `-v 本机路径:容器路径`：将 主机本机路 径目录挂载到容器的 容器路径（**可以是多个-v**）
- imageID: mysql镜像ID



### nginx

> 安装 nginx
        
    docker pull nginx

> 启动 nginx

    docker run -d -p 3006:80 --name wechat-sell-nginx -v /home/dev/web/wechat-sell:/usr/share/nginx/html nginx

### tomcat

> 安装 tomcat

    docker pull tomcat

> 启动 tomcat

    docker run -d -p 80:8080 --name sell-server -v /home/sell/webapps:/usr/local/tomcat/webapps/ tomcat  

### mysql

> 1、 安装 mysql
    
    docker pull mysql

> 2、 启动 mysql
    
    docker run -d -p 3306:3306 --name mymysql -v /home/dev/web/mysql/conf:/etc/mysql/conf.d -v /home/dev/web/mysql/logs:/logs -v /home/dev/web/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=toor123 mysql

* `-e MYSQL_ROOT_PASSWORD=123456：初始化root用户的密码`

> 3、 进入容器
    
    docker exec -it mysql bash

> 4、 创建新用户(用户名：dev 密码 dev123!)
    
    mysql -u root -p
    CREATE USER 'dev'@'%' IDENTIFIED WITH mysql_native_password BY 'dev123!';

> 5、 给dev用户添加远程登录权限

    GRANT ALL PRIVILEGES ON *.* TO 'dev'@'%';