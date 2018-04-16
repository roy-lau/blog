
## 方法一（直接下载编译好的）

第一步：

	wget https://nodejs.org/dist/v8.8.0/node-v8.8.0-linux-x86.tar.xz


第二步  解压缩文件包

	 tar xvf node-v8.8.0-linux-x86.tar.gz

第三步  NODE 环境配置
    这样可以使得在任何目录下，都可以使用`/usr/local/src/node-v6.6.0-linux-x86/bin` 下得node命令，
    步骤如下：

    a、切换到 root 用户
    b、vi /etc/profile
    c、在最下面加入
       # node （注释作用）
       export NODE_HOME=/usr/local/src/node-v6.6.0-linux-x86
       export PATH=$PATH:$NODE_HOME/bin
       export NODE_PATH=$NODE_HOME/lib/node_modules
    d、:wq （保存并退出）
    e、source /etc/profile （使配置文件生效,重启后失效）
    e、source /etc/bashrc （使配置文件生效,重启后有效）

第四步 大功告成
    你就可以用 `node -v` 看自己的成果了！

## 方法二：（自己编译）

准备：

先查看gcc版本（必须是4.8.2以上）
```shell
wget http://people.centos.org/tru/devtools-2/devtools-2.repo
mv devtools-2.repo /etc/yum.repos.d
yum install devtoolset-2-gcc devtoolset-2-binutils devtoolset-2-gcc-c++
```

三个安装包会被装在 `/opt/rh/devtoolset-2/root/` 中

更新软连接：
```shell
mv /usr/bin/gcc /usr/bin/gcc-4.4.7
mv /usr/bin/g++ /usr/bin/g++-4.4.7
mv /usr/bin/c++ /usr/bin/c++-4.4.7
ln -s /opt/rh/devtoolset-2/root/usr/bin/gcc /usr/bin/gcc
ln -s /opt/rh/devtoolset-2/root/usr/bin/c++ /usr/bin/c++
ln -s /opt/rh/devtoolset-2/root/usr/bin/g++ /usr/bin/g++
gcc --version
```
第一步：下载

    cd /usr/src
    wget https://github.com/nodejs/node/archive/v6.6.0.tar.gz  # 源码（会有一些坑，而且还需要编译，不推荐使用）

第二步： 解压缩文件包

	tar -zvxf v6.6.0.tar.gz

第三步： 编译

	mv ./node-6.6.0 /usr/local/node-6.6.0
	cd /usr/local/node-6.6.0

	sudo make && sudo make install
	或者
	sudo ./configure

第四步：配置环境变量

    a、切换到 root 用户
    b、vi /etc/profile
    c、在最下面加入
       # node （注释作用）
       export NODE_HOME=/usr/local/src/node-6.6.0
       export PATH=$PATH:$NODE_HOME/bin
       export NODE_PATH=$NODE_HOME/lib/node_modules
    d、:wq （保存并退出）
    e、source /etc/profile （使配置文件生效）

## 方法三（通过yum下载）

另一个有效且简单的方法来安装Node.js就是从官方库。这同样确保您可以访问到EPEL库，你可以通过运行以下命令。
```shell
  sudo yum install epel-release
```

现在可以使用yum命令安装Node.js了。
```shell
  sudo yum install nodejs
```

因为在开发过程中我需要管理节点包，我还要安装新公共管理的软件包管理器，使用以下命令。
```shell
  sudo yum install npm
```