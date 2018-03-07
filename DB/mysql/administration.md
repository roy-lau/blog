## MySQL 管理

<a href="README.md">目录</a>

```bash
ps -ef | grep mysqld # 检测服务器是否启动了mysql

# 如果MySql已经启动，以上命令将输出mysql进程列表， 如果mysql未启动，你可以使用以下命令来启动mysql服务器:

root@host# cd /usr/bin
./mysqld_safe &

# 关闭目前运行的 MySQL 服务器, 你可以执行以下命令:

root@host# cd /usr/bin
./mysqladmin -u root -p shutdown
Enter password: ******

```

### MySQL 用户设置

果你需要添加 MySQL 用户，你只需要在 mysql 数据库中的 user 表添加新用户即可。

以下为添加用户的的实例，用户名为guest，密码为guest123，并授权用户可进行 SELECT, INSERT 和 UPDATE操作权限：

```bash
root@host# mysql -u root -p
Enter password:*******
mysql> use mysql;
Database changed

mysql> INSERT INTO user
          (host, user, password,
           select_priv, insert_priv, update_priv)
           VALUES ('localhost', 'guest',
           PASSWORD('guest123'), 'Y', 'Y', 'Y');
Query OK, 1 row affected (0.20 sec)

	# 如果出现 ERROR 1364 (HY000): Field 'ssl_cipher' doesn't have a default value
	# 是因为指定了严格模式，为了安全，严格模式禁止通过 insert 这种形式直接修改 mysql 库中的 user 表进行添加新用户
	cd /etc/my.conf
	sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES 改为 sql_mode=NO_ENGINE_SUBSTITUTION

	# 如果还是没有解决，尝试下面方法：
	mysql> GRANT USAGE ON *.* TO 'user01'@'localhost' IDENTIFIED BY '123456' WITH GRANT OPTION;
	mysql> SELECT host, user, password FROM user WHERE user = 'user01'; # 查看user01用户
	+-----------+--------+-------------------------------------------+
	| host      | user   | password                                  |
	+-----------+--------+-------------------------------------------+
	| localhost | user01 | *6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9 |
	+-----------+--------+-------------------------------------------+
	1 row in set (0.00 sec)
	# 用户：user01，密码：123456，这样就添加了一个新的用户，

mysql> FLUSH PRIVILEGES;  # 刷新MySQL的系统权限相关表
Query OK, 1 row affected (0.01 sec)

mysql> SELECT host, user, password FROM user WHERE user = 'guest';
+-----------+---------+------------------+
| host      | user    | password         |
+-----------+---------+------------------+
| localhost | guest | 6f8c114b58f2ce9e |
+-----------+---------+------------------+
1 row in set (0.00 sec)
```

 在添加用户时，请注意使用MySQL提供的 PASSWORD() 函数来对密码进行加密。 你可以在以上实例看到用户密码加密后为： 6f8c114b58f2ce9e.

__注意：__ 在 MySQL5.7 中 user 表的 password 已换成了__authentication_string。__

__注意：__ 在注意需要执行 __FLUSH PRIVILEGES__ 语句。 这个命令执行后会重新载入授权表。

如果你不使用该命令，你就无法使用新创建的用户来连接mysql服务器，除非你重启mysql服务器。

你可以在创建用户时，为用户指定权限，在对应的权限列中，在插入语句中设置为 'Y' 即可，用户权限列表如下：

* Select_priv
* Insert_priv
* Update_priv
* Delete_priv
* Create_priv
* Drop_priv
* Reload_priv
* Shutdown_priv
* Process_priv
* File_priv
* Grant_priv
* References_priv
* Index_priv
* Alter_priv


另外一种添加用户的方法为通过SQL的 GRANT 命令，以下命令会给指定数据库TUTORIALS添加用户 test ，密码为 test123 。

```bash
root@host# mysql -u root -p password;
Enter password:*******
mysql> use mysql;
Database changed

mysql> GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP
    -> ON TUTORIALS.*
    -> TO 'test'@'localhost'
    -> IDENTIFIED BY 'test123';
```

_以上命令会在mysql数据库中的user表创建一条用户信息记录。_
注意: MySQL 的SQL语句以分号 (;) 作为结束标识。


### 管理MySQL的命令

```bash
use TEST;	 		# 切换数据库
SHOW DATABASES;	 	# 列出 MySQL 数据库管理系统的数据库列表。
SHOW TABLES;	 # 显示指定数据库的所有表，使用该命令前需要使用 use 命令来选择要操作的数据库。
SHOW COLUMNS FROM;	# 显示数据表的属性，属性类型，主键信息 ，是否为 NULL，默认值等其他信息。
SHOW INDEX FROM;	# 显示数据表的详细索引信息，包括PRIMARY KEY（主键）。

# 该命令将输出Mysql数据库管理系统的性能及统计信息。
SHOW TABLE STATUS LIKE [FROM db_name] [LIKE 'pattern'] \G:
	mysql> SHOW TABLE STATUS  FROM TEST;   # 显示数据库 TEST 中所有表的信息
	mysql> SHOW TABLE STATUS from TEST LIKE 'test%';     # 表名以test开头的表的信息
	mysql> SHOW TABLE STATUS from TEST LIKE 'test%'\G;   # 加上 \G，查询结果按列打印
```

<img src="http://www.runoob.com/wp-content/uploads/2014/03/mysql-admin.gif" alt="Gif 图演示：" />

<a href="connection.md" style="float: right;"><—— mysql 连接</a>
