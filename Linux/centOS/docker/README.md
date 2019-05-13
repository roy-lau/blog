# docker

## [安装使用（nginx，tomcat，mysql）](./install.md)


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


### Docker 容器使用


##### 运行一个web应用

> docker容器中运行一个 Python Flask 应用来运行一个web应用。

```bash
~# docker pull training/webapp  # 载入镜像
~# docker run -d -P training/webapp python app.py
```

参数说明:

- **-d** :让容器在后台运行。

- **-P** :将容器内部使用的网络端口映射到我们使用的主机上。

##### 查看 WEB 应用容器

> 使用 docker ps 来查看我们正在运行的容器：

```bash
~#  docker ps
CONTAINER ID        IMAGE               COMMAND             ...        PORTS                 
d3d5e39ed9d3        training/webapp     "python app.py"     ...        0.0.0.0:32769->5000/tcp
```

Docker 开放了 5000 端口（默认 Python Flask 端口）映射到主机端口 32769 上。
最后，可以通过浏览器访问WEB应用

也可以通过 `-p` 参数来设置不一样的端口：

```bash
~$ docker run -d -p 5000:5000 training/webapp python app.py
```

> `docker ps`查看正在运行的容器

```bash
~#  docker ps
CONTAINER ID        IMAGE                             PORTS                     NAMES
bcd87f08bf29        training/webapp     ...        0.0.0.0:5000->5000/tcp    wizardly_chandrasekhar
d3d5e39ed9d3        training/webapp     ...        0.0.0.0:32769->5000/tcp   xenodochial_hoov
```

容器内部的 5000 端口映射到我们本地主机的 5000 端口上。

##### 网络端口的快捷方式

通过 `docker ps` 命令可以查看到容器的端口映射，docker 还提供了另一个快捷方式 `docker port`，使用 `docker port` 可以查看指定 （ID 或者名字）容器的某个确定端口映射到宿主机的端口号。

上面创建的 web 应用容器 ID 为 bcd87f08bf29 名字为 wizardly_chandrasekhar。

使用 `docker port bcd87f08bf29` 或 `docker port wizardly_chandrasekhar` 来查看容器端口的映射情况。

```bash
~$ docker port bcd87f08bf29
5000/tcp -> 0.0.0.0:5000

~$ docker port wizardly_chandrasekhar
5000/tcp -> 0.0.0.0:5000
```

##### 查看 WEB 应用程序日志

> `docker logs [ID或者名字] `可以查看容器内部的标准输出。

```bash
~$ docker logs -f bcd87f08bf29
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
192.168.239.1 - - [09/May/2016 16:30:37] "GET / HTTP/1.1" 200 -
192.168.239.1 - - [09/May/2016 16:30:37] "GET /favicon.ico HTTP/1.1" 404 -

-f: 让 docker logs 像使用 tail -f 一样来输出容器内部的标准输出。
```

从上面，我们可以看到应用程序使用的是 5000 端口并且能够查看到应用程序的访问日志。

##### 查看WEB应用程序容器的进程

> `docker top` 来查看容器内部运行的进程

```bash
~$ docker top wizardly_chandrasekhar
UID     PID         PPID          ...       TIME                CMD
root    23245       23228         ...       00:00:00            python app.py
```

使用 `docker inspect` 来查看 Docker 的底层信息。它会返回一个 JSON 文件记录着 Docker 容器的配置和状态信息。

```bash
~$ docker inspect wizardly_chandrasekhar
[
    {
        "Id": "bcd87f08bf297b5964943134aa6d373e355c286db9b9885b1f60b6e8f82b2b85",
        "Created": "2018-09-17T01:41:26.174228707Z",
        "Path": "python",
        "Args": [
            "app.py"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 23245,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2018-09-17T01:41:26.494185806Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
......
```

##### 停止 WEB 应用容器

```bash
~$ docker stop wizardly_chandrasekhar   
wizardly_chandrasekhar
```

##### 重启WEB应用容器

> 已经停止的容器，我们可以使用命令 `docker start` 来启动。

