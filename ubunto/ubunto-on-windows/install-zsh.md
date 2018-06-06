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

### 安装 antigen (用来切换主题 https://github.com/robbyrussell/oh-my-zsh/wiki/themes)

```bash
curl -L git.io/antigen > antigen.zsh # 修改配置 ~/.zshrc（如果切换帐号后无法使用 zsh 则把该用户的配置文件再配一遍）

curl -L https://raw.githubusercontent.com/skywind3000/vim/master/etc/zshrc.zsh > ~/.zshrc # 修改主题, 参考：https://github.com/robbyrussell/oh-my-zsh/wiki/themes 
# 如果需要主题一直生效需要添加到 ~/.zshrc 中 

antigen theme ys # 切换主题
# 配置修改完重新执行 zsh
```


<a href="change-ubunto-sources.md" style="float: right;"><—— ubunto </a>