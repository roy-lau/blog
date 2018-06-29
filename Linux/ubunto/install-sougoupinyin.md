# 安装 搜狗拼音

<a href="README.md">目录</a>

1.下载

到[搜狗输入法官网](https://pinyin.sogou.com/linux/)下载`deb格式`的包文件

2.安装 fcitx

- 通过 Ubuntu software 搜索 **fcitx**，将所有图标为小企鹅的全部下载安装

3.安装搜狗输入法

```bash
cd  ~/Downloads
sudo dpkg -i sogoupinyin_2.2.0.0108_amd64.deb
```

_具体文件名自行查看_

4.删除默认输入法

```bash
sudo su - # 切换到root，输入密码
sudo apt remove ibus*
```

5.设置

- 打开设置 -> 区域和语言 -> 管理已安装的语言 -> 键盘输入法系统：fcitx -> 应用到整个系统

- 重启电脑

- 登陆后在右上角出现一个键盘标志 -> Configure Current Input Method -> 点击 **+** 号 ->
Only Show Current Language前面的钩去掉 -> 输入**sougo**，选中，点击ok


<a href="install-google-chrome-stable.md" style="float: right;"><—— ubuntu 安装 Chrome</a>