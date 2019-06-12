## crontab(定时任务)


1. 确认crontab是否安装：

	执行 `crontab` 命令如果报 `command not found，`就表明没有安装

2. 安装 crontab

	执行 `yum install -y vixie-cron`

3. 确认是否安装成功:

	执行 `crontab -l`

4. 看是否设置了开机自动启动

	`chkconfig --list crond`

5. 启动crontab

	`service crond start`

### 2 、语法使用

```shell
使用权限:
　　root用户和crontab文件的所有者
语法:
　　crontab [-e [UserName]|-l [UserName]|-r [UserName]|-v [UserName]|File ]
说明:
　　crontab 是用来让使用者在固定时间或固定间隔执行程序之用，换句话说，也就是类似使用者的时程表。
-u user 是指设定指定 user 的时程表，这个前提是你必须要有其权限(比如说是 root)才能够指定他人的时程表。
如果不使用 -u user 的话，就是表示设定自己的时程表。

参数:
-e [UserName]: 执行文字编辑器来设定时程表，内定的文字编辑器是 VI，
-r [UserName]: 删除目前的时程表
-l [UserName]: 列出目前的时程表
-v [UserName]: 列出用户cron作业的状态
```

> 查看当前用户的时程表

```shell
	crontab -l
```

### 3、将shell脚本放到crontab中定时运行

__时程表的格式如下:__

	minute（分）   hour（时）   day（日）   month（月）   week（周）   command（要执行的命令）

_其中：_

```shell
minute 		# 表示分钟，可以是从0到59之间的任何整数。
hour 		# 表示小时，可以是从0到23之间的任何整数。
day 		# 表示日期，可以是从1到31之间的任何整数。
month 		# 表示月份，可以是从1到12之间的任何整数。
week 		# 表示星期几，可以是从0到7之间的任何整数，这里的0或7代表星期日。
command 	# 要执行的命令，可以是系统命令，也可以是自己编写的脚本文件。
```

_在以上各个字段中，还可以使用以下特殊字符：_

* **星号** ` * ` 代表所有可能的值，例如`month`字段如果是星号，则表示在满足其它字段的制约条件后每月都执行该命令操作。

* **逗号** ` , ` 可以用逗号隔开的值指定一个列表范围，例如，`1,2,5,7,8,9`

* **中杠** ` - ` 可以用整数之间的中杠表示一个整数范围，例如`2-6`表示`2,3,4,5,6`

* **正斜线** ` / ` 可以用正斜线指定时间的间隔频率，例如`0-23/2`  表示每两小时执行一次。同时正斜线可以和星号一起使用，例如`*/10`，如果用在`minute`字段，表示每十分钟执行一次。



> 通过执行下面的语句，即可进入类似于vi的文本编辑器界面，我们可以通过在上面誊写上面那种时程表定时调用某个脚本。
```shell
	crontab -e
```

__eg：每个5分钟执行一次脚本__

> 第一种写法是\*/5，这种写法有的系统会不支持

```shell
	*/5 * * * * /xxx/task.sh
```

> 第二种写法比较繁琐，但所有系统都支持：

```shell
	0,5,10,15,20,25,30,35,40,45,50,55 * * * * /xx/task.sh
```

__系统配置__


> 系统配置文件所在的位置：

```shell
	/etc/crontab
```

> 系统用户 `crontab` 配置文件保存的目录 (reontab -e)：

```shell
	/var/spool/cron

	# root用户: /var/spool/cron
	# user01用户: /var/spool/cron/user01
```

> `crontab` 在系统上的日志目录 `/var/log/cron`：

```shell
	tail -n 2 /var/log/cron 	# 查看最近两条日志状态
```