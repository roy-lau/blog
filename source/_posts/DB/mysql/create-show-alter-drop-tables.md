## Mysql 创建 查询 修改 删除数据表

<a href="README.md">目录</a>

### 创建数据表

创建MySQL数据表需要以下信息：

* 表名
* 表字段名
* 定义每个表字段

语法

```mysql
CREATE TABLE table_name (column_name column_type);
```

以下例子中我们将在 test 数据库中创建数据表`test_tbl`：

```mysql
root@host# mysql -u root -p
Enter password:*******

mysql> use test 						# 切换数据
Database changed

# 创建数据表
mysql> CREATE TABLE IF NOT EXISTS `test_tbl`(
   `test_id` INT UNSIGNED AUTO_INCREMENT,
   `test_title` VARCHAR(100) NOT NULL,
   `test_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `test_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
Query OK, 0 rows affected (0.16 sec)

mysql> SHOW TABLES; 						# 查询数据表
+----------------+
| Tables_in_test |
+----------------+
| test_tbl       |
+----------------+
1 row in set (0.00 sec)
```

实例解析：

* 如果你不想字段为 `NULL` 可以设置字段的属性为 `NOT NULL`， 在操作数据库时如果输入该字段的数据为`NULL` ，就会报错。
* `AUTO_INCREMENT`定义列为自增的属性，一般用于主键，数值会自动加`1`。
* `PRIMARY KEY`关键字用于定义列为主键。 您可以使用多列来定义主键，列间以逗号分隔。
* `ENGINE` 设置存储引擎，`CHARSET` 设置编码。

### 修改数据表名称

语法

```mysql
ALTER TABEL table_name rename table_new_name;
```

实例

```mysql
root@host# mysql -u root -p
Enter password:*******

mysql> use test;								# 切换数据库
Database changed

mysql> ALTER TABEL test rename new_table;		# 修改数据表名称
Database changed

```

### 删除数据表

语法

```mysql
DROP TABLE table_name;
```

实例

```mysql
root@host# mysql -u root -p
Enter password:*******

mysql> use new_table;					# 切换数据库
Database changed

mysql> DROP TABLE test_tbl				# 删除数据表
Query OK, 0 rows affected (0.8 sec)

mysql>SHOW TABLES; 						# 查询数据表
Empty set (0.00 sec)

```


笔记：
```mysql
# 删除表内数据，用 delete。格式为：
delete from 表名 where 删除条件;
# 实例：删除学生表内姓名为张三的记录。
delete from  student where  T_name = "张三";

# 清除表内数据，保存表结构，用 truncate。格式为：
truncate table 表名;
# 实例：清除学生表内的所有数据。
truncate  table  student;

# 删除表用 drop，就是啥都没了。格式为：
drop  table  表名;
# 实例：删除学生表。
drop table student;
```

1. 当你不再需要该表时， 用 drop;
2. 当你仍要保留该表，但要删除所有记录时， 用 truncate;
3. 当你要删除部分记录时， 用 delete。

<a href="insert-select-delete-query.md" style="float: right;"><—— mysql 插入 查询 删除 数据</a>
