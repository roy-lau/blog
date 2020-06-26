# git 使用心得笔记

~~
### git常用命令

<img src="git-Common-commands.jpg" alt="">

### 使用 `git diff` 查看各个区之间的差异
> `git diff` 和 `git diff –-cached` 容易混淆

```bash
git diff                        # 比较的是工作区和暂存区的差别
git diff –-cached               # 比较的是暂存区和版本库的差别
git diff HEAD                   # 可以查看工作区和版本库的差别
```
> 每次 `commit` 后 `git diff –-cached` 没有内容，是因为暂存区的内容已经更新到版本库中，因此暂存区和版本库中的内容无差别

```bash
git rm --cached "文件路径"       # 不删除物理文件，仅将该文件从缓存中删除；
git rm --cached "文件名"         # 可以从缓存区移除文件，使该文件变为未跟踪的状态，
git checkout –- <file>          # 命令时，会用暂存区全部或指定的文件替换工作区的文件。
git ls-files                    # 查看缓冲区内有哪些文件
git rm -r --cached .            # 删除缓存区
```
### 版本回退
```bash
git reset --hard HEADE~1    # 回滚到上一版本
git reset --hard commit_id(版本号，版本ID，commit_id)  # 回滚到某个版本
git reflog 	# 查看命令历史的 commit_id,可以获取回退之前的 commit_id,
git reflog	# 记录这个仓库中所有的分支的所有更新记录，包括已经撤销的更新.
HEAD        # 表示当前版本
HEAD^       # 是上一个版本
HEAD^       # ^ 是上上一个版本
HEAD~100    # 100 表示 100 个版本, 100 个版本写 100 个 ^ 比较容易数不过来。
```
#### git commit
```bash
git reset --soft HEAD^     # 删除到 HEAD^ 的 commit，(仅 commit 删除，文件未变化)
git commit --amend         # 修改最近一次的 commit 内容( git push 过的不能修改)
git rebase -i HEAD~3       # 修改倒数第几次的 git commit
git rebase -i commit_id(版本号，版本ID，commit_id)    # 可以修改或删除某个 commit
git rebase --continue      # 如果修改错了要返回原来的 git commit，可以使用这个命令
```
修改commit massage

1. 进入版本号的 commit
```bash
git rebase -i commit_id(版本号，版本ID，commit_id)    # 可以修改或删除某个commit
```

2. 显示结果如下，修改 `pick` 为 `edit` ，并 `:wq` 保存退出
```bash
pick 92b495b 2009-08-08: ×××××××
    # Rebase 9ef2b1f..92b495b onto 9ef2b1f
    #
    # Commands:
    #  pick = use commit
    #  edit = use commit, but stop for amending //改上面的 pick 为 edit
    #  squash = use commit, but meld into previous commit
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    # However, if you remove everything, the rebase will be aborted.
```

3. 命令行显示：
```bash
Stopped at e35b8f3… reflog branch first commit
    You can amend the commit now, with
    git commit –amend
    Once you are satisfied with your changes, run
    git rebase –continue
```

4. 修改需要修改的地方（只是修改 `commit message` 就不用做)
```bash
git add .           # 这一步如果只是修改commit message不用输入
git commit --amend  # 输入修改后的commit message，保存
```

5. 提交，继续
```bash
git rebase –continue   # 使用 git rebase –continue 完成操作
```

6. 推送到远端（若还没有推送到远端，不用处理）
```bash
git push <remote> <branch> -f   # 加-f 表示忽略冲突（强推）
```
#### `gitbash` 创建远程仓库并上传
```bash
git init     				# 本地项目根目录下执行这个命令
git add .    				# 将项目的所有文件添加到仓库中
git commit -m "注释语句"
curl -u '用户名' https://api.github.com/user/repos -d '{"name":"仓库名"}'
git remote add origin git@github.com:roy-lau/python.git     # 将本地的仓库关联到github上
git pull origin master       # 上传github之前，要先pull一下
git push -u origin master    # 上传代码到github远程仓库
```
### 分支类（master）
```bash
git log --graph                 # 查看分支图
git branch                      # 查看分支
git branch -r                   # 查看所有远程分支
git branch  BranchName          # 创建分支
git checkout  BranchName        # 切换分支
git checkout -b  BranchName     # 创建+切换分支
git merge  BranchName           # 合并某分支到当前分支
git branch -D  BranchName       # 删除本地分支
git pull origin  remoteBranchName:localBranchName # 获取远程分支
# 删除远程分支(推送一个空分支到远程分支,就相当于删除了远程分支)
git push origin :branchName
git push -d origin branchName
git branch -m oldBranchName newBranchName   # 修改branch名
```
#### git 快速clone

