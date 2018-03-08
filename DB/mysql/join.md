## mysql join连接


<a href="README.md">目录</a>

> 使用 `MySQL` 的 `JOIN` 可以在两个或多个表中查询数据。
> 也以在 SELECT, UPDATE 和 DELETE 语句中使用 Mysql 的 JOIN 来联合多表查询。

JOIN 按照功能大致分为如下三类：

`INNER JOIN（内连接,或等值连接）：` 获取两个表中字段匹配关系的记录。
`LEFT JOIN（左连接）：` 获取左表所有记录，即使右表没有对应匹配的记录。
`RIGHT JOIN（右连接）：` 与 `LEFT JOIN` 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。

__mysql INNER JOIN(内连接)__

实例

```mysql
mysql> use RUNOOB;
Database changed
mysql> SELECT * FROM tcount_tbl;
+---------------+--------------+
| runoob_author | runoob_count |
+---------------+--------------+
| 菜鸟教程  	| 10           |
| RUNOOB.COM    | 20           |
| Google        | 22           |
+---------------+--------------+
3 rows in set (0.01 sec)

mysql> SELECT * from runoob_tbl;
+-----------+---------------+---------------+-----------------+
| runoob_id | runoob_title  | runoob_author | submission_date |
+-----------+---------------+---------------+-----------------+
| 1         | 学习 PHP    	| 菜鸟教程  	| 2017-04-12      |
| 2         | 学习 MySQL  	| 菜鸟教程  	| 2017-04-12      |
| 3         | 学习 Java   	| RUNOOB.COM    | 2015-05-01      |
| 4         | 学习 Python 	| RUNOOB.COM    | 2016-03-06      |
| 5         | 学习 C      	| FK            | 2017-04-05      |
+-----------+---------------+---------------+-----------------+
5 rows in set (0.01 sec)
```

下面使用`MySQL`的`INNER JOIN`(也可以省略 INNER 使用 JOIN，效果一样)来连接以上两张表来读取`runoob_tbl`表中所有`runoob_author`字段在`tcount_tbl`表对应的`runoob_count`字段值：

INNER JOIN(内连接)
```mysql
mysql> SELECT a.runoob_id, a.runoob_author, b.runoob_count
		FROM runoob_tbl a
		INNER JOIN tcount_tbl b
		ON a.runoob_author = b.runoob_author;
+-------------+-----------------+----------------+
| a.runoob_id | a.runoob_author | b.runoob_count |
+-------------+-----------------+----------------+
| 1           | 菜鸟教程    	| 10             |
| 2           | 菜鸟教程    	| 10             |
| 3           | RUNOOB.COM      | 20             |
| 4           | RUNOOB.COM      | 20             |
+-------------+-----------------+----------------+
4 rows in set (0.00 sec)
```
以上 SQL 语句等价于：

WHERE 子句
```mysql
mysql> SELECT a.runoob_id, a.runoob_author, b.runoob_count
		FROM runoob_tbl a, tcount_tbl b
		WHERE a.runoob_author = b.runoob_author;
+-------------+-----------------+----------------+
| a.runoob_id | a.runoob_author | b.runoob_count |
+-------------+-----------------+----------------+
| 1           | 菜鸟教程    	| 10             |
| 2           | 菜鸟教程    	| 10             |
| 3           | RUNOOB.COM      | 20             |
| 4           | RUNOOB.COM      | 20             |
+-------------+-----------------+----------------+
4 rows in set (0.01 sec)
```
<img src="imgs/inner_join.gif" alt="内部联接" />

__mysql LEFT JOIN(左连接)__

> MySQL left join 与 join 有所不同。 MySQL LEFT JOIN 会读取左边数据表的全部数据，即便右边表无对应数据。

实例

LEFT JOIN(左连接)
```mysql
mysql> SELECT a.runoob_id, a.runoob_author, b.runoob_count
		FROM runoob_tbl a
		LEFT JOIN tcount_tbl b
		ON a.runoob_author = b.runoob_author;
+-------------+-----------------+----------------+
| a.runoob_id | a.runoob_author | b.runoob_count |
+-------------+-----------------+----------------+
| 1           | 菜鸟教程    	| 10             |
| 2           | 菜鸟教程    	| 10             |
| 3           | RUNOOB.COM      | 20             |
| 4           | RUNOOB.COM      | 20             |
| 5           | FK              | NULL           |
+-------------+-----------------+----------------+
5 rows in set (0.01 sec)
```
> 以上实例中使用了 LEFT JOIN，该语句会读取左边的数据表 runoob_tbl 的所有选取的字段数据，即便在右侧表 tcount_tbl中 没有对应的 runoob_author 字段值。

<img src="imgs/left_join.gif" alt="左连接" />

__mysql RIGHT JOIN(右连接)__

> MySQL RIGHT JOIN 会读取右边数据表的全部数据，即便左边边表无对应数据。

实例
RIGHT JOIN(右连接)
```mysql
mysql> SELECT a.runoob_id, a.runoob_author, b.runoob_count
		FROM runoob_tbl a
		RIGHT JOIN tcount_tbl b
		ON a.runoob_author = b.runoob_author;
+-------------+-----------------+----------------+
| a.runoob_id | a.runoob_author | b.runoob_count |
+-------------+-----------------+----------------+
| 1           | 菜鸟教程    	| 10             |
| 2           | 菜鸟教程    	| 10             |
| 3           | RUNOOB.COM      | 20             |
| 4           | RUNOOB.COM      | 20             |
| NULL        | NULL            | 22             |
+-------------+-----------------+----------------+
5 rows in set (0.01 sec)
```
> 以上实例中使用了 RIGHT JOIN，该语句会读取右边的数据表 tcount_tbl 的所有选取的字段数据，即便在左侧表 runoob_tbl 中没有对应的runoob_author 字段值。

<img src="imgs/right_join.gif" alt="右连接" />

<br />
<a href="where-clause.md" style="float: right;"><—— mysql where语句</a>
<br />