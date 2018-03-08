## Mysql WHERE LIKE子句 UPDATE修改 DELETE删除


<a href="README.md">目录</a>

### mysql WHERE子句(过滤条件)

语法

```mysql
SELECT field1, field2,...fieldN FROM table_name1, table_name2...
[WHERE condition1 [AND [OR]] condition2.....;
```

* 查询语句中你可以使用一个或者多个表，表之间使用逗号, 分割，并使用`WHERE`语句来设定查询条件。
* 你可以在 `WHERE` 子句中指定任何条件。
* 你可以使用 `AND` 或者 `OR` 指定一个或多个条件。
* `WHERE` 子句也可以运用于 `SQL` 的 `DELETE` 或者 `UPDATE` 命令。
* `WHERE` 子句类似于程序语言中的 `if` 条件，根据 `MySQL` 表中的字段值来读取指定的数据。

_以下为操作符列表，可用于 `WHERE` 子句中。_

__下表中实例假定 A 为 10, B 为 20__

|操作符			|描述																					 	|实例
|---------------|-------------------------------------------------------------------------------------------|---------------------
|`=	`			|等号，检测两个值是否相等，如果相等返回true												 	|(A = B) 返回false。
|`<>, != `		|不等于，检测两个值是否相等，如果不相等返回true											 	|(A != B) 返回 true。
|`>`			|大于号，检测左边的值是否大于右边的值, 如果左边的值大于右边的值返回true					 	|(A > B) 返回false。
|`<`			|小于号，检测左边的值是否小于右边的值, 如果左边的值小于右边的值返回true					 	|(A < B) 返回 true。
|`>=`			|大于等于号，检测左边的值是否大于或等于右边的值, 如果左边的值大于或等于右边的值返回true	 	|(A >= B) 返回false。
|`<=`			|小于等于号，检测左边的值是否小于于或等于右边的值, 如果左边的值小于或等于右边的值返回true 	|(A <= B) 返回 true。

实例

```mysql
SELECT * from runoob_tbl WHERE runoob_author='菜鸟教程';
+---------+--------------+--------------+-----------------+
| test_id | test_title   | test_author  | submission_date |
+---------+--------------+--------------+-----------------+
|       1 | 学习 PHP     | 菜鸟教程     | 2018-03-07      |
|       2 | 学习 MySQL   | 菜鸟教程     | 2018-03-07      |
+---------+--------------+--------------+-----------------+
```
> MySQL 的 `WHERE` 子句的字符串比较是 __不区分大小__ 写的。 你可以使用 `BINARY` 关键字来设定 `WHERE` 子句的字符串比较是区分大小写的。

__BINARY 关键字__

```mysql
mysql> select * from test_tbl where binary test_title="学习 php"; 			# 小写，查不到数据
Empty set (0.00 sec)

mysql> select * from test_tbl where binary test_title="学习 PHP"; 			# 大写，能查到数据
+---------+------------+--------------+-----------------+
| test_id | test_title | test_author  | submission_date |
+---------+------------+--------------+-----------------+
|       1 | 学习 PHP   | 菜鸟教程     | 2018-03-07      |
+---------+------------+--------------+-----------------+
1 row in set (0.00 sec)

```
实例中使用了 `BINARY` 关键字，是 __区分大小写__ 的，所以 `runoob_author='runoob.com'` 的查询条件是没有数据的。

### mysql UPDATE（修改）

语法

```mysql
UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]
```

* 你可以同时更新一个或多个字段。
* 你可以在 WHERE 子句中指定任何条件。
* 你可以在一个单独表中同时更新数据。

实例

```mysql
mysql> update test_tbl set test_title="学习 C++" where test_id=2;  	# 修改test_title=2行的test_title="学习 C++"
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0


mysql> select * from test_tbl where test_id=2;						# 查询test_title=2行的数据
+---------+------------+--------------+-----------------+
| test_id | test_title | test_author  | submission_date |
+---------+------------+--------------+-----------------+
|       2 | 学习 C++   | 菜鸟教程     | 2018-03-07      |
+---------+------------+--------------+-----------------+
1 row in set (0.00 sec)
```

### mysql DELETE（删除）

语法

```mysql
DELETE FROM table_name [WHERE Clause]
```

* 如果没有指定 `WHERE` 子句，`MySQL` 表中的所有记录将被删除。
* 你可以在 `WHERE` 子句中指定任何条件
* 您可以在单个表中一次性删除记录。

实例
```mysql
mysql> use test;
Database changed
mysql> DELETE FROM test_tbl WHERE test_id=3;
Query OK, 1 row affected (0.23 sec)
```

笔记
```mysql
# delete 语句用于删除表中的数据, 基本用法为:
delete from 表名称 where 删除条件;

# 以下是在表 students 中的实例:
# 删除 id 为 3 的行:
delete from students where id=3;
# 删除所有年龄小于 21 岁的数据:
delete from students where age<20;
# 删除表中的所有数据:
delete from students;
```


### mysql like

`SQL LIKE` 子句中使用百分号 %字符来表示任意字符，类似于`UNIX`或正则表达式中的星号 `*`。
如果没有使用百分号 `%`, `LIKE` 子句与等号 `=` 的效果是一样的。

语法

```mysql
SELECT field1, field2,...fieldN
FROM table_name
WHERE field1 LIKE condition1 [AND [OR]] filed2 = 'somevalue'
```

* 你可以在 `WHERE` 子句中指定任何条件。
* 你可以在 `WHERE` 子句中使用LIKE子句。
* 你可以使用`LIKE`子句代替等号 `=`。
* `LIKE` 通常与 `%` 一同使用，类似于一个元字符的搜索。
* 你可以使用 `AND `或者 `OR` 指定一个或多个条件。
* 你可以在 `DELETE` 或 `UPDATE` 命令中使用 `WHERE...LIKE` 子句来指定条件。

实例

```mysql
mysql> select * from test_tbl where test_title like '学习%';
+---------+------------------+--------------+-----------------+
| test_id | test_title       | test_author  | submission_date |
+---------+------------------+--------------+-----------------+
|       1 | 学习 PHP         | 菜鸟教程     | 2018-03-07      |
|       2 | 学习 C++         | 菜鸟教程     | 2018-03-07      |
|       4 | 学习nodejs       | cnode社区    | 2018-03-08      |
|       5 | 学习vue          | vue官网      | 2018-03-08      |
|       6 | 学习javaScript   | MSDN         | 2018-03-08      |
+---------+------------------+--------------+-----------------+
5 rows in set (0.00 sec)
```

<a href="union-operation.md" style="float: right;"><—— mysql UNION操作符</a>
