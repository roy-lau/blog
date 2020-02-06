## Mysql 处理重复数据

<a href="README.md">目录</a>

### 防止表中出现重复数据

> MySQL数据表中设置指定的字段为 **PRIMARY KEY（主键）** 或者 **UNIQUE（唯一）** 索引来保证数据的唯一性。

下表中无索引及主键，所以该表允许出现多条重复记录。
```sql
CREATE TABLE person_tbl(
    first_name CHAR(20),
    last_name CHAR(20),
    sex CHAR(10)
);
```

如果想设置表中字段`first_name`，`last_name`数据不能重复，可以设置双主键模式来设置数据的唯一性， 如果设置了双主键，那么那个键的默认值不能为`NULL`，可设置为`NOT NULL`。如下所示：
```sql
CREATE TABLE person_tbl(
   first_name CHAR(20) NOT NULL,
   last_name CHAR(20) NOT NULL,
   sex CHAR(10),
   PRIMARY KEY (last_name, first_name)
);
```

如果设置了唯一索引，那么在插入重复数据时，SQL语句将无法执行成功,并抛出错。

`INSER` `IGNORE` `INTO`与`INSERT` `INTO`的区别就是`INSERT` `IGNORE`会忽略数据库中已经存在的数据，如果数据库没有数据，就插入新的数据，如果有数据的话就跳过这条数据。这样就可以保留数据库中已经存在数据，达到在间隙中插入数据的目的。

以下实例使用了`INSERT` `IGNORE` `INTO`，执行后不会出错，也不会向数据表中插入重复数据：
```sql
mysql> INSERT IGNORE INTO person_tbl (last_name, first_name) VALUES( 'Jay', 'Thomas');
Query OK, 1 row affected (0.00 sec)

mysql> INSERT IGNORE INTO person_tbl (last_name, first_name) VALUES( 'Jay', 'Thomas');
Query OK, 0 rows affected (0.01 sec)
```
`INSERT` `IGNORE` `INTO`当插入数据时，在设置了记录的唯一性后，如果插入重复数据，将不返回错误，只以警告形式返回。 而`REPLACE INTO into`如果存在`primary` 或 `unique`相同的记录，则先删除掉。再插入新记录。

另一种设置数据的唯一性方法是添加一个`UNIQUE`索引，如下所示：
```sql
CREATE TABLE person_tbl(
   first_name CHAR(20) NOT NULL,
   last_name CHAR(20) NOT NULL,
   sex CHAR(10)
   UNIQUE (last_name, first_name)
);
```

### 统计重复数据

以下将统计表中 `first_name` 和 `last_name`的重复记录数：
```sql
mysql> SELECT COUNT(*) as repetitions, last_name, first_name
    ->     FROM person_tbl
    ->     GROUP BY last_name, first_name
    ->     HAVING repetitions > 1;
+-------------+-----------+------------+
| repetitions | last_name | first_name |
+-------------+-----------+------------+
|           2 | Jay       | Thomas     |
+-------------+-----------+------------+
1 row in set (0.00 sec)
```
以上查询语句将返回 `person_tbl` 表中重复的记录数。 一般情况下，查询重复的值，请执行以下操作：

* 确定哪一列包含的值可能会重复。
* 在列选择列表使用`COUNT(*)`列出的那些列。
* 在`GROUP BY`子句中列出的列。
* `HAVING`子句设置重复数大于1。

### 过滤重复数据

如果你需要读取不重复的数据可以在 `SELECT` 语句中使用 `DISTINCT` 关键字来过滤重复数据。
```sql
mysql> SELECT DISTINCT last_name, first_name FROM person_tbl;
+-----------+------------+
| last_name | first_name |
+-----------+------------+
| Jay       | Thomas     |
+-----------+------------+
1 row in set (0.00 sec)
```
你也可以使用 `GROUP BY` 来读取数据表中不重复的数据：
```sql
mysql> SELECT last_name, first_name
	FROM person_tbl
	GROUP BY (last_name, first_name);
```

### 删除重复数据

如果你想删除数据表中的重复数据，你可以使用以下的SQL语句：
```sql
mysql> CREATE TABLE tmp
	SELECT last_name, first_name, sex
	FROM person_tbl
	GROUP BY (last_name, first_name, sex);

mysql> DROP TABLE person_tbl;		# 删除 person_tbl 数据表

mysql> ALTER TABLE tmp RENAME TO person_tbl;
```
当然你也可以在数据表中添加 `INDEX（索引）` 和 `PRIMAY KEY（主键）`这种简单的方法来删除表中的重复记录。方法如下：
```sql
mysql> ALTER IGNORE TABLE person_tbl ADD PRIMARY KEY (last_name, first_name);
Query OK, 2 rows affected (0.01 sec)
Records: 2  Duplicates: 1  Warnings: 0
```

<a href="sql-injection.md" style="float: right;"><—— mysql SQL注入</a>
