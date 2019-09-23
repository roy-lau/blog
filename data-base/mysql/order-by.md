## mysql order-by排序


<a href="README.md">目录</a>


>  MySQL 的 `ORDER BY` 子句来设定字段用那种方式来进行排序，再返回搜索结果。

语法

```mysql
SELECT field1, field2,...fieldN table_name1, table_name2...
ORDER BY field1, [field2...] [ASC [DESC]]
```

参数

* 你可以使用任何字段来作为排序的条件，从而返回排序后的查询结果。
* 你可以设定多个字段来排序。
* 你可以使用 `ASC` 或 `DESC` 关键字来设置查询结果是按升序或降序排列。 默认情况下，它是按升序排列。
* 你可以添加 `WHERE...LIKE` 子句来设置条件。
实例

```mysql
mysql> use test;
Database changed
mysql> SELECT * from test_tbl ORDER BY submission_date ASC; 		# 日期正序
+-----------+---------------+---------------+-----------------+
| test_id 	| test_title  	| test_author 	| submission_date |
+-----------+---------------+---------------+-----------------+
| 3         | 学习 Java   	| test.com    	| 2015-05-01      |
| 4         | 学习 Python 	| test.com    	| 2016-03-06      |
| 1         | 学习 PHP    	| 菜鸟教程  	| 2017-04-12      |
| 2         | 学习 MySQL  	| 菜鸟教程  	| 2017-04-12      |
+-----------+---------------+---------------+-----------------+
4 rows in set (0.01 sec)

mysql> SELECT * from test_tbl ORDER BY submission_date DESC; 		# 日期倒序
+-----------+---------------+---------------+-----------------+
| test_id 	| test_title  	| test_author 	| submission_date |
+-----------+---------------+---------------+-----------------+
| 1         | 学习 PHP    	| 菜鸟教程  	| 2017-04-12      |
| 2         | 学习 MySQL  	| 菜鸟教程  	| 2017-04-12      |
| 4         | 学习 Python 	| test.com    	| 2016-03-06      |
| 3         | 学习 Java   	| test.com    	| 2015-05-01      |
+-----------+---------------+---------------+-----------------+
4 rows in set (0.01 sec)
```

<a href="group-by-statement.md" style="float: right;"><—— mysql group by 分组</a>
