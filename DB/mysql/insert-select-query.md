## Mysql 插入 查询 数据

<a href="README.md">目录</a>

### mysql 插入数据

语法

```mysql
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
```

实例

```mysql
root@host# mysql -u root -p password;
Enter password:*******

mysql> use test;
Database changed

mysql> INSERT INTO test_tbl
     (test_title, test_author, submission_date)
     VALUES
     ("学习 PHP", "菜鸟教程", NOW());
Query OK, 1 rows affected, 1 warnings (0.01 sec)

mysql> INSERT INTO test_tbl
     (test_title, test_author, submission_date)
     VALUES
     ("学习 MySQL", "菜鸟教程", NOW());
Query OK, 1 rows affected, 1 warnings (0.01 sec)

mysql> INSERT INTO test_tbl
     (test_title, test_author, submission_date)
     VALUES
     ("JAVA 教程", "test.COM", '2016-05-06');
Query OK, 1 rows affected (0.00 sec)


mysql> select * from test_tbl; 		# 读取数据表
+---------+--------------+--------------+-----------------+
| test_id | test_title   | test_author  | submission_date |
+---------+--------------+--------------+-----------------+
|       1 | 学习 PHP     | 菜鸟教程     | 2018-03-07      |
|       2 | 学习 MySQL   | 菜鸟教程     | 2018-03-07      |
|       3 | JAVA 教程    | test.COM     | 2016-05-06      |
+---------+--------------+--------------+-----------------+
```

<a href="data-type.md" style="float: right;"><—— mysql 数据类型</a>
