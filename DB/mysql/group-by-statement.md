## mysql GROUP BY 分组语句


<a href="README.md">目录</a>

> `GROUP BY` 语句根据一个或多个列对结果集进行分组。

> 在分组的列上我们可以使用 `COUNT`, `SUM`, `AVG`,等函数。

语法

```mysql
SELECT column_name, function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name;
```

实例

```mysql
mysql> SET NAMES utf8;							# 指定了客户端和服务器之间传递字符的编码规则为UTF8
Query OK, 0 rows affected (0.00 sec)

mysql> SET FOREIGN_KEY_CHECKS=0;	# 在Mysql中取消外键约束。(Mysql中如果表和表之间建立的外键约束，则无法删除表及修改表结构。)
Query OK, 0 rows affected (0.00 sec)

mysql> DROP TABLE IF EXISTS `employee_tbl`; 	# 尝试删除 employee_tbl
Query OK, 0 rows affected, 1 warning (0.00 sec)

# 创建`employee_tbl`表
mysql> CREATE TABLE `employee_tbl` (
      `id` int(11) NOT NULL,
      `name` char(10) NOT NULL DEFAULT '',
      `date` datetime NOT NULL,
      `singin` tinyint(4) NOT NULL DEFAULT '0' COMMENT '登录次数',
      PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
Query OK, 0 rows affected (0.12 sec)

mysql> BEGIN; 							# 开始一个事务
Query OK, 0 rows affected (0.00 sec)

# 插入数据
mysql> INSERT INTO `employee_tbl`
		VALUES
		('1', '小明', '2016-04-22 15:25:33', '1'),
		('2', '小王', '2016-04-20 15:25:47', '3'),
		('3', '小丽', '2016-04-19 15:26:02', '2'),
		('4', '小王', '2016-04-07 15:26:14', '4'),
		('5', '小明', '2016-04-11 15:26:40', '4'),
		('6', '小明', '2016-04-04 15:26:54', '2');
Query OK, 6 rows affected (0.00 sec)
Records: 6  Duplicates: 0  Warnings: 0

mysql> COMMIT;								# 事务确认
SET FOREIGN_KEY_CHECKS = 1;Query OK, 0 rows affected (0.03 sec)

mysql> SET FOREIGN_KEY_CHECKS=1;			# 启用外键约束
Query OK, 0 rows affected (0.00 sec)
```
导入成功后，执行以下 SQL 语句：
```mysql
mysql> set names utf8;						# 设置编码
Query OK, 0 rows affected (0.00 sec)

mysql> SELECT * FROM employee_tbl;			# 查询 employee_tbl 表的数据
+----+--------+---------------------+--------+
| id | name   | date                | singin |
+----+--------+---------------------+--------+
|  1 | 小明   | 2016-04-22 15:25:33 |      1 |
|  2 | 小王   | 2016-04-20 15:25:47 |      3 |
|  3 | 小丽   | 2016-04-19 15:26:02 |      2 |
|  4 | 小王   | 2016-04-07 15:26:14 |      4 |
|  5 | 小明   | 2016-04-11 15:26:40 |      4 |
|  6 | 小明   | 2016-04-04 15:26:54 |      2 |
+----+--------+---------------------+--------+
6 rows in set (0.00 sec)

# 接下来 使用 GROUP BY 语句 将数据表按名字进行分组，并统计每个人有多少条记录：
mysql> SELECT name, COUNT(*) FROM  employee_tbl GROUP BY name;
+--------+----------+
| name   | COUNT(*) |
+--------+----------+
| 小丽   |        1 |
| 小明   |        3 |
| 小王   |        2 |
+--------+----------+
3 rows in set (0.00 sec)
```
<br />
__使用 WITH ROLLUP__

> `WITH ROLLUP` 可以实现在分组统计数据基础上再进行相同的统计`（SUM,AVG,COUNT…）`。
> 例如我们将以上的数据表按名字进行分组，再统计每个人登录的次数：
```mysql
mysql> SELECT name, SUM(singin) as singin_count FROM  employee_tbl GROUP BY name WITH ROLLUP;
+--------+--------------+
| name   | singin_count |
+--------+--------------+
| 小丽   |            2 |
| 小明   |            7 |
| 小王   |            7 |
| NULL   |           16 |
+--------+--------------+
4 rows in set (0.00 sec)
```

> 其中记录 `NULL` 表示所有人的登录次数。
> 我们可以使用 `coalesce` 来设置一个可以取代 `NUll` 的名称，`coalesce` 语法：
```mysql
select coalesce(a,b,c);
```

> 参数说明：如果`a==null`,则选择`b`；如果`b==null`,则选择`c`；如果`a!=null`,则选择`a`；如果`a b c` 都为`null` ，则返回为`null（没意义）`。
> 以下实例中如果名字为空我们使用总数代替：
```mysql
mysql> SELECT coalesce(name, '总数'), SUM(singin) as singin_count FROM  employee_tbl GROUP BY name WITH ROLLUP;
+--------------------------+--------------+
| coalesce(name, '总数')   | singin_count |
+--------------------------+--------------+
| 小丽                     |            2 |
| 小明                     |            7 |
| 小王                     |            7 |
| 总数                     |           16 |
+--------------------------+--------------+
4 rows in set (0.00 sec)
```



<a href="join.md" style="float: right;"><—— mysql join连接</a>
