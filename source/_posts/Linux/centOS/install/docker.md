# centos7.5 安装docker

> Docker支持以下的CentOS版本：

- CentOS 7 (64-bit)
- CentOS 6.5 (64-bit) 或更高的版本

> 目前，CentOS 仅发行版本中的内核支持 Docker。

- Docker 运行在 CentOS 7 上，要求系统为64位、系统内核版本为 3.10 以上。
- Docker 运行在 CentOS-6.5 或更高的版本的 CentOS 上，要求系统为64位、系统内核版本为 2.6.32-431 或者更高版本。
- 通过 `uname -r` 命令查看你当前的内核版本 

1、 移除旧的版本：

```bash
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
```

2、 安装一些必要的系统工具：

	sudo yum install -y yum-utils device-mapper-persistent-data lvm2

3、 添加软件源信息：

	sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

4、 更新 yum 缓存：

	sudo yum makecache fast

5、 安装 Docker-ce：

> 从 2017 年 3 月开始 docker 在原来的基础上分为两个分支版本: Docker CE 和 Docker EE。Docker CE 即社区免费版，Docker EE 即企业版，强调安全，但需付费使用。

	sudo yum -y install docker-ce

6、 启动 Docker 后台服务

	sudo systemctl start docker

7、 测试运行 hello-world

> 如果本地没有hello-world这个镜像，会自动下载一个hello-world的镜像，并在容器内运行。

	docker run hello-world