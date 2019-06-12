# 用户（user）

1、创建用户

	useradd testuser 	# 创建用户testuser

2、设置密码

	passwd testuser 	# 给已创建的用户testuser设置密码

> 说明：新创建的用户会在/home下创建一个用户目录testuser

3、删除用户

	userdel testuser 	# 删除用户testuser
	rm -rf testuser 	# 删除用户testuser所在目录

> 上面的几个命令只有root账号才可以使用，如果你不知道自己的系统上面的命令在什么位置可以使用如下命令查找其路径：
	locate useradd

4、切换用户

	su 用户名			# su是switch user的缩写，表示用户切换

5、用户组的添加和删除：

	groupadd testgroup 	# 组的添加
	groupdel testgroup 	# 组的删除

> 说明：组的增加和删除信息会在etc目录的group文件中体现出来。


### 给用户加权限

> 1. 切换到root用户下

	su - 

> 2.添加sudo文件的写权限,命令是:

	chmod u+w /etc/sudoers

> 3.编辑sudoers文件

	vi /etc/sudoers

> 找到这行 `root ALL=(ALL) ALL`,在他下面添加xxx ALL=(ALL) ALL (这里的xxx是用户名)

可以sudoers添加下面四行中任意一条

```bash
youuser            ALL=(ALL)                ALL
%youuser           ALL=(ALL)                ALL
youuser            ALL=(ALL)                NOPASSWD: ALL
%youuser           ALL=(ALL)                NOPASSWD: ALL

# 第一行:允许用户youuser执行sudo命令(需要输入密码).
# 第二行:允许用户组youuser里面的用户执行sudo命令(需要输入密码).
# 第三行:允许用户youuser执行sudo命令,并且在执行的时候不输入密码.
# 第四行:允许用户组youuser里面的用户执行sudo命令,并且在执行的时候不输入密码.
```

> 4.撤销sudoers文件写权限,命令:

chmod u-w /etc/sudoers

_这样普通用户就可以使用sudo了._