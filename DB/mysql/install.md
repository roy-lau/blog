## 安装MySQL

140.143.158.138
qazplm123

MYSQL相关的包：

* `MySQL`： MySQL服务器。你需要该选项，除非你只想连接运行在另一台机器上的`MySQL`服务器。
* `MySQL-client`： MySQL 客户端程序，用于连接并操作`Mysql`服务器。
* `MySQL-devel`： 库和包含文件，如果你想要编译其它`MySQL`客户端，例如Perl模块，则需要安装该`RPM`包。
* `MySQL-shared`： 该软件包包含某些语言和应用程序需要动态装载的共享库`(libmysqlclient.so*)`，使用MySQL。
* `MySQL-bench`： MySQL数据库服务器的基准和性能测试工具

检测卸载mysql：

```shell
rpm -qa | grep mysql 	# 检测系统是否自带安装 mysql

rpm -e mysql　　		# 普通删除模式
rpm -e --nodeps mysql　 # 强力删除模式，如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除
```

安装 mysql(CentOS 7以下)：

```shell
yum install mysql
yum install mysql-server
yum install mysql-devel
```

启动 mysql：
```shell
service mysqld start
```
_注意：如果我们是第一次启动 mysql 服务，mysql 服务器首先会进行初始化的配置。_


如果是 __CentOS 7 以上版本__，由于 MySQL数据库已从默认的程序列表中移除，可以使用 mariadb 代替：

    yum install mariadb-server mariadb

mariadb数据库的相关命令是：

```shell
systemctl start mariadb  	# 启动MariaDB
systemctl stop mariadb  	# 停止MariaDB
systemctl restart mariadb  	# 重启MariaDB
systemctl enable mariadb  	# 设置开机启动
```


验证Mysql安装：

```shell
[root@host]# mysqladmin --version
mysqladmin  Ver 8.42 Distrib 5.6.39, for Linux on x86_64  # 此结果是mysql基于Linux系统信息
```

_如果以上命令执行后未输入任何信息，说明你的Mysql未安装成功。_

使用 MySQL Client(Mysql客户端) 执行简单的SQL命令:

```shell
[root@host]# mysql 		# 连接服务器（密码为空）
mysql> SHOW DATABASES; 	# 显示数据库
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
+--------------------+
3 rows in set (0.00 sec)


# Mysql安装成功后，默认的root用户密码为空，也可以通过下面命令创建root用户的密码

[root@host]# mysqladmin -u root password "lq_toor";

# 用户名密码连接
[root@host]# mysql -u root -p
Enter password:*******
```
_注意：在输入密码时，密码是不会显示了，你正确输入即可。_

MySQL安装后涉及的目录如下：


| 目录 			| 目录中的内容 |
| ------------- | -----------  |
|/usr/bin 			|	客户端程序和脚本
|/usr/sbin 			|	Mysqld服务器
|/var/lib/mysql 	|	数据库的日志文件
|/usr/share/info 	|	信息格式手册
|/usr/share/man 	|	Unix 手册页
|/usr/include/mysql |	包括 （标题） 的文件
|/usr/lib/mysql 	|mysql的lib包
|/usr/share/mysql 	|杂项的支持文件，包括错误消息） 字符设置的文件，示例配置文件，SQL 数据库安装
|/usr/share/sql-bench |	基准





Window 上安装Mysql：

Window上安装Mysql相对来说会较为简单，你只需要在 MySQL 下载中下载window版本的mysql安装包，并解压安装包。

双击 setup.exe 文件，接下来你只需要安装默认的配置点击"next"即可，默认情况下安装信息会在C:\mysql目录中。

接下来你可以通过"开始" =》在搜索框中输入 " cmd" 命令 =》 在命令提示符上切换到 C:\mysql\bin 目录，并输入一下命令：

	mysqld.exe --console

如果安装成功以上命令将输出一些mysql启动及InnoDB信息。