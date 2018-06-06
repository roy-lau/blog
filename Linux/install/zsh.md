# centos6.5 安装zsh

1、 查看centos的bin下是否有zsh包

	cat /etc/shells

2、 安装zsh包

	sudo yum install zsh

3、 使用命令 chsh -s /bin/zsh更换成SHELL

	echo $SHELL
	chsh -s /bin/zsh
	echo $SHELL

4、 重启

	reboot

### Oh my zsh

1、 先安装git环境

	sudo yum install git

2、 安装oh my zsh

	wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh

	##########################   如果看的下面的画面表示你成功了   ######################
	\033[0;34mLooking for an existing zsh config...\033[0m
	\033[0;34mUsing the Oh My Zsh template file and adding it to ~/.zshrc\033[0m
	\033[0;34mCopying your current PATH and adding it to the end of ~/.zshrc for you.\033[0m
	\033[0;32m         __                                     __   \033[0m
	\033[0;32m  ____  / /_     ____ ___  __  __   ____  _____/ /_  \033[0m
	\033[0;32m / __ \/ __ \   / __ `__ \/ / / /  /_  / / ___/ __ \ \033[0m
	\033[0;32m/ /_/ / / / /  / / / / / / /_/ /    / /_(__  ) / / / \033[0m
	\033[0;32m\____/_/ /_/  /_/ /_/ /_/\__, /    /___/____/_/ /_/  \033[0m
	\033[0;32m                        /____/                       ....is now installed!\033[0m

_如果出現`SSL connect error`,请升级网络安全服务 `yum update nss`_

3、 配置oh my zsh

	vim ~/.zshrc

3-1、 修改主题

`~/.oh-my-zsh/themes` 文件夹下有主题的列表

样式参考 https://github.com/robbyrussell/oh-my-zsh/wiki/Themes

推荐

	ZSH_THEME='ys'
	ZSH_THEME='agnoster'

3-2、 配置别名

配置命令的别名方法是： `alias ll='ls -l'`

3-3、 修改插件

`~/.oh-my-zsh/plugins`文件夹下有可用的插件列表

更换Plugin

	plugins=(git z extract)

- git 显示git信息
- z 可以用来快速跳转
- extract 解压文件插件，所有的文件直接 x filename 即可，不用再记忆各类参数

修改完后，如果需要在当前`shell`中生效，需要执行

	source ~/.zshrc

还可以自己下载插件

安装`zsh-syntax-highlighting`插件
同样地，我们要先下载它的源码，但在这里，我们可以利用一下oh-my-zsh的插件管理功能：

    cd ~/.oh-my-zsh/custom/plugins
    git clone git://github.com/zsh-users/zsh-syntax-highlighting.git

然后，我们打开 `~/.zshrc` 文件，找到以下段落；

    # Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
    # Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
    # Example format: plugins=(rails git textmate ruby lighthouse)
    # Add wisely, as too many plugins slow down shell startup.
    plugins=(git)

按照注释中的提示改成 `plugins=(git zsh-syntax-highlighting)` 即可。