```bash
~$ docker start wizardly_chandrasekhar
wizardly_chandrasekhar
```

> docker ps -l 查询最后一次创建的容器：

```bash 
# docker ps -l 
CONTAINER ID        IMAGE                             PORTS                     NAMES
bcd87f08bf29        training/webapp     ...        0.0.0.0:5000->5000/tcp    wizardly_chandrasekhar
```

正在运行的容器，我们可以使用 `docker restart` 命令来重启

##### 移除WEB应用容器

> 我们可以使用 `docker rm` 命令来删除不需要的容器

```bash
~$ docker rm wizardly_chandrasekhar  
wizardly_chandrasekhar
```

删除容器时，容器必须是停止状态，否则会报如下错误

```bash
~$ docker rm wizardly_chandrasekhar
Error response from daemon: You cannot remove a running container bcd87f08bf297b5964943134aa6d373e355c286db9b9885b1f60b6e8f82b2b85. Stop the container before attempting removal or force remove
```


### Docker 镜像使用

当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载，默认是从 Docker Hub 公共镜像源下载。

> 主要学习点：

    1、管理和使用本地 Docker 主机镜像
    2、创建镜像

列出镜像列表

我们可以使用 `docker images` 来列出本地主机上的镜像。

```bash
~$ docker images           
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
ubuntu              14.04               90d5884b1ee0        5 days ago          188 MB
php                 5.6                 f40e9e0f10c8        9 days ago          444.8 MB
nginx               latest              6f8d099c3adc        12 days ago         182.7 MB
mysql               5.6                 f2e8d6c772c0        3 weeks ago         324.6 MB
httpd               latest              02ef73cf1bc0        3 weeks ago         194.4 MB
ubuntu              15.10               4e3b13c8a266        4 weeks ago         136.3 MB
hello-world         latest              690ed74de00f        6 months ago        960 B
training/webapp     latest              6fae60ef3446        11 months ago       348.8 MB
```

各个选项说明:

- **REPOSITORY** ：表示镜像的仓库源
- **TAG** ：镜像的标签
- **IMAGE ID** ：镜像ID
- **CREATED** ：镜像创建时间
- **SIZE** ：镜像大小

同一仓库源可以有多个 `TAG` ，代表这个仓库源的不同个版本，如ubuntu仓库源里，有 `15.10、14.04` 等多个不同的版本，我们使用 `REPOSITORY:TAG`
 来定义不同的镜像。

> 如果要使用版本为15.10的ubuntu系统镜像来运行容器时，命令如下：

```bash
~$ docker run -t -i ubuntu:15.10 /bin/bash 
root@d77ccb2e5cca:/#
```

> 如果要使用版本为14.04的ubuntu系统镜像来运行容器时，命令如下：

```bash
~$ docker run -t -i ubuntu:14.04 /bin/bash 
root@39e968165990:/# 
```

如果不指定一个镜像的版本标签，例如只使用 `ubuntu，docker` 将默认使用 `ubuntu:latest` 镜像。

##### 获取一个新的镜像

> 当我们在本地主机上使用一个不存在的镜像时 Docker 就会自动下载这个镜像。如果我们想预先下载这个镜像，我们可以使用 docker pull 命令来下载它。

```bash
~$ docker pull ubuntu:13.10
13.10: Pulling from library/ubuntu
6599cadaf950: Pull complete 
23eda618d451: Pull complete 
f0be3084efe9: Pull complete 
52de432f084b: Pull complete 
a3ed95caeb02: Pull complete 
Digest: sha256:15b79a6654811c8d992ebacdfbd5152fcf3d165e374e264076aa435214a947a3
Status: Downloaded newer image for ubuntu:13.10
```

下载完成后，我们可以直接使用这个镜像来运行容器。

##### 查找镜像

> Docker Hub 网址为： https://hub.docker.com/

可以使用 `docker search` 命令来搜索镜像。比如我们需要一个 `httpd` 的镜像来作为我们的 web 服务。我们可以通过 `docker search` 命令搜索 httpd 来寻找适合我们的镜像。

	~$  docker search httpd

