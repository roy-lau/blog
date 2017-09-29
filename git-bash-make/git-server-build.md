#  git 搭建私服

 Centos 下搭建 Git 服务器。

 1、安装Git

[点此查看git 在Centos下的安装方法](../Linux/install/git.md)

 2、创建用户

```shell
$ groupadd git          # 创建一个用户组
$ adduser git -g git    # 将git用户添加到git用户组
$ su git                # 切换到git用户
```

3、创建证书登录

> 收集所有需要登录的用户的公钥，公钥位于id_rsa.pub文件中，把我们的公钥导入到/home/git/.ssh/authorized_keys文件里，一行一个。

如果没有该文件创建它：

```shell
$ cd /home/git/
$ mkdir .ssh
$ chmod 700 .ssh
$ touch .ssh/authorized_keys	# 这个文件是用来存放用户的 公钥 的，一行一个
$ chmod 600 .ssh/authorized_keys
```

4、初始化Git仓库

首先我们选定一个目录作为Git仓库，假定是/home/gitrepo/javaScript.git，在/home/gitrepo目录下输入命令：

```shell
$ cd /home
$ mkdir gitrepo
$ chown git:git gitrepo/
$ cd gitrepo

$ git init --bare javaScript.git
Initialized empty Git repository in /home/gitrepo/javaScript.git/
```
> 以上命令Git创建一个空仓库，服务器上的Git仓库通常都以.git结尾。然后，把仓库所属用户改为git：

```shell
$ chown -R git:git javaScript.git
```

5、克隆仓库

```shell
$ git clone git@192.168.45.4:/home/gitrepo/javaScript.git
Cloning into 'javaScript'...
warning: You appear to have cloned an empty repository.
Checking connectivity... done.
```

192.168.45.4 为 Git 所在服务器 ip ，你需要将其修改为你自己的 Git 服务 ip。

这样我们的 Git 服务器安装就完成了，接下来我们可以禁用 git 用户通过shell登录，可以通过编辑/etc/passwd文件完成。找到类似下面的一行：

```shell
git:x:503:503::/home/git:/bin/bash
```
改为：
```shell
git:x:503:503::/home/git:/sbin/nologin
```