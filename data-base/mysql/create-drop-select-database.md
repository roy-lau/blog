## MySQL 创建 删除 选择 数据库

<a href="README.md">目录</a>

### 连接数据库

```bash
[root@host]# mysql -u root -p
Enter password:******

Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 2854760 to server version: 5.0.9

Type 'help;' or '\h' for help. Type '\c' to clear the buffer.

mysql> exit
Bye
```

### 创建数据库

```bash
[root@host]# mysqladmin -u root -p create test	# 创建名为test的数据库
Enter password:******

[root@host]# mysqladmin -u root -p				# 连接数据库
Enter password:******

mysql> SHOW DATABASES;							# 查看数据库
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| test               |
+--------------------+
4 rows in set (0.00 sec)
```

使用root登录后，可以使用
```sql
CREATE DATABASE IF NOT EXISTS TEST DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
```
创建数据库，该命令的作用：

1. 如果数据库不存在则创建，存在则不创建。
2. 创建TEST数据库，并设定编码集为utf8

### 删除数据库

```bash
[root@host]# mysqladmin -u root -p drop test
Enter password:******
```
执行以上删除数据库命令后，会出现一个提示框，来确认是否真的删除数据库：
```bash
Dropping the database is potentially a very bad thing to do.
Any data stored in the database will be destroyed.

Do you really want to drop the 'test' database [y/N] y
Database "test" dropped
```

### 选择数据库

```bash
[root@host]# mysql -u root -p
Enter password:******

mysql> use test;
Database changed
mysql>
```



<a href="data-type.md" style="float: right;"><—— mysql 数据类型</a>
