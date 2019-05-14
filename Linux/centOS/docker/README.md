# docker

## [相关命令](./command.md)
## [安装使用（nginx，tomcat，mysql，oracle 11g）](./install.md)
## [容器使用](./container-usage.md)
## [镜像使用](./image-usage.md)
## [容器链接](./container-connection.md)



### hello word

> 使用 `docker` 在 `ubuntu:15.10` 下输出 `"Hello world"`

```bash
~$ docker run ubuntu:15.10 /bin/echo "Hello world"
Hello world
```

参数解析：
- **docker** : Docker 的二进制执行文件。
- **run** :与前面的 docker 组合来运行一个容器。
- **ubuntu:15.10** 指定要运行的镜像，Docker首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。
- **/bin/echo "Hello world"** : 在启动的容器里执行的命令

_以上命令完整的意思可以解释为： Docker 以 ubuntu15.10 镜像创建一个新容器，然后在容器里执行 `bin/echo "Hello world"`，然后输出结果。_


##### 运行交互式的容器

> 通过docker的两个参数 `-i -t`，让docker运行的容器实现 "对话" 的能力

```bash
~$ docker run -i -t ubuntu:15.10 /bin/bash
root@dc0050c7942:/#
```

各个参数解析：

- **-t** :在新容器内指定一个伪终端或终端。

- **-i** :允许你对容器内的标准输入 (STDIN) 进行交互。

_此时我们已进入一个 ubuntu15.10系统的容器
我们尝试在容器中运行命令 `cat /proc/version` 和ls分别查看当前系统的版本信息和当前目录下的文件列表
我们可以通过运行 `exit` 命令或者使用 `CTRL+D` 来退出容器。_