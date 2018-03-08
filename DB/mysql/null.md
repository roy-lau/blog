## mysql null值处理


<a href="README.md">目录</a>

> MySQL 使用 SQL SELECT 命令及 WHERE 子句来读取数据表中的数据,但是当提供的查询条件字段为 NULL 时，该命令可能就无法正常工作。

为了处理这种情况，MySQL提供了三大运算符:

* `IS NULL:` 当列的值是 `NULL`,此运算符返回 `true`。
* `IS NOT NULL:` 当列的值不为 `NULL`, 运算符返回 `true`。
* `<=>:` 比较操作符（不同于=运算符），当比较的的两个值为 `NULL` 时返回 `true`。

_关于 NULL 的条件比较运算是比较特殊的。你不能使用 `= NULL` 或 `!= NULL` 在列中查找 `NULL` 值。
在 `MySQL` 中，`NULL` 值与任何其它值的比较（即使是 `NULL`）永远返回 `false`，即 `NULL = NULL` 返回`false` 。
`MySQL` 中处理 `NULL` 使用 `IS NULL` 和 `IS NOT NULL` 运算符。_

实例

假设数据库 test 中的表 test_list_tbl 含有两列 test_author 和 test_count, test_count 中设置插入NULL值。

```mysql
root@host# mysql -u root -p password;
Enter password:*******
mysql> use test;
Database changed
mysql> create table test_list_tbl		# 创建表
	    (
	    test_author varchar(40) NOT NULL,
	    test_count  INT
	    );
Query OK, 0 rows affected (0.05 sec)
mysql> INSERT INTO test_list_tbl 		# 插入数据
	(test_author, test_count)
	values
	('test', 20),
	('菜鸟教程', NULL),
	('Google', NULL),
	('FK', 20);

mysql> SELECT * from test_list_tbl;		# 查询数据
+---------------+--------------+
| test_author 	| test_count 	|
+---------------+--------------+
| test        	| 20           |
| 菜鸟教程  	| NULL         |
| Google        | NULL         |
| FK            | 20           |
+---------------+--------------+
4 rows in set (0.01 sec)
```
以下实例中你可以看到 = 和 != 运算符是不起作用的：
```mysql
mysql> select * from test_list_tbl where test_count=NULL;		# 查询test_list_tbl表中test_count=NULL的数据
Empty set (0.00 sec)
mysql> select * from test_list_tbl where test_count!=NULL;		# 查询test_list_tbl表中test_count!=NULL的数据
Empty set (0.00 sec)
```
查找数据表中 `test_list_tbl` 列是否为 `NULL`，必须使用 `IS NULL` 和 `IS NOT NULL`，如下实例：
```mysql
mysql> select * from test_list_tbl where test_count is null;	# 查询test_list_tbl表中test_count值是null的数据
+-------------+------------+
| test_author | test_count |
+-------------+------------+
| 菜鸟教程    |       NULL |
| Google      |       NULL |
+-------------+------------+
2 rows in set (0.00 sec)

mysql>  select * from test_list_tbl where test_count is not null;     # 查询test_list_tbl表中test_count值不是null的数据
+-------------+------------+
| test_author | test_count |
+-------------+------------+
| test        |         20 |
| FK          |         20 |
+-------------+------------+
2 rows in set (0.00 sec)

```

<a href="regexp.md" style="float: right;"><—— mysql 正则表达式</a>