1. 开始 `clone`，如果觉得仓库太大，可以在 `git clone` 中加入参数 `--depth=1`，只拉取最近的一个 `revision`。
```bash
git clone  git@github.com:roy-lau/web_project.git --depth=1     # 设置克隆的深度(两个参数可以连起来)
git clone  git@github.com:roy-lau/web_project.git -b dev        # 设置克隆的分支(两个参数可以连起来)
```

2. 如果后面想看历史的版本，那么也很好办，使用 git fetch 即可。
```bash
git fetch --unshallow   # 获取除当前分支的所有历史版本
```

3. 拉取远程分支到本地分支
```bash
git fetch origin  remoteBranchName:localBranchName
# 如果remoteBranchName和localBranchName冲突,手动merge,可以设置深度--depth=1
git pull origin  remoteBranchName:localBranchName
# 如果remoteBranchName和localBranchName冲突,自动merge,可以设置深度--depth=1
```
> 注： BranchName:分支名 localBranchName:本地分支名  remoteBranchName: 远程分支名

### 标签（tag）
```bash
# 创建标签
git tag -a tagName -m "注释"    # 创建附注标签(常用)
git tag  tagName-light  		# 创建轻量标签
# 上传标签
git push origin tag tagName  	# 将 tagName 标签提交到 git 服务器
git push origin -–tags 			# 将本地所有标签一次性提交到 git 服务器
git tag   							    # 查看当前分支下的标签
git tag -d  tagName 					# 删除本地标签
git push origin :refs/tags/tagName  	# 删除远程标签
git checkout tagName 					# 切换标签
git tag -m oldTagName newTagName        # 修改tag名
git fetch origin tag tagName 		    # 获取远程tag
```
### 远程主机（origin）

1. 为了便于管理，git要求每个远程主机都必须指定一个主机名。不带选项的时候， `git remote` 命令会列出所有远程主机。
```bash
$ git remote
    origin
```

2. 使用 `-v` 选项可以查看远程主机的网址
```bash
$ git remote -v
    origin git@github.com:roy-lau/python.git(fetch)
    origin git@github.com:roy-lau/python.git(push)
```

3. 克隆的时候，所使用的远程主机自动被git命名为origin。如果想使用其他主机名，需要用 `git clone` 命令的 `-o` 选项指定。
```bash
$ git clone -o roy-lau https://github.com/roy-lau/python.git
$ git remote roy-lau
```
上面命令表示，克隆的时候，指定远程主机叫**roy-lau**

4. `git remote show <主机名>` 可以查看该主机的详细信息。
4. `git remote add <主机名><网址>`  添加远程主机。
4. `git remote rm <主机名>` 删除远程主机
4. `git remote rename <源主机名> <新主机名>` 更改远程主机名。

End. `git push -u <主机名> <分支名>`
### 配置类
```bash
git config -l                            # 查看git配置
git config -e                            # vim下修改配置
git config -–add user.name=roy-lau       # 添加一个配置项命令参数
git config --get user.name               # 获取一个配置项命令参数
git congig --unset user.name=roy-lau     # 删除一个配置项命令参数
```

- `git add` 的时候，中文会显示成`\344\270\255\346\226\207.txt`，使用如下命令进行配置：
```bash
git config --global core.quotepath false
```

- Git使用https方式进行连接时，默认每次推送时都要输入用户名和密码。进行如下设置后，只要在推送一次，以后就不需要用户名和密码了
```
git config credential.helper store
```

- 设置 `git lg` （设置个命令后，使用 `git lg` 命令可以查看分支日志等！）

