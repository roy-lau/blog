# 安装 nodejs

<a href="README.md">目录</a>

### 方法一：

	curl -sL https://deb.nodesource.com/setup_8.8.0 | sudo -E bash -
	sudo apt-get install -y nodejs


### 方法二：

1、 先在系统上安装好nodejs和npm


	sudo apt-get install nodejs-legacy
	sudo apt-get install npm

2、 升级npm为最新版本


	sudo npm install npm@latest -g

3、 安装用于安装nodejs的模块n


	sudo npm install -g n

4、 通过n模块安装指定的nodejs

	sudo n latest
	sudo n stable
	sudo n lts

5、 查看版本

	sudo node -v
	sudo npm -v

### 方法三（亲测可行）：

1、 下载nodejs压缩文件

	wget https://nodejs.org/dist/v8.8.0/node-v8.8.0-linux-x64.tar.xz

2、 解压

	tar -xvf node-v8.8.0-linux-x64.tar.xz


3、 切换并查看当前node所在路径

	cd node-v8.8.0-linux-x64/bin
	pwd

4、 查看node版本

	./node -v

5、 将node和npm设置为全局

	sudo ln /usr/src/node-v8.8.0-linux-x64/bin/node /usr/local/bin/node
	sudo ln /usr/src/node-v8.8.0-linux-x64/bin/npm /usr/local/bin/npm
	pwd

<a href="install-google-chrome-stable.md" style="float: right;"><—— ubuntu 安装 Chrome浏览器</a>