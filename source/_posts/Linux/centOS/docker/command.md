# docker 相关命令

* [相关命令](./command.md)
* [安装使用（nginx，tomcat，mysql，oracle 11g）](./install.md)
* [容器使用](./container-usage.md)
* [镜像使用](./image-usage.md)
* [容器链接](./container-connection.md)


### run 命令说明：

语法

	docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

OPTIONS说明：

- `--name 容器名称`: 为容器指定一个名称
- `-p 主机端口:容器端口`: 端口映射，格式为：主机(宿主)端口:容器端口
- `-d`: 后台运行容器，并返回容器ID
- `-v 本机路径:容器路径`：将 主机本机路 径目录挂载到容器的 容器路径（**可以是多个-v**）
- `-a stdin`: 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项；
- `-i`: 以交互模式运行容器，通常与 -t 同时使用；
- `-t`: 为容器重新分配一个伪输入终端，通常与 -i 同时使用；
- `--dns 8.8.8.8`: 指定容器使用的DNS服务器，默认和宿主一致；
- `--dns-search example.com`: 指定容器DNS搜索域名，默认和宿主一致；
- `-h "mars"`: 指定容器的hostname；
- `-e username="ritchie"`: 设置环境变量；
- `--env-file=[]`: 从指定文件读入环境变量；
- `--cpuset="0-2" or --cpuset="0,1,2"`: 绑定容器到指定CPU运行；
- `-m` :设置容器使用内存最大值；
- `--net="bridge"`: 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型；
- `--link=[]`: 添加链接到另一个容器；
- `--expose=[]`: 开放一个端口或一组端口； 

### 容器 命令说明
- `docker start`: 启动一个或多个已经被停止的容器
- `docker stop`: 停止一个运行中的容器
- `docker restart`: 重启容器
- `docker kill`: 杀死
- `docker rm`: 删除
- `docker exec `
    - `-d` :分离模式;在后台运行
    - `-i` :即使没有附加也保持 STDIN 打开
    - `-t` :分配一个伪终端
- `docker pause` :暂停容器中所有的进程
- `docker unpause` :恢复容器中所有的进程
- `docker create` ：创建一个新的容器但不启动它
