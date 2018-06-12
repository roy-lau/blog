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