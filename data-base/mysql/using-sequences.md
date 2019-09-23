## Mysql 序列使用

<a href="README.md">目录</a>

> MySQL序列是一组整数：1, 2, 3, ...，由于一张数据表只能有一个字段自增主键,如果你想实现其他字段也实现自动增加，就可以使用MySQL序列来实现。

### 使用AUTO_INCREMENT

MySQL中最简单使用序列的方法就是使用 MySQL `AUTO_INCREMEN` 来定义列。

__实例__

以下实例中创建了数据表`insect`, `insect`中`id`无需指定值可实现自动增长。

```mysql
mysql> CREATE TABLE insect(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    name VARCHAR(30) NOT NULL,	# type of insect
    date DATE NOT NULL,			# date collected
    origin VARCHAR(30) NOT NULL	# where collected
);
Query OK, 0 rows affected (0.02 sec)
mysql> INSERT INTO insect (id,name,date,origin) VALUES
     (NULL,'housefly','2001-09-10','kitchen'),
     (NULL,'millipede','2001-09-10','driveway'),
     (NULL,'grasshopper','2001-09-10','front yard');
Query OK, 3 rows affected (0.02 sec)
Records: 3  Duplicates: 0  Warnings: 0
mysql> SELECT * FROM insect ORDER BY id;
+----+-------------+------------+------------+
| id | name        | date       | origin     |
+----+-------------+------------+------------+
|  1 | housefly    | 2001-09-10 | kitchen    |
|  2 | millipede   | 2001-09-10 | driveway   |
|  3 | grasshopper | 2001-09-10 | front yard |
+----+-------------+------------+------------+
3 rows in set (0.00 sec)
```

### 获取AUTO_INCREMENT值

在MySQL的客户端中你可以使用 SQL中的LAST_INSERT_ID( ) 函数来获取最后的插入表中的自增列的值。
在PHP或PERL脚本中也提供了相应的函数来获取最后的插入表中的自增列的值。

__PERL实例__

使用 mysql_insertid 属性来获取 AUTO_INCREMENT 的值。 实例如下：
```perl
$dbh->do ("INSERT INTO insect (name,date,origin)
VALUES('moth','2001-09-14','windowsill')");
my $seq = $dbh->{mysql_insertid};
```

__PHP实例__

PHP 通过 mysql_insert_id ()函数来获取执行的插入SQL语句中 AUTO_INCREMENT列的值。
```php
mysql_query ("INSERT INTO insect (name,date,origin)
VALUES('moth','2001-09-14','windowsill')", $conn_id);
$seq = mysql_insert_id ($conn_id);
```

### 重置序列

如果你删除了数据表中的多条记录，并希望对剩下数据的AUTO_INCREMENT列进行重新排列，那么你可以通过删除自增的列，然后重新添加来实现。 不过该操作要非常小心，如果在删除的同时又有新记录添加，有可能会出现数据混乱。操作如下所示：
```mysql
mysql> ALTER TABLE insect DROP id;
Query OK, 3 rows affected (0.01 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> ALTER TABLE insect
		ADD id INT UNSIGNED NOT NULL AUTO_INCREMENT FIRST,
		ADD PRIMARY KEY (id);
Query OK, 3 rows affected (0.00 sec)
Records: 3  Duplicates: 0  Warnings: 0
```

### 设置序列的开始值

一般情况下序列的开始值为`1`，但如果你需要指定一个开始值`100`，那我们可以通过以下语句来实现：
```mysql
mysql> CREATE TABLE insect(
     id INT UNSIGNED NOT NULL AUTO_INCREMENT,
     PRIMARY KEY (id),
     name VARCHAR(30) NOT NULL,
     date DATE NOT NULL,
     origin VARCHAR(30) NOT NULL
)engine=innodb auto_increment=100 charset=utf8;
```

或者你也可以在表创建成功后，通过以下语句来实现：
```mysql
mysql> ALTER TABLE t AUTO_INCREMENT = 100;
```

<a href="handling-duplicates.md" style="float: right;"><—— mysql 处理重复</a>