```bash
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

- 设置git可提交最大bit
> 问题原因是`http.postBuffer`默认上限为`1M`所致。在git的配置里将`http.postBuffer`变量改大一些即可，比如将上限设为`500M`

```bash
git config --global http.postBuffer 524288000    # 设置上传文件最大值
git sparse clone 路径                             # 可以克隆git仓库下的某个目录
```

- 设置github大文件提交(超过50M)
```bash
git lfs install         # 开启`lfs`功能（只需运行一次）
git lfs track "*.psd"   # 命令进行大文件追踪 例如 `git lfs track "*.psd"` 追踪所有后缀为 `psd`的文件
git lfs track           # 查看现有的文件追踪模式
git add .gitattributes  # 提交代码需要将`gitattributes`文件提交至仓库`.` 它保存了文件的追踪记录
git lfs ls-files        # 可以显示当前跟踪的文件列表（查看当前有哪些文件是使用lfs管理的）
# 正常只需如下步骤即可
git lfs install
git lfs track "*.psd"
git add .gitattributes
git add file.psd
git commit -m "Add design file"
git push origin master
```
_将代码 `push` 到远程仓库后，`LFS` 跟踪的文件会以`Git LFS`的形式显示:
`clone` 时 使用`git clone` 或 `git lfs clone` 均可_
### github 的 SSH 配置如下：
#### 1. 设置Git的 `user name` 和 `email`:
```bash
$ git config --global user.name "roy-lau"
$ git config --global user.email "roylau_vip@163.com"
```
#### 2. 生成SSH密钥过程：

1. 查看是否已经有了ssh密钥：
```bash
cd ~/.ssh   # 如果没有密钥则不会有此文件夹，有则备份删除
```

2. 生成密钥：
```bash
$ ssh-keygen -t rsa -C  "roylau_vip@163.com"
```
> 按3个回车，密码为空。

```bash
[root@host ~]$ ssh-keygen  # <== 建立密钥对
    Generating public/private rsa key pair.
    Enter file in which to save the key (/root/.ssh/id_rsa): # <== 按 Enter
    Created directory '/root/.ssh'.
    Enter passphrase (empty for no passphrase):         # <== 输入密钥锁码，或直接按 Enter 留空
    Enter same passphrase again: # <== 再输入一遍密钥锁码
    Your identification has been saved in /root/.ssh/id_rsa.    # <== 私钥
    Your public key has been saved in /root/.ssh/id_rsa.pub.    # <== 公钥
    The key fingerprint is:
    0f:d3:e7:1a:1c:bd:5c:03:f1:19:f1:22:df:9b:cc:08 root@host
```
> 最后得到了两个文件：**id_rsa (私钥)** 和 **id_rsa.pub（公钥）**

3. 添加密钥
```bash
ssh：ssh-add 文件名   # 需要之前输入密码。
```

4. 在github上添加ssh密钥，这要添加的是 `id_rsa.pub` 里面的公钥。
> 打开 [https://github.com/](https://github.com/) ，登陆roy-lau，然后添加ssh。

5. 测试：
```bash
$ ssh -T git@github.com
    Hi roy-lau! You've successfully authenticated, but GitHub does not provide shell access.
```
### git私服搭建
    **git如何搭建私服[点击查看](git-bash-make_git-server-build)**
### bug记录！

- bug1：工作区和暂存区和远程仓库不同。但是，`git push 【Everything up-to-date】`
> 解决步骤如下：

1. 全部添加到缓存区
```bash
$ git add -A    # 重点在这里，以前都是用 git add . 或 git add --all
```

2. 写备注
```bash
$ git commit -m "error"
    [master ef2b048] error
     3 files changed, 0 insertions(+), 0 deletions(-)
     create mode 100644 git.png
     create mode 100644 git_help.png
     create mode 100644 "git\351\200\237\347\216\207.png"
```

3. 上传到 github
```bash
$ git push -u origin master
    Counting objects: 5, done.
    Delta compression using up to 4 threads.
    Compressing objects: 100% (5/5), done.
    Writing objects: 100% (5/5), 680.94 KiB | 0 bytes/s, done.
    Total 5 (delta 0), reused 0 (delta 0)
    To git@github.com:roy-lau/README.git
       792f815..ef2b048  master -> master
```
### 小技巧

1. `git add -A`   保存所有的修改
1. `git add .`    保存新的添加和修改，但是不包括删除
1. `git add -u`   保存修改和删除，但是不包括新建文件。
1. 工作的时候经常需要在各个目录之间跳转，可以通过环境变量对目录进行缩写，方便地在多个目录直接切换。

在 **~/.bashrc**添加：
```bash
export wd="/d/Projects/MyProject/git"
export doc="/d/Projects/documents/"
```
以后只需要用 `cd $wd, cd $doc` 即可进入对应目录。
