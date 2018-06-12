#   ubunto 换源

<a href="README.md">目录</a>


> 因为Ubuntu默认的太慢了，一般裝完ubunto系統都要先换成国内最快的阿里云源

### 第一步： 备份原来的源文件

```bash
cd /etc/apt/
```

然后会显示下面的源文件 `sources.list`

输入命令

```bash
sudo cp sources.list sources.list.bak
```

就是将`sources.list` 备份到 `sources.list.bak`

### 第二步: 替换源

阿里云源的文件

```bash
vi sources.list
```

删除原内容，输入以下内容（输入之前换root权限，输入命令sudo su）

```bash
deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse
##测试版源
deb http://mirrors.aliyun.com/ubuntu/ xenial-proposed main restricted universe multiverse
# 源码
deb-src http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse
##测试版源
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-proposed main restricted universe multiverse
# Canonical 合作伙伴和附加
deb http://archive.canonical.com/ubuntu/ xenial partner
deb http://extras.ubuntu.com/ubuntu/ xenial main
```


### 第三步：更新源和软件

```bash
sudo apt-get update 	# 更新源
sudo apt-get upgrade 	# 更新软件
```


<a href="install-zsh.md" style="float: right;"><—— 安装 zsh</a>