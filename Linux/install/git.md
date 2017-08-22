 centos6.5 安装git

1.安装编译git时需要的包

	yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel

	yum install  gcc perl-ExtUtils-MakeMaker

2.删除已有的git

	yum remove git

3.下载git源码，我自己下载的是2.5.6版本的下载地址：https://github.com/git/git/releases

	cd /usr/src
	wget https://github.com/git/git/archive/v2.5.6.tar.gz
	tar xzf v2.5.6.tar.gz

4.编译安装

	cd git-2.5.6
	make prefix=/usr/local/git all
	make prefix=/usr/local/git install
	echo "export PATH=$PATH:/usr/local/git/bin" >> /etc/bashrc
	source /etc/bashrc

5.检查一下版本号

	git --version
