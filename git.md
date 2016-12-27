#————————————————————————————————下面是使用git的一些心得笔记—————————————————————————-——————————————
~~能成功上传全依赖于http://www.cnblogs.com/schaepher/p/5561193.html#six~~
###使用git diff查看各个区之间的差异
    git diff 和 git diff –-cached容易混淆
    git diff 比较的是工作区和暂存区的差别
    git diff –-cached 比较的是暂存区和版本库的差别
    git diff HEAD 可以查看工作区和版本库的差别
    每次commit后,git diff –-cached没有内容，是因为暂存区的内容已经更新到版本库中，因此暂存区和版本库中的内容无差别

    git rm --cached "文件路径"，不删除物理文件，仅将该文件从缓存中删除；
    git rm --cached 文件名 ，可以从缓存区移除文件，使该文件变为未跟踪的状态，
    git ls-files 查看缓冲区内有哪些文件
    git checkout –- <file>” 命令时，会用暂存区全部或指定的文件替换工作区的文件。

###分支类
1. 查看分支图：git log --graph
2. 查看分支：git branch
3. 创建分支：git branch <name>
4. 切换分支：git checkout <name>
5. 创建+切换分支：git checkout -b <name>
6. 合并某分支到当前分支：git merge <name>
7. 删除分支：git branch -d <name>


###配置类
    1. git config -l 查看git配置
    1. git config -e vim下修改配置
    3. git config -–add user.name=a-qiang 添加一个配置项命令参数
    4. git config --get user.name 获取一个配置项命令参数
    5. git congig --unset user.name=a-qiang 删除一个配置项命令参数

    "git reflog"这个命令。"git log"只是包括了当前分支中的commit记录，而"git reflog"中会记录这个仓库中所有的分支的所有更新记录，包括已经撤销的更新。

    git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
    这只上面这个命令后，使用git lg命令可以查看分支日志等！


    *设置git可提交最大bit

    问题原因是http.postBuffer默认上限为1M所致。在git的配置里将http.postBuffer变量改大一些即可，比如将上限设为500M：
    git config --global http.postBuffer 524288000

    git sparse clone 路径  可以克隆git仓库下的某个目录

###github的SSH配置如下：

1. 设置Git的user name和email：

    ```$ git config --global user.name "a-qiang"
    $ git config --global user.email "a-qiang.vip@163.com"```


2. 生成SSH密钥过程：
    1.查看是否已经有了ssh密钥：cd ~/.ssh
        如果没有密钥则不会有此文件夹，有则备份删除
    2.生存密钥：
    ```$ ssh-keygen -t rsa -C “a-qiang.vip@163.com”```
    按3个回车，密码为空。

    Your identification has been saved in /home/tekkub/.ssh/id_rsa.
    Your public key has been saved in /home/tekkub/.ssh/id_rsa.pub.
    The key fingerprint is:
    ………………

__最后得到了两个文件：id_rsa和id_rsa.pub__

3. 添加密钥到ssh：ssh-add 文件名

    需要之前输入密码。

4. 在github上添加ssh密钥，这要添加的是“id_rsa.pub”里面的公钥。

    打开https://github.com/ ，登陆a-qiang，然后添加ssh。

5. 测试：ssh git@github.com

    The authenticity of host ‘github.com (207.97.227.239)’ can’t be established.
    RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
    Are you sure you want to continue connecting (yes/no)? yes
    Warning: Permanently added ‘github.com,207.97.227.239′ (RSA) to the list of known hosts.
    ERROR: Hi tekkub! You’ve successfully authenticated, but GitHub does not provide shell access
    Connection to github.com closed.
###设置git push请求时间
每多少秒向主机请求链接    
    ```Host *  
    ServerAliveInterval 120 ```

###bug记录！

*bug1：```工作区和暂存区和远程仓库不同。但是，git push 【Everything up-to-date】```<br>
解决步骤如下：

    1.Administrator@liuqiang MINGW32 /d/git_rpo/README (master)
    $ git add -A                                //重点在这里，以前都是用git add .或git add --all
    
    2.Administrator@liuqiang MINGW32 /d/git_rpo/README (master)
    $ git commit -m "error" 
    [master ef2b048] error
     3 files changed, 0 insertions(+), 0 deletions(-)
     create mode 100644 git.png
     create mode 100644 git_help.png
     create mode 100644 "git\351\200\237\347\216\207.png"
    
    3.Administrator@liuqiang MINGW32 /d/git_rpo/README (master)
    $ git push
    Counting objects: 5, done.
    Delta compression using up to 4 threads.
    Compressing objects: 100% (5/5), done.
    Writing objects: 100% (5/5), 680.94 KiB | 0 bytes/s, done.
    Total 5 (delta 0), reused 0 (delta 0)
    To git@github.com:a-qiang/README.git
       792f815..ef2b048  master -> master

###小技巧
1.  git add -A   保存所有的修改
2.  git add .    保存新的添加和修改，但是不包括删除
3.  git add -u   保存修改和删除，但是不包括新建文件。