- **NAME** :镜像仓库源的名称
- **DESCRIPTION** :镜像的描述
- **OFFICIAL** :是否docker官方发布

##### 拖取镜像

> 使用命令 docker pull 来下载镜像。

```bash
~$ docker pull httpd
Using default tag: latest
latest: Pulling from library/httpd
8b87079b7a06: Pulling fs layer 
a3ed95caeb02: Download complete 
0d62ec9c6a76: Download complete 
a329d50397b9: Download complete 
ea7c1f032b5c: Waiting 
be44112b72c7: Waiting
```

下载完成后，就可以使用这个镜像了。

	~$ docker run httpd

##### 创建镜像

从docker镜像仓库中下载的镜像不能满足需求时，可以通过以下两种方式对镜像进行更改。

1. 从已经创建的容器中更新镜像，并且提交这个镜像
2. 使用 Dockerfile 指令来创建一个新的镜像

##### 更新镜像

> 更新镜像之前，需要使用镜像来创建一个容器。

```bash
~$ docker run -t -i ubuntu:15.10 /bin/bash
root@e218edb10161:/# 
```

在运行的容器内使用 `apt-get update` 命令进行更新。

在完成操作之后，输入 `exit` 命令来退出这个容器。

此时ID为e218edb10161的容器，根据更改的容器。通过命令 `docker commit` 来提交容器副本。

```bash
~$ docker commit -m="has update" -a="firstDocker" e218edb10161 firstDocker/ubuntu:v2
sha256:70bf1840fd7c0d2d8ef0a42a817eb29f854c1af8f7c59fc03ac7bdee9545aff8
```

各个参数说明：
- **-m** :提交的描述信息
- **-a** :指定镜像作者
- **e218edb10161** : 容器ID
- **firstDocker/ubuntu:v2** :指定要创建的目标镜像名

我们可以使用 docker images 命令来查看我们的新镜像 `firstDocker/ubuntu:v2`：

```bash
~$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
firstDocker/ubuntu       v2                  70bf1840fd7c        15 seconds ago      158.5 MB
ubuntu              14.04               90d5884b1ee0        5 days ago          188 MB
php                 5.6                 f40e9e0f10c8        9 days ago          444.8 MB
nginx               latest              6f8d099c3adc        12 days ago         182.7 MB
mysql               5.6                 f2e8d6c772c0        3 weeks ago         324.6 MB
httpd               latest              02ef73cf1bc0        3 weeks ago         194.4 MB
ubuntu              15.10               4e3b13c8a266        4 weeks ago         136.3 MB
hello-world         latest              690ed74de00f        6 months ago        960 B
training/webapp     latest              6fae60ef3446        12 months ago       348.8 MB
```

使用新镜像 `firstDocker/ubuntu` 来启动一个容器

```bash
~$ docker run -t -i firstDocker/ubuntu:v2 /bin/bash                            
root@1a9fbdeb5da3:/#
```

##### 构建镜像

使用命令 `docker build` ， 从零开始来创建一个新的镜像。需要创建一个 **Dockerfile** 文件，其中包含一组指令来告诉 Docker 如何构建镜像。

```bash
~$ cat Dockerfile 
FROM    centos:6.7
MAINTAINER      Fisher "fisher@sudops.com"
RUN     /bin/echo 'root:123456' |chpasswd
RUN     useradd firstDocker
RUN     /bin/echo 'firstDocker:123456' |chpasswd
RUN     /bin/echo -e "LANG=\"en_US.UTF-8\"" >/etc/default/local
EXPOSE  22
EXPOSE  80
CMD     /usr/sbin/sshd -D
```

_每一个指令都会在镜像上创建一个新的层，每一个指令的前缀都必须是大写的。_
_第一条FROM，指定使用哪个镜像源_
_RUN 指令告诉docker 在镜像内执行命令，安装了什么。。。_
_然后，使用 Dockerfile 文件，通过 docker build 命令来构建一个镜像。_

