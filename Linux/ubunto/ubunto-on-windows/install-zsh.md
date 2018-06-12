# 安装 zsh

<a href="README.md">目录</a>

> 查看本机安装了那些shell `cat /etc/shells `

1. 先将ubunto可能自带的`oh-my-zsh`删除

```bash
rm -r ~/.oh-my-zsh
```

2. 然后安装zsh和git

```bash
sudo apt-get install zsh git
```

手动安装zsh是用于Ubuntu的 `sh` 比较诡异，不识别 `source` 这个指令。装好zsh后仿OS X

```bash
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh
```

3. 最后把shell切换成 `zsh` ，并重启计算机。

```bash
chsh -s `which zsh`
sudo shutdown -r 0
```

如果上面命令无效，修改 ~/.bashrc 在开头输入：

```bash
if [ -t 1 ]; then
    exec zsh
fi
```

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


<a href="change-ubunto-sources.md" style="float: right;"><—— ubunto </a>