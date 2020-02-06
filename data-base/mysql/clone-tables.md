## Mysql 复制表

<a href="README.md">目录</a>

> 如果我们需要完全的复制MySQL的数据表，包括表的结构，索引，默认值等。 如果仅仅使用`CREATE TABLE ... SELECT` 命令，是无法实现的。

完整的复制MySQL数据表，步骤如下：

* 使用 `SHOW CREATE TABLE` 命令获取创建数据表`(CREATE TABLE)` 语句，该语句包含了原数据表的结构，索引等。
* 复制以下命令显示的SQL语句，修改数据表名，并执行SQL语句，通过以上命令 将完全的复制数据表结构。
* 如果你想复制表的内容，你就可以使用 `INSERT INTO ... SELECT` 语句来实现。

实例:

复制表 test_tbl。

步骤一：
获取数据表的完整结构。
```sql
mysql> SHOW CREATE TABLE test_tbl \G;
*************************** 1. row ***************************
       Table: test_tbl
Create Table: CREATE TABLE `test_tbl` (
  `test_id` int(11) NOT NULL AUTO_INCREMENT,
  `test_title` varchar(100) NOT NULL DEFAULT '',
  `test_author` varchar(40) NOT NULL DEFAULT '',
  `submission_date` date DEFAULT NULL,
  PRIMARY KEY (`test_id`),
  UNIQUE KEY `AUTHOR_INDEX` (`test_author`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
1 row in set (0.00 sec)

ERROR:
No query specified
```

步骤二：
修改SQL语句的数据表名，并执行SQL语句。
```sql
mysql> CREATE TABLE `clone_tbl` (
  	`test_id` int(11) NOT NULL auto_increment,
  	`test_title` varchar(100) NOT NULL default '',
  	`test_author` varchar(40) NOT NULL default '',
  	`submission_date` date default NULL,
  	PRIMARY KEY  (`test_id`),
  	UNIQUE KEY `AUTHOR_INDEX` (`test_author`)
	) ENGINE=InnoDB;
Query OK, 0 rows affected (1.80 sec)
```

步骤三：

执行完第二步骤后，你将在数据库中创建新的克隆表 `clone_tbl`。 如果你想拷贝数据表的数据你可以使用 `INSERT INTO... SELECT` 语句来实现。
```sql
mysql> INSERT INTO clone_tbl (test_id,
    	                       test_title,
    	                       test_author,
    	                       submission_date)
    	SELECT test_id,test_title,
    	       test_author,submission_date
    	FROM test_tbl;
Query OK, 3 rows affected (0.07 sec)
Records: 3  Duplicates: 0  Warnings: 0
```


笔记：

另一种完整复制表的方法:
```sql
CREATE TABLE targetTable LIKE sourceTable;
INSERT INTO targetTable SELECT * FROM sourceTable;
```
其他:
可以拷贝一个表中其中的一些字段:
```sql
CREATE TABLE newadmin AS
(
    SELECT username, password FROM admin
)
```
可以将新建的表的字段改名:
```sql
CREATE TABLE newadmin AS
(
    SELECT id, username AS uname, password AS pass FROM admin
)
```
可以拷贝一部分数据:
```sql
CREATE TABLE newadmin AS
(
    SELECT * FROM admin WHERE LEFT(username,1) = 's'
)
```
可以在创建表的同时定义表中的字段信息:
```
CREATE TABLE newadmin
(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY
)
AS
(
    SELECT * FROM admin
)
```

区分mysql复制表的两种方式。

第一、只复制表结构到新表
```sql
create table 新表 select * from 旧表 where 1=2
```
或者
```sql
create table 新表 like 旧表
```
第二、复制表结构及数据到新表
```sql
create table新表 select * from 旧表
```


<a href="database-info.md" style="float: right;"><—— mysql 元数据</a>