```bash
~$ docker build -t firstDocker/centos:6.7 .
Sending build context to Docker daemon 17.92 kB
Step 1 : FROM centos:6.7
 ---&gt; d95b5ca17cc3
Step 2 : MAINTAINER Fisher "fisher@sudops.com"
 ---&gt; Using cache
 ---&gt; 0c92299c6f03
Step 3 : RUN /bin/echo 'root:123456' |chpasswd
 ---&gt; Using cache
 ---&gt; 0397ce2fbd0a
Step 4 : RUN useradd firstDocker
......
```

参数说明：

- **-t** ：指定要创建的目标镜像名
- **.** ：Dockerfile 文件所在目录，可以指定Dockerfile 的绝对路径

使用 `docker images` 查看创建的镜像已经在列表中存在,镜像ID为 `860c279d2fec`

```bash
~$ docker images 
REPOSITORY          TAG                 IMAGE ID            CREATED              SIZE
firstDocker/centos       6.7                 860c279d2fec        About a minute ago   190.6 MB
firstDocker/ubuntu       v2                  70bf1840fd7c        17 hours ago         158.5 MB
ubuntu              14.04               90d5884b1ee0        6 days ago           188 MB
php                 5.6                 f40e9e0f10c8        10 days ago          444.8 MB
nginx               latest              6f8d099c3adc        12 days ago          182.7 MB
mysql               5.6                 f2e8d6c772c0        3 weeks ago          324.6 MB
httpd               latest              02ef73cf1bc0        3 weeks ago          194.4 MB
ubuntu              15.10               4e3b13c8a266        5 weeks ago          136.3 MB
hello-world         latest              690ed74de00f        6 months ago         960 B
centos              6.7                 d95b5ca17cc3        6 months ago         190.6 MB
training/webapp     latest              6fae60ef3446        12 months ago        348.8 MB
```

使用新的镜像来创建容器

```bash
~$ docker run -t -i firstDocker/centos:6.7  /bin/bash
[root@41c28d18b5fb /]# id firstDocker
uid=500(firstDocker) gid=500(firstDocker) groups=500(firstDocker)
```

##### 设置镜像标签

使用 `docker tag` 命令，为镜像添加一个新的标签。

```bash
~$ docker tag 860c279d2fec firstDocker/centos:dev
```

`docker tag` 镜像ID，这里是 `860c279d2fec` ,用户名称、镜像源名(repository name)和新的标签名(tag)。

使用 `docker images` 命令可以看到，ID为860c279d2fec的镜像多一个标签。

```bash
~$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
firstDocker/centos       6.7                 860c279d2fec        5 hours ago         190.6 MB
firstDocker/centos       dev                 860c279d2fec        5 hours ago         190.6 MB
firstDocker/ubuntu       v2                  70bf1840fd7c        22 hours ago        158.5 MB
ubuntu              14.04               90d5884b1ee0        6 days ago          188 MB
php                 5.6                 f40e9e0f10c8        10 days ago         444.8 MB
nginx               latest              6f8d099c3adc        13 days ago         182.7 MB
mysql               5.6                 f2e8d6c772c0        3 weeks ago         324.6 MB
httpd               latest              02ef73cf1bc0        3 weeks ago         194.4 MB
ubuntu              15.10               4e3b13c8a266        5 weeks ago         136.3 MB
hello-world         latest              690ed74de00f        6 months ago        960 B
centos              6.7                 d95b5ca17cc3        6 months ago        190.6 MB
training/webapp     latest              6fae60ef3446        12 months ago       348.8 MB
```

### Docker 容器连接
> 实现通过端口连接到一个 docker 容器

##### 网络端口映射

> 创建了一个 python 应用的容器。

```bash
~$ docker run -d -P training/webapp python app.py
fce072cc88cee71b1cdceb57c2821d054a4a59f67da6b416fceb5593f059fc6d
```

> 指定容器绑定的网络地址，比如绑定 127.0.0.1。

使用 `-P` 参数创建一个容器，使用 `docker ps` 来看到端口 `5000` 绑定主机端口 `32768`。

