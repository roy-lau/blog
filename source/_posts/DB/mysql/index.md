## Mysql index索引


<a href="README.md">目录</a>

> MySQL索引的建立对于MySQL的高效运行是很重要的，索引可以大大提高MySQL的检索速度。

> 打个比方，如果合理的设计且使用索引的`MySQL`是一辆兰博基尼的话，那么没有设计和使用索引的`MySQL`就是一个人力三轮车。

> 索引分 **单列索引** 和 **组合索引** 。单列索引，即一个索引只包含单个列，一个表可以有多个单列索引，但这不是组合索引。组合索引，即一个索引包含多个列。

> 创建索引时，你需要确保该索引是应用在 `SQL` 查询语句的条件(一般作为 `WHERE` 子句的条件)。

> 实际上，索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录。

> 上面都在说使用索引的好处，但过多的使用索引将会造成滥用。因此索引也会有它的缺点：虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行`INSERT`、`UPDATE和DELETE`。因为更新表时，`MySQL`不仅要保存数据，还要保存一下索引文件。

> 建立索引会占用磁盘空间的索引文件。

### 普通索引

__创建索引__

这是最基本的索引，它没有任何限制。它有以下几种创建方式：
```mysql
CREATE INDEX indexName ON mytable(username(length));
```
如果是`CHAR`，`VARCHAR`类型，`length`可以小于字段实际长度；如果是`BLOB`和`TEXT`类型，必须指定 `length`。


__修改表结构(添加索引)__

```mysql
ALTER table tableName ADD INDEX indexName(columnName)
```

__创建表的时候直接指定__

```mysql
CREATE TABLE mytable(
	ID INT NOT NULL,
	username VARCHAR(16) NOT NULL,
	INDEX [indexName] (username(length))
);
```

__删除索引的语法__

```mysql
DROP INDEX [indexName] ON mytable;
```

### 唯一索引

它与前面的普通索引类似，不同的就是：索引列的值必须唯一，但允许有空值。如果是组合索引，则列值的组合必须唯一。它有以下几种创建方式：

__创建索引__

```mysql
CREATE UNIQUE INDEX indexName ON mytable(username(length))
```
__修改表结构__
```mysql
ALTER table mytable ADD UNIQUE [indexName] (username(length))
```
创建表的时候直接指定
```mysql
CREATE TABLE mytable(
	ID INT NOT NULL,
	username VARCHAR(16) NOT NULL,
	UNIQUE [indexName] (username(length))
);
```

__使用ALTER 命令添加和删除索引__

有四种方式来添加数据表的索引：

* **ALTER TABLE tbl_name ADD PRIMARY KEY (column_list):** 该语句添加一个主键，这意味着索引值必须是唯一的，且不能为`NULL`。
* **ALTER TABLE tbl_name ADD UNIQUE index_name (column_list):** 这条语句创建索引的值必须是唯一的（除了`NULL`外，`NULL`可能会出现多次）。
* **ALTER TABLE tbl_name ADD INDEX index_name (column_list):** 添加普通索引，索引值可出现多次。
* **ALTER TABLE tbl_name ADD FULLTEXT index_name (column_list):** 该语句指定了索引为 `FULLTEXT` ，用于全文索引。

以下实例为在表中添加索引。
```mysql
mysql> ALTER TABLE testalter_tbl ADD INDEX (c);
```
你还可以在 `ALTER` 命令中使用 `DROP` 子句来删除索引。尝试以下实例删除索引:
```mysql
mysql> ALTER TABLE testalter_tbl DROP INDEX c;
```

#### 使用 ALTER 命令添加和删除主键

主键只能作用于一个列上，添加主键索引时，你需要确保该主键默认不为空`（NOT NULL）`。实例如下：
```mysql
mysql> ALTER TABLE testalter_tbl MODIFY i INT NOT NULL;
mysql> ALTER TABLE testalter_tbl ADD PRIMARY KEY (i);
```

你也可以使用 `ALTER` 命令删除主键：
```mysql
mysql> ALTER TABLE testalter_tbl DROP PRIMARY KEY;
```

删除主键时只需指定`PRIMARY KEY`，但在删除索引时，你必须知道索引名。

#### 显示索引信息

你可以使用 `SHOW INDEX` 命令来列出表中的相关的索引信息。可以通过添加 `\G` 来格式化输出信息。

尝试以下实例:
```mysql
mysql> SHOW INDEX FROM table_name; \G
........
```


<a href="temporary-tables.md" style="float: right;"><—— mysql 临时表</a>
