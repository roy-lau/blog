## Mysql 导出数据

<a href="README.md">目录</a>

> MySQL中可以使用`SELECT...INTO OUTFILE`语句来简单的导出数据到文本文件上。

__使用 SELECT ... INTO OUTFILE 语句导出数据__

以下实例中我们将数据表 test_tbl 数据导出到 /tmp/tutorials.txt 文件中:
```sql
mysql> SELECT * FROM test_tbl
    INTO OUTFILE '/tmp/tutorials.txt';
```

也可以通过命令选项来设置数据输出的指定格式，以下实例为导出 CSV 格式：
```sql
mysql> SELECT * FROM passwd INTO OUTFILE '/tmp/tutorials.txt'
    FIELDS TERMINATED BY ',' ENCLOSED BY '"'
    LINES TERMINATED BY '\r\n';
```

下面的例子中，生成一个文件，各值用逗号隔开。这种格式可以被许多程序使用。
```sql
SELECT a,b,a+b INTO OUTFILE '/tmp/result.text'
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
FROM test_table;
```

__SELECT ... INTO OUTFILE 语句有以下属性:__

* `LOAD DATA INFILE是SELECT ... INTO OUTFILE`的逆操作，`SELECT`句法。为了将一个数据库的数据写入一个文件，使用`SELECT ... INTO OUTFILE`，为了将文件读回数据库，使用LOAD DATA INFILE。
* `SELECT...INTO OUTFILE 'file_name'`形式的`SELECT`可以把被选择的行写入一个文件中。该文件被创建到服务器主机上，因此您必须拥有FILE权限，才能使用此语法。
* 输出不能是一个已存在的文件。防止文件数据被篡改。
* 你需要有一个登陆服务器的账号来检索文件。否则 `SELECT ... INTO OUTFILE` 不会起任何作用。

### 导出表作为原始数据

`mysqldump`是`mysql`用于转存储数据库的实用程序。它主要产生一个`SQL`脚本，其中包含从头重新创建数据库所必需的命令`CREATE TABLE INSERT`等。
使用`mysqldump`导出数据需要使用 `--tab` 选项来指定导出文件指定的目录，该目标必须是可写的。

以下实例将数据表 `test_tbl` 导出到 `/tmp` 目录中：
```bash
$ mysqldump -u root -p --no-create-info \
            --tab=/tmp test test_tbl
password ******
```

### 导出SQL格式的数据

导出SQL格式的数据到指定文件，如下所示：
```bash
$ mysqldump -u root -p test test_tbl > dump.txt
password ******
```

以上命令创建的文件内容如下：
```sql
-- MySQL dump 8.23
--
-- Host: localhost    Database: test
---------------------------------------------------------
-- Server version       3.23.58

--
-- Table structure for table `test_tbl`
--

CREATE TABLE test_tbl (
  test_id int(11) NOT NULL auto_increment,
  test_title varchar(100) NOT NULL default '',
  test_author varchar(40) NOT NULL default '',
  submission_date date default NULL,
  PRIMARY KEY  (test_id),
  UNIQUE KEY AUTHOR_INDEX (test_author)
) TYPE=MyISAM;

--
-- Dumping data for table `test_tbl`
--

INSERT INTO test_tbl
       VALUES (1,'Learn PHP','John Poul','2007-05-24');
INSERT INTO test_tbl
       VALUES (2,'Learn MySQL','Abdul S','2007-05-24');
INSERT INTO test_tbl
       VALUES (3,'JAVA Tutorial','Sanjay','2007-05-06');
```

导出整个数据库的数据
```bash
$ mysqldump -u root -p test > database_dump.txt
password ******
```
备份所有数据库
```bash
$ mysqldump -u root -p --all-databases > database_dump.txt
password ******
```

`--all-databases` 选项在 `MySQL 3.23.12` 及以后版本加入。该方法可用于实现数据库的备份策略。


### 将数据表及数据库拷贝至其他主机

如果你需要将数据拷贝至其他的 MySQL 服务器上, 你可以在 `mysqldump` 命令中指定数据库名及数据表。
在源主机上执行以下命令，将数据备份至 dump.txt 文件中:
```bash
$ mysqldump -u root -p database_name table_name > dump.txt
password *****
```

如果完整备份数据库，则无需使用特定的表名称。
如果你需要将备份的数据库导入到MySQL服务器中，可以使用以下命令，使用以下命令你需要确认数据库已经创建：
```bash
$ mysql -u root -p database_name < dump.txt
password *****
```
可以使用以下命令将导出的数据直接导入到远程的服务器上，但请确保两台服务器是相通的，是可以相互访问的：
```bash
$ mysqldump -u root -p database_name \
       | mysql -h other-host.com database_name
```
_以上命令中使用了管道来将导出的数据导入到指定的远程主机上。_

__笔记：__

* 将指定主机的数据库拷贝到本地

如果你需要将远程服务器的数据拷贝到本地，你也可以在 `mysqldump` 命令中指定远程服务器的`IP`、`端口`及`数据库名`。

在源主机上执行以下命令，将数据备份到 `dump.txt` 文件中：

请确保两台服务器是相通的：
```sql
mysqldump -h other-host.com -P port -u root -p database_name > dump.txt
password ****
```

<a href="database-import.md" style="float: right;"><—— mysql 导入数据</a>