```bash
~$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                     NAMES
fce072cc88ce        training/webapp     "python app.py"     4 minutes ago       Up 4 minutes        0.0.0.0:32768->5000/tcp   grave_hopper
```

使用 `-p` 标识来指定容器端口绑定到主机端口。

两种方式的区别是:

- **-P** :是容器内部端口随机映射到主机的高端口。
- **-p** : 是容器内部端口绑定到指定的主机端口。

```bash
~$ docker run -d -p 5000:5000 training/webapp python app.py
33e4523d30aaf0258915c368e66e03b49535de0ef20317d3f639d40222ba6bc0

~$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED              STATUS              PORTS                     NAMES
33e4523d30aa        training/webapp     "python app.py"     About a minute ago   Up About a minute   0.0.0.0:5000->5000/tcp    berserk_bartik
fce072cc88ce        training/webapp     "python app.py"     8 minutes ago        Up 8 minutes        0.0.0.0:32768->5000/tcp   grave_hopper
```

指定容器绑定的网络地址，比如绑定 `127.0.0.1`。

```bash
~$ docker run -d -p 127.0.0.1:5001:5000 training/webapp python app.py
95c6ceef88ca3e71eaf303c2833fd6701d8d1b2572b5613b5a932dfdfe8a857c
~$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                                NAMES
95c6ceef88ca        training/webapp     "python app.py"     6 seconds ago       Up 6 seconds        5000/tcp, 127.0.0.1:5001->5000/tcp   adoring_stonebraker
33e4523d30aa        training/webapp     "python app.py"     3 minutes ago       Up 3 minutes        0.0.0.0:5000->5000/tcp               berserk_bartik
fce072cc88ce        training/webapp     "python app.py"     10 minutes ago      Up 10 minutes       0.0.0.0:32768->5000/tcp              grave_hopper
```

> 这样就可以通过访问 127.0.0.1:5001 来访问容器的 5000 端口。

上面的例子中，默认都是绑定 `tcp` 端口，如果要绑定 `UDP` 端口，可以在端口后面加上 `/udp`。

```bash
~$ docker run -d -p 127.0.0.1:5000:5000/udp training/webapp python app.py
6779686f06f6204579c1d655dd8b2b31e8e809b245a97b2d3a8e35abe9dcd22a
~$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                                NAMES
6779686f06f6        training/webapp     "python app.py"     4 seconds ago       Up 2 seconds        5000/tcp, 127.0.0.1:5000->5000/udp   drunk_visvesvaraya
95c6ceef88ca        training/webapp     "python app.py"     2 minutes ago       Up 2 minutes        5000/tcp, 127.0.0.1:5001->5000/tcp   adoring_stonebraker
33e4523d30aa        training/webapp     "python app.py"     5 minutes ago       Up 5 minutes        0.0.0.0:5000->5000/tcp               berserk_bartik
fce072cc88ce        training/webapp     "python app.py"     12 minutes ago      Up 12 minutes       0.0.0.0:32768->5000/tcp              grave_hopper
```

`docker port` 命令可以让我们快捷地查看端口的绑定情况。

```bash
~$ docker port adoring_stonebraker 5000
127.0.0.1:5001
```

##### Docker容器连接

端口映射并不是唯一把 `docker` 连接到另一个容器的方法。
`docker` 有一个连接系统允许将多个容器连接在一起，共享连接信息。
`docker` 连接会创建一个父子关系，其中父容器可以看到子容器的信息。

##### 容器命名

> 创建容器的时候，`docker` 会自动对它进行命名。另外，我们也可以使用 `--name` 标识来命名容器，例如：

```bash
~$  docker run -d -P --name firstApp training/webapp python app.py
43780a6eabaaf14e590b6e849235c75f3012995403f97749775e38436db9a441
```

可以使用 `docker ps` 命令来查看容器名称。

```bash
~$ docker ps -l
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                     NAMES
43780a6eabaa        training/webapp     "python app.py"     3 minutes ago       Up 3 minutes        0.0.0.0:32769->5000/tcp   firstApp
```